if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,r,a)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return n;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return n.default||(n.default=i),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/EG_data_mono.png",revision:"6801227fd66ffac159575acc73262d88"},{url:"/_next/static/S1rORLrh_BEZqG0FpbpoB/_buildManifest.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/S1rORLrh_BEZqG0FpbpoB/_ssgManifest.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/0f1ac474-1c10fa6979fe89f7383e.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/100-10d0de89f39e00dfcbc9.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/168-239c31b807f76550ee52.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/201-ebf91fa8ae110f01e260.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/218-d8ed916d290aefffd814.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/29107295-4ae28493d7b8169c990d.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/392-583bda09359d31655102.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/467-033331c0f11283c14129.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/4a3ea9cd-3a74e7e4e4f286e595fd.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/635-fe46feb42c2ffd66d463.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/669-be66c9e05781eab6a73a.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/675-ebae750f655bf375ac22.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/687-1ade6f68bb598d5422d6.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/75fc9c18-84e7ab66c7989b7a8b6f.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/786-de711694f67ba0fbf2b6.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/955-4cf60ba3345b3d3b8ee0.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/framework-2d063fda6adfff22af1e.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/main-dee65292c204a54cb5a8.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/_app-ef911acca28fa2030068.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/_error-9197505bf5c19ed2c4b5.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/blog-955f7d94103045548a25.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-5cca29fcaf79d33373fe.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/database-bbc8b189d6ad7928717b.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/free-games-a3fb59c198c26b90245b.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/homev2-3c12dfd6e4e3c8e3b00e.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/index-a9c30945daf2d76b20a7.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/login-1a813ceaa0e6f0515158.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/login/callback-aa252fb5583dbd68a74f.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-1b26a8fc99a96eae078b.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/r/%5Bid%5D-48bca31ad299ac795a7d.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/search-e79e9986d086ec8ca3f7.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/showcase-sale-2021-e6411a419f527d10db1e.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/pages/trending-7f2d718cde7298a76ff8.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/chunks/webpack-6d72c6ed51d58793f029.js",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/_next/static/css/d03a100e3f41984b18c9.css",revision:"S1rORLrh_BEZqG0FpbpoB"},{url:"/android-icon-144x144.png",revision:"e4dc585ad662380c7147e94e38f6b4cf"},{url:"/android-icon-192x192.png",revision:"283bf0480bde03869d8919f3849f547e"},{url:"/android-icon-36x36.png",revision:"fccc1ec0bfa4957cc47b2fc8d4f6e388"},{url:"/android-icon-48x48.png",revision:"7af033b60331e247ec7283959cadb3d8"},{url:"/android-icon-72x72.png",revision:"f5cee4ed3022ae846b12f62bf2be5d57"},{url:"/android-icon-96x96.png",revision:"67e4944c1c4cd7463023507233717a9e"},{url:"/apple-icon-114x114.png",revision:"6095f671629b7e33988bddda19519986"},{url:"/apple-icon-120x120.png",revision:"eafa8f0092316a9200f5a8a344f7a1f0"},{url:"/apple-icon-144x144.png",revision:"e4dc585ad662380c7147e94e38f6b4cf"},{url:"/apple-icon-152x152.png",revision:"8ef246d34e457dfcc0ec8536275f5087"},{url:"/apple-icon-180x180.png",revision:"c283c4d0a5cfab82f561bc1c41175228"},{url:"/apple-icon-57x57.png",revision:"4d4ef58b384544c928a8074d97d269ca"},{url:"/apple-icon-60x60.png",revision:"c3fc628a855fce5bb3a03e5c9d11cef1"},{url:"/apple-icon-72x72.png",revision:"f5cee4ed3022ae846b12f62bf2be5d57"},{url:"/apple-icon-76x76.png",revision:"a7d5800d651f3e753a588301e74885a0"},{url:"/apple-icon-precomposed.png",revision:"cfdaf2fb62e69f40027adc5c14afcee4"},{url:"/apple-icon.png",revision:"cfdaf2fb62e69f40027adc5c14afcee4"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/egs_logo.png",revision:"63f72a57ba43e32041bb51fbf4ecaa93"},{url:"/favicon.ico",revision:"e8c1ee99545619fbe6bc165b3c4a54b4"},{url:"/firebase-messaging-sw.js",revision:"d67564af5c65988e32222fbe16f609b3"},{url:"/fonts/inter-v2-latin-100.eot",revision:"a8640929da0daa65c8922dec86bab560"},{url:"/fonts/inter-v2-latin-100.svg",revision:"3563f0ddb5055b87fcb553f688c047b8"},{url:"/fonts/inter-v2-latin-100.ttf",revision:"e4dab234e63793ad48c11ce3983278c2"},{url:"/fonts/inter-v2-latin-100.woff",revision:"7cd5ab5f4d9a41f59c34a4449936c8a3"},{url:"/fonts/inter-v2-latin-100.woff2",revision:"854e21985f8f3ac5347cd6b5703bd5cc"},{url:"/fonts/inter-v2-latin-200.eot",revision:"5561ab4f2d20570f775906924bdac33d"},{url:"/fonts/inter-v2-latin-200.svg",revision:"72804a48aaea464dc5c5476fc9c5a0d3"},{url:"/fonts/inter-v2-latin-200.ttf",revision:"e79718feb3fda78361b4217bb503e1f6"},{url:"/fonts/inter-v2-latin-200.woff",revision:"9a8c9e04f07848cbcc91831851df2001"},{url:"/fonts/inter-v2-latin-200.woff2",revision:"2283a7f9a19a88a65cedff89d15f708b"},{url:"/fonts/inter-v2-latin-300.eot",revision:"a0d233ec3ca552bfd892d8074f343fb7"},{url:"/fonts/inter-v2-latin-300.svg",revision:"a06bd5009f4f3b8e9af43f73d50a20ab"},{url:"/fonts/inter-v2-latin-300.ttf",revision:"52d35be4ca6bdc754069a1051d4c163d"},{url:"/fonts/inter-v2-latin-300.woff",revision:"34ee73eae7f6fa2331136d0f9782f454"},{url:"/fonts/inter-v2-latin-300.woff2",revision:"4f1777b70133ddc6ca8b6fb3266f6a22"},{url:"/fonts/inter-v2-latin-500.eot",revision:"647f7a5eabc94f93022fe7db3e6ce7e7"},{url:"/fonts/inter-v2-latin-500.svg",revision:"92352352b3671dc16aeb3d0dc3f4943b"},{url:"/fonts/inter-v2-latin-500.ttf",revision:"10f1a5a4f55e9333f32b59b86d9b1c1e"},{url:"/fonts/inter-v2-latin-500.woff",revision:"6e76a4cee4838c4ffac07e8b2be5f187"},{url:"/fonts/inter-v2-latin-500.woff2",revision:"eb89003999cea37e721a490d2d056e8d"},{url:"/fonts/inter-v2-latin-600.eot",revision:"1f0c8441ea7893b70d80f7459398c689"},{url:"/fonts/inter-v2-latin-600.svg",revision:"cba71e507767a889ac67a6a009178c08"},{url:"/fonts/inter-v2-latin-600.ttf",revision:"0d7227eb5e7ad1bfb5ebedeb99690bc3"},{url:"/fonts/inter-v2-latin-600.woff",revision:"4059e93e46bbb24b5cb6ffd1d0dc7ae2"},{url:"/fonts/inter-v2-latin-600.woff2",revision:"43a1f1adcd9f2a20cf7a0f00ca0d2caf"},{url:"/fonts/inter-v2-latin-700.eot",revision:"941d0fed493b47a64f60453afe5c04d9"},{url:"/fonts/inter-v2-latin-700.svg",revision:"81890f676e92da54410ad007e3bd30cb"},{url:"/fonts/inter-v2-latin-700.ttf",revision:"71fa8c93a7204a5edbb5a607021bb02b"},{url:"/fonts/inter-v2-latin-700.woff",revision:"2ea3c06a57b0de51ea36cd45da121eaa"},{url:"/fonts/inter-v2-latin-700.woff2",revision:"334d1833a21eac00610249bcafff9c3b"},{url:"/fonts/inter-v2-latin-800.eot",revision:"66c255168372693a5273a1862f50274f"},{url:"/fonts/inter-v2-latin-800.svg",revision:"b8debe4e22a1fda4a7b6973f8de81236"},{url:"/fonts/inter-v2-latin-800.ttf",revision:"8c58b8240cc51378b4fb3d4e87cab7bc"},{url:"/fonts/inter-v2-latin-800.woff",revision:"11acf20988fd8fb6d06ac5be0ed9dd76"},{url:"/fonts/inter-v2-latin-800.woff2",revision:"299c8ff514e2c5c46cda1a0cd0905176"},{url:"/fonts/inter-v2-latin-900.eot",revision:"47de0082be8bc8412edd673073e32ad6"},{url:"/fonts/inter-v2-latin-900.svg",revision:"1b0151b418fb3f4c6769392e2e3d9ec3"},{url:"/fonts/inter-v2-latin-900.ttf",revision:"af17ad52d724f05897fbd7edcf8405aa"},{url:"/fonts/inter-v2-latin-900.woff",revision:"76ab0ada7a6529d158bd98a08121068b"},{url:"/fonts/inter-v2-latin-900.woff2",revision:"01e9bd16b2374667a28bf9a93cc25970"},{url:"/fonts/inter-v2-latin-regular.eot",revision:"4726ad0681a80af60b88ac945195d8aa"},{url:"/fonts/inter-v2-latin-regular.svg",revision:"ffdfa5d7e863217865e5cc41ef24d504"},{url:"/fonts/inter-v2-latin-regular.ttf",revision:"88ba57d18754c5ea226e78bdbc1895c7"},{url:"/fonts/inter-v2-latin-regular.woff",revision:"41e86578ed11f2de28bc5e90b5b322f2"},{url:"/fonts/inter-v2-latin-regular.woff2",revision:"ae3bdea1a1337e878e00c40d5be1e8a4"},{url:"/icons/favicon-16x16.png",revision:"9eb11583887580278df4587c52afa012"},{url:"/icons/favicon-32x32.png",revision:"578dc06c5f1868e1c06b3f3d73c43264"},{url:"/icons/favicon-96x96.png",revision:"67e4944c1c4cd7463023507233717a9e"},{url:"/img/Epic-Games-White-Solid.png",revision:"926e9c154782dc2aaa48d7d50afbab74"},{url:"/img/egs-placeholder.png",revision:"6e2ee784817faf46b24dac4fde939216"},{url:"/img/logo-inverted.svg",revision:"696fed5c76d85540b1cfb1cb97268d74"},{url:"/img/new_logo.png",revision:"e4246558461d9eaaf23d2451e06c0e13"},{url:"/instantsearch.css",revision:"4dc14ecd723190eebcbcebc22a332c50"},{url:"/logo.png",revision:"df94b770fcf6328258d305a4e82affcb"},{url:"/manifest.json",revision:"55ea0c0ad68f1845c66ce73650708d11"},{url:"/ms-icon-144x144.png",revision:"e4dc585ad662380c7147e94e38f6b4cf"},{url:"/ms-icon-150x150.png",revision:"80bf46c3aa55d0ff96168c512e073ff5"},{url:"/ms-icon-310x310.png",revision:"fd976649bd02558902a9d9909848938b"},{url:"/ms-icon-70x70.png",revision:"a3a30c8e8abdd20bb09b9c4230279822"},{url:"/service-worker.js",revision:"cbb0f7b926f3015fd557126dd0f26a44"},{url:"/sitemap.xml",revision:"0f8db98ced8c6d7555bd4ff0c6e0592e"},{url:"/transparent.png",revision:"468102ce24f8e8b3d1e335f9d3b0cb0d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
