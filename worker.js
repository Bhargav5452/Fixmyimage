export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Host consolidation: Redirect www.fixmyimage.app and http to https://fixmyimage.app
    const isWww = url.hostname.toLowerCase() === 'www.fixmyimage.app';
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      url.hostname = 'fixmyimage.app';
      url.protocol = 'https:';

      // Normalize trailing slash at the same time to avoid redirect chains
      const hasExtension = url.pathname.slice(url.pathname.lastIndexOf('/')).includes('.');
      if (url.pathname !== '/' && !url.pathname.endsWith('/') && !hasExtension) {
        url.pathname = `${url.pathname}/`;
      }

      return Response.redirect(url.toString(), 301);
    }

    // 2. Trailing slash normalization for extensionless paths (e.g. /avif-to-jpg -> /avif-to-jpg/)
    const hasExtension = url.pathname.slice(url.pathname.lastIndexOf('/')).includes('.');
    if (url.pathname !== '/' && !url.pathname.endsWith('/') && !hasExtension) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 308);
    }

    // 3. Pass through to Cloudflare Static Assets
    return env.ASSETS.fetch(request);
  }
};
