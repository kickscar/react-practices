## Introduction
 여기서 통합(Integration)의 의미는 백엔드 애플리케이션(Backend Application, abbr. Backend)과 프론트엔드 애플리케이션
(Frontend Application, abbr. Frontend)의 개발 환경 통합(Integration Development Environments)을 의미한다. 애플리케이션 아키텍처(Achtecture)
에서 API 서버 역할의 백엔드가 프론트엔드와 완전히 분리되어 있다 하더라도 빌드와 배포 과정에서 분리가 필요한 것이고 개발 환경은 통합하여 테스트하고 함께 개발하는 
것이 일반적이다. 

 테스트를 위해 Mocha(모카)와 같은 테스트 도구를 사용한 단위 테스트가 기본이지만 개발 서버를 구동시켜 놓고 브라우저로 접근하여 애플리케이션 로딩과 동작 등을 
직접 확인해보는 것도 개발 중에 빼놓을 수 없다. 전통적인 웹 애플리케이션 개발에서는 백엔드용 개발 서버(nodemon, Spring Boot devtools)만 구동시켜 
놓고 브라우저로 접근하여 백엔드와 함께 프론트엔드 작동도 테스트 하는 것이 특별한 작업은 아니다. 하지만 프론트엔드 개발을 리액트로 한다면 상황이 조금 다르다.
리액트 프론트엔드를 구동 시키는 개발 서버(Webpack Dev Server)가 따로 존재하기 때문에 백엔드와 프론트엔드 개발 서버를 각각 구동 시켜야 하는 상황이 된다. 

 그런데, 개발 서버가 두 개인 상황의 통합 개발 환경을 설정하기 전에 먼저 선택해야 할 것이 있다. 브라우저로 접근 대상이 되는 개발 서버를 선택해야 한다. 보통은 
화면을 렌더링 하는 서버를 선택하고 접근할 것이다. 따라서 웹팩 개발 서버가 선택되는 것이 당연할 것 같지만 그렇지 않은 경우가 더 당연하다. Node Express
또는 Spring MVC 기반의 전통적인 웹 애플리케이션을 작성하고 애플리케이션의 특정 페이지들이 리액트 프론트엔드가 되는 경우다. 사실, 리액트로 애플리케이션 전체를
개발하는 경우보다 이 경우가 실무에서 훨씬 더 일반적이다.   

 이 경우에는 웹팩 개발 서버를 포기해야 한다. 메모리 상에 번들링된 애플리케이션을 올려 놓고 효율적인 핫스왑 기능과 HMR 디버깅 등의 리액트 프론트엔드 디버깅에 
특화된 여러 편리한 기능을 포기하는 것을 의미하지만 리액트 프론트엔드가 전체 애플리케이션에서 차지하는 비중이 상대적으로 작은 경우이기 때문에 포기한다고 큰 손해
가 없다. 오히려 백엔드 개발 서버의 라이브 리로드 기능을 확장해서 백엔드 개발을 더 효율적으로 할 수 있는 장점이 있다. 라이브 리로드 확장의 개념은 간단하다. 
라이브 리로드 감시(watch) 리소스를 프론트엔드로 확장시켜 놓으면 프론트엔드 개발 리소스 변화도 함께 감지될 때 다시 번들링하고 서버가 리로딩 된다. 개념은 쉽지
만 설정은 Node와 Spring Boot 모두 다 그리 만만하지 않다.

 두 번째 경우는 전체 애플리케이션 화면을 리액트가 다 하는 경우다. 흔히들 SPA라 부르는 애플리케이션 개발이다. 백엔드는 전적으로 API 서버 역할만을 하기 때문에 
