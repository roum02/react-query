<img src="https://velog.velcdn.com/images%2Fcjy0029%2Fpost%2Fcb707be1-ccf3-4608-ac32-ad80f2ed1d95%2Freactquery.png" alt="react-query"/>

# react-query

React-Query는 React앱에서 비동기 로직을 쉽게 다루게 해주는 라이브러리입니다.

 ## 왜 React-Query?
 React 자체가 데이터를 패칭해오거나 업데이트 하는 옵션을 제공하지 않기 때문에 원래 React 개발자들은 각자의 방식으로 http 통신 로직을 구성해야 했습니다. <br>
 Redux 같은 전역 상태관리 라이브러리들이 클라이언트 상태값에 대해서는 잘 작동하지만,
 Server State는 Client State와 완전 다르기 때문에 서버 상태에 대해서는 잘 작동하지 않았습니다. <br>
 또한 서버 데이터는 항상 최신 상태임을 보장하지 않고, 명시적으로 fetching을 수행해야만 최신 데이터로 전환됩니다. <br>
 네트워크 통신은 최소한으로 줄이는게 좋은데, 복수의 컴포넌트에서 최신 데이터를 받아오기 위해 fetching을 여러번 수행하는 낭비가 발생할 수도 있습니다.
 
## Redux대신 React-Query를 사용해보자!

### json-server 사용하기
백엔드 서버를 따로 가지고 있지 않으므로, json-server를 사용해서 mock-api를 생성해줍니다. 
<br>
하단 링크를 참조했습니다.
https://redux-advanced.vlpt.us/3/01.html 
