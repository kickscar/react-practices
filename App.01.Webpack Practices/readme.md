## Webpack Practices


#### 01. Application Bundling
1. webpack: 작게 분리된 많은 애플리케이션 모듈(js, css, scss/sass, images, font)들을 '의존성 분석'을 하여 하나의 자바스크립트 모듈로 묶는 도구
2. webpack의 최종 결과물인 하나의 js 파일을 번들(buddle)이라 하고 묶는 작업을 번들링(bundling)이라 한다.
3. js 모듈뿐만 아니라 다양한 asset(images, css, sass/scss, font)들도 모듈로 취급한다.
4. 좁은 의미에서 보면, 다양하고 많은 개발 모듈들을 하나의 최종 애플리케이션으로 빌드하는 단계별 작업들 중에 마지막 작업이다.
5. 하지만 넓은 의미에서 보면, 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하기 보다는 빌드 작업 전체를 번들링으로 볼 수도 있다. 


#### 02. Build
1. Linting(ESLint)
2. Document(JSDocs)
3. Test(Mocha, Jest)
4. 난독/압축(Uglify)
5. 번들링(Bundling)


#### 03. Webpack
1. 설치 패키지
    
    1) webpack : Core
    2) webpack-cli : Core 기능을 실행하기 위한 CLI 도구
    3) webpack-dev-server : 테스트를 위해 webpack에서 제공하는 개발서버
    4) loaders : css-loader, style-loader, sass-loader(include node-sass), babel-loader, etc ...

2. 설정: webpack.config.js

    1) entry 설정
    2) 최종 결과물인 번들링 파일의 이름 및 위치
    3) 다양한 로더 설정
    4) 개발 서버 설정


#### 04. Practices
1. Bundling I: JS Module - (예제: ex01)
2. Bundling Environment Configuration: webpack.config.js - (예제: ex02)
3. Webpack Development Server - (예제: ex03)
4. Bundling II: CSS Module - (예제: ex04)
5. Bundling III: SASS/SCSS Module - (예제: ex05)
6. Bundling IV: Image Module - (예제: ex06)
7. Plugins - (예제: ex07)
