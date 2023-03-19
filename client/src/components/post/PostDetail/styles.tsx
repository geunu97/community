import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledPostDetail = styled.article`
  width: 80%;
  margin: 50px auto 30px;

  .post-title {
    font-size: ${fontSize.medium};
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
  }

  .post-info {
    color: ${palette.teal[200]};
    font-size: ${fontSize.micro};
    text-align: center;
    margin-bottom: 45px;
  }

  .post-content {
    border-top: 1px solid ${palette.gray[200]};
    border-bottom: 1px solid ${palette.gray[200]};
    font-size: ${fontSize.small};
    padding: 45px 0;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;
