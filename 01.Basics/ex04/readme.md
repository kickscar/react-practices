## Application Bundling


#### 01. Webpack Practices
1. Bundling I: JS Module
2. Bundling Environment Configuration : webpack.config.js
3. Webpack Development Server
4. Bundling II: CSS Module
5. Bundling III: SASS/SCSS Module
6. Bundling IV: Image Module


#### 02. 실습
1. Init Project

    $ mkdir ex04
    $ cd ex04
    $ npm init -y 

2. Install Packages

    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass

3. NPM scripting : package.json

    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    } 

4. Configuration

    webpack.config.js

5. Landing

    public/index.html 

6. Application

    1) src/index.js
    2) src/App.js

7. Test

    $ npm start

8. Build(Bundling)

    $ npm run build