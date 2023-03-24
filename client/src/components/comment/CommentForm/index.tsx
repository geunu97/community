import { useHandleCommentForm } from '@/hooks/comment/useHandleCommentForm';
import { palette } from '@/styles/constant/palette';
import { CreateCommentType } from '@/types/apis/comment';
import { useRouter } from 'next/router';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { StyledCommentForm } from './styles';

interface CommentFormPropsType {
  parent?: number;
  onCreateComment: (postId: number, data: CreateCommentType) => Promise<void>;
}

export default function CommentForm({ parent, onCreateComment }: CommentFormPropsType) {
  const router = useRouter();
  const { commentForm, onSetCommentForm, onSubmitForm } = useHandleCommentForm(
    Number(router.query.id),
    parent
  );

  return (
    <StyledCommentForm onSubmit={(e) => onSubmitForm(e, onCreateComment)}>
      <div className="commentForm-header">
        <Input
          className="commentForm-name"
          type="text"
          placeholder="이름"
          name="writer"
          value={commentForm.writer}
          onChange={onSetCommentForm}
          scale="micro"
          width="49%"
          color={palette.gray[200]}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={commentForm.password}
          onChange={onSetCommentForm}
          scale="micro"
          width="49%"
          color={palette.gray[200]}
        />
      </div>
      <div className="commentForm-body">
        <textarea
          className="commentForm-content"
          placeholder="댓글을 남겨주세요. (최대 500자까지 입력할 수 있습니다.)"
          name="content"
          value={commentForm.content}
          onChange={onSetCommentForm}
          maxLength={500}
        />
      </div>
      <div className="commentForm-footer">
        <Button type="submit" scale="small" layout="background" color={palette.teal[300]}>
          작성하기
        </Button>
      </div>
    </StyledCommentForm>
  );
}
