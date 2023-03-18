import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledCommentForm = styled.form`
  input,
  textarea {
    border: 1px solid ${palette.gray[200]};
    border-radius: 3px;
    font-size: 14px;
    padding: 10px;
    outline: none;
  }

  .comment-header {
    margin-top: 20px;

    .comment-name {
      width: 170px;
      height: 40px;
      margin-right: 10px;
    }

    .comment-password {
      width: 170px;
      height: 40px;
    }
  }

  .comment-body {
    height: 180px;
    margin-top: 10px;

    .comment-content {
      width: 100%;
      height: 170px;
    }
  }

  .comment-footer {
    display: flex;
    justify-content: end;
    margin-top: 10px;

    .comment-submit {
      width: 80px;
      height: 40px;
      border: none;
      background-color: ${palette.teal[300]};
      color: white;
      border-radius: 3px;
      cursor: pointer;
      font-size: 14px;
    }
  }
`;
