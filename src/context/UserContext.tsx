import { createContext, type ReactNode } from "react";
import { clearToken, readToken, writeToken } from "../Authorization/tokenManager";
import { useState, useEffect } from "react";
import type { User } from "../Authorization/tokenManager";
import { fetchCurrentUser } from "../Authorization/tokenManager";

export type UserState =
  | { status: "loading" }
  | { status: "anonymous" }
  | { status: "success"; user: User }
  | { status: "error"; message: string };

export interface UserContextValue {
  userState: UserState;
    userLogin: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {

  const teamUrl:string = import.meta.env.VITE_TEAM_API_URL

  const [userState, setUserState] = useState<UserState>(() =>
    readToken() ? { status: "loading" } : { status: "anonymous" },
  );
  useEffect(() => {
    const token = readToken();
    if (!token) return;

    fetchCurrentUser(token)
      .then((user) => {
        setUserState({ status: "success", user });
        console.log(user.email)
      })
      .catch((err) => {
        clearToken();
        setUserState({ status: "error", message: "Unable to fetch user" });
        console.log("error, token cleared")
      });
  }, []);



  const userLogin = async (email:string, password:string) => {
    const response = await fetch(`${teamUrl}/auth/login`,
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email,password}),

      }
        );
        if (response.status === 401) {
        throw new Error("Invalid email or password");
      }
      if (!response.ok) throw new Error("Unable to log in, please try again");

      const {access_token} = await response.json()
      const user = await fetchCurrentUser(access_token)

      if (user) writeToken(access_token)
      setUserState({ status:"success", user })

    }

  const signUp = async (email:string, password:string) => {
    const response = await fetch(`${teamUrl}/auth/register`,
      {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      }
    );
      if (response.status === 409) {
    throw new Error("That email is already registered");
    }
    if (!response.ok) throw new Error("Unable to sign up, please try again");

    await userLogin(email,password)
  }

  const logOut = async () => {
    clearToken();
    setUserState({ status: "anonymous" });
}

  return <UserContext value={{ userState,userLogin,signUp,logOut }}>{children}</UserContext>;
}
