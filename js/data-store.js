/**
 * DEEPKRISHNA ZAVERI — DATA STORE & PERSISTENCE ENGINE
 * Synchronizes with Vercel serverless APIs (/api/collections, /api/gallery)
 * with robust offline/static fallback to data/*.json and browser storage cache.
 */

const DataStore = (() => {
  const COLLECTIONS_KEY = 'dz_persisted_collections_v1';
  const GALLERY_KEY = 'dz_persisted_gallery_v1';
  const SYNC_KEY = 'dz_persisted_last_sync_v1';

  // Helper to read localStorage safely
  function getLocal(key) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : null;
    } catch (e) {
      return null;
    }
  }

  function setLocal(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage quota or disabled:', e);
    }
  }

  return {
    /**
     * Get collections list
     */
    async getCollections() {
      // 1. Try fetching from serverless API
      try {
        const res = await fetch('/api/collections', { cache: 'no-cache' });
        if (res.ok) {
          const json = await res.json();
          if (json && json.data && Array.isArray(json.data)) {
            setLocal(COLLECTIONS_KEY, json.data);
            return json.data;
          }
        }
      } catch (err) {
        // API offline or static file serve
      }

      // 2. Check local persistence
      const local = getLocal(COLLECTIONS_KEY);
      if (local && Array.isArray(local) && local.length > 0) {
        return local;
      }

      // 3. Fallback to static data/collections.json (supports root, /admin, and file://)
      const data = await this.fetchJsonFallback('data/collections.json');
      if (data && Array.isArray(data)) {
        setLocal(COLLECTIONS_KEY, data);
        return data;
      }

      return [];
    },

    /**
     * Resilient fetcher trying multiple path relative depths
     */
    async fetchJsonFallback(relPath) {
      const candidates = [
        '/' + relPath.replace(/^\/+/, ''),
        '../' + relPath.replace(/^\/+/, ''),
        relPath
      ];
      for (const p of candidates) {
        try {
          const res = await fetch(p);
          if (res.ok) {
            return await res.json();
          }
        } catch (e) {}
      }
      return null;
    },

    /**
     * Get gallery items list
     */
    async getGallery() {
      // 1. Try serverless API
      try {
        const res = await fetch('/api/gallery', { cache: 'no-cache' });
        if (res.ok) {
          const json = await res.json();
          if (json && json.data && Array.isArray(json.data)) {
            setLocal(GALLERY_KEY, json.data);
            return json.data;
          }
        }
      } catch (err) {
        // API offline or static serve
      }

      // 2. Local persistence
      const local = getLocal(GALLERY_KEY);
      if (local && Array.isArray(local) && local.length > 0) {
        return local;
      }

      // 3. Fallback to static data/gallery.json (supports root, /admin, and file://)
      const data = await this.fetchJsonFallback('data/gallery.json');
      if (data && Array.isArray(data)) {
        setLocal(GALLERY_KEY, data);
        return data;
      }

      return [];
    },

    /**
     * Save/Mutate Collections (Admin only)
     */
    async mutateCollections(action, payload, token) {
      // Immediate local update
      let items = await this.getCollections();
      if (action === 'save_all' && Array.isArray(payload.items)) {
        items = payload.items;
      } else if (action === 'add' && payload.item) {
        const newItem = {
          ...payload.item,
          id: payload.item.id || `col-${Date.now()}`,
          displayOrder: payload.item.displayOrder || items.length + 1,
          status: payload.item.status || 'active',
          featured: !!payload.item.featured
        };
        items.unshift(newItem);
      } else if (action === 'edit' && payload.item && payload.item.id) {
        const idx = items.findIndex(c => c.id === payload.item.id);
        if (idx !== -1) {
          items[idx] = { ...items[idx], ...payload.item };
        }
      } else if (action === 'delete' && payload.id) {
        items = items.filter(c => c.id !== payload.id);
      } else if (action === 'toggle' && payload.id) {
        const idx = items.findIndex(c => c.id === payload.id);
        if (idx !== -1) {
          items[idx].status = items[idx].status === 'active' ? 'disabled' : 'active';
        }
      } else if (action === 'feature' && payload.id) {
        const idx = items.findIndex(c => c.id === payload.id);
        if (idx !== -1) {
          items[idx].featured = !items[idx].featured;
        }
      } else if (action === 'reorder' && Array.isArray(payload.items)) {
        items = payload.items;
      }

      setLocal(COLLECTIONS_KEY, items);

      // Push to Serverless API if token present
      try {
        const res = await fetch('/api/collections', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ action, ...payload })
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.data) {
            items = json.data;
            setLocal(COLLECTIONS_KEY, items);
          }
        }
      } catch (err) {
        console.warn('API sync deferred, local persistence saved:', err);
      }

      return items;
    },

    /**
     * Save/Mutate Gallery (Admin only)
     */
    async mutateGallery(action, payload, token) {
      let items = await this.getGallery();
      if (action === 'save_all' && Array.isArray(payload.items)) {
        items = payload.items;
      } else if (action === 'add' && payload.item) {
        const newItem = {
          ...payload.item,
          id: payload.item.id || `gal-${Date.now()}`,
          displayOrder: payload.item.displayOrder || items.length + 1,
          status: payload.item.status || 'active',
          featured: !!payload.item.featured
        };
        items.unshift(newItem);
      } else if (action === 'edit' && payload.item && payload.item.id) {
        const idx = items.findIndex(g => g.id === payload.item.id);
        if (idx !== -1) {
          items[idx] = { ...items[idx], ...payload.item };
        }
      } else if (action === 'delete' && payload.id) {
        items = items.filter(g => g.id !== payload.id);
      } else if (action === 'toggle' && payload.id) {
        const idx = items.findIndex(g => g.id === payload.id);
        if (idx !== -1) {
          items[idx].status = items[idx].status === 'active' ? 'hidden' : 'active';
        }
      } else if (action === 'feature' && payload.id) {
        const idx = items.findIndex(g => g.id === payload.id);
        if (idx !== -1) {
          items[idx].featured = !items[idx].featured;
        }
      } else if (action === 'reorder' && Array.isArray(payload.items)) {
        items = payload.items;
      }

      setLocal(GALLERY_KEY, items);

      try {
        const res = await fetch('/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ action, ...payload })
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.data) {
            items = json.data;
            setLocal(GALLERY_KEY, items);
          }
        }
      } catch (err) {
        console.warn('Gallery API sync deferred, saved locally:', err);
      }

      return items;
    },

    /**
     * Dashboard statistics summary
     */
    async getStats() {
      const collections = await this.getCollections();
      const gallery = await this.getGallery();

      const totalCollections = collections.length;
      const totalImages = gallery.filter(g => g.mediaType === 'image').length;
      const totalReels = gallery.filter(g => g.mediaType === 'reel').length;
      const featuredItems = collections.filter(c => c.featured).length + gallery.filter(g => g.featured).length;

      return {
        totalCollections,
        totalImages,
        totalReels,
        featuredItems
      };
    },

    /**
     * Export all data as JSON
     */
    async exportBackup() {
      const collections = await this.getCollections();
      const gallery = await this.getGallery();
      const backup = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        brand: 'DEEPKRISHNA ZAVERI',
        owner: 'Jay Soni',
        collections,
        gallery
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `deepkrishna_zaveri_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
})();

if (typeof window !== 'undefined') {
  window.DataStore = DataStore;
}
