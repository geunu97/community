import { ApiFetcherReturnType } from '@/types/apis/common/apiFetcherType';
import { axiosClient } from './axiosClient';

export async function apiFetcher<T, U>(
  method: string,
  url: string,
  data?: U
): Promise<ApiFetcherReturnType<T>> {
  try {
    const response = await axiosClient({ method, url, data });
    return { isSuccess: true, isError: false, data: response.data };
  } catch (error) {
    return { isSuccess: false, isError: true };
  }
}
