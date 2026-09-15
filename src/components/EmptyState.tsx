type EmptyStateProps = {
  hasQuery: boolean
  categoryTitle: string
}

export function EmptyState({ hasQuery, categoryTitle }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white/70 px-4 py-8 text-center">
      <p className="text-base font-black text-slate-900">
        {hasQuery ? 'Попробуйте другой запрос' : `${categoryTitle}: скоро`}
      </p>
      <p className="mx-auto mt-2 max-w-[18rem] text-sm font-medium leading-6 text-slate-500">
        {hasQuery
          ? 'Поиск сейчас работает по турецкому тексту, русскому переводу и транскрипции.'
          : 'Категория уже есть в навигации, чтобы позже добавить фразы без переделки интерфейса.'}
      </p>
    </div>
  )
}
