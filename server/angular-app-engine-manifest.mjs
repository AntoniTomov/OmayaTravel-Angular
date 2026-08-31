
export default {
  basePath: '/',
  allowedHosts: [
  "omayatravel.com",
  "www.omayatravel.com",
  "localhost",
  "127.0.0.1"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
