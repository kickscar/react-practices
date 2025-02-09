## 05. Component: Event


#### Event
1. Handler 작성 방식

    - Inline
    - External Function

2. DOM Event 합성: Synthetic Event
3. Event 종류
4. Refs: Real DOM Element 참조하기


#### Examples
1. Inline Handler - (예제: ex01)
2. Function Handler - (예제: ex02)
3. Synthetic Event - (예제: ex03)
4. Event Handler Examples - (예제: ex04)
5. Using ref: Function 컴포넌트 - (예제: ex05)
6. Using ref: Class 컴포넌트 - (예제: ex06)


#### 실습
1. Install Packages
   
   1) Dependencies

        $ npm i react react-dom prop-types styled-components

   2) Dev. Dependencies
   
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react


2. NPM scripting : package.json

    "scripts": {
        "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "build": "npm i && npx webpack --config config/webpack.config.js --mode production"
    } 


3. Configuration

    1) config/babel.config.json
    2) config/webpack.config.js


4. Landing

    public/index.html


5. Test

    $ npm start


6. Build

    $ npm run build 

