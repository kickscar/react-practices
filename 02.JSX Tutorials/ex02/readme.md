#### 특징 II: Sigle Root
1. 리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.

#### 실습
1. Initialize Project

    ```    
    $ mkdir ex02
    $ cd ex02
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
        "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "build": "npm i && npx webpack --config config/webpack.config.js --mode production"
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
