export const clearUserFromLS = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('persist');
};
