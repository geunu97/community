import { getComments } from '@/apis/comment';
import { getPosts } from '@/apis/post';

export default async function getPostsWithCommentsLength() {
  const posts = await getPosts();
  let isCommentError = false;

  const postsWithCommentsLength = await Promise.all(
    posts.data?.map(async (post) => {
      const comments = await getComments(post.id);
      const commentsLength = comments.data?.filter((comment) => !comment.parent).length;

      if (comments.isError) {
        isCommentError = true;
      }

      return { ...post, commentsLength };
    }) || []
  );

  return { postsWithCommentsLength, isApiError: posts.isError || isCommentError };
}
