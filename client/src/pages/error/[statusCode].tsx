import Main from '@/components/common/Main';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Error() {
  const router = useRouter();
  const statusCode = Number(router.query.statusCode);

  return (
    <>
      <Head>
        <title>오류</title>
      </Head>
      <Main>
        <ErrorBoundary statusCode={statusCode} />
      </Main>
    </>
  );
}
