"use client"

import { Locale } from "@/i18n-config"
import { AuthCard } from "@/components/auth/auth-card"
import { InputField } from "@/components/auth/input-field"
import { SelectField } from "@/components/auth/select-field"
import { SubmitButton } from "@/components/auth/submit-button"

import { Mail, Phone, User, KeyRound } from "lucide-react"
import { Dictionary } from "@/get-dictionary"

type RegisterFormProps = {
  lang: Locale
  dict: Dictionary
}

export function RegisterForm({ lang, dict }: RegisterFormProps) {
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

      <form
        className="flex flex-col gap-4"
        method="post"
        // action="/api/auth/register" // when backend is ready
      >
        <InputField
          label={dict.auth.name}
          name="name"
          icon={User}
          required
        />

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

        <InputField
          label={dict.auth.phone}
          name="phone"
          type="tel"
          icon={Phone}
        />

        <div className="mt-2 space-y-2">
          <p className="text-sm font-medium">
            {dict.auth.locationInfo}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SelectField
              label={dict.auth.division}
              name="division"
              options={[
                "Dhaka",
                "Chattogram",
                "Rajshahi",
                "Khulna",
                "Barishal",
                "Sylhet",
                "Rangpur",
                "Mymensingh",
              ]}
            />
            <SelectField
              label={dict.auth.district}
              name="district"
              options={["Feni", "Cumilla", "Noakhali", "Chattogram"]}
            />
            <SelectField
              label={dict.auth.upazila}
              name="upazila"
              options={["Sonagazi", "Daganbhuiyan", "Sadar"]}
            />
            <SelectField
              label={dict.auth.village}
              name="village"
              options={["Village 1", "Village 2", "Village 3"]}
            />
          </div>
        </div>

        <SubmitButton text={dict.auth.registerBtn} />
      </form>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        {dict.auth.haveAccount}{" "}
        <a
          href={`/${lang}/login`}
          className="text-primary font-medium hover:underline"
        >
          {dict.auth.login}
        </a>
      </p>
    </AuthCard>
  )
}
