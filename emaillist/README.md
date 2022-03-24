## React Pracractices - Integration(개발 환경 통합)

## emaillist
1. 개발 통합 설정(with Spring Boot Backend)
2. backend: Fully APIs
3. Frontend: React(SPA)
4. AJAX: fetch 기반

## Configuration
1. Application(Project) Structure
   <pre>
   /emaillist
    |--- /backend
    |       |--- /src
    |       |--- pom.xml
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |       |--- /assets
    |       |--- /node_modules
    |       |--- package.json
    |       |--- package-lock.json
   </pre>
2. webpack dev server
3. package.json
4. concurrently

## CORS
1. origin(출처)
   - URL에서 protocol + host + port 를 합친 것
   - 브라우저 콘솔

   ```
   > location.origin
   < 'http://localhost:9999'
   ```

2. 같은 origin VS 다른 origin
3. Same Origin Policy
   브라우저가 동일 출처 정책(SOP)를 지켜서 다른 출처의 리소스 접근을 금지
   - 외부 리소스를 못 가져오는 단점
   - XSS 등과 같은 보안 취약점을 사전에 방지할 수 있다.

4. CORS(Cross Orign Resource Sharing)
   - error
   <p>
   Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
   </p>

   - 해결 방법1: simple request

      <pre>
                              JS            browser                server
                              ------------->        --------------->
                                   fetch              GET /api
                                 
                                                    <---------------
                                                      200 OK
                                                      Access-Control-Allow-origin:*
                                                      ==============================
                                                      "{...........}"
                     response <-----------                                 
      </pre>

      조건:
      1) GET, HEAD, POST 중의 하나의 method를 쓰는 경우
      2) Accept, Accept-Language, Content-Type 등의 헤더만 사용하는 경우
      3) Content-Type 헤더에 application/x-www-form-urlencoded, multipart/for-data, text/palin 인 경우

   - 해결 방법2: preflight request

      <pre>
                           JS               browser                server
                              ------------->       --------------->
                                 fetch()           OPTIONS /api/token
                                                   Access-Control-Request-Headers: GET
                                                   ...


                                                   <---------------
                                                   200 OK
                                                   Access-Control-Allow-Origin: *



                                                   --------------->
                                                   GET /api

                                                   <---------------
                                                   200 OK
                                                   Access-Control-Allow-Origin:*
                                                   cookies: ......
                                                   ==============================
                                                   "{...........}"  

                     response <---------                                 
      </pre>h