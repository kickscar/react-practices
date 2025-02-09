## React JSX 기반의 Application Refactoring

#### 01. 특징
React API 기반에서 React JSX 기반의 Application으로 리팩토링 하기

#### 02. Babel Practices
1. Core Library
2. Babel Cli
3. Babel Plugin: 변환 규칙
4. Babel Env Preset: 변환 규칙 모음

#### 03. 실습
1. Initialize Project

    ```    
    $ mkdir ex06
    $ cd ex06
    $ npm init -y 
    ```

2. Install Packages
    - 개발툴

    ```
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    ```

    - React Library

   ```
   $ npm i react react-dom
   ```

3. npm scripting : package.json

    ```
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }  
    ```

4. Landing

    1) public/index.html

5. Webpack Configuration(webpack.config.js): Babel Loader 설정 추가
    
   ```
    rules:[{
            test: /\.js/i,
            exclude: /node_modules/,
            use: 'babel-loader'
    }]   
   ```

6. Babel Configuration(babel.config.json): Preset 설정

    ```
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "ie": 11,
                "edge": "126",
                "firefox": "127",
                "chrome": "126",
                "opera": "98",
                "safari": "17"
            }
        }],
        "@babel/preset-react"
    ]
    ```

7. Application

    1) src/App.js
    2) src/index.js

8. Test

   ```
    $ npm start
   ```

9. Build

   ```
   $ npm run build 
   ```
