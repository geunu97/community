import Main from '@/components/common/Main';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>알 수 없는 경로</title>
      </Head>
      <Main>
        <ErrorBoundary statusCode={404} />
      </Main>
    </>
  );
}
