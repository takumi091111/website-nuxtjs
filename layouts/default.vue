<template>
  <grid>
    <template #header />
    <template #main>
      <nuxt />
    </template>
    <template #footer />
  </grid>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
export default Vue.extend({
  components: {
    Grid
  }
})
</script>
