## React API 기반의 Application

#### 01. 특징
1. DOM API 대신 React API를 사용해서 Application 작성하기

#### 02.실습
1. Initialize Project

    ```    
    $ mkdir ex05
    $ cd ex05
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

5. Configuration

    1) config/babel.config.json
    2) config/webpack.config.js

6. Application

    1) src/App.js
    2) src/index.js

7. Test

   ```
    $ npm start
   ```

8. Build

   ```
   $ npm run build 
   ```