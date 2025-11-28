"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props {
  label: string
  name: string
  options: string[]
}

export function SelectField({ label, name, options }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="font-medium">{label}</Label>

      <Select name={name}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>

        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
