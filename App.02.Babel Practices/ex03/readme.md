#### 1. Babel Plugin: 변환 규칙


#### 2. 실습
1. 프로젝트 생성
   
    $ npm init -y


2. Babel Core & Cli 설치
    
    $ npm i -D @babel/core @babel/cli
    $ npx babel --version


3. 변환 규칙 적용하기 I: 블록 스코프 변수

   1) 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping) 설치
    
        $ npm i -D @babel/plugin-transform-block-scoping

   2) 변환하기            
    
        $ npx babel src/index.js -o dist/index1.js --plugins @babel/plugin-transform-block-scoping


4. 변환 규칙 적용하기 II: 객체분해-파라미터

   1) 객체분해-파라미터 플러그인(@babel/plugin-transform-parameters) 설치
    
        $ npm i -D @babel/plugin-transform-parameters

   2) 변환하기

        $ npx babel src/index.js -o dist/index2.js --plugins @babel/plugin-transform-parameters


5. 변환 규칙 적용하기 III: for ~ of

   1) for ~ of 플러그인(@babel/plugin-transform-for-of) 설치
    
        $ npm i -D @babel/plugin-transform-for-of

   2) 변환하기
    
        $ npx babel src/index.js -o dist/index3.js --plugins @babel/plugin-transform-for-of


6. 변환 규칙 적용하기 IV: 설정(babel.config.json)을 사용하여 3가지 규칙 플러그인 동시에 적용하기 
   
   1) babel.config.json 설정

        "plugins": [
            "@babel/plugin-transform-block-scoping",
            "@babel/plugin-transform-parameters",
            "@babel/plugin-transform-for-of"
        ]

   2) 변환하기

        $ npx babel src/index.js -o dist/index.js 