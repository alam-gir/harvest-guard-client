"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"

export function SubmitButton({ text }: { text: string }) {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      className="w-full mt-4"
      onClick={() => setLoading(true)}
      type="submit"
    >
      {loading ? <Loader2 className="animate-spin h-4 w-4" /> : text}
    </Button>
  )
}
