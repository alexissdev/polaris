export function getColsOfCards(cardsAmount: number): number {
  return cardsAmount % 3 === 0 ? 3 : 2;
}
