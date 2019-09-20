export interface Entry {
  fields: {
    title: string
    summary: string
    body: string
  }
  sys: {
    id: string
    type: 'Entry'
    space: {
      sys: {
        type: 'Link'
        linkType: 'Space'
        id: string
      }
    }
    contentType: {
      sys: {
        type: 'Link'
        linkType: 'ContentType'
        id: string
      }
    }
    environment: {
      sys: {
        type: 'Link'
        linkType: 'Environment'
        id: 'master'
      }
    }
    createdAt: string
    updatedAt: string
    revision: number
    locale: string
  }
}

export interface Entries {
  sys: {
    type: 'Array'
  }
  total: number
  skip: number
  limit: number
  items: Entry[]
}
