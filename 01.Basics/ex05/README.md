## ex05: React(API 기반) 애플리케이션으로 리팩토링

## 실습
1.  프로젝트 생성 및 패키지 설치
    ```bash
    $ mkdir ex05
    $ cd ex05
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i react react-dom
    ```
    
2.  프로젝트 구조
    <pre>
    /ex05
      |--- /node_modules
      |--- package.json
      |--- package-lock.json
      |--- /public
      |	|--- index.html
      |	|--- bundle.js  [after build]
      |--- /src
      |	|--- App.js
      |	|--- index.js
      |--- webpack.config.js            
    </pre>

3.  npm scripting
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4.  webpack.config.js
    ```javascript
    const path = require('path');
    
    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: path.resolve('public'),
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    }
    ```

5. 빌드
```bash
$ npm run build
```

6. 개발 서버 실행
```bash
$ npm start
```