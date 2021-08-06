## Preface
통합(Integration)은 API 서버가 리액트 애플리케이션과 분리되어 있지 않고 통합되어 있는 경우로 API 서버가 리액트로 작성된 프론트엔드 애플리케이션을 랜딩하고 
프론트엔드 애플리케이션과 통신하는 경우를 가리킨다. 이런 경우, 프론트 애플리케이션 내부의 React 컴포넌트가 API 서버와 통신하는 코드에서는 서버 주소와 포트를
따로 지정하지 않고 url로만 통신하는 것이 일반적이다.

 실제 통합되어 배포된 애플리케이션에서는 별 문제 없이 작동하는 것이 당연하지만 통합 배포되기 전의 개발 환경에서는 문제가 있다. 왜냐하면 개발 테스트를 위해서 
노드로 작성된 API 서버 애플리케이션을 실행하는 개발 서버(nodemon)와 React로 작성된 애플리케이션을 실행하는 개발서버(webpack dev server)가 다르기
때문이다.

 비교적 간단하지만, 두 개발 서버를 연동시키는 설정을 우선 설명한다(I). 여기에 한 가지 더 고려해애 할 것이 있는데, 백엔드 애플리케이션이 API 서버 전용으로 작성되어
있지 않는 경우다. 백엔드 애플리케이션이 전통적인 웹 애플리케이션 기반에 부분적으로 API 서버 역할을 할 수 있다. React도 프론트엔드 애플리케이션 전체 작성에 사용되지
않고 웹 애플리케이션 일부 페이지의 클라이언트 애플리케이션 작성에 부분적으로 사용되어 있다면 개발 환경 설정이 다를 수 있다.(II)

## Integration Development Environments with Node I: 
1. Projecgt Structure
2. nodemon
3. webpack dev server
4. package.json 
5. node application

## Integration Development Environments with Node II(without Webpack Dev Server)
1. Projecgt Structure
2. nodemon
3. package.json

## Configuration for Integration Development Environments(with Spring Boot)


## Application in Practices
1. App.01.Emaillist:        
   [Exmaple App: Integration Configuration with Node]

2. App.02.Kanban Board:     
   [Course App I: Integration Configuration with Node]

3. App.03.Guestbook:       
   [Assignment App I: Integration Configuration with Node]

4. App.04.Gallery:          
   [Assignment App II: Integration Configuration with Node] 

5. App.05.MySite:           
   [Assignment App III: Integration Configuration with Node]

6. App.06.MySite:
   [Example App: Integration Configuration with Spring Boot]













