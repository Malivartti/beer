const URL = 'https://api.punkapi.com/v2/beers'
const PAGE = '?page='
const PER_PAGE = '&per_page=24'

export async function getCardsByPage(currentPage) {
  const response = await fetch(URL + PAGE + currentPage + PER_PAGE);
  const data = await response.json()
  return data
}