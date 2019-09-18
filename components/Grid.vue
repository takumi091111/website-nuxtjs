<template>
  <div class="grid">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.grid {
  display: grid;
  grid-row-gap: 25px;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 50px minmax(calc(100vh - 170px), auto) 50px;
  grid-template-columns: 1fr;
  padding: 10px 0;
}

header {
  grid-area: header;
}

.main {
  grid-area: main;
  padding: 0 10px;
}

footer {
  grid-area: footer;
}
</style>
