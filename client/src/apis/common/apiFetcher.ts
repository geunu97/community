import { ApiFetcherReturnType } from '@/types/apis/common/apiFetcherType';
import { axiosClient } from './axiosClient';

const apiReturnState = {
  data: null,
  isSuccess: false,
  isError: false,
};

export async function apiFetcher<T, U>(
  method: string,
  url: string,
  data?: U
): Promise<ApiFetcherReturnType<T>> {
  try {
    const response = await axiosClient({ method, url, data });
    return { ...apiReturnState, isSuccess: true, data: response.data };
  } catch (error) {
    return { ...apiReturnState, isError: true };
  }
}
