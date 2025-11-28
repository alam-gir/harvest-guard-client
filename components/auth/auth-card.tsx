"use client"

import { PropsWithChildren } from "react"

export function AuthCard({ children }: PropsWithChildren) {
  return (
    <div className="w-full px-4 min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-card shadow-sm rounded-xl p-6">
        {children}
      </div>
    </div>
  )
}
