import { Dictionary } from '@/get-dictionary'
import { ArrowBigLeft } from 'lucide-react'

interface GoToHomeButtonProps {
  lang: string
  dict : Dictionary
}

function GoToHomeButton({lang, dict} : GoToHomeButtonProps) {
  return (
    <div> 
        <ArrowBigLeft className="inline-block mr-2 h-3 w-3" />
        <a
          href={`/${lang}`}
          className="text-primary font-medium hover:underline text-sm"
        >
          {dict.auth.goToHome}
        </a>
    </div>
  )
}

export default GoToHomeButton