/**
 * DEEPKRISHNA ZAVERI — LUXURY ADMIN CONTROLLER
 * Full CRUD, image upload preview, reordering, and state persistence
 */

// Toast notification helper
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="las ${type === 'success' ? 'la-check-circle' : 'la-exclamation-circle'}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// File to base64 helper for image upload preview
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
// Asset path normalizer for bulletproof rendering in /admin or root
function resolveAsset(p) {
  if (!p) return '/assets/brand/favicon.png';
  if (p.startsWith('http') || p.startsWith('data:') || p.startsWith('blob:')) return p;
  return '/' + p.replace(/^\/+/, '');
}

document.addEventListener('DOMContentLoaded', async () => {
  // Check auth if not on login page
  if (!window.location.pathname.includes('login.html')) {
    if (!AdminAuth.requireAuth()) return;

    // Display admin user name
    const user = AdminAuth.getUser();
    const nameEl = document.getElementById('admin-user-name');
    if (nameEl && user) nameEl.textContent = user.username || 'Jay Soni';

    // Setup logout buttons
    document.querySelectorAll('.btn-logout').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        AdminAuth.logout();
      });
    });

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('mobile-sidebar-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Export backup button
    const exportBtn = document.getElementById('btn-export-backup');
    if (exportBtn) {
      exportBtn.addEventListener('click', async () => {
        await DataStore.exportBackup();
        showToast('Database backup downloaded successfully');
      });
    }
  }

  // --- 1. DASHBOARD PAGE CONTROLLER ---
  if (document.getElementById('admin-dashboard-view')) {
    const stats = await DataStore.getStats();
    document.getElementById('stat-collections').textContent = stats.totalCollections;
    document.getElementById('stat-images').textContent = stats.totalImages;
    document.getElementById('stat-reels').textContent = stats.totalReels;
    document.getElementById('stat-featured').textContent = stats.featuredItems;

    // Render recent collections summary
    const collections = await DataStore.getCollections();
    const recentTable = document.getElementById('recent-collections-tbody');
    if (recentTable) {
      recentTable.innerHTML = collections.slice(0, 5).map(c => `
        <tr>
          <td>
            <img src="${resolveAsset(c.image)}" alt="${c.title}" class="item-thumb" onerror="this.src='/assets/brand/favicon.png'">
          </td>
          <td>
            <strong>${c.title}</strong>
            <div style="font-size: 0.78rem; color: var(--color-taupe);">${c.category.toUpperCase()}</div>
          </td>
          <td>
            <span class="badge ${c.status === 'active' ? 'badge-active' : 'badge-disabled'}">
              ${c.status}
            </span>
          </td>
          <td>
            ${c.featured ? '<span class="badge badge-featured">Featured</span>' : '—'}
          </td>
        </tr>
      `).join('');
    }
  }

  // --- 2. COLLECTIONS MANAGEMENT CONTROLLER ---
  if (document.getElementById('admin-collections-view')) {
    let currentCollections = await DataStore.getCollections();
    const tableBody = document.getElementById('collections-table-body');
    const modal = document.getElementById('collection-modal');
    const modalForm = document.getElementById('collection-form');
    const modalTitle = document.getElementById('modal-title');
    const addBtn = document.getElementById('btn-add-collection');
    const closeBtns = document.querySelectorAll('.modal-close');
    const filterCategory = document.getElementById('filter-category');
    const imageInput = document.getElementById('col-image-file');
    const imageUrlInput = document.getElementById('col-image-url');
    const imagePreview = document.getElementById('col-image-preview');

    function renderTable() {
      const cat = filterCategory ? filterCategory.value : 'all';
      let filtered = currentCollections;
      if (cat !== 'all') {
        filtered = filtered.filter(c => c.category.toLowerCase() === cat.toLowerCase());
      }
      // Sort by display order
      filtered.sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));

      if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 40px; color: var(--color-taupe);">No collection items found.</td></tr>`;
        return;
      }

      tableBody.innerHTML = filtered.map(c => `
        <tr data-id="${c.id}">
          <td style="width: 40px; text-align: center; color: var(--color-taupe);">
            <div style="display:flex; flex-direction:column; gap:2px;">
              <button class="btn-icon btn-reorder-up" title="Move Up" data-id="${c.id}"><i class="las la-arrow-up"></i></button>
              <button class="btn-icon btn-reorder-down" title="Move Down" data-id="${c.id}"><i class="las la-arrow-down"></i></button>
            </div>
          </td>
          <td style="width: 70px;">
            <img src="${resolveAsset(c.image)}" alt="${c.title}" class="item-thumb" onerror="this.src='/assets/brand/favicon.png'">
          </td>
          <td>
            <strong>${c.title}</strong>
            <div style="font-size: 0.8rem; color: var(--color-taupe); max-width: 320px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
              ${c.description || ''}
            </div>
          </td>
          <td>
            <span class="badge badge-gold">${c.category}</span>
          </td>
          <td>
            <button class="badge ${c.status === 'active' ? 'badge-active' : 'badge-disabled'} btn-toggle-status" data-id="${c.id}" style="cursor:pointer; border:none;">
              ${c.status}
            </button>
          </td>
          <td>
            <button class="badge ${c.featured ? 'badge-featured' : 'badge-disabled'} btn-toggle-featured" data-id="${c.id}" style="cursor:pointer; border:none;">
              ${c.featured ? 'Yes' : 'No'}
            </button>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 6px; justify-content: flex-end;">
              <button class="btn-icon btn-edit" title="Edit Item" data-id="${c.id}"><i class="las la-pen"></i></button>
              <button class="btn-icon delete btn-delete" title="Delete Item" data-id="${c.id}"><i class="las la-trash"></i></button>
            </div>
          </td>
        </tr>
      `).join('');

      attachCollectionRowEvents();
    }

    function attachCollectionRowEvents() {
      // Edit
      document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const item = currentCollections.find(c => c.id === id);
          if (item) openModal(item);
        });
      });

      // Delete
      document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          if (confirm('Are you sure you want to remove this jewellery collection item?')) {
            const token = AdminAuth.getToken();
            currentCollections = await DataStore.mutateCollections('delete', { id }, token);
            renderTable();
            showToast('Collection item deleted');
          }
        });
      });

      // Toggle Status
      document.querySelectorAll('.btn-toggle-status').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const token = AdminAuth.getToken();
          currentCollections = await DataStore.mutateCollections('toggle', { id }, token);
          renderTable();
          showToast('Item status updated');
        });
      });

      // Toggle Featured
      document.querySelectorAll('.btn-toggle-featured').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const token = AdminAuth.getToken();
          currentCollections = await DataStore.mutateCollections('feature', { id }, token);
          renderTable();
          showToast('Featured status updated');
        });
      });

      // Reorder Up
      document.querySelectorAll('.btn-reorder-up').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const idx = currentCollections.findIndex(c => c.id === id);
          if (idx > 0) {
            const temp = currentCollections[idx];
            currentCollections[idx] = currentCollections[idx - 1];
            currentCollections[idx - 1] = temp;
            currentCollections.forEach((c, i) => c.displayOrder = i + 1);
            const token = AdminAuth.getToken();
            currentCollections = await DataStore.mutateCollections('reorder', { items: currentCollections }, token);
            renderTable();
          }
        });
      });

      // Reorder Down
      document.querySelectorAll('.btn-reorder-down').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const idx = currentCollections.findIndex(c => c.id === id);
          if (idx < currentCollections.length - 1) {
            const temp = currentCollections[idx];
            currentCollections[idx] = currentCollections[idx + 1];
            currentCollections[idx + 1] = temp;
            currentCollections.forEach((c, i) => c.displayOrder = i + 1);
            const token = AdminAuth.getToken();
            currentCollections = await DataStore.mutateCollections('reorder', { items: currentCollections }, token);
            renderTable();
          }
        });
      });
    }

    function openModal(item = null) {
      modalForm.reset();
      if (item) {
        modalTitle.textContent = 'Edit Collection Item';
        document.getElementById('col-id').value = item.id;
        document.getElementById('col-title').value = item.title;
        document.getElementById('col-category').value = item.category;
        document.getElementById('col-description').value = item.description || '';
        document.getElementById('col-image-url').value = item.image;
        document.getElementById('col-order').value = item.displayOrder || 1;
        document.getElementById('col-featured').checked = !!item.featured;
        document.getElementById('col-status').value = item.status || 'active';
        imagePreview.src = item.image;
        imagePreview.style.display = 'block';
      } else {
        modalTitle.textContent = 'Add New Collection Item';
        document.getElementById('col-id').value = '';
        document.getElementById('col-order').value = currentCollections.length + 1;
        imagePreview.src = '';
        imagePreview.style.display = 'none';
      }
      modal.classList.add('open');
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    addBtn?.addEventListener('click', () => openModal());
    closeBtns.forEach(b => b.addEventListener('click', closeModal));
    filterCategory?.addEventListener('change', renderTable);

    // Image file upload preview handler
    imageInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        const dataUrl = await readFileAsDataURL(file);
        imagePreview.src = dataUrl;
        imagePreview.style.display = 'block';
        imageUrlInput.value = dataUrl;
      }
    });

    imageUrlInput?.addEventListener('input', (e) => {
      if (e.target.value) {
        imagePreview.src = e.target.value;
        imagePreview.style.display = 'block';
      }
    });

    modalForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('col-id').value;
      const title = document.getElementById('col-title').value;
      const category = document.getElementById('col-category').value;
      const description = document.getElementById('col-description').value;
      const image = imageUrlInput.value || 'assets/jewellery/bridal/DK-4.webp';
      const displayOrder = parseInt(document.getElementById('col-order').value, 10) || 1;
      const featured = document.getElementById('col-featured').checked;
      const status = document.getElementById('col-status').value;

      const payload = {
        item: { id, title, category, description, image, displayOrder, featured, status }
      };

      const token = AdminAuth.getToken();
      if (id) {
        currentCollections = await DataStore.mutateCollections('edit', payload, token);
        showToast('Collection item updated successfully');
      } else {
        currentCollections = await DataStore.mutateCollections('add', payload, token);
        showToast('New collection item added');
      }

      closeModal();
      renderTable();
    });

    renderTable();
  }

  // --- 3. GALLERY MANAGEMENT CONTROLLER ---
  if (document.getElementById('admin-gallery-view')) {
    let currentGallery = await DataStore.getGallery();
    const tableBody = document.getElementById('gallery-table-body');
    const modal = document.getElementById('gallery-modal');
    const modalForm = document.getElementById('gallery-form');
    const modalTitle = document.getElementById('modal-title');
    const addBtn = document.getElementById('btn-add-gallery');
    const closeBtns = document.querySelectorAll('.modal-close');
    const filterType = document.getElementById('filter-media-type');
    const fileInput = document.getElementById('gal-file');
    const urlInput = document.getElementById('gal-url');
    const thumbInput = document.getElementById('gal-thumb');
    const mediaPreview = document.getElementById('gal-media-preview');

    function renderTable() {
      const type = filterType ? filterType.value : 'all';
      let filtered = currentGallery;
      if (type !== 'all') {
        filtered = filtered.filter(g => g.mediaType === type);
      }
      filtered.sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));

      if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 40px; color: var(--color-taupe);">No gallery media found.</td></tr>`;
        return;
      }

      tableBody.innerHTML = filtered.map(g => `
        <tr data-id="${g.id}">
          <td style="width: 40px; text-align: center;">
            <div style="display:flex; flex-direction:column; gap:2px;">
              <button class="btn-icon btn-gal-up" title="Move Up" data-id="${g.id}"><i class="las la-arrow-up"></i></button>
              <button class="btn-icon btn-gal-down" title="Move Down" data-id="${g.id}"><i class="las la-arrow-down"></i></button>
            </div>
          </td>
          <td style="width: 70px;">
            <img src="${resolveAsset(g.thumbnail || g.mediaUrl)}" alt="${g.title}" class="item-thumb ${g.mediaType === 'reel' ? 'reel-thumb' : ''}" onerror="this.src='/assets/brand/favicon.png'">
          </td>
          <td>
            <strong>${g.title}</strong>
            <div style="font-size: 0.78rem; color: var(--color-taupe); display: flex; gap: 8px; align-items: center; margin-top: 3px;">
              <span class="badge ${g.mediaType === 'reel' ? 'badge-wine' : 'badge-gold'}">${g.mediaType.toUpperCase()}</span>
              <span>${g.category}</span>
            </div>
          </td>
          <td>
            <span class="badge badge-gold">${g.category}</span>
          </td>
          <td>
            <button class="badge ${g.status === 'active' ? 'badge-active' : 'badge-disabled'} btn-toggle-gal-status" data-id="${g.id}" style="cursor:pointer; border:none;">
              ${g.status}
            </button>
          </td>
          <td>
            <button class="badge ${g.featured ? 'badge-featured' : 'badge-disabled'} btn-toggle-gal-featured" data-id="${g.id}" style="cursor:pointer; border:none;">
              ${g.featured ? 'Yes' : 'No'}
            </button>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 6px; justify-content: flex-end;">
              <button class="btn-icon btn-gal-edit" title="Edit Media" data-id="${g.id}"><i class="las la-pen"></i></button>
              <button class="btn-icon delete btn-gal-delete" title="Delete Media" data-id="${g.id}"><i class="las la-trash"></i></button>
            </div>
          </td>
        </tr>
      `).join('');

      attachGalleryRowEvents();
    }

    function attachGalleryRowEvents() {
      document.querySelectorAll('.btn-gal-edit').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const item = currentGallery.find(g => g.id === id);
          if (item) openModal(item);
        });
      });

      document.querySelectorAll('.btn-gal-delete').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          if (confirm('Are you sure you want to delete this gallery media?')) {
            const token = AdminAuth.getToken();
            currentGallery = await DataStore.mutateGallery('delete', { id }, token);
            renderTable();
            showToast('Gallery item deleted');
          }
        });
      });

      document.querySelectorAll('.btn-toggle-gal-status').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const token = AdminAuth.getToken();
          currentGallery = await DataStore.mutateGallery('toggle', { id }, token);
          renderTable();
          showToast('Status updated');
        });
      });

      document.querySelectorAll('.btn-toggle-gal-featured').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const token = AdminAuth.getToken();
          currentGallery = await DataStore.mutateGallery('feature', { id }, token);
          renderTable();
          showToast('Featured status updated');
        });
      });

      document.querySelectorAll('.btn-gal-up').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const idx = currentGallery.findIndex(g => g.id === id);
          if (idx > 0) {
            const temp = currentGallery[idx];
            currentGallery[idx] = currentGallery[idx - 1];
            currentGallery[idx - 1] = temp;
            currentGallery.forEach((g, i) => g.displayOrder = i + 1);
            const token = AdminAuth.getToken();
            currentGallery = await DataStore.mutateGallery('reorder', { items: currentGallery }, token);
            renderTable();
          }
        });
      });

      document.querySelectorAll('.btn-gal-down').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-id');
          const idx = currentGallery.findIndex(g => g.id === id);
          if (idx < currentGallery.length - 1) {
            const temp = currentGallery[idx];
            currentGallery[idx] = currentGallery[idx + 1];
            currentGallery[idx + 1] = temp;
            currentGallery.forEach((g, i) => g.displayOrder = i + 1);
            const token = AdminAuth.getToken();
            currentGallery = await DataStore.mutateGallery('reorder', { items: currentGallery }, token);
            renderTable();
          }
        });
      });
    }

    function openModal(item = null) {
      modalForm.reset();
      if (item) {
        modalTitle.textContent = 'Edit Gallery Media';
        document.getElementById('gal-id').value = item.id;
        document.getElementById('gal-title').value = item.title;
        document.getElementById('gal-type').value = item.mediaType;
        document.getElementById('gal-category').value = item.category;
        urlInput.value = item.mediaUrl;
        thumbInput.value = item.thumbnail || '';
        document.getElementById('gal-order').value = item.displayOrder || 1;
        document.getElementById('gal-featured').checked = !!item.featured;
        document.getElementById('gal-status').value = item.status || 'active';
        mediaPreview.src = item.thumbnail || item.mediaUrl;
        mediaPreview.style.display = 'block';
      } else {
        modalTitle.textContent = 'Add New Gallery Media';
        document.getElementById('gal-id').value = '';
        document.getElementById('gal-order').value = currentGallery.length + 1;
        mediaPreview.src = '';
        mediaPreview.style.display = 'none';
      }
      modal.classList.add('open');
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    addBtn?.addEventListener('click', () => openModal());
    closeBtns.forEach(b => b.addEventListener('click', closeModal));
    filterType?.addEventListener('change', renderTable);

    fileInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        const dataUrl = await readFileAsDataURL(file);
        mediaPreview.src = dataUrl;
        mediaPreview.style.display = 'block';
        urlInput.value = dataUrl;
        thumbInput.value = dataUrl;
      }
    });

    urlInput?.addEventListener('input', (e) => {
      if (e.target.value) {
        mediaPreview.src = e.target.value;
        mediaPreview.style.display = 'block';
      }
    });

    modalForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('gal-id').value;
      const title = document.getElementById('gal-title').value;
      const mediaType = document.getElementById('gal-type').value;
      const category = document.getElementById('gal-category').value;
      const mediaUrl = urlInput.value;
      const thumbnail = thumbInput.value || mediaUrl;
      const displayOrder = parseInt(document.getElementById('gal-order').value, 10) || 1;
      const featured = document.getElementById('gal-featured').checked;
      const status = document.getElementById('gal-status').value;

      const payload = {
        item: { id, title, mediaType, category, mediaUrl, thumbnail, displayOrder, featured, status }
      };

      const token = AdminAuth.getToken();
      if (id) {
        currentGallery = await DataStore.mutateGallery('edit', payload, token);
        showToast('Gallery media updated');
      } else {
        currentGallery = await DataStore.mutateGallery('add', payload, token);
        showToast('New media added to gallery');
      }

      closeModal();
      renderTable();
    });

    renderTable();
  }
});
