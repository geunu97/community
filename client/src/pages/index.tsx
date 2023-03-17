import PostListContainer from '@/components/PostListContainer';
import { ApiFetcherReturnType } from '@/types/apis/common/apiFetcherType';
import { PostType } from '@/types/apis/post';
import Head from 'next/head';
import getPosts from '../apis/post';

interface HomePropsType {
  apiFetcher: ApiFetcherReturnType<PostType[]>;
}

export default function Home({ apiFetcher }: HomePropsType) {
  return (
    <>
      <Head>
        <title>익명게시판</title>
      </Head>
      <main>
        <PostListContainer posts={apiFetcher.data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: { apiFetcher: posts } };
}
