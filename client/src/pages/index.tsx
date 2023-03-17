import Head from 'next/head';
import getPosts from '../apis/post';

export default function Home({ apiFetcher }) {
  return (
    <>
      <Head>
        <title>익명게시판</title>
      </Head>
      <main>...</main>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: { apiFetcher: posts } };
}
