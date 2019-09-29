import { join } from 'path'
import { promises } from 'fs'
import { Entries } from '../interfaces/Contentful'
import { EntryFields, BlogEntry } from '../interfaces/Entry'

const { writeFile } = promises

const saveFile = async (path: string, file: any) => {
  const savePath = join(process.cwd(), 'assets', path)
  await writeFile(savePath, JSON.stringify(file))
}

export const getEntries = (entries: Entries<EntryFields>): BlogEntry[] => {
  return entries.items.map((entry) => {
    const { id, createdAt } = entry.sys

    return {
      id,
      createdAt,
      ...entry.fields
    }
  })
}

/* eslint no-console: 0 */
export const saveEntries = async (entries: Entries<EntryFields>) => {
  const blogEntries = getEntries(entries)
  await saveFile(`/entries/list.json`, blogEntries)
  console.log('Generate Entries: ', 'list.json')

  blogEntries.map(async (entry) => {
    await saveFile(`/entries/${entry.id}.json`, entry)
    console.log('Generate Entry: ', `${entry.id}.json`)
  })
}
