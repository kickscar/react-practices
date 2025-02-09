#### 특징 III: JSX 표현식 
1. JSX에서는 자바스크립트 구문(조건문, 반복문, 정의문, ...등) 사용이 불가능하다.
2. JSX에서는 자바스크립트 표현식을 {} 안에 사용해야 한다. 
3. { javascript expression }


#### 실습
1. Init Project

    $ mkdir ex06
    $ cd ex06
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
    
    1) src/index.js
    2) src/App.js
    3) src/Contents.js
    4) src/Header.js
    5) src/Clock01.js
    6) src/Clocl02.js
    7) src/Clocl03.js
   
7. Test

    $ npm start

8. Build(Bundling)

    $ npm run build
