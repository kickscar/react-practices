import {EventEmitter} from 'fbemitter';
import emailConstants from "./constants";
import AppDispatcher from "./AppDispatcher";

class AppStore {
    constructor(dispatcher) {
        this._emails = [];
        this._emitter = new EventEmitter();

        dispatcher.register((action) => {
            const result = this._reduce(this._emails, action);
            if(result !== this._emails) {
                this._emails = result;
                this._emitter.emit('change');
            }
        });
    }

    _reduce(state, action) {
        switch(action.type) {
            case emailConstants.CREATE_EMAIL:
                return state.concat([action.email]);
            case emailConstants.DELETE_EMAIL:
                return state.filter(email => email.no !== action.no);
            default:
                return state;
        }
    }

    getState() {
        return this._emails;
    }

    subsribe(callback) {
        return this._emitter.addListener('change', callback);
    }
}

export default new AppStore(AppDispatcher);