import getComments from '@/apis/comment';
import { getPost } from '@/apis/post';
import CommentListContainer from '@/components/CommentListContainer';
import PostViewer from '@/components/PostViewer';
import { CommentType } from '@/types/apis/comment';
import { PostType } from '@/types/apis/post';
import Head from 'next/head';

interface PostPropsType {
  post: PostType;
  comments: CommentType[];
}

export default function Post({ post, comments }: PostPropsType) {
  return (
    <>
      <Head>
        <title>게시글</title>
      </Head>
      <main>
        <PostViewer post={post} />
        <CommentListContainer comments={comments} />
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: number } }) {
  const post = await getPost(context.query.id);
  const comments = await getComments(context.query.id);

  return {
    props: {
      post: post.data,
      comments: comments.data,
      isApiFetcherError: post.isError || comments.isError,
    },
  };
}
