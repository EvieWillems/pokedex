export const readToken = (): string | null => {
  return localStorage.getItem("token");
};

export const writeToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const clearToken = (): void => {
  localStorage.removeItem("token");
};

export interface User {
  id: number;
  email: string;
}

export async function fetchCurrentUser(token: string): Promise<User> {
  const response = await fetch(`${import.meta.env.VITE_TEAM_API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401) throw new Error("unable to find");
  if (!response.ok) throw new Error("Unable to fetch user");

  return response.json();
}
