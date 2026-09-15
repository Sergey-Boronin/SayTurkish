import type { Category, CategoryId } from '../types/phrase'

type CategoryTabsProps = {
  categories: Category[]
  activeCategory: CategoryId
  onChange: (category: CategoryId) => void
}

export function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <nav
      className="-mx-4 mt-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Категории"
    >
      <div className="flex w-max gap-2">
        {categories.map((category) => {
          const isActive = category.id === activeCategory

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              aria-pressed={isActive}
              className={[
                'min-h-11 rounded-full border px-4 text-[0.95rem] font-extrabold transition active:scale-[0.98]',
                isActive
                  ? 'border-teal-900 bg-teal-900 text-white shadow-[0_8px_18px_rgba(19,78,74,0.2)]'
                  : 'border-slate-200 bg-white text-slate-700',
              ].join(' ')}
            >
              {category.title}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
