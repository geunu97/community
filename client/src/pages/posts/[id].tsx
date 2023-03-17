import { getPost } from '@/apis/post';
import PostViewer from '@/components/PostViewer';
import { PostType } from '@/types/apis/post';
import Head from 'next/head';

interface PostPropsType {
  post: PostType;
}

export default function Post({ post }: PostPropsType) {
  return (
    <>
      <Head>
        <title>게시글</title>
      </Head>
      <main>
        <PostViewer post={post} />
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: number } }) {
  const post = await getPost(context.query.id);

  return {
    props: {
      post: post.data,
      isApiFetcherError: post.isError,
    },
  };
}
