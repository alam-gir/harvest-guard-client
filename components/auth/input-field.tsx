"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LucideIcon } from "lucide-react"

interface Props {
  label: string
  name: string
  type?: string
  icon?: LucideIcon
  required?: boolean
}

export function InputField({ label, name, type = "text", icon: Icon, required }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="font-medium">{label}</Label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        )}
        <Input
          id={name}
          name={name}
          type={type}
          required={required}
          className={`${Icon ? "pl-9" : ""}`}
        />
      </div>
    </div>
  )
}
