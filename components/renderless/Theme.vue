<script lang="ts">
import Vue from 'vue'
import { Theme, Themes } from '~/assets/interfaces/Theme'
import themes from '~/assets/data/themes.json'
export default Vue.extend({
  data() {
    return {
      theme: 'light',
      themes: themes as Themes
    }
  },
  computed: {
    currentTheme(): Theme {
      return this.themes[this.theme]
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  },
  render(): any {
    return this.$scopedSlots.default({
      currentTheme: this.currentTheme,
      toggleTheme: this.toggleTheme
    })
  }
})
</script>
