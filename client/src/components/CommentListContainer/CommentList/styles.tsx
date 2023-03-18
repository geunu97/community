import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledCommentItem = styled.article`
  border-bottom: 1px solid ${palette.gray[200]};
  padding: 20px 0;

  .comment-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .comment-writer {
      font-size: 14px;
      margin-right: 10px;
      font-weight: 600;
    }

    .comment-date {
      font-size: 14px;
      color: ${palette.gray[300]};
    }
  }

  .comment-content {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .comment-footer {
    display: flex;

    button {
      border: none;
      margin-right: 5px;
      background-color: white;
      cursor: pointer;
      font-size: 12px;
      color: ${palette.gray[300]};
    }
  }

  .comment-reply {
    width: 90%;
    margin: 0 auto;
  }
`;

export const StyledCommentList = styled.article``;
