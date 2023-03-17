export interface ApiFetcherReturnType<T> {
  data?: T;
  isSuccess: boolean;
  isError: boolean;
}
