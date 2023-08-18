export const getAccessToken = () => localStorage.getItem("token")?.slice(1, -1);

export const setToken = (token: string) =>
  localStorage.setItem("token", JSON.stringify(token));

export const isAuthenticated = () => (getAccessToken() ? true : false);

export const clearStorage = () => localStorage.clear();
