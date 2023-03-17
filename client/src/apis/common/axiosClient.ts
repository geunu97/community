import axios from 'axios';

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

export default axiosClient;
