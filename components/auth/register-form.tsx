"use client";

import { Locale } from "@/i18n-config";
import { Dictionary } from "@/get-dictionary";
import GoToHomeButton from "./go-to-home-button";
import { useRegisterForm } from "@/hooks/useRegisterForm";

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

type RegisterFormProps = {
  lang: Locale;
  dict: Dictionary;
};

export function RegisterForm({ lang, dict }: RegisterFormProps) {
  const { form, onSubmit } = useRegisterForm();

  return (
    <AuthCard>
      <div className="mb-6 text-center space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          {dict.auth.registerTitle}
        </h1>
        <p className="text-sm text-muted-foreground">
          {lang === "bd"
            ? "কয়েকটি সহজ ধাপেই আপনার কৃষি অ্যাকাউন্ট তৈরি করুন।"
            : "Create your farming account in a few simple steps."}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.auth.name}</FormLabel>
                <FormControl>
                  <Input placeholder={dict.auth.name} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                  <Input type="password" placeholder={dict.auth.password} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.auth.phone}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={dict.auth.phone} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full mt-4" type="submit">
            {dict.auth.registerBtn}
          </Button>
        </form>
      </Form>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        {dict.auth.haveAccount}{" "}
        <a
          href={`/${lang}/login`}
          className="text-primary font-medium hover:underline"
        >
          {dict.auth.login}
        </a>
      </p>

      <div className="w-full h-auto flex justify-center items-center p-2">
        <GoToHomeButton dict={dict} lang={lang} />
      </div>
    </AuthCard>
  );
}
