import './polyfills.server.mjs';
function o(n){let e=n.split(/[?#]/)[0]||"/",t=(e.startsWith("/")?e:`/${e}`).replace(/\/{2,}/g,"/");return t==="/"?"/":t.endsWith("/")?t:`${t}/`}function s(n,e){let i=o(e),t=n.content.enabledRoutes;return n.content.excludedRoutes?.includes(i)?!1:t.includes("*")?!0:t.includes(i)}export{s as a};
