## 07. Component: Lifecycle & useEffect

#### Class Component: Component Lifecycle
1. Lifecycle 1: mount
    1) constructor
    2) getDerivedStateFromProps
    3) render ***
    4) componentDidMount ***

2. Lifecycle 2: update
    1) getDerivedStateFromProps
    2) shouldComponentUpdate *
    3) render ***
    4) getSnapshotBeforeUpdate
    5) componentDidUpdate ***

3. Lifecycle 3: unmount
    1) componentWillUnmount() ***

#### Functional Component: useEffect(Component Alternative Lifecycle)
1. 대체1: getDerivedStateFromProps
2. After Rendering
   1) 대체2: componentDidUpdate 
   2) 어떤 특정 상태 변화에 반응
3. 대체3: componentDidMount & componentWillUnmount

#### Examples
1. Component Lifecycle - (예제: ex01)
2. useEffect - (예제: ex02)
3. Clock Component I: Class Component - (예제: ex03)
4. Clock Component II: Function Component - (예제: ex04)

#### 실습
1. Install Packages
   1) Dependencies
      ```
      $ npm i react react-dom prop-types styled-components
      ```

   2) Dev. Dependencies

      ```
      $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass babel-loader @babel/core @babel/preset-env @babel/preset-react 
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
