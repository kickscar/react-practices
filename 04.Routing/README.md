React Practices - Routing

ex01: React Router Basic I: Implemented in a Simple Way(hashchange event driven)
ex02: React Router Basic II: HTML5 history API
ex03: React Router Basic III: HashRouter &amp; BrowserRouter
ex04: React Router Basic V: Link VS NavLink
ex05: Styling &amp; Semantic Markup
ex06: Composition
ex07: Nesting Routes
ex08: BrowserRouter & SSR


===============================================================================

1.  설치
    1)  개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
    2)  라이브러리
        $ npm i react react-dom prop-types react-addons-update react-router react-router-dom

2.  설정
    1)  webpack.config.js
    2)  babel.config.json

3.  스트립팅
    "scripts": {
    "debug": "npx webpack serve --progress --env",
    "build": "npx webpack"
    }

4.  테스트 서버 실행
    $ npm run debug src=(01|02|03|04|05|06|..)
```

