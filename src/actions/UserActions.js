import UserService from '../services/UserService';
// import { loading, doneLoading } from './SystemActions';
// import history from './../history';

// // THUNK
// export function loadUsers() {
//   return async (dispatch) => {
//     try {
//       // example for loading
//       dispatch(loading());
//       const users = await UserService.getUsers();
//       dispatch(setUsers(users));
//     } catch (err) {
//       console.log('UserActions: err in loadUsers', err);
//       // example for rerouting - after changing the store
//       // history.push('/some/path');
//     } finally {
//       dispatch(doneLoading());
//     }
//   };
// }
// // THUNK
// export function removeUser(userId) {
//   return async (dispatch) => {
//     try {
//       await UserService.remove(userId);
//       dispatch(_removeUser(userId));
//     } catch (err) {
//       console.log('UserActions: err in removeUser', err);
//     }
//   };
// }

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function login(userCreds) {
  return async (dispatch) => {
    const user = await UserService.login(userCreds);
    if (user) dispatch(setUser(user));
  };
}

export function signup(userCreds) {
  return async (dispatch) => {
    const user = await UserService.signup(userCreds);
    dispatch(setUser(user));
  };
}

export function logout() {
  return async (dispatch) => {
    await UserService.logout();
    dispatch(setUser(null));
  };
}

// function setUsers(users) {
//   return {
//     type: 'SET_USERS',
//     users,
//   };
// }

// function _removeUser(userId) {
//   return {
//     type: 'USER_REMOVE',
//     userId,
//   };
// }
