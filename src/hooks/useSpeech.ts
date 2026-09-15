import { useCallback, useEffect, useState } from 'react'

function findTurkishVoice(voices: SpeechSynthesisVoice[]) {
  return (
    voices.find((voice) => voice.lang === 'tr-TR') ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('tr')) ??
    null
  )
}

export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const isSpeechSupported =
    typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    if (!isSpeechSupported) {
      return
    }

    const loadVoices = () => setVoices(window.speechSynthesis.getVoices())
    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
    }
  }, [isSpeechSupported])

  const speak = useCallback(
    (text: string) => {
      if (!isSpeechSupported) {
        return
      }

      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'tr-TR'
      utterance.rate = 0.88
      utterance.pitch = 1

      const voice = findTurkishVoice(voices)
      if (voice) {
        utterance.voice = voice
      }

      window.speechSynthesis.speak(utterance)
    },
    [isSpeechSupported, voices],
  )

  return { speak, isSpeechSupported }
}
