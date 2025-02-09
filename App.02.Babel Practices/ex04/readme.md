#### 1. Babel Env Preset: 변환 규칙 모음

1. 여러 플러그인 변환 규칙을 한 번에 적용하기 위해서 관련 플러그인을 모아 놓은 것
2. 종류
    1) ECMAPScript 문법 규칙들을 년도 별로 모아 놓은 것
    2) ECMAScript stage (level 0, 1, 2, 3)로 모아 놓은 것
    3) 3rd party: TypeScript, JSX 등

3. ECMAScript Preset
    1) Env Preset(@babel/preset-env)
    2) ECMASScript Level3
    

#### 2. 실습 ====

1. 프로젝트 생성
   
    $ npm init -y


2. Babel Core & Cli 설치
    
    $ npm i -D @babel/core @babel/cli
    $ npx babel --version

3. Env Preset 설치
    
    $ npm i -D @babel/preset-env
    $ npm list --depth=1 | grep @babel/plugin

4. Env Preset 설정
    - 타겟 브라우저 버젼을 설정
    - 브라우별 es6 호환성 테이블(https://compat-table.github.io/compat-table/es6/) 참고            

    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "ie": 11,
                "edge": "126",
                "firefox": "127",
                "chrome": "126",
                "opera": "98",
                "safari": "17"
            }
        }]        
    ]

5. 변환 하기

    $ npx babel src/index.js -o dist/index.js 