export interface EntryFields {
  title: string
  summary: string
  body?: string
}

export interface Meta {
  id: string
  createdAt: string
}

export type BlogEntry = EntryFields & Meta
