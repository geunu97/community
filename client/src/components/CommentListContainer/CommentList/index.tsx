import { CommentType } from '@/types/apis/comment';
import { useState } from 'react';
import { StyledCommentItem, StyledCommentList } from './styles';

interface CommentItemPropsType {
  comments?: CommentType[];
  comment: CommentType;
}

interface CommentListPropsType {
  comments?: CommentType[];
}

function CommentItem({ comments, comment }: CommentItemPropsType) {
  const [isOpenedCommentReply, setIsOpenedCommentReply] = useState(false);

  return (
    <StyledCommentItem>
      <div className="comment-header">
        <p className="comment-writer">{comment.writer}</p>
        <p className="comment-date">
          {comment.created_at.slice(0, 10)} {comment.created_at.slice(11, 16)}
        </p>
      </div>
      <p className="comment-content">{comment.content}</p>
      <div className="comment-footer">
        {!comment.parent && (
          <button onClick={() => setIsOpenedCommentReply(!isOpenedCommentReply)}>
            {isOpenedCommentReply
              ? '답글 숨기기'
              : `${
                  comments?.filter((newComment) => newComment.parent === comment.id).length
                }개의 답글`}
          </button>
        )}
        <button>수정</button>
        <button>삭제</button>
      </div>
      <div className="comment-reply">
        {isOpenedCommentReply &&
          comments?.map(
            (newComment) =>
              newComment.parent === comment.id && (
                <CommentItem comment={newComment} key={newComment.id} />
              )
          )}
      </div>
    </StyledCommentItem>
  );
}

export default function CommentList({ comments }: CommentListPropsType) {
  return (
    <StyledCommentList>
      {comments?.map(
        (comment) =>
          !comment.parent && <CommentItem comments={comments} comment={comment} key={comment.id} />
      )}
    </StyledCommentList>
  );
}
