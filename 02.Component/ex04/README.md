## ex04: Component - State

### 01. src/01: Basic Concepts
1. State
   - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
   - 컴포넌트는 this.state 안에 여러 데이터를 가질 수 있다.
   - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 this.setState() 함수를 호출해 변경할 수 있다.
   - 상태가 업데이트되면 컴포넌트의 반응형(Reactive) Rendeging이 트리거 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
   - 컴포넌트가 동작(event)과 상호작용을 수행할 수 있는 중요한 매커니즘을 제공한다.
   - 클래스 컴포넌트에서는 constructor 에서 초기화를 한다.
   - 함수 기반의 컴포넌트에서는 useState 이라는 Hook 함수를 사용해 초기화 한다.
2. 예제 
   src/01

### 02. src/02: Controlled Component

### 03. src/03: Uncontrolled Component(Anti-Pattern)
### 04. src/04: Stateful & Pure Component
### 05. src/05: Data Flow(Bottom-Up Direction)

### Run Examples
```bash
$ npm run debug src={no}
```