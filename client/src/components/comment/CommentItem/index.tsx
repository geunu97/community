import CommentForm from '@/components/comment/CommentForm';
import ListRenderer from '@/components/common/ListRenderer';
import { CommentType, CreateCommentType } from '@/types/apis/comment';
import { useState } from 'react';
import { StyledCommentItem } from './styles';
import { Button } from '@/stories/atoms/Button/Button';

interface CommentItemPropsType {
  item?: CommentType;
  comments?: CommentType[];
  onCreateComment: (postId: number, data: CreateCommentType) => Promise<void>;
}

export default function CommentItem({ item, comments, onCreateComment }: CommentItemPropsType) {
  const [isOpenedCommentReply, setIsOpenedCommentReply] = useState(false);
  const commentReply = comments?.filter((comment) => comment.parent === item?.id);

  return (
    <StyledCommentItem>
      <div className="commentItem-header">
        <p className="commentItem-writer">{item?.writer}</p>
        <p className="commentItem-date">
          {item?.created_at.slice(0, 10)} {item?.created_at.slice(11, 16)}
        </p>
      </div>
      <p className="commentItem-content">{item?.content}</p>
      <div className="commentItem-footer">
        {!item?.parent && (
          <Button
            style="ghost"
            color="secondary"
            size="medium"
            onClick={() => setIsOpenedCommentReply(!isOpenedCommentReply)}
            label={
              isOpenedCommentReply
                ? '답글 숨기기'
                : `${
                    comments?.filter((newComment) => newComment.parent === item?.id).length
                  }개의 답글`
            }
          />
        )}
        <Button style="ghost" color="secondary" label="수정" size="medium" />
        <Button style="ghost" color="secondary" label="삭제" size="medium" />
      </div>
      <div className="commentItem-reply">
        {isOpenedCommentReply && (
          <>
            <ListRenderer title="답글" items={commentReply}>
              <CommentItem onCreateComment={onCreateComment} />
            </ListRenderer>
            <CommentForm parent={item?.id} onCreateComment={onCreateComment} />
          </>
        )}
      </div>
    </StyledCommentItem>
  );
}
