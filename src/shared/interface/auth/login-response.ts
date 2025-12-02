export interface LoginResponse {
  token: string;
  user: UserLoginResponse;
  system_modules?: string[];
  company_data?: CompanyLoginResponse;

  // ---
  requires_2fa?: boolean; // for 2fa
  challenge_id?: string; // for 2fa
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
  username: string;
  email: string;
  razon_social: string;
  profile_image_url?: string;

  is_valid_salesman?: boolean;
  is_superuser: boolean;

  ///* fk
  permissions: string[];
  groups: number[];

  area?: string;
  canal_venta?: number;
  centro_costo?: number;
  company_data?: CompanyLoginResponse; 
}

export interface CompanyLoginResponse {
  id?: number;
  uuid?: string;

  company_name: string;
  commercial_name: string;

  email: string;
  main_address: string;
  establishment_address: string;
  phone: string;
  mobile: string;

  schema_name: string; // db

  logo_1_url?: string;
  logo_2_url?: string;
}
