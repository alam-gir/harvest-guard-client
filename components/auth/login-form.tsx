"use client"

import { Locale } from "@/i18n-config"
import { AuthCard } from "@/components/auth/auth-card"
import { InputField } from "@/components/auth/input-field"
import { SubmitButton } from "@/components/auth/submit-button"

import { Mail, KeyRound } from "lucide-react"
import { Dictionary } from "@/get-dictionary"

type LoginFormProps = {
  lang: Locale
  dict: Dictionary
}

export function LoginForm({ lang, dict }: LoginFormProps) {
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

      <form
        className="flex flex-col gap-4"
        method="post"
        // action="/api/auth/login" // when backend is ready
      >
        <InputField
          label={dict.auth.email}
          name="email"
          type="email"
          icon={Mail}
          required
        />

        <InputField
          label={dict.auth.password}
          name="password"
          type="password"
          icon={KeyRound}
          required
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

        <SubmitButton text={dict.auth.loginBtn} />
      </form>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        {dict.auth.noAccount}{" "}
        <a
          href={`/${lang}/register`}
          className="text-primary font-medium hover:underline"
        >
          {dict.auth.register}
        </a>
      </p>
    </AuthCard>
  )
}
