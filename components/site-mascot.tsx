import { AnimatedMascot } from '@/components/animated-mascot'

export function SiteMascot() {
  return (
    <div
      className="fixed bottom-4 left-4 z-40 pointer-events-none select-none"
      aria-hidden="true"
    >
      <AnimatedMascot variant="corner" />
    </div>
  )
}
