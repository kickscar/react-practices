## 07. React Application 개발 환경 설정

#### Application
1. ex00 Recofiguration
2. create-react-app 없이 Application 설정 및 구성  

#### 실습
1. Initialize Project

    ```    
    $ mkdir ex07
    $ cd ex07
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

   1) webpack.config.js
   2) babel.config.json)

6. Application

    src/*

7. Test

   ```
    $ npm start
   ```

8. Build

   ```
   $ npm run build 
   ```
