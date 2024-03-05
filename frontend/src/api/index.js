import axios from 'axios';

const serverURL = "http://localhost:8080";

const axiosConfig = () => ({
  baseURL: `${serverURL}/api/v1`,
});

axios.defaults.baseURL = `${serverURL}/api/v1`;

export const ihomeApi = axios.create(axiosConfig());
