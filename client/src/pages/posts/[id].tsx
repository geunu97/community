import { getComments } from '@/apis/comment';
import { getPost } from '@/apis/post';
import CommentList from '@/components/comment/CommentList';
import PostDetail from '@/components/post/PostDetail';
import { CommentType } from '@/types/apis/comment';
import { PostType } from '@/types/apis/post';
import Head from 'next/head';

interface PostPropsType {
  prePost: PostType;
  preComments: CommentType[];
}

export default function Post({ prePost, preComments }: PostPropsType) {
  return (
    <>
      <Head>
        <title>게시글</title>
      </Head>
      <main>
        <PostDetail prePost={prePost} />
        <CommentList preComments={preComments} />
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: number } }) {
  const prePost = await getPost(context.query.id);
  const preComments = await getComments(context.query.id);

  return {
    props: {
      prePost: prePost.data,
      preComments: preComments.data,
      isApiFetcherError: prePost.isError || preComments.isError,
    },
  };
}
