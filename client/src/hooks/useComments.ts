import { createComment, getComments } from '@/apis/comment';
import { CommentType, CreateCommentType } from '@/types/apis/comment';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useComments(preComments?: CommentType[]) {
  const router = useRouter();
  const [comments, setComments] = useState(preComments);

  const onGetComments = async (postId: number) => {
    const response = await getComments(postId);
    response.isError ? router.push(`/error/${response.statusCode}`) : setComments(response.data);
  };

  const onCreateComment = async (e: React.FormEvent, postId: number, data: CreateCommentType) => {
    e.preventDefault();
    const response = await createComment(postId, data);
    response.isError ? router.push(`/error/${response.statusCode}`) : onGetComments(postId);
  };

  return { comments, onCreateComment };
}
