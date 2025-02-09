## 01. 전통적인 DOM API 기반의 Application


#### 01. 특징
1. DOM API를 직접 JavaScript 코드로 호출
2. DOM API에 특화되어 있는 jQuery와 같은 DOM 조작 라이브러리들을 사용한다.
3. 장점은 작성된 애플리케이션 코드 전달이 쉽다.(HTML에 작성된 js 링크)


#### 02. 실습
1. 프로젝트 만들기

    $ mkdir ex01
    $ cd ex01
    $ npm init -y 

2. Test Server(Dev. Server)

    1) express 설치    

        $ npm i -D express 

    2) dev-server.js

    3) NPM scripting : package.json

        "scripts": {
            "test": "node dev-server"
        }

3. Landing Page

    public/index.html

4. Application

    public/app.js

5. Test

    $ npm run test