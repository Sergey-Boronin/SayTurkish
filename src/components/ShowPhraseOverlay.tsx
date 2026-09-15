import { X, Volume2 } from 'lucide-react'
import type { Phrase } from '../types/phrase'

type ShowPhraseOverlayProps = {
  phrase: Phrase
  onClose: () => void
  onSpeak: () => void
}

export function ShowPhraseOverlay({
  phrase,
  onClose,
  onSpeak,
}: ShowPhraseOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex bg-slate-950/50 p-3 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Крупный режим фразы"
    >
      <div className="mx-auto flex min-h-full w-full max-w-[430px] flex-col rounded-xl bg-[var(--surface)] p-4 shadow-2xl">
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="grid min-h-12 min-w-12 place-items-center rounded-lg bg-slate-100 text-slate-700 active:bg-slate-200"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center py-8 text-center">
          <p className="text-[2.7rem] font-black leading-[1.04] tracking-[0] text-slate-950">
            {phrase.tr}
          </p>
          <p className="mx-auto mt-7 max-w-[20rem] text-[1.55rem] font-black leading-tight text-teal-800">
            {phrase.pronunciation}
          </p>
          <p className="mx-auto mt-4 max-w-[19rem] text-base font-bold leading-6 text-slate-500">
            {phrase.ru}
          </p>
        </div>

        <button
          type="button"
          onClick={onSpeak}
          className="mb-[env(safe-area-inset-bottom)] flex min-h-16 w-full items-center justify-center gap-3 rounded-lg bg-teal-900 px-4 text-lg font-black text-white active:bg-teal-950"
        >
          <Volume2 aria-hidden="true" className="h-6 w-6" />
          Озвучить
        </button>
      </div>
    </div>
  )
}
