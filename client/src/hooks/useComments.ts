import { createComment, getComments } from '@/apis/comment';
import { CommentType, CreateCommentType } from '@/types/apis/comment';
import { useState } from 'react';

export function useComments(preComments?: CommentType[]) {
  const [comments, setComments] = useState(preComments);

  const onGetComments = async (postId: number) => {
    const response = await getComments(postId);
    setComments(response.data);
  };

  const onCreateComment = async (e: React.FormEvent, postId: number, data: CreateCommentType) => {
    e.preventDefault();
    await createComment(postId, data);
    onGetComments(postId);
  };

  return { comments, onCreateComment };
}
