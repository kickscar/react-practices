## React JSX 기반의 Application Refactoring

#### 01. 특징
React API 기반에서 React JSX 기반의 Application으로 리팩토링 하기


#### 02. Babel Practices
1. Core Library
2. Babel Cli
3. Babel Plugin: 변환 규칙
4. Babel Env Preset: 변환 규칙 모음


#### 03. 실습
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

4. Webpack Configuration: webpack.config.js

    1) Babel Loader 설정 추가
        
        rules:[{
            test: /\.js/i,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]

5. Babel Configuration: babel.config.json
   
    1) ES6: Preset Env

        ["@babel/preset-env", {
            "targets": {
                "ie": 11,
                "edge": "126",
                "firefox": "127",
                "chrome": "126",
                "opera": "98",
                "safari": "17"
            }
        }]  

    2) JSX: Preset React

        "@babel/preset-react"


6. Landing

    public/index.html 


7. Application

    1) src/index.js
    2) src/App.js

8. Test

    $ npm start

9. Build(Bundling)

    $ npm run build