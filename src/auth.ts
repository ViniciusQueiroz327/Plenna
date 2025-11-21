export interface User {
  id: number;
  nome: string;
  email: string;
}

export const setLoggedUser = (user: User) => {
  localStorage.setItem("plenna_user", JSON.stringify(user));
};

export const getLoggedUser = (): User | null => {
  const user = localStorage.getItem("plenna_user");
  return user ? JSON.parse(user) : null;
};

export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("plenna_user");
};

export const logout = () => {
  localStorage.removeItem("plenna_user");
};