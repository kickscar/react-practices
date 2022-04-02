### 1. 의존성 설치
```bash
$ npm init -y
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions 
$ npm i react react-dom react-addons-update react-router react-router-dom prop-types react-modal
```


### 2. 설정
1.  config/babel.config.json
2.  config/webpack.config.js



### 3. npm 스크립팅
```json
"scripts": {
    "build": "npm install && npx webpack --config config/webpack.config.js --progress --mode production",
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development"
}
```


### 4. 실행
1.  development
    ```bash
    $ npm start
    ```

2.  production
    ```bash
    $ npm run build
    ```