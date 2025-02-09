## 07. React Application 개발 환경 설정

#### Application
1. ex00 Recofiguration
2. create-react-app 사용 안 하고 직접 설정하고 구성하기  


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
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    } 

4. Configuration

    1) babel.config.json
    2) webpack.config.js

5. Landing

    public/*

6. Application

    src/*

7. Test

    $ npm start

8. Build(Bundling)

    $ npm run build