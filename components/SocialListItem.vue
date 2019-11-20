<template>
  <a :href="link" :aria-label="icon" @click="onClick" class="social-list-item">
    <img
      v-if="icon === 'discord'"
      class="social-list-item"
      svg-inline
      src="~/assets/images/discord.svg"
    />
    <img
      v-if="icon === 'twitter'"
      class="social-list-item"
      svg-inline
      src="~/assets/images/twitter.svg"
    />
    <img
      v-if="icon === 'github'"
      class="social-list-item"
      svg-inline
      src="~/assets/images/github.svg"
    />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    onClick() {
      if (this.alt === '') return
      const listener = (e: ClipboardEvent) => {
        e.preventDefault()
        const clipboardData = e.clipboardData
        if (clipboardData === null) return
        clipboardData.setData('text/plain', this.alt)
        alert(
          `Discordタグをクリップボードへコピーしました。\nDiscord Tag: ${this.alt}`
        )
        document.removeEventListener('copy', listener)
      }
      document.addEventListener('copy', listener)
      document.execCommand('copy', false, this.alt)
    }
  }
})
</script>

<style scoped>
.social-list-item {
  width: 100%;
  height: 100%;
}
@media (min-width: 641px) {
  .social-list-item {
    padding: 5%;
  }
}
</style>
