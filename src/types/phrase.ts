export type CategoryId =
  | 'taxi'
  | 'market'
  | 'restaurant'
  | 'shop'
  | 'home'
  | 'directions'
  | 'communication'

export type Category = {
  id: CategoryId
  title: string
  comingSoon?: boolean
}

export type Phrase = {
  id: string
  category: CategoryId
  section?: string
  tr: string
  ru: string
  pronunciation: string
}
