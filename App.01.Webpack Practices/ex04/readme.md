## Bundling II: CSS Module


#### 1. Project 
1. 초기화

   $ npm init -y

2. Install Packages

  $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader

3. NPM Scripting

  "scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
  }


#### 2. Application
1. src/App.js
2. src/index.js
3. src/assets/css/App.css
4. src/assets/css/Common.css



#### 3. Webpack Configuration
1. ./webpack.config.js
2. entry

  entry: path.resolve('src/index.js')

3. output

  output: {
    path: path.resolve('public'),
    filename: 'assets/js/main.js'
  }

4. devServer

  devServer: {
    host: '0.0.0.0',
    port: 9090,
    static: {
      directory: path.resolve('public'),
      watch: true
    }, 
    liveReload: true,
    compress: true,
    hot: false
  } 

5. module
  
  module: {
    rules:[{
      test: /\.css$/i,
      use:['style-loader', 'css-loader']
    }]
  }


#### 4. Build
1. Build(Bundling)
  
    $ npm run build  

2. public/asstes/js/main.js 생성 확인


#### 5. Test
1. Dev Server 실행

    $ npm start

2. 브라우저로 접근(localhost:9090)
   