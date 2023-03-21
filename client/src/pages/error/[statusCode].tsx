import Main from '@/components/common/Main';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import { errorMessage } from '@/constant/errorMessage';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface ErrorPropsType {
  statusCode: string;
}

export default function Error({ statusCode }: ErrorPropsType) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(errorMessage).map((statusCode) => ({
    params: { statusCode },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const statusCode = params?.statusCode;
  return { props: { statusCode } };
};
