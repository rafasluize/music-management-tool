import axios from 'axios';
import { defaultServiceConfig } from './serviceConfigs';

const apiService = axios.create({
  baseURL: 'http://localhost',
  ...defaultServiceConfig,
});

export default apiService;
