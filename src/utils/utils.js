export const TOKEN_KEY = "";

export const login = () => {
  localStorage.setItem("TestLogin", TOKEN_KEY);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};