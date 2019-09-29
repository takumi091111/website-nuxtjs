import { createClient } from 'contentful'
import { EntryFields } from '../interfaces/Entry'

export const fetchEntries = (limit = 10, skip = 0) => {
  const client = createClient({
    space: process.env.CTF_SPACE_ID!,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN!
  })
  return client.getEntries<EntryFields>({
    order: '-sys.createdAt',
    limit,
    skip
  })
}
