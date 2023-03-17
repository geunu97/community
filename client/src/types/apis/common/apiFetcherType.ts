export interface ApiFetcherReturnType<T> {
  data: T | null;
  isSuccess: boolean;
  isError: boolean;
}
