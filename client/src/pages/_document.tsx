import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/message.svg" />
        <meta charSet="UTF-8" />
        <meta name="description" content="누구나 소통할 수 있는 익명게시판 입니다." />
        <meta name="keywords" content="익명, 게시판, 스마일 드래곤" />
        <meta name="author" content="박근우" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
