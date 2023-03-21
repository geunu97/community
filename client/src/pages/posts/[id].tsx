import { getComments } from '@/apis/comment';
import { getPost } from '@/apis/post';
import CommentList from '@/components/comment/CommentList';
import Main from '@/components/common/Main';
import PostDetail from '@/components/post/PostDetail';
import { CommentType } from '@/types/apis/comment';
import { PostType } from '@/types/apis/post';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface PostPropsType {
  prePost?: PostType;
  preComments?: CommentType[];
}

export default function Post({ prePost, preComments }: PostPropsType) {
  return (
    <>
      <Head>
        <title>게시글</title>
      </Head>
      <Main width="80%" mobileWidth="95%">
        <PostDetail prePost={prePost} />
        <CommentList preComments={preComments} />
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  const prePost = await getPost(Number(query.id));
  const preComments = await getComments(Number(query.id));

  if (prePost.isError || preComments.isError) {
    return {
      redirect: {
        destination: `/error/${res.statusCode}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      prePost: prePost.data,
      preComments: preComments.data,
    },
  };
};
