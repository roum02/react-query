# react-query

<img width="764" alt="image" src="https://user-images.githubusercontent.com/78200124/162750764-ff210122-f8ea-4fab-b1e4-f7dc8abccd20.png">


react-query 자료는 <a href="https://kyounghwan01.github.io/blog/React/react-query/basic/#사용하는-이유">여기</a>를 참고했어요!

mocking data 자료는 <a href="https://velog.io/@9rganizedchaos/これがリアクトライブラリ！-「Mock-Service-Worker」">여기</a>를 참고했어요!

## React-Query?
React-Query는 React앱에서 비동기 로직을 쉽게 다루게 해주는 라이브러리입니다.

## 왜 React-Query?
React 자체가 데이터를 패칭해오거나 업데이트 하는 옵션을 제공하지 않기 때문에 원래 React 개발자들은 각자의 방식으로 http 통신 로직을 구성해야 했습니다. <br>
Redux 같은 전역 상태관리 라이브러리들이 클라이언트 상태값에 대해서는 잘 작동하지만,
Server State는 Client State와 완전 다르기 때문에 서버 상태에 대해서는 잘 작동하지 않았습니다. <br>
또한 서버 데이터는 항상 최신 상태임을 보장하지 않고, 명시적으로 fetching을 수행해야만 최신 데이터로 전환됩니다. <br>
네트워크 통신은 최소한으로 줄이는게 좋은데, 복수의 컴포넌트에서 최신 데이터를 받아오기 위해 fetching을 여러번 수행하는 낭비가 발생할 수도 있습니다.
