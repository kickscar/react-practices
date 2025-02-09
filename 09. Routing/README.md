## 09. React Practices - 04.Routing


#### Examples
1. React Router Basic I: Implemented in a Simple Way(hashchange event driven) - (예제: ex01)
2. React Router Basic II: HTML5 history API - (예제: ex02)
3. React Router Basic III: HashRouter & BrowserRouter - (예제: ex03)
4. React Router Basic V: Link VS NavLink - (예제: ex04)
5. Styling & Semantic Markup - (예제: ex05)
6. Composition ({children}) - (예제: ex06)
7. useRoutes Hook - (예제: ex07)
8. Nesting Routes(<Outlet/>) - (예제: ex08)


#### 실습
1. Install Packages
   
   1) Dependencies

        $ npm i react react-dom prop-types styled-components react-addons-update
   
   2) Dev. Dependencies
        
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react
   
   3) ex03 ~ ex08 추가 패키지: react-router react-router-dom

        $ npm i react-router react-router-dom


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
