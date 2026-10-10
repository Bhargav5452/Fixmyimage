// Mapping of legacy Spanish subpages to final root-level Spanish URLs (301 Permanent Redirect)
const LEGACY_ES_REDIRECTS = {
  // English slugs under /es
  '/es/compress-image': '/comprimir-imagen/',
  '/es/resize-image': '/redimensionar-imagen/',
  '/es/convert-image': '/convertir-imagen/',
  '/es/watermark-image': '/marca-de-agua/',
  '/es/jpg-to-png': '/convertir-jpg-a-png/',
  '/es/png-to-jpg': '/convertir-png-a-jpg/',
  '/es/webp-to-png': '/convertir-webp-a-png/',
  '/es/webp-to-jpg': '/convertir-webp-a-jpg/',
  '/es/avif-to-jpg': '/convertir-avif-a-jpg/',
  '/es/avif-to-png': '/convertir-avif-a-png/',
  '/es/compress-image-to-50kb': '/comprimir-imagen-a-50-kb/',
  '/es/compress-image-to-100kb': '/comprimir-imagen-a-100-kb/',
  '/es/compress-image-to-1mb': '/comprimir-imagen-a-1-mb/',
  '/es/resize-image-in-pixels': '/redimensionar-imagen-en-pixeles/',
  '/es/resize-image-in-cm': '/redimensionar-imagen-en-cm/',
  '/es/bulk-image-resizer': '/redimensionar-imagenes-por-lotes/',

  // Informational & legal
  '/es/about': '/sobre-nosotros/',
  '/es/contact': '/contacto/',
  '/es/privacy': '/privacidad/',
  '/es/terms': '/terminos/',
  '/es/sobre-nosotros': '/sobre-nosotros/',
  '/es/contacto': '/contacto/',
  '/es/privacidad': '/privacidad/',
  '/es/terminos': '/terminos/',

  // Redundant /es/ prefixes on Spanish slugs
  '/es/comprimir-imagen': '/comprimir-imagen/',
  '/es/redimensionar-imagen': '/redimensionar-imagen/',
  '/es/convertir-imagen': '/convertir-imagen/',
  '/es/marca-de-agua': '/marca-de-agua/',
  '/es/convertir-jpg-a-png': '/convertir-jpg-a-png/',
  '/es/convertir-png-a-jpg': '/convertir-png-a-jpg/',
  '/es/convertir-webp-a-png': '/convertir-webp-a-png/',
  '/es/convertir-webp-a-jpg': '/convertir-webp-a-jpg/',
  '/es/convertir-avif-a-jpg': '/convertir-avif-a-jpg/',
  '/es/convertir-avif-a-png': '/convertir-avif-a-png/',
  '/es/comprimir-imagen-a-50-kb': '/comprimir-imagen-a-50-kb/',
  '/es/comprimir-imagen-a-100-kb': '/comprimir-imagen-a-100-kb/',
  '/es/comprimir-imagen-a-1-mb': '/comprimir-imagen-a-1-mb/',
  '/es/redimensionar-imagen-en-pixeles': '/redimensionar-imagen-en-pixeles/',
  '/es/redimensionar-imagen-en-cm': '/redimensionar-imagen-en-cm/',
  '/es/redimensionar-imagenes-por-lotes': '/redimensionar-imagenes-por-lotes/'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Normalize path for legacy lookup (case-insensitive, trailing slash stripped for lookup)
    const normalizedPath = (url.pathname.endsWith('/') && url.pathname.length > 1
      ? url.pathname.slice(0, -1)
      : url.pathname).toLowerCase();

    // 2. Direct 301 Permanent Redirect for legacy Spanish subpages (NEVER matches /es or /es/)
    // Directly redirects to https://fixmyimage.app + final destination in ONE SINGLE HOP
    // even if incoming request was on www, http, or missing trailing slash!
    if (LEGACY_ES_REDIRECTS[normalizedPath]) {
      const destination = new URL(`https://fixmyimage.app${LEGACY_ES_REDIRECTS[normalizedPath]}`);
      destination.search = url.search;
      return Response.redirect(destination.toString(), 301);
    }

    // 3. Host consolidation: Redirect www.fixmyimage.app and http: to https://fixmyimage.app
    const isWww = url.hostname.toLowerCase() === 'www.fixmyimage.app';
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      url.hostname = 'fixmyimage.app';
      url.protocol = 'https:';

      // Normalize trailing slash in the same hop for extensionless directory paths
      const hasExtension = url.pathname.slice(url.pathname.lastIndexOf('/')).includes('.');
      if (url.pathname !== '/' && !url.pathname.endsWith('/') && !hasExtension) {
        url.pathname = `${url.pathname}/`;
      }

      return Response.redirect(url.toString(), 301);
    }

    // 4. Trailing slash normalization for extensionless paths (e.g. /avif-to-jpg -> /avif-to-jpg/, /es -> /es/)
    const hasExtension = url.pathname.slice(url.pathname.lastIndexOf('/')).includes('.');
    if (url.pathname !== '/' && !url.pathname.endsWith('/') && !hasExtension) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 308);
    }

    // 5. Pass through to Cloudflare Static Assets
    return env.ASSETS.fetch(request);
  }
};
