import axios from 'axios'
import { Entries } from '../interfaces/Contentful'
import { EntryFields } from '../interfaces/Entry'

const API_URL = 'https://blog-api.asamac.now.sh'

export const fetchEntries = async (limit = 10, skip = 0) => {
  const url = new URL(`${API_URL}/entries/list`)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('skip', skip.toString())
  const { data } = await axios.get<Entries<EntryFields>>(String(url))
  return data
}
