import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledCommentItem = styled.div`
  border-bottom: 1px solid ${palette.gray[200]};
  font-size: ${fontSize.small};
  padding: 20px 0;

  .commentItem-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .commentItem-writer {
      margin-right: 10px;
      font-weight: 600;
    }

    .commentItem-date {
      color: ${palette.gray[300]};
    }
  }

  .commentItem-content {
    margin-bottom: 15px;
  }

  .commentItem-footer > button {
    margin-right: 8px;
  }

  .commentItem-reply {
    width: 90%;
    margin: 0 auto;
  }
`;
