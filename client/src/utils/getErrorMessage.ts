export default function getErrorMessage(statusCode: number) {
  if (500 <= statusCode) {
    return '서버오류가 발생했습니다.';
  }

  if (404 === statusCode) {
    return '알 수 없는 경로에 접근하였습니다.';
  }

  if (400 <= statusCode) {
    return '클라이언트 오류가 발생했습니다.';
  }

  return '알 수 없는 오류가 발생했습니다.';
}
