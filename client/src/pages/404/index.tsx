import Main from '@/components/common/Main';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface NotFoundPropsType {
  errorCode: string;
}

export default function NotFound({ errorCode }: NotFoundPropsType) {
  return (
    <>
      <Head>
        <title>알 수 없는 경로</title>
      </Head>
      <Main>
        <ErrorBoundary statusCode={errorCode} />
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { errorCode: '404' } };
};
