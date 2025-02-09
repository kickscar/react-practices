#### Pure React(React API) 컴포넌트
1. React API로 작성된 컴포넌트 만들어 보기

#### 실습
1. Initialize Project

    ```    
    $ mkdir ex04
    $ cd ex04
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
    
    1) src/index.js
    2) src/App.js
    3) src/Contents.js
    4) src/Header.js

7. Test

   ```
    $ npm start
   ```

8. Build

   ```
   $ npm run build 
   ```
