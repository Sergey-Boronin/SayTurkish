import { Check, Copy, Maximize2, Volume2 } from 'lucide-react'
import { useState } from 'react'
import { IconButton } from './IconButton'
import type { Phrase } from '../types/phrase'

type PhraseCardProps = {
  phrase: Phrase
  onSpeak: () => void
  onShow: () => void
}

async function copyPhrase(phrase: Phrase) {
  const text = `${phrase.tr}\n${phrase.pronunciation}\n${phrase.ru}`

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export function PhraseCard({ phrase, onSpeak, onShow }: PhraseCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await copyPhrase(phrase)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
      <div className="space-y-2">
        <p className="text-[1.28rem] font-black leading-snug tracking-[0] text-slate-950">
          {phrase.tr}
        </p>
        <p className="text-base font-bold leading-snug text-slate-700">
          {phrase.ru}
        </p>
        <p className="text-[1.05rem] font-black leading-snug text-teal-800">
          {phrase.pronunciation}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <IconButton label="Озвучить" onClick={onSpeak} tone="primary">
          <Volume2 aria-hidden="true" className="h-5 w-5" />
        </IconButton>
        <IconButton label={copied ? 'Скопировано' : 'Скопировать'} onClick={handleCopy}>
          {copied ? (
            <Check aria-hidden="true" className="h-5 w-5 text-emerald-700" />
          ) : (
            <Copy aria-hidden="true" className="h-5 w-5" />
          )}
        </IconButton>
        <IconButton label="Показать крупно" onClick={onShow}>
          <Maximize2 aria-hidden="true" className="h-5 w-5" />
        </IconButton>
      </div>
    </article>
  )
}
