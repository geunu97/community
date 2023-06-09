import { createComment, deleteComment, getComments } from '@/apis/comment';
import { CommentType, CreateCommentType, DeleteCommentType } from '@/types/apis/comment';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useHandleComment(preComments?: CommentType[]) {
  const router = useRouter();
  const [comments, setComments] = useState(preComments);

  const onGetComments = async (postId: number) => {
    const response = await getComments(postId);
    response.isError ? router.push(`/error/${response.statusCode}`) : setComments(response.data);
  };

  const onCreateComment = async (postId: number, data: CreateCommentType) => {
    const response = await createComment(postId, data);
    response.isError ? router.push(`/error/${response.statusCode}`) : onGetComments(postId);
  };

  return { comments, onCreateComment };
}
