## Class Component Lifecycle Function: Mount
1. constructor
2. getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react v16.3]
3. render
4. componentDidMount: 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후

## Class Component Lifecycle Function: Update
1. getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react v16.3]
2. shouldComponentUpdate: props state을 변경 했을 때, 리렌더링 여부를 결정한다.
3. render
4. getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
5. componentDidUpdate: DOM 업데이트가 끝난 직후 호출된다. DOM 작업이 가능하다.

## Class Component Lifecycle Function: Unmount
1. componentWillUnmount: 컴포넌트를 DOM에서 제거할 때

## example
1. src/01
2. src/02

## Alternative of LifeCycle Function in Functional Component: useEffect Hook 
3. src/03



## Run Examples
```bash
$ npm run debug src={no}
```