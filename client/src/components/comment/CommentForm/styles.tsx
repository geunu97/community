import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledCommentForm = styled.form`
  margin-top: 20px;

  textarea {
    border: 1px solid ${palette.gray[200]};
    font-size: ${fontSize.micro};
    outline: none;
    border-radius: 3px;
    padding: 12px 10px;
  }

  .commentForm-header > .commentForm-name {
    margin-right: 1%;
  }

  .commentForm-body {
    height: 180px;
    margin-top: 10px;

    .commentForm-content {
      width: 100%;
      height: 170px;
    }
  }

  .commentForm-footer {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }
`;
