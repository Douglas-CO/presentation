import { Login, PagingPartialParams, ToastWrapper, getEnvs } from "@/shared";
import axios from "axios";

export enum LoginTSQEnum {
  LOGINS = "logins",
  LOGIN = "login",
}

///* tanStack query ---------------

///* axios ---------------
export type GetLoginsParams = Partial<Login> & PagingPartialParams;
export type CreateLoginParams<T> = T;
export type CreateLoginParamsBase = Omit<Login, "id">;
export interface UpdateLoginParams<T> {
  id: number;
  data: T;
}

const { VITE_ERPAPI_URL } = getEnvs();

export const createLogin = async <T extends Login>(
  data: CreateLoginParams<T>
) => {
  try {
    await axios.post(`${VITE_ERPAPI_URL}/oauth/token/`, {
      client_id: data.client_id,
      client_secret: data.client_secret,
    });
    return ToastWrapper.success("Inicio de sesión exitoso");
  } catch (error: any) {
    const status = error?.response?.status;
    const rawMessage = error.response.data.detail
      ? error.response.data.detail
      : error?.message;

    const message = status
      ? `Error ${status}: ${rawMessage}`
      : `Error inesperado: ${rawMessage || "Intenta de nuevo más tarde."}`;
    ToastWrapper.error(message);
  }
};
