import CommentForm from '@/components/comment/CommentForm';
import Button from '@/components/common/Button';
import ListRenderer from '@/components/common/ListRenderer';
import { palette } from '@/styles/constant/palette';
import { CommentType, CreateCommentType } from '@/types/apis/comment';
import { FormEvent, useState } from 'react';
import { StyledCommentItem } from './styles';

interface CommentItemPropsType {
  item?: CommentType;
  comments?: CommentType[];
  onCreateComment: (
    e: FormEvent<Element>,
    postId: number,
    data: CreateCommentType
  ) => Promise<void>;
}

export default function CommentItem({ item, comments, onCreateComment }: CommentItemPropsType) {
  const [isOpenedCommentReply, setIsOpenedCommentReply] = useState(false);
  const commentReply = comments?.filter((comment) => comment.parent === item?.id);

  if (!item) {
    return <>데이터가 없습니다.</>;
  }

  return (
    <StyledCommentItem>
      <div className="comment-header">
        <p className="comment-writer">{item.writer}</p>
        <p className="comment-date">
          {item.created_at.slice(0, 10)} {item.created_at.slice(11, 16)}
        </p>
      </div>
      <p className="comment-content">{item.content}</p>
      <div className="comment-footer">
        {!item.parent && (
          <Button
            scale="small"
            layout="text"
            color={palette.gray[300]}
            onClick={() => setIsOpenedCommentReply(!isOpenedCommentReply)}
          >
            {isOpenedCommentReply
              ? '답글 숨기기'
              : `${
                  comments?.filter((newComment) => newComment.parent === item.id).length
                }개의 답글`}
          </Button>
        )}
        <Button scale="small" layout="text" color={palette.gray[300]}>
          수정
        </Button>
        <Button scale="small" layout="text" color={palette.gray[300]}>
          삭제
        </Button>
      </div>
      <div className="comment-reply">
        {isOpenedCommentReply && (
          <>
            <ListRenderer items={commentReply}>
              <CommentItem onCreateComment={onCreateComment} />
            </ListRenderer>
            <CommentForm parent={item.id} onCreateComment={onCreateComment} />
          </>
        )}
      </div>
    </StyledCommentItem>
  );
}
