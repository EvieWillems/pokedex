import { readToken } from "../Authorization/tokenManager";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}



export const apiGet = async <T>(
  path: string
): Promise<T> => {
  const response = await fetch(path);


    if (!response.ok) {
    throw new ApiError("could not connect to API",500);
    }
    
    return (await response.json()) as T

};


export const apiGetAuth = async <T>(
      path:string
    ): Promise<T> => {
      const token = readToken()
      const response = await fetch(path, {
        headers: {Authorization: `Bearer ${token}`}
      })
      if (response.status === 401) throw new Error("unable to authenticate")
      if (!response.ok) throw new Error("unable to find team")

      return (await response.json()) as T
    }