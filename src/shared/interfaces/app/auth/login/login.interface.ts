import { PagingMetaResponse } from "@/shared/interfaces/common";

export interface LoginPaginatedRes {
  status: number;
  message: string;
  meta: PagingMetaResponse;
  items: Login[];
}

export interface Login {
  client_id: string;
  client_secret: string;
}
