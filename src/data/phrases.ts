import type { Category, Phrase } from '../types/phrase'

export const categories: Category[] = [
  { id: 'taxi', title: 'Такси' },
  { id: 'restaurant', title: 'Ресторан', comingSoon: true },
  { id: 'shop', title: 'Магазин', comingSoon: true },
  { id: 'home', title: 'Дом', comingSoon: true },
  { id: 'directions', title: 'Дорога', comingSoon: true },
  { id: 'communication', title: 'Общение', comingSoon: true },
]

export const phrases: Phrase[] = [
  {
    id: 'taxi-keep-change',
    category: 'taxi',
    tr: 'Üstü kalsın.',
    ru: 'Сдачи не надо.',
    pronunciation: 'юстю́ калсы́н',
  },
  {
    id: 'taxi-here-please',
    category: 'taxi',
    tr: 'Burada, lütfen.',
    ru: 'Здесь, пожалуйста.',
    pronunciation: 'бурада́ лютфе́н',
  },
  {
    id: 'taxi-stop-here',
    category: 'taxi',
    tr: 'Burada durun, lütfen.',
    ru: 'Остановитесь здесь, пожалуйста.',
    pronunciation: 'бурада́ дуру́н лютфе́н',
  },
  {
    id: 'taxi-left',
    category: 'taxi',
    tr: 'Sola.',
    ru: 'Налево.',
    pronunciation: 'сола́',
  },
  {
    id: 'taxi-right',
    category: 'taxi',
    tr: 'Sağa.',
    ru: 'Направо.',
    pronunciation: 'саа́',
  },
  {
    id: 'taxi-straight',
    category: 'taxi',
    tr: 'Düz devam edin.',
    ru: 'Прямо.',
    pronunciation: 'дюз дева́м эди́н',
  },
  {
    id: 'taxi-turn-left',
    category: 'taxi',
    tr: 'Sola dönün, lütfen.',
    ru: 'Поверните налево, пожалуйста.',
    pronunciation: 'сола́ дёню́н лютфе́н',
  },
  {
    id: 'taxi-turn-right',
    category: 'taxi',
    tr: 'Sağa dönün, lütfen.',
    ru: 'Поверните направо, пожалуйста.',
    pronunciation: 'саа́ дёню́н лютфе́н',
  },
  {
    id: 'taxi-wait-here',
    category: 'taxi',
    tr: 'Burada bekleyin, lütfen.',
    ru: 'Подождите здесь, пожалуйста.',
    pronunciation: 'бурада́ беклейи́н лютфе́н',
  },
  {
    id: 'taxi-this-address',
    category: 'taxi',
    tr: 'Bu adrese, lütfen.',
    ru: 'По этому адресу, пожалуйста.',
    pronunciation: 'бу адрэсе́ лютфе́н',
  },
]
