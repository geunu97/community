import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledCommentForm = styled.form`
  input,
  textarea {
    border: 1px solid ${palette.gray[200]};
    font-size: ${fontSize.micro};
    outline: none;
    border-radius: 3px;
    padding: 10px;
  }

  .comment-header {
    margin-top: 20px;

    .comment-name {
      width: 49%;
      height: 40px;
      margin-right: 1%;
    }

    .comment-password {
      width: 49%;
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
      background-color: ${palette.teal[300]};
      font-size: ${fontSize.small};
      border: none;
      color: white;
      cursor: pointer;
      width: 15%;
      height: 40px;
      border-radius: 3px;
    }
  }
`;
