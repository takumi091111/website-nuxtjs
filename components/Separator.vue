<template>
  <hr class="hr" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style scoped>
.hr {
  width: 100%;
  height: 3px;
  background-color: var(--border-color);
  border: none;
  transition: background-color 0.2s;
}
</style>
