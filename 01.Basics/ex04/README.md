## ex04: 애플리케이션 번들링
## 실습
1.  프로젝트 생성 및 패키지 설치
    ```bash
    $ mkdir ex04
    $ cd ex04
    $ npm init -y
    $ npm i -D webpack webpack-cli, express
    $ npx webpack -v
    ```
    
2.  프로젝트 구조
    <pre>
    /ex04
      |--- /node_modules
      |--- /public
      |	|--- index.html
      |	|--- bundle.js
      |--- /src
      |	|--- App.js
      |	|--- index.js
      |--- package.json
      |--- package-lock.json
      |--- dev-dev-dev-server.js            
    </pre>

3.  npm scripting 
    "scripts": {
        "start": "node dev-dev-dev-server.js",
        "build": "npx webpack ./src/index.js -o ./public"
    }
    
4.  빌드
    ```bash
    $ npx webpack src/index.js -o public/budle.js
    ```
    
5.  개발 서버 실행
    ```bash
    $ npm start
    ```