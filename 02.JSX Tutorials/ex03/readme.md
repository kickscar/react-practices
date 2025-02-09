#### 함수 컴포넌트
1. 함수 컴포넌트 작성 해보기

#### 실습
1. Initialize Project

    ```    
    $ mkdir ex03
    $ cd ex03
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
   5) [참고] VSCode(Reactjs Code Snippets Extension) shortcut
      - rsc: 화살표 함수형 컴포넌트 생성
      - rsf: 함수형 컴포넌트 생성 
      - rcc: 클래스 컴포넌트 생성
      - rcjc: import와 export 없이 클래스 컴포넌트 생성
      - rwwd: import 없이 클래스 컴포넌트 생성
      - rrc: 클래스 컴포넌트와 react-redux 리덕스를 연결하여 생성

7. Test

   ```
    $ npm start
   ```

8. Build

   ```
   $ npm run build 
   ```
