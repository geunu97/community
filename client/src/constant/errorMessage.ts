interface ErrorMessageType {
  [statusCode: string]: string;
}

export const errorMessage: ErrorMessageType = {
  400: '클라이언트 요청이 잘못되었습니다.',
  401: '인증되지 않은 요청입니다.',
  403: '요청이 서버에서 거부되었습니다.',
  404: '요청한 리소스가 서버에 존재하지 않습니다.',
  500: '서버에서 처리 중 오류가 발생했습니다.',
};
