export const saveCredentials = (token, user) => {
  localStorage.setItem('token', token);
  const stringifiedUser = JSON.stringify(user);
  localStorage.setItem('user', stringifiedUser);
};

export const deleteCredentials = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const getLoggedInUser = () => {
  return localStorage.getItem('user');
};
