
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
yarn install
yarn run dev
```

#### 5. 로컬 환경에서 확인하기

```
http://localhost:5000/
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

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226560618-648eb891-87eb-4774-83fd-207c0a7e4307.gif"/>

- 댓글을 확인할 수 있습니다.
- 댓글을 작성할 수 있습니다.

#### 대댓글 영역

<img width="100%" src="https://user-images.githubusercontent.com/73439375/226561419-b3b98cef-d05c-4e2c-839e-1192ecf0136d.gif"/>

- 대댓글을 확인할 수 있습니다.
- 대댓글을 작성할 수 있습니다.


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
- 서버 사이드 렌더링을 통해 SEO를 개선할 수 있고, 초기 콘텐츠 로딩 속도를 높일 수 있습니다.

#### Emotion
- 스타일 컴포넌트를 통해 컴포넌트 단위로 관리하여 재사용할 수 있습니다.
- props를 줄 수 있어서 props에 따라 조건부 스타일 기능을 할 수 있습니다.


## 폴더 구조

```
├─ 📁 public  # 정적인 이미지 파일이 있는 폴더입니다.
├─ 📁 src
│  ├─ 📁 apis  # api와 관련된 로직이 있는 폴더입니다.
│  │  ├─ 📁 common  # axiosClient, apiFetcher이 있습니다.
│  ├─ 📁 components  # 페이지를 구성하는 컴포넌트들이 있는 폴더입니다.
│  │  ├─ 📁 comment
│  │  ├─ 📁 common  # 공통 컴포넌트가 있는 폴더입니다. Button, Input, Main, Pagination, ListRenderer 컴포넌트가 있습니다.
│  │  ├─ 📁 error
│  │  ├─ 📁 post
│  ├─ 📁 hooks  # 커스텀 hook을 모아둔 폴더입니다.
│  ├─ 📁 pages  # 경로에 맞춰서 route가 설정되어 있는 페이지 폴더입니다.
│  ├─ 📁 styles  
│  │  ├─ 📁 constant  # 스타일 변수를 모아둔 폴더입니다. fontSize, palette가 있습니다.
│  ├─ 📁 types  # 타입 선언 폴더입니다.
```


## 미해결 이슈 & 개선 가능 사항

> 시간 부족의 원인으로 아래의 사항들을 구현하지 못했습니다.
- 추가 항목 요구사항
- 게시글(제목, 내용, 작성자, 비밀번호), 댓글(내용, 작성자, 비밀번호) 유효성 검사
- api 에러에 대한 처리


## 기술적인 고민들

#### 어떻게 타입스크립트를 효율적으로 사용할 수 있을까?
- 불필요하게 모든 곳에 타입을 선언하기 보다, 타입 추론이 안되는 곳에 타입 선언을 하였습니다.
- 명확한 타입 선언을 위해, any 타입을 지양하였습니다.
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


## 리팩터링

#### api 호출할 때 공통적으로 사용되는 로직 추상화
> 에러를 잡기 위해 매번 try-catch 문을 사용하는 대신, apiFetcher 함수를 만들어서 재사용했습니다.

  ```ts
  // apis/common/apiFetcher.ts
  async function defaultApiFetcher<T>(requestInfo: AxiosRequestConfig): Promise<ApiFetcherReturnType<T>> {
    try {
      const response = await axiosClient(requestInfo);
      return { isError: false, data: response.data };
    } catch (error) {
      return { isError: true };
    }
  }

  export const apiFetcher = {
    get: <T>(url: string) => defaultApiFetcher<T>({ method: 'get', url }),
    post: <T, U>(url: string, data: U) => defaultApiFetcher<T>({ method: 'post', url, data }),
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

#### 색상, 폰트 크기 변수 설정
> 스타일 변수를 설정하여 일관된 시각적인 표현을 유지할 수 있고, 재사용성, 유지보수 및 수정을 용이하게 하였습니다. 

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
> rem의 기준이 되는 html의 font-size를 10px, 디바이스 넓이가 480px 이하이면 8px, 2000px 이상이면 14px로 설정하였습니다.  

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
> 사용할 때는 rem 단위를 이용하면 위에서 설정해두었기 때문에 자동적으로 반응형(480px, 2000px)에 따라 폰트가 변경됩니다. 이를 통해 매번 스타일 파일에서 반응형을 정의할 필요가 없어서, 코드 작성 시간이 단축된다는 장점이 있습니다. 하지만 항상 크기를 고정하고 싶을 때는 절대 단위인 px을 사용하면 됩니다.

  ```ts
  export const StyledPost = styled.div`
    font-size: 1.2rem
  `
  ```

#### 재사용 가능한 공용 컴포넌트 만들기
> 컴포넌트를 재사용함으로써 코드 작성 시간 단축, 일관된 스타일링, 유지보수성 향상의 장점을 드러내고 싶었습니다. 
  
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


