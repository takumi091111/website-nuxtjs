<template>
  <section class="entry-body" v-html="html" />
</template>

<script lang="ts">
/* eslint vue/no-v-html: 0 */
import Vue from 'vue'
import { convertToHTML } from '~/assets/utils/markdown'
import 'highlight.js/styles/gruvbox-dark.css'
export default Vue.extend({
  props: {
    body: {
      type: String,
      required: true
    }
  },
  computed: {
    html() {
      return convertToHTML(this.body).text
    }
  }
})
</script>

<style lang="postcss" scoped>
.entry-body {
  width: calc(100vw - 40px);
  max-width: 800px;
  @media (max-width: 800px) {
    width: calc(100vw - 40px);
  }
  & >>> h1 {
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 3px solid var(--border-color);
      content: '';
    }
    margin-bottom: 25px;
    padding: 25px 0;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 130%;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  & >>> h2 {
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 1.4rem;
  }

  & >>> a {
    color: var(--font-color);
  }

  & >>> p,
  & >>> ul,
  & >>> ol {
    line-height: 1.8rem;
  }

  & >>> ul,
  & >>> ol {
    margin-bottom: 25px;
  }

  & >>> p {
    & img:not(:last-child) {
      margin-bottom: 25px;
    }
    margin-bottom: 25px;
  }

  & >>> ul {
    padding: 0 0 0 1.5rem;
    list-style: square;
  }

  & >>> ol {
    list-style: none;
  }

  & >>> blockquote {
    & p {
      margin-bottom: 0;
    }
    margin-bottom: 25px;
    padding: 10px;
    overflow-x: auto;
    background-color: var(--gray);
    border-radius: 10px;
  }

  & >>> pre {
    margin-bottom: 25px;
    padding: 10px;
    overflow-x: auto;
    background-color: var(--code-block-background-color);
    border-radius: 10px;
  }

  & >>> code {
    color: var(--code-block-font-color);
    font-family: 'Fira Mono', 'M PLUS Rounded 1c', monospace;
    background-color: var(--code-block-background-color);
  }

  & >>> :not(pre) > code {
    margin: 0 5px;
    padding: 3px 6px;
    border-radius: 7px;
  }

  & >>> hr {
    margin-bottom: 25px;
    border-color: var(--border-color);
    border-style: solid;
    border-width: 1.5px 0;
    border-radius: 2px;
  }
}
</style>
