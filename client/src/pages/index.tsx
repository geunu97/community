import { getComments } from '@/apis/comment';
import { getPosts } from '@/apis/post';
import PostListContainer from '@/components/PostListContainer';
import { PostWithCommentsLengthType } from '@/types/apis/post';
import Head from 'next/head';

interface HomePropsType {
  posts?: PostWithCommentsLengthType[];
}

export default function Home({ posts }: HomePropsType) {
  return (
    <>
      <Head>
        <title>게시판</title>
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

  const postsWithCommentsLength = await Promise.all(
    posts.data?.map(async (post) => {
      const comments = await getComments(post.id);

      if (comments.isError) {
        isCommentError = true;
      }

      return {
        ...post,
        commentsLength: comments.data?.filter((comment) => !comment.parent).length,
      };
    }) || []
  );

  return {
    props: {
      posts: postsWithCommentsLength,
      isApiFetcherError: posts.isError || isCommentError,
    },
  };
}
