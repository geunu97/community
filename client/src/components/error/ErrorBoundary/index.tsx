import { errorMessage } from '@/constant/errorMessage';
import { palette } from '@/styles/constant/palette';
import { useRouter } from 'next/router';
import { StyledErrorBoundary } from './styles';
import { Button } from '@/stories/atoms/Button/Button';

interface ErrorBoundaryPropsType {
  statusCode: string;
}

export default function ErrorBoundary({ statusCode }: ErrorBoundaryPropsType) {
  const router = useRouter();

  return (
    <StyledErrorBoundary>
      <p className="apiErrorBoundary-content">{errorMessage[statusCode]}</p>
      <Button onClick={() => router.push('/')} label="홈으로 가기" size="medium" />
      <Button onClick={() => router.back()} label="돌아가기" size="medium" />
    </StyledErrorBoundary>
  );
}
