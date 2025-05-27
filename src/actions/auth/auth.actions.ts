import { ToastWrapper } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { erpAPI } from "@/shared/axios/erp-api";
import { LoginResponse } from "@/shared/interfaces";

import { useAuthStore } from "@/store/auth";
import { useUiStore } from "@/store/ui";

export type LoginData = {
  client_id: string;
  client_secret: string;
};

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const logOutWithoutToken = useAuthStore((s) => s.onLogOutWithoutToken);
  const setIsGlobalLoading = useUiStore.getState().setIsGlobalLoading;

  return useMutation({
    mutationKey: ["login"],

    mutationFn: (data: LoginData) => login(data),

    onSuccess: (res) => {
      const { loginResponse } = res;
      const { token } = loginResponse || {};

      setAuth(token);
      ToastWrapper.success("Inicio de sesión exitoso");
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const msg = err.response?.data?.message || "Error al iniciar sesión";
        ToastWrapper.error(msg);
      } else {
        ToastWrapper.error("Error inesperado");
      }
      logOutWithoutToken();
    },

    onSettled: () => {
      setIsGlobalLoading(false);
    },
  });
};

export const login = async (data: LoginData) => {
  const { post } = erpAPI();
  const setIsGlobalLoading = useUiStore.getState().setIsGlobalLoading;

  setIsGlobalLoading(true);

  const loginRes = await post<LoginResponse>(
    "/oauth/token/",
    {
      client_id: data.client_id,
      client_secret: data.client_secret,
    },
    false
  );

  setIsGlobalLoading(false);

  return {
    loginResponse: {
      token: loginRes.access_token,
    },
  };
};

export const logOutAxios = async () => {
  const { post } = erpAPI();
  return post("/auth/logout/", null, true);
};
