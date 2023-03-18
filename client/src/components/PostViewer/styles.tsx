import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledPostViewer = styled.article`
  width: 80%;
  margin: 50px auto 30px;

  .post-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
  }

  .post-info {
    font-size: 13px;
    text-align: center;
    color: ${palette.teal[200]};
    margin-bottom: 45px;
  }

  .post-content {
    border-top: 1px solid ${palette.gray[200]};
    border-bottom: 1px solid ${palette.gray[200]};
    font-size: 16px;
    padding: 45px 0;
  }
`;
