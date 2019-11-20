<template>
  <div class="skill-list-item">
    <div class="skill-icon">
      <img
        v-if="icon === 'html'"
        svg-inline
        class="icon"
        src="~/assets/images/html.svg"
      />
      <img
        v-if="icon === 'css'"
        svg-inline
        class="icon"
        src="~/assets/images/css.svg"
      />
      <img
        v-if="icon === 'js'"
        svg-inline
        class="icon"
        src="~/assets/images/js.svg"
      />
      <img
        v-if="icon === 'ts'"
        svg-inline
        class="icon"
        src="~/assets/images/ts.svg"
      />
      <img
        v-if="icon === 'rb'"
        svg-inline
        class="icon"
        src="~/assets/images/rb.svg"
      />
      <img
        v-if="icon === 'php'"
        svg-inline
        class="icon"
        src="~/assets/images/php.svg"
      />
      <img
        v-if="icon === 'cs'"
        svg-inline
        class="icon"
        src="~/assets/images/cs.svg"
      />
      <img
        v-if="icon === 'java'"
        svg-inline
        class="icon"
        src="~/assets/images/java.svg"
      />
      <img
        v-if="icon === 'mysql'"
        svg-inline
        class="icon"
        src="~/assets/images/mysql.svg"
      />
      <img
        v-if="icon === 'git'"
        svg-inline
        class="icon"
        src="~/assets/images/git.svg"
      />
      <img
        v-if="icon === 'ps'"
        svg-inline
        class="icon"
        src="~/assets/images/ps.svg"
      />
    </div>
    <div>
      <p class="title">{{ title }}</p>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    summary: {
      type: String,
      required: true,
      default: ''
    },
    icon: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style scoped>
.skill-list-item {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 90px;
  border: 3px solid var(--border-color);
  border-radius: 25px;
  transition: border-color 0.2s;
}
.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 50px;
  height: 50px;
}
.title {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
