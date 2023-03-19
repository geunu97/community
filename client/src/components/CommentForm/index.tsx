import { palette } from '@/styles/constant/palette';
import { CreateCommentType } from '@/types/apis/comment';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { StyledCommentForm } from './styles';

interface CommentFormPropsType {
  parent?: number;
  onCreateComment: (
    e: FormEvent<Element>,
    postId: number,
    data: CreateCommentType
  ) => Promise<void>;
}

export default function CommentForm({ parent, onCreateComment }: CommentFormPropsType) {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();
  const postId = Number(router.query.id);

  return (
    <StyledCommentForm
      onSubmit={(e) => onCreateComment(e, postId, { writer, password, content, postId, parent })}
    >
      <div className="comment-header">
        <Input
          className="comment-name"
          type="text"
          placeholder="이름"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          scale="micro"
          width="49%"
          color={palette.gray[200]}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          scale="micro"
          width="49%"
          color={palette.gray[200]}
        />
      </div>
      <div className="comment-body">
        <textarea
          className="comment-content"
          placeholder="댓글을 남겨주세요. (최대 500자까지 입력할 수 있습니다.)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={500}
        />
      </div>
      <div className="comment-footer">
        <Button type="submit" scale="small" layout="background" color={palette.teal[300]}>
          작성하기
        </Button>
      </div>
    </StyledCommentForm>
  );
}
