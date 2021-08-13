## Basic Concepts of State
1. 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
2. 컴포넌트는 this.state 안에 여러 데이터를 가질 수 있다.
3. this.state은 특정 컴포넌트 전용이며 변경을 위해서는 this.setState() 함수를 호출해 변경할 수 있다.
4. 상태가 업데이트 되면 컴포넌트의 반응형(Reactive) Rendeging이 트리거 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
   - 따라서 컴포넌트 내부의 state을 최소한으로 유지하는 것이 좋다.
   - 컴포넌트 내부의 state을 외부에 정확하게 나타내고 인터페이스의 동기화 유지를 위해서 다시 렌더링 한다.
5. 컴포넌트가 동작(event)과 상호작용을 수행할 수 있는 중요한 매커니즘을 제공한다.
6. 클래스 컴포넌트에서는 constructor 에서 초기화를 한다.
7. 함수 기반의 컴포넌트에서는 useState 이라는 Hook 함수를 사용해 초기화 한다.
8. 예제(src/01)
   - Incrementor01: Managing State in Class Component
   - Incrementor02: Managing State in Functional Component

## Controlled vs Uncontrolled Component: Working with Forms
1. &lt;input&gt;, &lt;textarea&gt;, &lt;option&gt; 과 같은 폼 컴포넌트 중에 사용자 입력에 따라 state 값이 변경되고 렌더링되는 컴포넌트를 제어(Controlled) 컴포넌트라 한다.
2. 폼 컴포넌트가 반드시 제어 컴포넌트로 작성되어야 하는 것은 아니다. 상태를 제어하지 않는 비제어(Uncontrolled, Anti-Pattern) 컴포넌트로 작성될 수 있다.
3. 폼 컴포넌트를 제어 컴포넌트로 작성하는 것은 복잡해 보이지만 다음과 같은 장점이 있다.
   - 컴포넌트의 인터페이스 외부에서 직접 인터페이스의 값을 변경할 수 없고 내부 상태 변경으로 값을 고칠 수 있는 리액트의 컴포넌트 작성 원칙을 완벽히 준수한다.
   - 이 패턴은 사용자와의 상호작용(Interaction)에 반응(Reactive)하거나 Validation(유효성) 검증 코드 작성이 쉽다.
4. 예제 
   - src/02: Controlled Component(Including Special Case: TextArea and Select)
   - src/03: Uncontrolled Component: Anti Pattern but Best Approach in Some Cases

## Stateful & Pure Component
1. Stateful Component
   - 상태(State)를 관리하는 컴포넌트.
   - 보통 상태를 관리하는 컴포넌트는 컴포넌트 계층에서 상위에 있다.
   - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑한다.
2. Pure Component
   - 상태 관리없이 속성(props)으로 데이터 표시만 하는 컴포넌트
   - 재사용과 테스트 용이
3. 애플리케이션의 컴포넌트는 상태 비저장 순수 컴포넌트로 만드는 것이 좋다.
4. 어떤 컴포넌트가 상태 컴포넌트인가?
   - 상태를 기반으로 렌더링 하는 컴포넌트
   - 하위 컴포넌트들을 소유하는 공통 컴포넌트
   - 컴포넌트의 하이라키(hierarchy)에서 상위에 있고 상태를 가져야만 하는 컴포넌트
   - 없다면, 상태를 관리하는 새로운 컴포넌트를 만들고 하위 컴포넌트를 래핑한다.
5. 예제(emaillist): src/04
   - Stateful: &lt;_ex_upload_ /&gt;
   - Pure: &lt;Emaillist /&gt;, &lt;SearchBar /&gt;

## Data Flow(Bottom-Up Direction)
1. 리액트 애플리케이션에서는 데이터는 컴포넌트 계층 상위->하위(Top-Down) 전달이 보통이며 컴포넌트 데이터 전달 메커니즘이다.
2. 하지만 거의 모든 애플리케이션에서는 아래->위(Bottom-Up) 방향으로 통신해야 하는 경우가 반드시 있음.
3. 예제(emaillist): src/04: passing props of callback 

## Run Examples
```bash
$ npm run debug src={no}
```