import Button from '@/components/common/Button';
import { palette } from '@/styles/constant/palette';
import getErrorMessage from '@/utils/getErrorMessage';
import { useRouter } from 'next/router';
import { StyledErrorBoundary } from './styles';

interface ErrorBoundaryPropsType {
  statusCode: number;
}

export default function ErrorBoundary({ statusCode }: ErrorBoundaryPropsType) {
  const router = useRouter();
  const errorMessage = getErrorMessage(statusCode);

  return (
    <StyledErrorBoundary>
      <p className="apiErrorBoundary-content">{errorMessage}</p>
      <Button
        onClick={() => router.push('/')}
        scale="small"
        layout="background"
        color={palette.teal[300]}
      >
        홈으로 가기
      </Button>
      <Button
        onClick={() => router.back()}
        scale="small"
        layout="background"
        color={palette.teal[300]}
      >
        돌아가기
      </Button>
    </StyledErrorBoundary>
  );
}
