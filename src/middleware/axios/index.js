import axios from 'axios';
import store from '@src/store';

axios.interceptors.request.use(function(config) {

  if(store.getState().tiles.id !== null)
    config.headers.Auth = store.getState().tiles.id;
  return config;
})

// const handleHeaders = function(headers) {
//   if(headers['access-token'] !== undefined && headers['access-token'] !== "null") {
//     tokenUpdate(JSON.parse(headers['access-token']));
//   } else {
//     if(headers['access-token'] !== undefined) {
//       tokenRemove();
//     }
//   }
// }

axios.interceptors.response.use((res) => {
  // console.log(res);
  // handleHeaders(res.headers);
  // apiAlert(res);
  return res;
}, (err) => {
  // console.log(err);
  // console.log(err.response);
  // handleHeaders(err.response.headers);
  // apiAlert(err.response);
  // apiError(err);
  // return Promise.reject(err);
})

export default axios;
