/**
 * Cloudflare Worker for DEEPKRISHNA ZAVERI
 * Serves static assets from dist/ with clean routing & fallback handling
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // If static asset binding exists
    if (env.ASSETS) {
      let response = await env.ASSETS.fetch(request);

      // Handle clean URLs: e.g. /about -> /about.html, /collection -> /collection.html
      if (response.status === 404 && !url.pathname.includes('.')) {
        const cleanPath = url.pathname.replace(/\/$/, '') + '.html';
        const cleanUrl = new URL(request.url);
        cleanUrl.pathname = cleanPath;
        const htmlResp = await env.ASSETS.fetch(new Request(cleanUrl, request));
        if (htmlResp.status === 200) {
          return htmlResp;
        }

        // Handle /admin or /admin/ -> /admin/index.html
        if (url.pathname === '/admin' || url.pathname === '/admin/') {
          const adminUrl = new URL(request.url);
          adminUrl.pathname = '/admin/index.html';
          return env.ASSETS.fetch(new Request(adminUrl, request));
        }
      }

      return response;
    }

    return new Response('Deepkrishna Zaveri - Asset binding initializing...', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
