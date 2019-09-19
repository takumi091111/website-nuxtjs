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
  color: var(--font-color);
  background-color: var(--background-color);
  @media (max-width: 640px) {
    grid-template-rows: auto minmax(calc(100vh - 153px), auto) 50px;
    padding: 0;
  }
}

header {
  grid-area: header;
  background-color: var(--background-color);
  @media (max-width: 640px) {
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 3px solid var(--border-color);
  }
}

main {
  display: flex;
  grid-area: main;
  justify-content: center;
  padding: 0 10px;
}

footer {
  display: flex;
  grid-area: footer;
  align-items: center;
  justify-content: center;
}
</style>
