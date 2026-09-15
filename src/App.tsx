import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { CategoryTabs } from './components/CategoryTabs'
import { EmptyState } from './components/EmptyState'
import { PhraseCard } from './components/PhraseCard'
import { ShowPhraseOverlay } from './components/ShowPhraseOverlay'
import { categories, phrases } from './data/phrases'
import { useSpeech } from './hooks/useSpeech'
import type { CategoryId, Phrase } from './types/phrase'
import { normalizeText } from './utils/search'

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('taxi')
  const [query, setQuery] = useState('')
  const [selectedPhrase, setSelectedPhrase] = useState<Phrase | null>(null)
  const { speak, isSpeechSupported } = useSpeech()

  const normalizedQuery = normalizeText(query)

  const visiblePhrases = useMemo(() => {
    const activePhrases = phrases.filter(
      (phrase) => phrase.category === activeCategory,
    )

    if (!normalizedQuery) {
      return activePhrases
    }

    return activePhrases.filter((phrase) =>
      [phrase.tr, phrase.ru, phrase.pronunciation].some((value) =>
        normalizeText(value).includes(normalizedQuery),
      ),
    )
  }, [activeCategory, normalizedQuery])

  const activeCategoryTitle =
    categories.find((category) => category.id === activeCategory)?.title ?? ''

  return (
    <main className="min-h-svh bg-[var(--app-bg)] text-slate-950">
      <div className="mx-auto flex min-h-svh w-full max-w-[430px] flex-col border-x border-black/5 bg-[var(--surface)] shadow-[0_16px_50px_rgba(40,46,54,0.08)]">
        <header className="sticky top-0 z-20 border-b border-black/5 bg-[color-mix(in_srgb,var(--surface)_92%,white)] px-4 pt-[calc(env(safe-area-inset-top)+14px)] pb-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-teal-700">
                бытовой турецкий
              </p>
              <h1 className="mt-0.5 text-[1.45rem] font-black leading-none tracking-[0] text-slate-950">
                Say Turkish
              </h1>
            </div>
            <div className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1.5 text-[0.78rem] font-bold text-emerald-900">
              offline
            </div>
          </div>

          <CategoryTabs
            activeCategory={activeCategory}
            categories={categories}
            onChange={setActiveCategory}
          />

          <label className="mt-3 flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 focus-within:border-teal-700 focus-within:ring-2 focus-within:ring-teal-700/15">
            <Search aria-hidden="true" className="h-5 w-5 text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-slate-950 outline-none placeholder:text-slate-400"
              placeholder="Поиск: сдача, налево, adres"
              type="search"
              aria-label="Поиск по фразам"
            />
            {query ? (
              <button
                type="button"
                aria-label="Очистить поиск"
                className="grid min-h-9 min-w-9 place-items-center rounded-md text-slate-500 active:bg-slate-100"
                onClick={() => setQuery('')}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            ) : null}
          </label>
        </header>

        <section className="flex-1 px-4 pt-4 pb-[calc(env(safe-area-inset-bottom)+24px)]">
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-500">
                {activeCategoryTitle}
              </p>
              <h2 className="text-lg font-black leading-tight tracking-[0]">
                {visiblePhrases.length
                  ? 'Нужная фраза за пару секунд'
                  : 'Пока ничего не найдено'}
              </h2>
            </div>
            {isSpeechSupported ? null : (
              <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-bold text-amber-900">
                без звука
              </span>
            )}
          </div>

          {visiblePhrases.length ? (
            <div className="grid gap-3">
              {visiblePhrases.map((phrase) => (
                <PhraseCard
                  key={phrase.id}
                  phrase={phrase}
                  onSpeak={() => speak(phrase.tr)}
                  onShow={() => setSelectedPhrase(phrase)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              hasQuery={Boolean(normalizedQuery)}
              categoryTitle={activeCategoryTitle}
            />
          )}
        </section>
      </div>

      {selectedPhrase ? (
        <ShowPhraseOverlay
          phrase={selectedPhrase}
          onClose={() => setSelectedPhrase(null)}
          onSpeak={() => speak(selectedPhrase.tr)}
        />
      ) : null}
    </main>
  )
}

export default App
