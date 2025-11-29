"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "@/lib/zod/auth.schema";
import { useRegister } from "@/lib/api/auth.api";
import { useRouter } from "next/navigation";

export const useRegisterForm = () => {
  const router = useRouter();
  const { register: registerApi } = useRegister();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const resData = await registerApi(data);
    console.log("Registration response:", resData);
    if(resData.success){
      router.push("/");
    } else {
      alert("Registration failed: " + resData.message);
    }
  };

  return { form, onSubmit };
};
