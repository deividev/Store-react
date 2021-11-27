import axios from "axios-observable";
 
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
  timeout: 10000
});

	
// Incluimos un interceptor para las peticiones
// axios.interceptors.request.use(config => {
//         console.log(
//         "He lanzado una petición con la siguiente configuración: ",
//         config
//         );
        
//         return config;
//     }, error => {
//     return Promise.reject(error);
// });

//   // Incluimos un interceptor para las respuestas
// axios.interceptors.response.use(response => {
//         console.log(
//         "He lanzado una petición con la siguiente configuración: ",
//         response
//         );
    
//         const status = response.status;
//         if(status < 200 || status >= 300) {
//         return Promise.reject(`Response status: ${status}`);
//         } else {
//         return response;
//         }  
//     }, error => {
//         return Promise.reject(error);
// });