import {EventEmitter} from 'fbemitter';
import AppDispatcher from "./AppDispatcher";
import emailConstants from "./constants";

const EmailStore = {
    _emitter: new EventEmitter(),
    _emails: [],
    getState() {
        return this._emails;
    },
    addListender(callback) {
        this._emitter.addListener('change', callback);
    }
};

EmailStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case emailConstants.CREATE_EMAIL:
            this._emails = this._emails.concat([action.email]);
            this._emitter.emit('change');
            break;
        case emailConstants.DELETE_EMAIL:
            this._emails = this._emails.filter(email => email.no !== action.no)
            this._emitter.emit('change');
            break;
    }
}.bind(EmailStore));


export default EmailStore;