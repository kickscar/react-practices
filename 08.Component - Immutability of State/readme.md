## 08. Immutability: 컴포넌트 상태의 불변성

### 원칙:
1. 절대 컴포넌트의 상태를 직접 다루지 말 것
2. 항상 setState(클래스 컴포넌트) 또는 useState Hook(함수 컴포넌트)이 반환하는 함수를 사용하여 상태를 업데이트 할 것
3. 상태의 업데이트 시, 상태의 불변성을 유지해야 한다.

### 이유:
1. this.state를 직접 조작하는 것은 React의 상태 관리를 우회하는 것
2. 이 후, setState() 호출은 this.state를 직접 조작한 내용을 무효화 한다.
3. 나중에 성능개선 여지가 없다.
    - 객체의 변경 유무 검사시 객체 동질성 비교는 고비용
    - 객체의 변경 유무 검사시 객체 동일성 비교는 저비용(object1 === object2)
4. 결론은 변경하지 말고 대체해라: 불변성의 주개념!!!!
5. Functional JavaScript 에서는 4번이 표준이 아니다.(가능하지만) 따라서 의도치 않게 변경할 가능성이 있기 때문에 주의해야 한다.


### How I:
1. 비파괴 배열 메소드 및 연산자: map, filter, concat, ... (ES6 spread 연산자)
2. 예제: ex01

### How II:
1. Object.assign 을 이용해 변경이 적용된 객체를 새로 생성하는 방법
2. 예제: ex01

### How III:
1. How II의 해결 방법은 Nest Object가 있는 경우, 까다롭다.
   - Object.assign은 deep copy 지원 안함.
   - deep clone을 사용하는 것은 비용이 비싸다.
   - 직접 구현하는 경우는 관리가 어렵고 코드에 실수가 있을 가능성 많음.
2. 자바스크립트 한계
3. 예제: ex01

### How IV:
1. React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutablity helper 함수를 사용하는 것이다.
2. add-on 설치
   ```bash
   $ npm i react-addons-update
   ```

3. 적용
   ```javascript
   import update from 'react-addons-update';
   
   const newObject = update(objectInState, { [WHERE] : { [WHAT]: updateValue } });
   ```

4. WHERE
   - 객체: 업데이트 하고자 하는 프로퍼티 이름
   - 배열: 업데이트 하고자 하는 요소의 인덱스

5. WHAT Command
   - $push      * : 배열 요소 추가
   - $splice    * : 배열 요소 추가/삭제/대체
   - $unshift   * : 배열 요소 추가 
   - $set       * : 객체의 속성 변경 또는 배열의 요소 변경
   - $merge
   - $apply

6. 예제: ex02