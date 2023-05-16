
<div align="center">

# 소개

사용자들이 자유롭게 정보를 공유하고 소통할 수 있는 온라인 게시판이며, 
<br> 사용자가 실명으로 가입하지 않고 익명으로 게시글을 작성할 수 있는 웹 서비스입니다.

</div>

## 목차

- [실행 방법](#실행-방법)
- [구현 요구 사항](#구현-요구-사항)
- [시연](#시연)
- [사용한 기술 스택](#사용한-기술-스택)
- [폴더 구조](#폴더-구조)
- [미해결 이슈 & 개선 가능 사항](#미해결-이슈--개선-가능-사항)
- [기술적인 고민들](#기술적인-고민들) 
- [리팩터링](#리팩터링) 
- [개선사항](#개선사항) 


## 실행 방법

#### 1. 깃 클론받기

```
git clone https://github.com/geunu97/community.git
```

#### 2. 환경 변수 설정하기

>  client 폴더의 최상위 경로에 `.env.local` 파일 생성 후 아래 코드 입력하기

```
NEXT_PUBLIC_API_BASEURL = http://localhost:3000
```

#### 3. 로컬 환경에서 서버 실행하기

```
cd server
node server.js
```

#### 4. 로컬 환경에서 클라이언트 실행하기

```
cd client
npm install
npm run dev
```

#### 5. 로컬 환경에서 확인하기

```
http://localhost:5500/
```


## 구현 요구 사항

#### 필수 항목
- [x] `게시판`에 작성된 `게시글`들을 전부 확인할 수 있는 페이지를 만들어 주세요.
    - [x] 작성된 `게시글`의 `내용` 앞부분 일부와 `댓글` 수를 확인할 수 있어야 합니다.
    - [x] 페이지에 표시되는 `게시글`을 누르면 해당 `게시글`을 상세히 확인할 수 있는 페이지로 이동합니다.
    - [x] 한번에 확인 가능한 `게시글` 개수는 10개입니다.
- [x] `게시판`에 작성된 한 `게시글`을 상세히 확인할 수 있는 페이지를 만들어 주세요.
    - [x] 해당 `게시글`의 `제목`, `내용`, `작성일자`는 항상 표시되어야 합니다.
    - [x] 해당 `게시글`에 대한 `댓글`을 작성할 수 있는 영역이 있어야 합니다.
    - [x] 해당 `게시글`에 작성된 `댓글`을 확인할 수 있어야 합니다.
- [x] 모든 페이지는 반응형 레이아웃이 적용되어야 합니다.
    - [x] 최소 대응 사이즈: `width: 360px`
    - [x] 최대 대응 사이즈: `width: 2560px`

#### 추가 항목

- [x] 구현된 작업물에 대한 설명을 담은 `README.md`를 작성해 주세요.
- [x] `게시판`에 작성된 `게시글`들을 페이지네이션 or 무한 스크롤을 통해 확인할 수 있게 해주세요.
- [ ] `게시판`에서 한번에 확인 가능한 `게시글` 개수를 조절할 수 있게 해주세요.
- [ ] `게시판`에 `게시글`을 작성할 수 있는 페이지를 만들어 주세요.
- [ ] `게시판`에 작성된 `게시글`을 수정, 삭제할 수 있게 해주세요.
- [ ] `댓글`을 수정, 삭제할 수 있게 해주세요.

#### 유효성 검사

- [x] 댓글
    - [x] `내용`은 한글 500자 이하의 문자열로 이루어져 있습니다.
    - [x] `작성자`는 한글 10자 이하의 문자열로 이루어져 있습니다.
    - [x] `비밀번호`는 영문+숫자+특수기호 16자 이하의 문자열로 이루어져 있습니다.
- [ ] 게시글
    - [ ] `제목`은 한글 40자 이하의 문자열로 이루어져 있습니다.
    - [ ] `내용`은 한글 2,000자 이하의 문자열로 이루어져 있습니다.
    - [ ] `작성자`는 한글 10자 이하의 문자열로 이루어져 있습니다.
    - [ ] `비밀번호`는 영문+숫자+특수기호 16자 이하의 문자열로 이루어져 있습니다.


## 시연

#### 게시글 영역

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226558470-234c2f87-3546-4f02-b8a4-061acc61ff1c.gif"/>

  - 게시글의 제목, 내용, 날짜, 댓글 수를 확인할 수 있습니다.
  - 페이지네이션 기능이 있습니다.
  - 게시글을 누르면 해당 게시글 상세 페이지로 이동합니다.

#### 게시글 상세 페이지

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226559550-72b38bb6-c61f-40d4-8370-1bd35b188aa7.gif"/>

- 게시글의 제목, 내용, 날짜를 확인할 수 있습니다.
- 댓글 영역이 있습니다.

#### 댓글 영역

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226809878-79cd28aa-eef9-45b2-a0e0-d8801e154be3.gif"/>

- 댓글을 확인할 수 있습니다.
- 댓글을 작성할 수 있습니다.
- 댓글의 유효성 검사를 할 수 있습니다.

#### 대댓글 영역

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226561419-b3b98cef-d05c-4e2c-839e-1192ecf0136d.gif"/>

- 대댓글을 확인할 수 있습니다.
- 대댓글을 작성할 수 있습니다.

#### 404 페이지

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226810463-045baf0f-293a-49d9-be2a-437473e480d6.png"/>

- 정의되지 않는 경로로 들어왔을 때 `404 페이지`로 라우팅됩니다.

#### 오류 페이지

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226811027-0cee2cb2-43ef-4cdb-b0a5-e6cfcd24f8ca.png"/>

- api에서 오류가 발생했을 때, `statusCode`에 따라 `/error/[StatusCode]`경로로 라우팅됩니다.


## 사용한 기술 스택

#### Typescript
- 타입을 선언하므로써 잠재적인 버그를 피할 수 있고, 컴파일 때 타입 오류가 발견되기 때문에 사용자가 보기 전에 미리 오류를 해결할 수 있습니다.

#### React
- 컴포넌트 단위로 개발하며 선언적인 프로그래밍을 할 수 있습니다.
- 생태계가 매우 활성화되어 있어서 다양한 라이브러리 도구들과 많은 정보들을 접할 수 있습니다.
- JSX를 활용하여 간단한 문법과 조건부 렌더링 기능을 통해 View를 쉽게 구현할 수 있습니다.

#### Prettier, ESlint
- 코드 퀄리티를 높이고 잠재적인 위험을 줄일 수 있습니다.

#### Next.js
- [SSR] 서버 사이드 렌더링을 통해 SEO를 개선할 수 있고, 초기 콘텐츠 로딩 속도를 높일 수 있습니다.
- [SSG] 정적 페이지 기능을 제공합니다.

#### Emotion
- 스타일 컴포넌트를 통해 컴포넌트 단위로 관리하여 재사용할 수 있습니다.
- props를 줄 수 있어서 props에 따라 조건부 스타일 기능을 할 수 있습니다.


## 폴더 구조

```
├─ 📁 public  # 정적인 이미지 파일이 있는 폴더입니다.
├─ 📁 src
│  ├─ 📁 apis  # api와 관련 로직이 있는 폴더입니다.
│  │  ├─ 📁 common  # axiosClient, apiFetcher가 있습니다.
│  ├─ 📁 components  # 페이지를 구성하는 컴포넌트들이 있는 폴더입니다.
│  │  ├─ 📁 comment  # 댓글 관련 컴포넌트들이 있는 폴더입니다.
│  │  │  ├─ 📁 CommentForm
│  │  │  ├─ 📁 CommentItem
│  │  │  ├─ 📁 CommentList
│  │  ├─ 📁 common  # 공통 컴포넌트들이 있는 폴더입니다. 
│  │  │  ├─ 📁 Button
│  │  │  ├─ 📁 Input
│  │  │  ├─ 📁 ListRenderer
│  │  │  ├─ 📁 Main
│  │  │  ├─ 📁 Pagination
│  │  ├─ 📁 error  # 에러 관련 컴포넌트가 있는 폴더입니다.
│  │  │  ├─ 📁 ErrorBoundary
│  │  ├─ 📁 post # 게시물 관련 컴포넌트들이 있는 폴더입니다.
│  │  │  ├─ 📁 PostDetail
│  │  │  ├─ 📁 PostItem
│  │  │  ├─ 📁 PostList
│  ├─ 📁 constant  # 상수가 있는 폴더입니다. errorMessage가 있습니다.
│  ├─ 📁 hooks  # 커스텀 hook을 모아둔 폴더입니다.
│  ├─ 📁 pages  # 경로에 맞춰서 route가 설정되어 있는 페이지 폴더입니다.
│  ├─ 📁 styles  
│  │  ├─ 📁 constant  # 스타일 변수를 모아둔 폴더입니다. fontSize, palette가 있습니다.
│  ├─ 📁 types  # 타입 선언 폴더입니다.
│  │  ├─ 📁 apis  # api 관련 타입을 모아둔 폴더입니다.
│  ├─ 📁 utils  # 유틸 함수를 모아둔 폴더입니다. 
```


## 미해결 이슈 & 개선 가능 사항

> 시간 부족의 원인으로 아래 사항들을 구현하지 못했습니다.
- 추가 항목 요구사항
- 게시글(제목, 내용, 작성자, 비밀번호) 유효성 검사


## 기술적인 고민들

#### 어떻게 타입스크립트를 효율적으로 사용할 수 있을까?
- 불필요하게 모든 곳에 타입을 선언하기 보다, 타입 추론이 안되는 곳에 타입 선언을 하였습니다.
- 명확한 타입 선언을 위해, any 타입을 지양하였습니다.
- 타입 중복 선언을 피하기 위해 interface 상속을 이용하였습니다.
- 여러 타입을 나타내야될 때, 제네릭을 사용하여 타입을 동적으로 선언하고자 하였습니다.

#### 댓글과 대댓글의 데이터가 한번에 담겨서 오는데 어떻게 구별할 수 있을까? 
 - parent 값에 따라 댓글과 대댓글을 구별했습니다.
 - parent 값이 존재하지 않는 데이터는 댓글 데이터입니다.
 - parent 값이 존재하고, parent 값이 특정 댓글의 id와 같다면 특정 댓글의 대댓글 데이터입니다.

#### 디바이스 넓이가 작아질 때, 텍스트 영역이 깨지는 경우 어떻게 해야될까?
- 텍스트 영역이 넘어가는 경우 `...`으로 표시되도록 설정하였습니다

  ```ts
  // commponents/post/PostItem/styles.tsx
    export const StyledPostItem = styled.div`
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    
      ...
   }
  ```

#### 컴포넌트들의 중복되는 클래스를 피하기 위한 방법이 있을까?
- 컴포넌트명을 앞에 붙이는 규칙을 정의하였습니다.

  ```ts
  // commponents/comment/CommentItem/index.tsx
    export default function CommentItem() {
      return (
        <StyledCommentItem>
          <div className="commentItem-header">
            ...
          </div>
        </StyledCommentItem>
      );
    }
  ```
  ```ts
  // commponents/comment/CommentForm/index.tsx
    export default function CommentForm() {
      return (
        <StyledCommentForm>
          <div className="commentForm-header">
            ...
          </div>
        </StyledCommentForm>
      );
    }
  ```
- 추가적으로 스타일 컴포넌트는 앞에 `Styled`를 붙여 구별하도록 정의하였습니다.

#### getServerSideProps, getStaticProps, getStaticPaths를 언제 어떻게 사용해야 될까?
- [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)는 요청 시 매번 서버에서 파일을 생성하기 때문에, 데이터가 자주 변하는 페이지에 사용하는 것이 적합합니다. 그래서 자주 변하는 게시물, 댓글 데이터가 있는 페이지에서 아래와 같이 사용하였습니다. 또한 `query`를 통해 현재 경로 정보를 얻었습니다.
  ```ts
  // pages/posts/[id].tsx
    export default function Post({ prePost, preComments }: PostPropsType) {
      console.log(prePost);
      console.log(preComments);
      
      return <>..</>
    }

    export const getServerSideProps: GetServerSideProps = async ({ query }) => {
      const prePost = await getPost(Number(query.id));
      const preComments = await getComments(Number(query.id));

      // ...

      return {
        props: {
          prePost: prePost.data,
          preComments: preComments.data,
        },
      };
    };
  
  ```
  
- [getStaticProps](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)는 최초 빌드 시에만 파일 생성이 되고, 이후 생성된 파일을 재사용하여 로딩 속도를 높이는 장점이 있습니다. 반면 빌드 시에만 파일이 생성되기 때문에 데이터가 변하지 않는 페이지가 적합하기 때문에 `404페이지`에서 사용하였습니다.
  ```ts
  // pages/404/index.tsx
  export default function NotFound({ errorCode }: NotFoundPropsType) {
    return <>404페이지</>
  }

  export const getStaticProps: GetStaticProps = async () => {
    return { props: { errorCode: '404' } };
  };
  ```
  
- [getStaticPaths](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths)는 동적인 경로를 사용하면서, 정적인 데이터들을 보여줄 때 사용할 수 있습니다. 그래서 동적 라우팅을 사용하고 있으면서 정적인 에러메시지 데이터를 보여주는 에러 페이지에서 사용하였습니다. 또한 `getStaticPaths`의 `fallback: true`로 설정하여 이외의 경로에 접근 시 `404페이지`로 라우팅히였습니다.
  ```ts
  // pages/error/[statusCode].tsx
  const errorMessage = {
    400: '클라이언트 요청이 잘못되었습니다.',
    401: '인증되지 않은 요청입니다.',
    403: '요청이 서버에서 거부되었습니다.',
    404: '요청한 리소스가 서버에 존재하지 않습니다.',
    500: '서버에서 처리 중 오류가 발생했습니다.',
  };
  
  export default function Error({ statusCode }: ErrorPropsType) {
    return <>에러메시지: {errorMessage[statusCode]}</>
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(errorMessage).map((statusCode) => ({
      params: { statusCode },
    }));
    return {
      paths,
      fallback: false,
    };
  };

  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const statusCode = params?.statusCode;
    return { props: { statusCode } };
  };
  ```





#### 효율적인 에러 핸들링 방법이 있을까?
- 서버에서 데이터 가져올 때 발생하는 에러와 클라이언트에서 데이터 가져올 때 발생하는 에러를 효율적으로 처리할 방법에 대해 고민했습니다. 
- 첫 번째로는, `pages/404.js`를 정의한 후 필요한 곳에서 `getServerSide`, `getStatic`을 통해 반환하는 값을 아래의 코드와 같이 `NotFount: true`로 설정하면 `404페이지`로 라우팅 되도록 구현할 수 있습니다. 하지만 잘못된 경로 접근 오류와 겹치며, 다양한 `statusCode`에 따라 정의해주고 싶었기에 선택하지 않았습니다.   
  ```ts
    export async function getServerSideProps(context) {
      const res = await fetch(`https://.../data`)
      const data = await res.json()

      if (!data) {
        return {
          notFound: true,
        }
      }

      return {
        props: { data }, // will be passed to the page component as props
      }
    }
  ```
- 두 번째로는, React의 ErrorBoundary를 사용해보고자 했지만, [React 공식문서](https://ko.reactjs.org/docs/error-boundaries.html)를 따르면 비동기적 코드, 서버 사이드 렌더링 2가지 사항에서 제한이 있었습니다.
  ```
  에러 경계는 다음과 같은 에러는 포착하지 않습니다.

  - 이벤트 핸들러 (더 알아보기)
  - 비동기적 코드 (예: setTimeout 혹은 requestAnimationFrame 콜백)
  - 서버 사이드 렌더링
  - 자식에서가 아닌 에러 경계 자체에서 발생하는 에러
  ```
- 결국, `try-catch`로 에러 핸들링을 하되 오류가 발생했을 때는 statusCode를 넘겨주어 `/error/[statusCode]` 동적 경로로 라우팅 되도록 설정하였습니다. 그 후 경로에서 `statusCode`를 파싱하여 그에 맞게 에러 처리를 하도록 설정하도록 구현했습니다.
  - 먼저, api 함수를 정의하였으며, `{isError, statusCode, data}`를 반환했습니다.
    ```ts
      // apis/post.ts
      export async function getPosts(){
        try {
          const response = await axiosClient.get('/posts');
          return { isError: false, statusCode: response.status, data: response.data };
        } catch (error) {
            return { isError: true, statusCode: error.response.status };
          }
      }
    ```
  - 서버에서 데이터를 가져올 때 오류가 발생하면, `isError`로 에러를 판별한 후 `redirect`를 통해 `/error/[statusCode]`경로로 라우팅 했습니다.   
    ```ts
    export const getServerSideProps: GetServerSideProps = async ({ res }) => {
      const posts = getPosts();

      if (posts.isError) {
        return {
          redirect: {
            destination: `/error/${res.statusCode}`,
            permanent: false,
          },
        };
      }

      return {
        props: {
          posts: posts.data,
        },
      };
    };
    ```
  - 클라이언트에서 데이터를 가져올 때 오류가 발생하면, `isError`로 에러를 판별한 후 `/error/[statusCode]`경로로 라우팅 했습니다. 
    ```ts
    const onGetComments = async (postId: number) => {
      const response = await getComments(postId);
      response.isError ? router.push(`/error/${response.statusCode}`) : setComments(response.data);
    };
    ```
  - 마지막으로, 오류 페이지를 나타내는 컴포넌트는 현재 경로로부터 statusCode를 파싱한 후 에러메시지를 표시했습니다.
    ```ts
    // error/[statusCode].ts
    const errorMessage: ErrorMessageType = {
      400: '클라이언트 요청이 잘못되었습니다.',
      401: '인증되지 않은 요청입니다.',
      403: '요청이 서버에서 거부되었습니다.',
      404: '요청한 리소스가 서버에 존재하지 않습니다.',
      500: '서버에서 처리 중 오류가 발생했습니다.',
    };
      
    export default function Error() {
      return <>에러 메시지: {errorMessage[statusCode]}</>
    }
    ``` 


## 리팩터링

#### api 호출할 때 공통적으로 사용되는 로직 추상화
- 에러를 잡기 위해 매번 try-catch 문을 사용하는 대신, apiFetcher 함수를 만들어서 재사용했습니다.

  ```ts
  // apis/common/apiFetcher.ts
    async function defaultApiFetcher<T>(requestInfo: AxiosRequestConfig): Promise<ApiFetcherReturnType<T>> {
      try {
        const response = await axiosClient.get(requestInfo);
        return { isError: false, statusCode: response.status, data: response.data };
      } catch (error) {
        return { isError: true, statusCode: error.response.status };
      }
    }

    export const apiFetcher = {
      get<T>(url: string) {
        return defaultApiFetcher<T>({ method: 'get', url });
      },
      post<T, U>(url: string, data: U) {
        return defaultApiFetcher<T>({ method: 'post', url, data });
      },
    };
  ```
  
  ```ts
  // apis/post.ts
    export function getPosts() {
      return apiFetcher.get<PostType[]>('/posts');
    }

    export function getPost(postId: number) {
      return apiFetcher.get<PostType>(`/posts/${postId}`);
    }
  ```
  
#### 유효성 검사하는 로직 추상화
- validator를 만들어 재사용할 수 있도록 하였습니다.

  ```ts
  // utils/validator.ts
    export const validator = {
      length(value: string, max: number) {
        return 1 <= value.length && value.length <= max;
      },

      korean(value: string) {
        return /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(value);
      },

      password(value: string) {
        return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~`\-=[\]\;',.\/]).{1,16}$/.test(value);
      },
    };
  ```
  ```ts
  // 사용 시
    if (!validator.korean(writer) || !validator.length(writer, 10)) { ... } 
    if (!validator.korean(content) || !validator.length(content, 500)) { ... } 
  ```


#### 색상, 폰트 크기 변수 설정
- 스타일 변수를 설정하여 일관된 시각적인 표현을 유지할 수 있고, 재사용성, 유지보수 및 수정을 용이하게 하였습니다. 

  ```ts
  // styles/constant/fontSize.ts
  export const fontSize = {
    large: '4.8rem',
    medium: '2.8rem',
    regular: '1.6rem',
    small: '1.4rem',
    micro: '1.2rem',
  };
  ```
  ```ts
  // styles/constant/palette.ts
  const red = {
    '50': '#ffebee',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    ...
  };

  const purple = {
    '50': '#f3e5f5',
    '100': '#e1bee7',
    '200': '#ce93d8',
    ...
  }
  ```

#### rem과 미디어 쿼리를 사용하여 반응형에 따라 폰트 자동으로 변경하기
- rem의 기준이 되는 html의 font-size를 10px, 디바이스 넓이가 480px 이하이면 8px, 2000px 이상이면 14px로 설정하였습니다.  

  ```css
  /* styles/globals.css */
  html {
    font-size: 10px;
  }

  @media screen and (max-width: 480px){
    html {
      font-size: 8px;
    }
  }

  @media screen and (min-width: 2000px){
    html {
      font-size: 14px;
    }
  }

  ```
- 사용할 때는 rem 단위를 이용하면 위에서 설정해두었기 때문에 자동적으로 반응형(480px, 2000px)에 따라 폰트가 변경됩니다. 이를 통해 매번 스타일 파일에서 반응형을 정의할 필요가 없어서, 코드 작성 시간이 단축된다는 장점이 있습니다. 하지만 항상 크기를 고정하고 싶을 때는 절대 단위인 px을 사용하면 됩니다.

  ```ts
  export const StyledPost = styled.div`
    font-size: 1.2rem
  `
  ```

#### 재사용 가능한 공용 컴포넌트 만들기
- 컴포넌트를 재사용함으로써 코드 작성 시간 단축, 일관된 스타일링, 유지보수성 향상의 장점을 드러내고 싶었습니다. 
  
  ```ts
  /common/Button/index.tsx
  interface ButtonPropsType extends StyledButtonPropsType {
    children: ReactNode;
  }

  export default function Button({ children, ...props }: ButtonPropsType) {
    return <StyledButton {...props}>{children}</StyledButton>;
  }
  ```
  ```ts
  /common/Button/styles.tsx
  export interface StyledButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    scale: 'small' | 'medium' | 'large';
    layout: 'background' | 'text';
    color: string;
  }

  const scale = {
    small: css`
      padding: 0.7rem 2rem;
      font-size: ${fontSize.small};
    `,
    medium: css`
      padding: 1rem 2rem;
      font-size: ${fontSize.medium};
    `,
    large: css`
      padding: 1.5rem 3rem;
      font-size: ${fontSize.large};
    `,
  };

  const layout = {
    background: (color: string) => css`
      background-color: ${color};
      color: white;
    `,
    text: (color: string) => css`
      background-color: inherit;
      color: ${color};
      padding: 0;
    `,
  };

  export const StyledButton = styled.button<StyledButtonPropsType>`
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 3px;

    :disabled {
      color: ${palette.gray[200]};
      cursor: not-allowed;
    }

    ${(props) => scale[props.scale]}
    ${(props) => layout[props.layout](props.color)}
  `;
  ```
  ```ts
  // 사용 시
  <Button type="submit" scale="small" layout="background" color={palette.teal[300]}>작성하기</Button>
  ```


## 개선사항

### 1. dependencies에 라이브러리 알맞게 설치하여 빌드 시간 단축하기

#### 문제점 발견
- 기존에 `eslint`와 `eslint-config-next`를 `package.json`의 `dependencies`에 설치했던 것을 발견했습니다. 
        
#### 원인
- `dependencies`에 설치되어 있는 라이브러리의 경우, 배포 단계에서 필요한 라이브러리들로 이루어져 빌드할 때 `dependencies`에 있는 라이브러리들을 참고하게 됩니다.
- 반면, `devDependencies`에 설치되어 있는 라이브러리의 경우, 개발 단계에서 필요한 라이브러리들로 이루어져 빌드할 때 참고하지 않습니다.
- 따라서, `eslint`는 개발 단계에서 코드의 퀄리티를 높이고 잠재적인 버그를 피하기 위한 용도이므로 `devDependencies`에 설치되어 있는 것이 옳다고 생각했습니다.

#### 해결
- `dependencies`에서 `devDependencies`로 `eslint`를 이동하였습니다.
  ```json
  // package.json
  "dependencies": {
    "@emotion/react": "11.10.0",
    "@emotion/styled": "11.10.0",
    "@types/node": "18.15.3",
    "@types/react": "18.0.28",
    "@types/react-dom": "18.0.11",
    "axios": "^1.3.4",
    "next": "13.2.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "4.9.5"
  },
  "devDependencies": {
    "eslint": "^8.36.0",
    "eslint-config-next": "^13.2.4"
  }
  ```
#### 개선전
- 빌드 시간: 13.89s
![3](https://user-images.githubusercontent.com/73439375/226803536-0e4edb02-e58b-4ba5-b55e-9ddda4dfac5a.png)

#### 개선후
- 빌드 시간: 12.13s
![1](https://user-images.githubusercontent.com/73439375/226803528-c95fb9d4-1b26-47c8-9bb9-bbff4eb3db97.png)



