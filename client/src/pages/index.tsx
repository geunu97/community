import getComments from '@/apis/comment';
import PostListContainer from '@/components/PostListContainer';
import { PostWithCommentsType } from '@/types/apis/post';
import Head from 'next/head';
import getPosts from '../apis/post';

interface HomePropsType {
  posts?: PostWithCommentsType[];
}

export default function Home({ posts }: HomePropsType) {
  return (
    <>
      <Head>
        <title>익명게시판</title>
      </Head>
      <main>
        <PostListContainer posts={posts} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  let isCommentError = false;

  const postsWithComments = await Promise.all(
    posts.data?.map(async (post) => {
      const comments = await getComments(post.id);

      if (comments.isError) {
        isCommentError = true;
      }

      return {
        ...post,
        comments: comments.data,
      };
    }) || []
  );

  return {
    props: {
      posts: postsWithComments,
      isApiFetcherError: posts.isError || isCommentError,
    },
  };
}
