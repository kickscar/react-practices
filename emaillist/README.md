## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반
    