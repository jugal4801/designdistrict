import Image from 'next/image'

export function SiteMascot() {
  return (
    <div
      className="fixed bottom-4 left-4 z-40 pointer-events-none select-none"
      aria-hidden="true"
    >
      <Image
        src="/mascot.png"
        alt=""
        width={180}
        height={280}
        className="h-48 w-auto drop-shadow-[0_8px_24px_rgba(59,110,181,0.35)]"
      />
    </div>
  )
}
