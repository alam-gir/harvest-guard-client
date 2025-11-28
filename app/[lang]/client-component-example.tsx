'use client'

type Dictionary = {
  welcome: string;
  about_us: string;
}

export default function ClientComponentExample({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Client Component Example</h2>
      <p>{dictionary.welcome}</p>
    </div>
  )
}
