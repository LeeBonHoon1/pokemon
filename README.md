This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 프로젝트 설명

## pokemon API를 이용한 포켓몬 도감

## 폴더 설명

- app : 도감 리스트 및 상세페이지
- common : api 및 base url
- component : 페이지를 구성하는 컴포넌트 및 UI 컴포넌트
- hooks : react-query hook (캐싱, 쿼리키, 쿼리함수)
- hydrate : SSR로 Prefetch 하기 위한 provider client 생성
- store : search input과 포켓몬 count를 관리하는 전역 store
- types : api콜을 통해 받아오는 데이터의 type들을 관리
- utils : util함수 관리

## 로직 구현 설명

- pokemon API에서 BASE_URL/pokemon 으로 호출하면 url과 name을 응답값으로 주는데
  url에 포함된 id 값으로 BASE_URL/pokemon-species api를 호출해야 번역 가능한 데이터를 받을 수 있음
  BASE_URL/pokemon-species/{id} api 응답값의 데이터를 count와 같이 return

- infinite scroll을 구현 하기 위해서 BASE_URL/pokemon 호출 후 count의 값을 저장 하고,
  react-intersection-observer 라이브러리와 react-query의 useInfiniteQuery를 이용해
  리스트의 마지막에 스크롤이 위치할 때 limit과 offset을 전달

- useQuery와 useInfiniteQuery 데이터 캐싱
  각 각의 api 요청은 queryKey로 캐싱 후 불필요한 재요청 최적화
- hydrate
  서버 컴포넌트에서 dehydrate된 데이터를 prefetch 하고 데이터를 query-client에 캐싱 후
  클라이언트 컴포넌트에서 같인 queryKey로 캐싱 된 데이터 사용 (SSR 최적화)

- data fetching과 loading, error 발생 시 사용자 경험 고려
  use-query의 isLoading, isFetching, error의 값에 따라 로딩페이지, 스켈레톤 error 페이지 구현

- 포켓몬의 속성과 같은 border 적용
