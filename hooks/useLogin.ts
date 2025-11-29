"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/lib/zod/auth.schema";
import { mutate } from "swr";
import api from "@/lib/axios";
import { LoginResponse } from "@/types/auth.types";

export const useLogin = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (data: LoginFormValues): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>("/auth/login", data);
    await mutate("/auth/me");
    return res.data;
};

  return { form, login };
};
