import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledPostListContainer = styled.article`
  width: 75%;
  margin: 0 auto;

  .main-title {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${palette.teal[300]};
    margin-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid ${palette.gray[200]};
  }
`;
