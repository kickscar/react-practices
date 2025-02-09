## 03. Component: Property

#### Property
1. 컴포넌트의 데이터로 대부분 렌더링 데이터로 사용한다.
2. 컴포넌트 조합(Component Composition)과 작성에 중요한 역할을 한다.
3. 상위 컴포넌트가 전달하고 소유한다. 
4. 하위 컴포넌트에서는 변경 불가(immutable)
5. 상위 컴포넌트에서 하위 컴포넌트로 전달되는 데이터로 Data Flow(Top-Down)의 메카니즘을 제공한다.
6. Property Validator: 하위 컴포넌트는 상위 컴포넌트로 부터 전달받은 프로퍼티 값의 유효성을 검증할 수 있다.

#### Examples
1. 함수 컴포넌트의 property - (예제: ex01)
2. Data Flow - (예제: ex02)
3. 클래스 컴포넌트의 property - (예제: ex03)
4. Property Validator - (예제: ex04)

#### 실습
1. Install Packages

    1) Dependencies

       ```
       $ npm i react react-dom
       ```

    2) Dev. Dependencies

       ```
       $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react 
       ```
    3) 새롭게 추가된 의존성: Property Validator (예제: ex04)

       ```
       $ npm i prop-types
       ```

2. npm scripting: package.json

   ```
    "scripts": {
        "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "build": "npm i && npx webpack --config config/webpack.config.js --mode production"
    }
   ```

3. Configuration

    1) config/babel.config.json
    2) config/webpack.config.js

4. Landing

    1) public/index.html

5. Test

   ```
    $ npm start
   ```

6. Build

   ```
   $ npm run build 
   ```
