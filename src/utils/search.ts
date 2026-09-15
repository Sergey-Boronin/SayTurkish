export function normalizeText(value: string) {
  return value
    .toLocaleLowerCase('ru-RU')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll('ё', 'е')
    .trim()
}
