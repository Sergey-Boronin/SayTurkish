export type CategoryId =
  | 'taxi'
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
  tr: string
  ru: string
  pronunciation: string
}
