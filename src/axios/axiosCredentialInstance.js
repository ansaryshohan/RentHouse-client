import axios from "axios";

const axiosCredentialInstance = axios.create({
  baseURL: `${import.meta.env.VITE_render_backend}`,
  withCredentials: true,
});

export default axiosCredentialInstance;