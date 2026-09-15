import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

import { trailingSlashRedirectTarget } from './public-routes';

/**
 * Keeps public URLs on their canonical trailing-slash form wherever Angular writes one out.
 *
 * Angular's DefaultUrlSerializer drops the trailing slash when it turns a UrlTree back into a string.
 * The router writes that string to the address bar after every navigation, including the first one
 * after hydration, and RouterLink renders it as every internal href, on the server too. So a page
 * loaded at /destinations/bulgaria/ had its address bar rewritten to /destinations/bulgaria, and every
 * internal link pointed at a URL the server answers with a 301: crawlers paid a redirect per link,
 * copied and shared URLs were the redirecting form, and DevTools Lighthouse, which tests whatever the
 * address bar shows, always measured through the redirect.
 *
 * Parsing is unchanged, because the default parser already yields the empty trailing segment that the
 * public route matchers accept. The slash follows the rule the server's redirect uses, so the root,
 * /api/ paths and file URLs are left as they are.
 */
@Injectable()
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);

    return trailingSlashRedirectTarget(url) ?? url;
  }
}
