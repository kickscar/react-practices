## 04. Component: Styling


#### Styling
1. React 컴포넌트의 다양한 스타일링 방법
2. CSS/SA(C)SS를 모듈과 비모듈로 다룰 때의 차이점
3. CSS/SA(C)SS를 지원하는 React UI 라이브러리
    - Material-UI ***
    - Tailwind CSS ***
    - React Bootstrap ***
    - PrimeReact **
    - Ant Design **
    - CSS in JS: Styled Components *** (o) 
    - React Modal *                    (o)
    - Font Awesome *


#### Examples
1. Inline Styling - (예제: ex01)
   - options.modules 설정 안함
   - CSS를 모듈로 다루던 안 다루던 상관없음

2. Normal CSS - (예제: ex02)
   - options.modules: false
   - CSS 모듈 사용 안함

3. CSS Module I - (예제: ex03)
   - options.modules: true
   - CSS 모듈 사용

4. CSS Module II - (예제: ex04)
   - options.modules: true
   - CSS 모듈 사용
   - 왜 CSS를 모듈로 다루어야 하는가?

5. SASS & SCSS I - (예제: ex05)
   - options.modules: true
   - CSS 모듈 사용
   - SASS & SCSS 적용

6. SASS & SCSS II - (예제: ex06)
   - options.modules: true
   - CSS 모듈 사용
   - Component별로 CSS 모듈화 하기
   - SASS & SCSS 적용

7. CSS in JS: Styled Component - (예제: ex07)
   - module: true
   - styled-components 패키지 의존성 추가

8. [과제] Glocery List SASS/SCSS 적용 (예제: ex08)
   - options.modules: true
   - CSS 모듈 사용
   - SASS & SCSS 적용
   - Component별로 CSS 모듈화 하기
   - Styled Component 사용하기

#### 실습
1. Install Packages
   
   1) Dependencies

        $ npm i react react-dom prop-types styled-components

   2) Dev. Dependencies
   
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react

   3) 새롭게 추가된 의존성
        - CSS in JS (예제: ex07): styled-components 패키지 추가


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
