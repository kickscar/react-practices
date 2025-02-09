## 03. 전통적인 DOM API 기반의 Application: JavaScript Module System

#### 01. 특징
1. ES6 Module System을 지원하는 브라우저에서는 ES6 Module System 기반으로 분리된 JS 모듈 간의 의존성을 보장 해준다.
2. JS Module 외의 다양한 Assets(CSS, Image, Font)의 로딩 동기화는 불가능 하다.



#### 02. 실습
1. 프로젝트 만들기

    $ mkdir ex03
    $ cd ex03
    $ npm init -y 

2. Test Server(Dev. Server)
   
   1) express 설치
    
        $ npm i -D express 

   2) dev-server.js
   
   3) NPM scripting : package.json

        "scripts": {
            "test": "node dev-server"
        }

3. Landing

    public/index.html


4. Application

   1) public/index.js
   2) public/App.js

5. Test

    $ npm run test