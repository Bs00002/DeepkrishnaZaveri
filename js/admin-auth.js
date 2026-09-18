/**
 * DEEPKRISHNA ZAVERI — ADMIN AUTHENTICATION ENGINE
 * Secure session & token management for Jay Soni
 */

const AdminAuth = (() => {
  const TOKEN_KEY = 'dz_admin_auth_token_v1';
  const USER_KEY = 'dz_admin_auth_user_v1';

  return {
    getToken() {
      try {
        return localStorage.getItem(TOKEN_KEY);
      } catch (e) {
        return null;
      }
    },

    getUser() {
      try {
        const u = localStorage.getItem(USER_KEY);
        return u ? JSON.parse(u) : null;
      } catch (e) {
        return null;
      }
    },

    isAuthenticated() {
      const token = this.getToken();
      if (!token) return false;
      // Check token expiration if JWT format
      try {
        const parts = token.split('.');
        if (parts.length === 3) {
          const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
          if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
            this.logout();
            return false;
          }
        }
        return true;
      } catch (e) {
        return !!token;
      }
    },

    async login(username, password) {
      function checkStaticCredentials(u, p) {
        if (
          u &&
          u.trim().toLowerCase() === 'jay soni' &&
          p === 'Jaysoni@777'
        ) {
          const dummyToken = 'dz_sess_' + btoa(Date.now() + ':' + u) + '.local';
          const user = { username: 'Jay Soni', role: 'admin' };
          localStorage.setItem(TOKEN_KEY, dummyToken);
          localStorage.setItem(USER_KEY, JSON.stringify(user));
          return { success: true, user };
        }
        return { success: false, error: 'Invalid username or password' };
      }

      // 1. Send credentials to secure serverless API
      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.success && data.token) {
            localStorage.setItem(TOKEN_KEY, data.token);
            localStorage.setItem(USER_KEY, JSON.stringify(data.user));
            return { success: true, user: data.user };
          }
        } else if (res.status === 404) {
          // Local static dev server where /api/auth is not running
          return checkStaticCredentials(username, password);
        } else {
          const errData = await res.json().catch(() => ({}));
          return { success: false, error: errData.error || 'Authentication failed' };
        }
      } catch (err) {
        return checkStaticCredentials(username, password);
      }

      return { success: false, error: 'Invalid credentials' };
    },

    logout() {
      try {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      } catch (e) {}
      window.location.href = '/admin/login.html';
    },

    /**
     * Enforce authentication guard on admin pages
     */
    requireAuth() {
      if (!this.isAuthenticated()) {
        const current = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = `/admin/login.html?redirect=${current}`;
        return false;
      }
      return true;
    }
  };
})();

if (typeof window !== 'undefined') {
  window.AdminAuth = AdminAuth;
}
