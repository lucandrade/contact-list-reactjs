import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import Constants from '../constants/AppConstants';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.user = null;
    }

    change(action) {
        this.emit('change');
        this.emit('change_' + action);
    }

    setUser(user) {
    	this.user = user;
    	this.change('user');
    }

    getUser() {
    	return this.user;
    }

    handleActions(action) {
    	const { actions } = Constants;
    	switch (action.type) {
            case actions.setUser:
                this.setUser(action.user);
                break;
            default:
            	break;
        }
    }
}

const store = new AppStore();
dispatcher.register(store.handleActions.bind(store));
window.store = store;

export default store;
