// // https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
// nuxt.config.ts
const config = {
  // Your configuration options...
  target: 'static',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  router: {
    // Set the router mode to 'hash' or 'history'
    mode: 'hash',
  },
  routes: [
    { path: '/pages/:id', component: '@/pages/_updatedata.vue' },
  ],
};

export default config;


// import { defineNuxtConfig } from '@nuxt/kit';
// export default defineNuxtConfig({
//     //ssr:true,
//     target:"static",
//     modules: [
//         '@nuxtjs/tailwindcss',
//       ],
//       routes: [
//         // ...
//         { path: '/pages/:id', name: 'pages-updateData', component: '@/pages/updateData.vue' },
//       ],
// })
