#### 특징 I: HTML과 비교
1. 태그 사용은 HTML과 유사하다.
2. 자바스크립트 구문(조건문, 반복문, 정의문, ...등) 사용이 불가능하다.
3. 자바스크립트 표현식을 사용해야 한다.
4. JSX 태그는 꼭 닫아야 한다. 
5. JSX 태그의 속성은 Camel Case
6. JSX 태그의 속성은 DOM API와 일치한다.
7. 인라인 스타일링을 사용할 수 있다.

#### 실습
1. Init Project

    $ mkdir ex01
    $ cd ex01
    $ npm init -y 

2. Install Packages
   
   1) 개발툴
   
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react

   2) React 라이브러리

        $ npm i react react-dom


3. NPM scripting : package.json

    "scripts": {
        "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "build": "npm i && npx webpack --config config/webpack.config.js --mode production"
    } 

4. Configuration

    1) config/babel.config.json
    2) config/webpack.config.js

5. Landing

    public/index.html

6. Application
    
    src/App.js
    src/index.js

7. Test

    $ npm start

8. Build(Bundling)

    $ npm run build
