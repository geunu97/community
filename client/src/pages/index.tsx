import Main from '@/components/common/Main';
import PostList from '@/components/post/PostList';
import { PostWithCommentsLengthType } from '@/types/apis/post';
import getPostsWithCommentsLength from '@/utils/getPostsWithCommentsLength';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface HomePropsType {
  posts?: PostWithCommentsLengthType[];
}

export default function Home({ posts }: HomePropsType) {
  return (
    <>
      <Head>
        <title>익명게시판</title>
      </Head>
      <Main width="75%" mobileWidth="95%">
        <PostList posts={posts} />
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { postsWithCommentsLength, isApiError } = await getPostsWithCommentsLength();

  if (isApiError) {
    return {
      redirect: {
        destination: `/error/${res.statusCode}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: postsWithCommentsLength,
    },
  };
};
