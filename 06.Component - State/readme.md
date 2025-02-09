## 06. Component: State

#### Component State? 
1. 컴포넌트 내부의 상태를 나타내는 쓰기 가능한 데이터
2. 컴포넌트 this.state(클래스 컴포넌트) 안에 여러 데이터(상태)를 가질 수 있다.
3. 컴포넌트의 상태가 변경되면 그 컴포넌트의 반응형(Reactive) 렌더링이 트리거 된다. 즉, 그 컴포넌트와 자식 컴포넌트가 다시 렌더링이 된다. **
4. 클래스 컴포넌트에서는 constructor 안에서 상태를 초기화 한다.
5. 클래스 컴포넌트에서는 상태 변경을 위해 setState 함수를 사용한다.
6. 함수 컴포넌트에서는 useState Hook 함수를 사용하여 초기화 한다.
7. 함수 컴포넌트에서는 상태 변경을 위해 useState Hook 함수가 반환하는 배열의 두번째 요소를 함수로 사용한다.


#### 상태 컴포넌트 vs 순수 컴포넌트
1. 상태 컴포넌트
   
   - 상태 관리를 구현한 컴포넌트
   - 보통, 컴포넌트 계층에서 상태 컴포넌트는 상위에 있다.
   - 보통, 상태 컴포넌트는 하나 이상의 순수 컴포넌트들을 래핑한다.
   
2. 순수 컴포넌트(Pure, Dummy Component)

   - 상태 없이 속성(Props)으로 데이터를 전달 받아 화면 렌더링만 하는 컴포넌트
   - 재사용성이 좋다.
   - 테스트 하기 좋다.

3. 애플리케이션의 컴포넌트들은 상태 컴로넌트와 순수 컴포넌트로 분리해서 개발하는 것이 바람직하다.


#### 제어 컴포넌트
1. input, textarea, select등과 같은 폼(Form) 컴포넌트에서 사용자 입력에 따라 state값이 변경되고 렌더링하는 컨포넌트
2. "컴포넌트의 UI 변경은 외부에서 할 수 없다. 컴포넌트 내부의 상태 변경을 통한 반응형 렌더링으로만 가능하다." - 리액트 패턴을 준수할 수 있다.
3. 사용자 입력 값을 제어: 제한(Constraints)과 다양한 Validation이 가능.
4. Form 컴포넌트들을 반드시 제어 컴포넌트로 작성해야 하는 것은 아니다. 상태를 제어하지 않는 비제어 컴포넌트를 작성할 수 있다.


#### Data Flow
1. 리액트에서 컴포넌트 사이의 데이터 전달은 부모에서 자식으로 Props을 통해서만 가능하다.

<pre>   
                data
Top (Component) ------> Bottom (Component)
                  props
</pre>

2. How BottomUp & Cross ?

<pre>

(1) Bottom-Up
                    data
Top (Component)  <------  Bottom (Component)


(2) Across
                       data
Sibling (Component) <-------> Sibling (Component)    

</pre>    


#### Examples
1. Component 상태 관리하기 - (예제: ex01)
2. Form의 제어 컴포넌트 - (예제: ex02)
3. Form의 비제어 컴포넌트 - (예제: ex03)
4. React Modal 상태 관리하기 - (예제: ex04)
5. DataFlow: Bottom-Up - (예제: tabbox)
6. DataFlow: Across - (예제: emaillist) 


#### 실습
1. Install Packages
   
   1) Dependencies

        $ npm i react react-dom prop-types styled-components

   2) Dev. Dependencies
   
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react

   3) 새롭게 추가된 의존성
        - React Modal UI 상태 관리하기 (예제: ex04): react-modal 패키지 추가

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
