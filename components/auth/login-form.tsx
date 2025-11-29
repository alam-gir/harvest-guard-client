"use client";

import { Locale } from "@/i18n-config";
import { Dictionary } from "@/get-dictionary";
import GoToHomeButton from "./go-to-home-button";
import { useLogin } from "@/hooks/useLogin";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthCard } from "./auth-card";
import { LoginFormValues } from "@/lib/zod/auth.schema";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  lang: Locale;
  dict: Dictionary;
};

export function LoginForm({ lang, dict }: LoginFormProps) {
  const { form, login } = useLogin();
  const {setUser} = useAuthStore();
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const res = await login(values);
      if (res.success) {
        console.log("Logged in user:", res.data);
        setUser(res.data);
        router.push("/dashboard");
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <AuthCard>
      <div className="mb-6 text-center space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          {dict.auth.loginTitle}
        </h1>
        <p className="text-sm text-muted-foreground">
          {lang === "bd"
            ? "আপনার ইমেইল ও পাসওয়ার্ড দিয়ে অ্যাকাউন্টে প্রবেশ করুন।"
            : "Log in with your email and password to continue."}
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.auth.email}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={dict.auth.email} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.auth.password}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={dict.auth.password}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <span>{dict.auth.rememberMe}</span>
            </label>

            <a href="#" className="text-primary hover:underline">
              {dict.auth.forgotPassword}
            </a>
          </div>

          <Button type="submit" className="w-full mt-4">
            {dict.auth.loginBtn}
          </Button>
        </form>
      </Form>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        {dict.auth.noAccount}{" "}
        <a
          href={`/${lang}/register`}
          className="text-primary font-medium hover:underline"
        >
          {dict.auth.register}
        </a>
      </p>

      <div className="w-full h-auto flex justify-center items-center p-2">
        <GoToHomeButton dict={dict} lang={lang} />
      </div>
    </AuthCard>
  );
}
