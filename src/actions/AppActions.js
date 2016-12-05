import dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

const { actions } = AppConstants;

export function setUser(user) {
	dispatcher.dispatch({
		type: actions.setUser,
        user,
	});
}
