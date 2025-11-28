'use client'

interface FooterDict {
  rights: string
  sdg: string
}

interface Props {
  dict: FooterDict
}

export function LandingFooter({ dict }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1f0a] py-6 text-xs text-[#e5f7d0]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#e3f7c7]">HarvestGuard</span>
          <span className="text-[#a1b99a]">
            © {year}. {dict.rights}
          </span>
        </div>
        <p className="max-w-md text-[11px] leading-relaxed text-[#a7c19f]">
          {dict.sdg}
        </p>
      </div>
    </footer>
  )
}
