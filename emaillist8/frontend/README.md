1. 설치

```sh
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions concurrently
$ npm i react react-dom prop-types react-addons-update
```

2. 설정
config/babel.config.json
config/webpack.config.js

3. npm 스크립팅

```json
 "scripts": {
    "build": "npx webpack --config config/webpack.config.js --progress --mode production",
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\" --kill-others",
    "dev:backend": "cd ../backend && mvn spring-boot:run",
    "dev:frontend": "npx webpack serve --config config/webpack.config.js --progress --mode development"
}
```