import useSWR, { mutate } from "swr";
import api from "@/lib/axios";
import { fetcher } from "@/lib/fetcher";
import { RegisterFormValues } from "../zod/auth.schema";
import { TRegistrationResponse } from "@/types/auth.types";

export const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/auth/me", fetcher);
  return { user: data, error, isLoading, mutate };
};

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    await api.post("/auth/login", { email, password });
    // Revalidate user data
    await mutate("/auth/me");
  };
  return { login };
};

export const useRegister = () => {
  const register = async (
    data: RegisterFormValues
  ): Promise<TRegistrationResponse> => {
    const res = await api.post<TRegistrationResponse>("/auth/register", data);
    await mutate("/auth/me");
    return res.data;
  };

  return { register };
};

export const useLogout = () => {
  const logout = async () => {
    await api.post("/auth/logout");
    await mutate("/auth/me", null);
  };
  return { logout };
};
