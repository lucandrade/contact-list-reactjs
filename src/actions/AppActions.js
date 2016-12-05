import dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

const { actions } = AppConstants;

export function setUser(user) {
	dispatcher.dispatch({
		type: actions.setUser,
        user,
	});
}

export function showMessage(message) {
	dispatcher.dispatch({
		type: actions.showMessage,
        message,
	});
}

export function hideMessage() {
	dispatcher.dispatch({
		type: actions.hideMessage,
	});
}
