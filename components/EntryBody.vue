<template>
  <section class="entry-body" v-html="html" />
</template>

<script lang="ts">
import Vue from 'vue'
import { convertToHTML } from '~/assets/utils/markdown'
import 'highlight.js/styles/gruvbox-dark.css'
export default Vue.extend({
  props: {
    body: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    html() {
      return convertToHTML(this.body).text
    }
  }
})
</script>

<style scoped>
.entry-body {
  width: 100%;
}
.entry-body >>> *:not(:last-child) {
  margin-bottom: 25px;
}
.entry-body >>> ol > li:not(:last-child) {
  margin-bottom: 25px;
}
.entry-body >>> p,
.entry-body >>> ul,
.entry-body >>> ol {
  line-height: 1.5rem;
}
.entry-body >>> h1 {
  padding-bottom: 25px;
  font-size: 1.2rem;
}
.entry-body >>> h1::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-bottom: 3px solid var(--border-color);
  transition: border-color 0.2s;
  content: '';
}
.entry-body >>> h2 {
  font-size: 1.1rem;
}
.entry-body >>> h1,
.entry-body >>> h2 {
  font-weight: bold;
}
.entry-body >>> a {
  transition: none;
}
.entry-body >>> a[href] {
  text-decoration: underline;
}
.entry-body >>> ul {
  padding: 0 0 0 1.3rem;
  list-style: square;
}
.entry-body >>> ul > li {
  transition: color 0.2s;
}
.entry-body >>> ol {
  list-style: none;
}
.entry-body >>> hr {
  width: 100%;
  height: 3px;
  background-color: var(--border-color);
  border: none;
  transition: background-color 0.2s;
}
.entry-body >>> pre {
  background-color: var(--code-block-background-color);
}
.entry-body >>> blockquote {
  background-color: var(--gray);
  transition: background-color 0.2s;
}
.entry-body >>> pre,
.entry-body >>> blockquote {
  padding: 10px;
  overflow-x: auto;
  border-radius: 10px;
}
.entry-body >>> code {
  color: var(--code-block-font-color);
  font-family: 'Fira Mono', 'M PLUS Rounded 1c', monospace;
  background-color: var(--code-block-background-color);
}
.entry-body >>> :not(pre) > code {
  margin: 0 5px;
  padding: 3px 6px;
  border-radius: 7px;
}
.entry-body >>> blockquote > p > code {
  margin: 0;
}
@media (min-width: 641px) {
  .entry-body >>> p,
  .entry-body >>> ul,
  .entry-body >>> ol {
    line-height: 1.8rem;
  }
  .entry-body >>> h1 {
    font-size: 1.7rem;
  }
  .entry-body >>> h1 {
    font-size: 1.5rem;
  }
  .entry-body >>> ul {
    padding: 0 0 0 1.5rem;
  }
}
</style>
