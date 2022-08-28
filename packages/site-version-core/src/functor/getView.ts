import { SiteVersion, View } from '../siteVersion';

export const getView = (
  siteVersion: SiteVersion,
  pageName: string,
  blockName: string,
  viewName: string,
): View | undefined => {
  return siteVersion.pages
    .find(page => page.name === pageName)
    ?.blocks.find(block => block.name === blockName)
    ?.views.find(view => view.name === viewName);
};
