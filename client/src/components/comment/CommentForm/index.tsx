import { palette } from '@/styles/constant/palette';
import { CreateCommentType } from '@/types/apis/comment';
import { validator } from '@/utils/validator';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { StyledCommentForm } from './styles';

interface CommentFormPropsType {
  parent?: number;
  onCreateComment: (postId: number, data: CreateCommentType) => Promise<void>;
}

export default function CommentForm({ parent, onCreateComment }: CommentFormPropsType) {
  const router = useRouter();
  const postId = Number(router.query.id);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const validateForm = () => {
    if (!validator.korean(writer) || !validator.length(writer, 10)) {
      alert('작성자는 한글 10자 이하여야 합니다.');
    } else if (!validator.korean(content) || !validator.length(content, 500)) {
      alert('내용은 한글 500자 이하여야 합니다.');
    } else if (!validator.password(password) || !validator.length(password, 16)) {
      alert('비밀번호는 영문+숫자+특수기호 16자 이하여야 합니다.');
    } else {
      return true;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onCreateComment(postId, { writer, password, content, postId, parent });
    }
  };

  return (
    <StyledCommentForm onSubmit={handleSubmit}>
      <div className="commentForm-header">
        <Input
          className="commentForm-name"
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
      <div className="commentForm-body">
        <textarea
          className="commentForm-content"
          placeholder="댓글을 남겨주세요. (최대 500자까지 입력할 수 있습니다.)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
