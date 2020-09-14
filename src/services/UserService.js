import HttpService from './HttpService';

function getUsers() {
  return HttpService.get('user');
}

function getById(userId) {
  return HttpService.get(`user/${userId}`);
}

function remove(userId) {
  return HttpService.delete(`user/${userId}`);
}

function update(user) {
  return HttpService.put(`user/${user._id}`, user);
}

function _handleLogin(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
  return user;
}

async function login(userCred) {
  const res = await HttpService.post('auth/login', userCred);
  if (res.user) {
    console.log(res.message);
    return _handleLogin(res.user);
  }
  console.log(res.message);
}

async function signup(userCred) {
  const user = await HttpService.post('auth/signup', userCred);
  return _handleLogin(user);
}

async function logout() {
  await HttpService.post('auth/logout');
  sessionStorage.clear();
}

export default {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
};
