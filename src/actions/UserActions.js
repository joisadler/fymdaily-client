import userService from '../services/user.service';
import history from '../history';
import MessageActions from './MessageActions';

const { setMessage } = MessageActions;

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function login(userCreds, isRememberMeChecked) {
  return async (dispatch) => {
    const res = await userService.login(userCreds, isRememberMeChecked);
    const { user, message } = res;
    if (!user) dispatch(setMessage(message));
    else {
      // console.log(user)
      dispatch(setUser(user));
      dispatch(setMessage(''));
      history.push('/home');
    }
  };
}

export function signup(userCreds, isRememberMeChecked) {
  return async (dispatch) => {
    const res = await userService.signup(userCreds, isRememberMeChecked);
    const { user, message } = res;
    if (!user) dispatch(setMessage(message));
    else {
      // console.log(user)
      dispatch(setUser(user));
      dispatch(setMessage(''));
      history.push('/user-settings');
    }
  };
}

export function logout() {
  return async (dispatch) => {
    await userService.logout();
    dispatch(setUser(null));
  };
}
