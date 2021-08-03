import React, { Component } from 'react';

export default class LifeCircle extends Component {
    constructor() {
        super(...arguments);
        this.h3Ref = null;
        this.state = {
            color: null
        }

        console.log('[MOUNT01]: constructor()');
    }

    /**
     *
     *  props로 받아온 값을 state에 동기화 한다.[react v16.3]
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProps(nextProps=${nextProps.color}, prevState=${prevState.color})`);
        return nextProps.color !== prevState.color ? {color: nextProps.color} : null;
    }

    /**
     *
     *  props state을 변경 했을 때, re-rendering 여부(반환값 true: 한다. false: 안한다)를 결정한다.
     *  현재 데이터: this.props, this.state, 변경 데이터: nextProps, nextState로 접근 가능하다.
     *  컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[UPDATE02]: shouldComponentUpdate(nextProps=${nextProps.color}, nextState=${nextState.color})`)
        return true;
    }

    render() {
        console.log('[MOUNT03][UPDATE03]: render()');
        return <h3 style={ {backgroundColor: this.state.color, width:100, height:50} } ref={ref => this.h3Ref = ref} />
    }

    /**
     *
     *  render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
     *  반환 값은 다음 호출되는 componentDidUpdate() 세번쨰 아큐먼트 snapshot으로 전달된다.
     *  주로 업데이트 직전의 값을 참고해야 할 일이 있을 때 오버라이딩 한다.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[UPDATE04]: getSnapshotBeforeUpdate(prevProps=${prevProps.color}, prevState=${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }

    /**
     *
     *  DOM 업데이트가 끝난 직후 호출 DOM 작업이 가능하다.
     *  변경 전의 state 값과 props값에 접근 가능
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        const hexColor = snapshot.replace(/[^\d,]/g, '').split(',').map(e => parseInt(e)).reduce((s, e) => s + ('0' + e.toString(16)).slice(-2), "#");
        console.log(`[UPDATE05]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${hexColor})`);
    }

    /**
     *
     *  컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후
     *  다른 자바 스크립트 라이브러리 프레임워크 함수 호출 이벤트 등록, 타이머 설정, 네크워크 통신등을 할 수 있다.
     */
    componentDidMount() {
        console.log('[MOUNT04]: componentDidMount()');
    }

    /**
     *  컴포넌트를 DOM에서 제거할 때
     *  componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM등을 제거!
     */
    componentWillUnmount() {
        console.log('[UNMOUNT]: componentWillUnmount()');
    }
}