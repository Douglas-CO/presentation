export interface LoginResponse {
  token: string;
  user: UserLoginResponse;
  system_modules?: string[];
}

export const LOGIN_ERRORS = {
  wrongPassword: {
    allowedAttempts: 3,
    showMsgAttempt: 2,
  },
};

// use localStorage
export interface UserLoginResponse {
  id?: number;
  uuid?: string;

  client_id: string;
  client_secret: string;
}
