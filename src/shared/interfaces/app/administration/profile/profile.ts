import { PagingMetaResponse } from "@/shared/interfaces/common";

export interface ProfilePaginatedRes {
  status: number;
  message: string;
  meta: PagingMetaResponse;
  items: Profile[];
}

export interface Profile {
  id?: number;
  uuid?: string;

  estado: string;
  user: number;

  state: boolean;
  created_at?: string;
  modified_at?: string;
}

export type ProfileLimitData = Pick<Profile, "user" | "estado">;
