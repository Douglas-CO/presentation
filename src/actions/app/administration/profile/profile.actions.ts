import {
  Profile,
  getUrlParams,
  ProfilePaginatedRes,
  UseFetchEnabledParams,
} from "@/shared";
import { erpAPI } from "@/shared/axios/erp-api";
import { useQuery } from "@tanstack/react-query";
import { handleAxiosError } from "@/shared/axios/axios.utils";

export enum ProfileTSQEnum {
  PROFILES = "profiles",
  PROFILE = "profile",
}

///* tanStack query ---------------
export const useFetchProfiles = ({
  enabled = true,
  params,
  refetchInterval,
}: UseFetchEnabledParams<GetProfilesParams>) => {
  return useQuery({
    queryKey: [ProfileTSQEnum.PROFILES, ...Object.values(params || {})],
    queryFn: () => getProfiles(params),
    enabled: enabled,
    ...(refetchInterval && { refetchInterval }),
  });
};

export const useGetProfile = (uuid: string) => {
  return useQuery({
    queryKey: [ProfileTSQEnum.PROFILE, uuid],
    queryFn: () => getProfile(uuid),
    retry: false,
  });
};

///* axios ---------------
export type GetProfilesParams = Partial<Profile> & {
  page?: number;
  page_size?: number;

  filterByState?: boolean;
};
export type CreateProfileParams<T> = T;
export type CreateProfileParamsBase = Omit<Profile, "id">;
export interface UpdateProfileParams<T> {
  id: number;
  data: T;
}

export const getProfiles = async (params?: GetProfilesParams) => {
  const { get } = erpAPI();
  const stateParams = { ...params };

  const queryParams = getUrlParams(stateParams);
  return get<ProfilePaginatedRes>(`/profile/?${queryParams}`, true);
};

export const getProfile = async (uuid: string) => {
  const { get } = erpAPI();
  try {
    return await get<ProfilePaginatedRes>(`/profile/${uuid}`, true);
  } catch (error) {
    handleAxiosError(error);
  }
};
