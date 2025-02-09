## Application Bundling


#### 01. Webpack Practices
1. Bundling I: JS Module
2. Bundling Environment Configuration : webpack.config.js
3. Webpack Development Server
4. Bundling II: CSS Module
5. Bundling III: SASS/SCSS Module
6. Bundling IV: Image Module


#### 02. 실습
1. Initialize Project

    ```
    $ mkdir ex01
    $ cd ex01
    $ npm init -y 
    ```

2. Install Packages

    ```
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass
    ```

3. npm scripting : package.json
    
    ```
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    } 
    ```

4. Landing Page

    1) public/index.html

5. Application

    1) public/index.js
    2) public/App.js

6. Test

    ```
    $ npm start
    ```

7. build

    ```
    $ npm run build
    ```
