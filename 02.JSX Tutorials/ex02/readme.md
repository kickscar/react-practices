#### 특징 II: Sigle Root
1. 리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.


#### 실습
1. Init Project

    $ mkdir ex02
    $ cd ex02
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
