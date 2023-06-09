import axios from "axios";
export default defineNuxtPlugin((myNuxt) => {
    const defaultUrl = "http://localhost:3001";
    const api = axios.create({
      baseURL: defaultUrl,
      headers: {
      common: {},
            },
          });
          return {
                provide: {
                  axios: api,
            },
          };
            });


















// import axios from "axios";

// export defineNuxtPlugin((myNuxt) => {
//   const defaultUrl = "https://localhost:3000";

//   let api = axios.create({
//     baseUrl: defaultUrl,
//     headers: {
//       common: {},
//     },
//   });
// return {
//     provide: {
//       api: api,
//     },
//   };
// });