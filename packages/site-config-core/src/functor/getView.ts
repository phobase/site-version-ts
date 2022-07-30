import { SiteConfig, View } from '../siteConfig';

export const getView = (
  siteConfig: SiteConfig,
  pageName: string,
  blockName: string,
  viewName: string,
): View | undefined => {
  return siteConfig.pages
    .find(page => page.name === pageName)
    ?.blocks.find(block => block.name === blockName)
    ?.views.find(view => view.name === viewName);
};
