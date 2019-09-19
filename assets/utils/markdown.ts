import { parse, Renderer } from 'marked'
import { hljs } from '~/assets/utils/highlight'

export const convertToHTML = (src: string) => {
  const renderer = new Renderer()

  renderer.heading = (text, level, _raw, slugger) => {
    const slug = slugger.slug(text.replace(/\./g, '-'))

    return [
      `<h${level} id="${slug}">`,
      `<a href="#${slug}" class="anchor"></a>`,
      text,
      `</h${level}>`
    ].join('')
  }

  return {
    text: parse(src, {
      renderer,
      highlight(code: string, lang: string) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
  }
}
