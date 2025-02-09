#### 1. Babel Cli
1. CLI 에서 명령어를 통해 Core 변환 기능을 사용할 수 있다.
2. 변환 규칙 등의 다양한 설정이 가능하다.

#### 2. 실습
1. 프로젝트 생성
   
    $ npm init -y

2. Babel Core & Cli 설치
    
    $ npm i -D @babel/core @babel/cli
    $ npx babel --version

3. src/ 폴더의 JS 파일 변환
    
    $ npx babel src -d dist