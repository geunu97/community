import ApiErrorBoundary from '@/components/ApiErrorBoundary';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.apiFetcher?.isError) {
    return <ApiErrorBoundary />;
  }

  return <Component {...pageProps} />;
}
