import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL || "http://localhost:8080";

const axiosConfig = () => ({
  baseURL: `${serverURL}/api/v1`,
});

axios.defaults.baseURL = `${serverURL}/api/v1`;

export const ihomeApi = axios.create(axiosConfig());
