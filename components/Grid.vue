<template>
  <div class="grid">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <slot name="main" />
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: minmax(50px, 1fr) minmax(calc(100vh - 150px), auto) 50px;
  grid-template-columns: minmax(10px, 1fr) minmax(0, 1000px) minmax(10px, 1fr);
  gap: 25px 0;
  color: var(--font-color);
  background-color: var(--background-color);
  transition: background-color 0.2s;
}
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  grid-row: 1/2;
  grid-column: 1/4;
  overflow-y: hidden;
  background-color: var(--background-color);
  transition: background-color 0.2s;
}
.main {
  grid-row: 2/3;
  grid-column: 2/3;
}
.footer {
  display: flex;
  grid-row: 3/4;
  grid-column: 1/4;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}
@media (min-width: 641px) {
  .header {
    position: static;
    grid-column: 2/3;
    grid-template-rows: minmax(50px, 1fr) minmax(calc(100vh - 130px), auto) 50px;
    padding-top: 10px;
  }
  .footer {
    grid-column: 2/3;
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
}
</style>
