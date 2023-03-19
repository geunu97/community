import ApiErrorBoundary from '@/components/error/ApiErrorBoundary';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.isApiFetcherError) {
    return <ApiErrorBoundary />;
  }

  return <Component {...pageProps} />;
}