개발 중에 브라우저로 접근할 일이 별로 없다. API 테스트는 손에 익은 API 테스트 툴이나 프론트엔드 개발에 테스트 케이스들을 작성해서 하면 된다. 브라우저 접근은 
웹팩 개발 서버로 하게 된다. 따라서 두 개의 개발 서버가 구동되는 상황이다. 오해하지 말아야 할 것이 있다. 개발 서버가 두 개가 구동된다고 꼭 통합 설정을 해야 
하는 것은 아니다. 두 개발 서버를 동시에 구동 시키고 웹팩 개발 서버로만 접근해서 화면 개발을 하면 되기 때문에 굳이 설정이 필요하다면 동시에 두 서버의 구동과 
상태 등을 감시하는 툴(Concurrntly) 설정 정도다. 그리고 각각의 서버들이 자기들의 감시 개발 리소스에 대한 라이브 리로딩은 확실하게 하기 때문에 별다른 걱정 
거리도 없다.
 
 문제가 되는 상황은 다음과 같은 경우다. 백엔드와 프론트엔드가 결합된 형태로 배포되는 애플리케이션에서 프론트엔드 통신 코드의 URL에 호스트와 포트를 뺀 패쓰(Path)만
명시된 경우다. 통합 배포가 잘 된 상항에서는 아무 문제가 없지만 개발 중에는 API 서버에 해야 할 요청을 프론트엔드를 실행시키는 웹팩 개발 서버로 하기 때문에 
문제가 된다. 해결 방법은 간단하다. API 요청 URL 또는 패쓰에 API 서버(백엔드 개발 서버)로 프락시(Proxy) 설정을 해 두면 된다. 웹팩 개발 서버는 이를 간단한 
설정으로 지원해 준다.

## Integration Development Environments I
1. Application Basic Structure
   <pre>
   /app
      |--- /backend
      |        |--- /logging
      |        |        |--- index.js
      |        |--- /routes
      |        |        |--- [index.js]
      |        |        |--- authorized.js
      |        |        |--- error.js
      |        |--- /controllers
      |        |--- /models
      |        |--- /views
      |        |        |--- /error
      |        |                 |--- [404.ejs]
      |        |                 |--- [500.ejs]
      |        |--- /public
      |        |--- [index.js]
      |        |--- [app.conifg.env]
      |--- /frontend
      |        |--- config
      |        |     |--- [babel.config.json]
      |        |     |--- [webpack.config.js]
      |        |--- public
      |        |     |--- favicon.ico
      |        |     |--- index.html
      |        |--- assets
      |        |--- src
      |--- /node_modules
      |--- package.json
      |--- package-lock.json
   </pre>
   
2. nodemon
3. webpack dev server
4. package.json 
5. node application
6. examples
   - App01.Emaillist
   - App02.KanbanBoard
   - App03.Guestbook
   - App04.Gallery
   - App05.MySite

## Integration Development Environments with Node II
1. Projecgt Structure
2. nodemon
3. package.json
4. example
   - App06.MySite

## Integration Development Environments with Spring Boot I
example
   - App07.MySite

## Integration Development Environments with Spring Boot II
example
   - App08.MySite



## Applications in Practices
1. App01.Emaillist
   - Integration Development Configuration with Node
   - Backend: Fully APIs on Node Express
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on fetch

2. App02.KanbanBoard
   - Integration Development Configuration with Node
   - Backend: Fully APIs on Node Express
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on axios

3. App03.Guestbook
   - Integration Development Configuration with Node
   - Backend: Fully APIs on Node Express
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on axios

4. App04.Gallery
   - Integration Development Configuration with Node
   - Backend: Fully APIs on node Express
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on axios

5. App05.MySite
   - Integration Development Configuration with Node
   - Backend: Fully APIs on node Express
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on axios
   
6. App06.MySite
   - Integration Development Configuration with Node
   - Backend: Classic Web Application(Partial APIs) on Node Express
   - Frontend: Partial React Applied(without Webpack Dev Server)
   - Ajax: based on axios

7. App07.Guestbook
   - Integration Development Configuration with Spring Boot
   - Backend: Fully APIs on Spring Boot
   - Frontend: Fully React Applied(SPA)
   - Ajax: based on axios
   
8. App08.MySite
   - Integration Development Configuration with Spring Boot
   - Backend: Classic Web Application(Partial APIs) on Spring Boot
   - Frontend: Partial React Applied(without Webpack Dev Server)
   - Ajax: based on axios
