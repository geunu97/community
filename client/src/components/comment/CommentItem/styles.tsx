import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledCommentItem = styled.div`
  border-bottom: 1px solid ${palette.gray[200]};
  font-size: ${fontSize.small};
  padding: 20px 0;

  .comment-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .comment-writer {
      margin-right: 10px;
      font-weight: 600;
    }

    .comment-date {
      color: ${palette.gray[300]};
    }
  }

  .comment-content {
    margin-bottom: 15px;
  }

  .comment-footer > button {
    margin-right: 8px;
  }

  .comment-reply {
    width: 90%;
    margin: 0 auto;
  }
`;
