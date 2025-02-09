## Bundling I: JS Module

#### 1. Project 
1. 초기화

   $ npm init -y

2. Install Packages

  $ npm i -D webpack webpack-cli express

3. NPM Scripting

  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }


#### 2. Application
1. src/App.js
2. src/index.js


#### 3. Dev. Server(Test)
1. dev-server(express based)   
2. public 디렉토리
   1) 개발서버의 서비스 디렉토리
   2) index.html: Application 랜딩 페이지
   3) main.js: Bundling 결과물(Application)


#### 4. Build
1. Build(Bundling)
  
    $ npm run build  

2. public/main.js 생성 확인


#### 5. Test
1. Dev Server 실행

    $ npm start

2. 브라우저로 접근(localhost:3000)