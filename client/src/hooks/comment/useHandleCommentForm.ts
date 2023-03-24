import { CreateCommentType } from '@/types/apis/comment';
import { validator } from '@/utils/validator';
import { ChangeEvent, FormEvent, useState } from 'react';

export function useHandleCommentForm(postId: number, parent?: number) {
  const [commentForm, setCommentForm] = useState<CreateCommentType>({
    writer: '',
    password: '',
    content: '',
    postId,
    parent,
  });

  const onSetCommentForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  const onValidateForm = () => {
    const { writer, content, password } = commentForm;
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

  const onSubmitForm = (
    e: FormEvent<HTMLFormElement>,
    onCreateComment: (postId: number, data: CreateCommentType) => Promise<void>
  ) => {
    e.preventDefault();
    if (onValidateForm()) {
      onCreateComment(postId, commentForm);
    }
  };

  return { commentForm, onSetCommentForm, onSubmitForm };
}
