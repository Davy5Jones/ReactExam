import axios from "axios";

import notify from "./NotificationService";
const interceptorAxios = axios.create();

interceptorAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    notify.error(error);
  }
);

export default interceptorAxios;
