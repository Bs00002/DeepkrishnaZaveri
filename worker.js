/**
 * Cloudflare Worker for DEEPKRISHNA ZAVERI
 * Zero-redirect static routing engine
 * Serves static assets from dist/ with clean URLs and strict loop prevention
 */

const ROUTE_MAP = {
  '/': '/index.html',
  '/index': '/index.html',
  '/about': '/about.html',
  '/collection': '/collection.html',
  '/collections': '/collection.html',
  '/jewellery': '/collection.html',
  '/gold': '/gold.html',
  '/silver': '/silver.html',
  '/services': '/services.html',
  '/savings-plan': '/savings-plan.html',
  '/gallery': '/gallery.html',
  '/showroom': '/showroom.html',
  '/contact': '/contact.html',
  '/admin': '/admin/index.html',
  '/admin/': '/admin/index.html',
  '/admin/index': '/admin/index.html',
  '/admin/login': '/admin/login.html',
  '/admin/dashboard': '/admin/index.html',
  '/admin/collections': '/admin/collections.html',
  '/admin/gallery': '/admin/gallery.html'
};

export default {
  async fetch(request, env, ctx) {
    if (!env.ASSETS) {
      return new Response('DEEPKRISHNA ZAVERI - Asset binding unavailable', { status: 500 });
    }

    const url = new URL(request.url);
    let pathname = url.pathname;

    // Normalize trailing slash for non-root routes (e.g. /about/ -> /about)
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    // 1. Direct Route Map Match (Clean URLs served directly with 200 OK)
    if (ROUTE_MAP[pathname]) {
      const targetFile = ROUTE_MAP[pathname];
      const assetUrl = new URL(request.url);
      assetUrl.pathname = targetFile;
      
      const assetResponse = await env.ASSETS.fetch(new Request(assetUrl, request));
      
      // If asset fetched with 200, return immediately with proper content-type
      if (assetResponse.status === 200) {
        return assetResponse;
      }
    }

    // 2. Fetch the request directly through ASSETS (for assets like /css/*, /js/*, /assets/*, *.html)
    let response = await env.ASSETS.fetch(request);

    // 3. Strict Redirect Loop Prevention:
    // If Cloudflare ASSETS returned a 3xx redirect back to the same path or created a loop,
    // intercept it and serve the corresponding HTML file directly with 200 OK.
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (location) {
        const locUrl = new URL(location, request.url);
        // Self-referencing redirect detected (e.g. /collection -> /collection)
        if (locUrl.pathname === url.pathname || locUrl.pathname === pathname) {
          const htmlPath = pathname.replace(/\/$/, '') + '.html';
          const fallbackUrl = new URL(request.url);
          fallbackUrl.pathname = htmlPath;
          const htmlResp = await env.ASSETS.fetch(new Request(fallbackUrl, request));
          if (htmlResp.status === 200) {
            return htmlResp;
          }
        }
      }
    }

    // 4. Dynamic Clean URL Fallback (if a new .html file is added without updating ROUTE_MAP)
    if (response.status === 404 && !url.pathname.includes('.')) {
      const cleanPath = pathname.replace(/\/$/, '') + '.html';
      const fallbackUrl = new URL(request.url);
      fallbackUrl.pathname = cleanPath;
      const htmlResp = await env.ASSETS.fetch(new Request(fallbackUrl, request));
      if (htmlResp.status === 200) {
        return htmlResp;
      }
    }

    return response;
  }
};
