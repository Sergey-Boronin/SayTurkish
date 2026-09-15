import type { ReactNode } from 'react'

type IconButtonProps = {
  label: string
  children: ReactNode
  onClick: () => void
  tone?: 'primary' | 'neutral'
}

export function IconButton({
  label,
  children,
  onClick,
  tone = 'neutral',
}: IconButtonProps) {
  const colorClass =
    tone === 'primary'
      ? 'bg-teal-900 text-white active:bg-teal-950'
      : 'bg-slate-100 text-slate-700 active:bg-slate-200'

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`grid min-h-12 min-w-12 place-items-center rounded-lg ${colorClass}`}
    >
      {children}
    </button>
  )
}
