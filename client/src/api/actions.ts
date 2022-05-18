import axios from 'axios';
import axiosRetry from 'axios-retry';
import { HTTPResponse } from './types';

axiosRetry(axios, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

export const get = (url: string, params?: Object): Promise<HTTPResponse> => {
  return axios.get(url, {
    params
  });
}

export const post = (url: string, data?: Object): Promise<HTTPResponse> => {
  return axios.post(url, data)
}