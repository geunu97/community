import { ApiFetcherReturnType } from '@/types/apis/common/apiFetcherType';
import { AxiosRequestConfig } from 'axios';
import { axiosClient } from './axiosClient';

async function defaultApiFetcher<T>(
  requestInfo: AxiosRequestConfig
): Promise<ApiFetcherReturnType<T>> {
  try {
    const response = await axiosClient(requestInfo);
    return { isError: false, data: response.data };
  } catch (error) {
    return { isError: true };
  }
}

export const apiFetcher = {
  get: <T>(url: string) => {
    return defaultApiFetcher<T>({ method: 'get', url });
  },
  post: <T, U>(url: string, data: U) => {
    return defaultApiFetcher<T>({ method: 'post', url, data });
  },
};
