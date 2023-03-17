import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledPostItem = styled.div`
  border-bottom: 1px solid ${palette.gray[200]};
  padding: 20px 0;
  height: 140px;

  .post-header {
    display: flex;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .post-title {
    max-width: 60%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .post-content {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .post-date {
    font-size: 14px;
    color: ${palette.teal[300]};
  }

  .post-comment {
    font-size: 14px;
    color: ${palette.teal[300]};
  }
`;

export const StyledPostList = styled.article``;
