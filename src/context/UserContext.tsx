import { createContext, type ReactNode } from "react";
import { clearToken, readToken } from "../Authorzation/tokenManger";
import { useState, useEffect } from "react";
import type { User } from "../Authorzation/tokenManger";
import { fetchCurrentUser } from "../Authorzation/tokenManger";

export type UserState =
  | { status: "loading" }
  | { status: "anonymous" }
  | { status: "success"; user: User }
  | { status: "error"; message: string };

export interface UserContextValue {
  userState: UserState;
  //   login: (email: string, password: string) => Promise<void>;
  //   signUp: (email: string, password: string) => Promise<void>;
  //   logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(() =>
    readToken() ? { status: "loading" } : { status: "anonymous" },
  );
  useEffect(() => {
    const token = readToken();
    if (!token) return;

    fetchCurrentUser(token)
      .then((user) => {
        setUserState({ status: "success", user });
      })
      .catch((err) => {
        clearToken();
        setUserState({ status: "error", message: "Unable to fetch user" });
      });
  }, []);

  return <UserContext value={{ userState }}>{children}</UserContext>;
}
