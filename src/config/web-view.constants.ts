export const WEBVIEW_HOST = 'https://webpickmi-stg.livek.tv';
type WEBVIEW_URI_TYPE = {
  [key: string]: string;
};
export const WEBVIEW_URI: WEBVIEW_URI_TYPE = {
  MAIN: `${WEBVIEW_HOST}`,
  CHAT: `${WEBVIEW_HOST}/chat`,
  GALLERY: `${WEBVIEW_HOST}/model/list`,
  FEED: `${WEBVIEW_HOST}/subscription`,
  SHOP: `${WEBVIEW_HOST}/shop`,
};
