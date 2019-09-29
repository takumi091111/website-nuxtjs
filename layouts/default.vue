<template>
  <grid :style="currentTheme">
    <template #header>
      <mobile-header>
        <mobile-header-button label="Toggle Theme" @click="toggleTheme">
          <theme-icon />
        </mobile-header-button>
        <mobile-header-button label="Toggle Menu" @click="toggleMenu">
          <menu-icon v-if="!isExpanded" />
          <close-icon v-if="isExpanded" />
        </mobile-header-button>
      </mobile-header>
      <navigation :is-expanded="isExpanded">
        <navigation-list :routes="routes">
          <template #default="{route}">
            <navigation-list-item :route="route" @click="closeMenu" />
          </template>
        </navigation-list>
      </navigation>
    </template>
    <template #main>
      <nuxt />
      <floating-button label="Switch Theme" @click="toggleTheme">
        <theme-icon />
      </floating-button>
    </template>
    <template #footer>
      <v-footer />
    </template>
  </grid>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import MobileHeaderButton from '~/components/MobileHeaderButton.vue'
import MenuIcon from '~/components/MenuIcon.vue'
import CloseIcon from '~/components/CloseIcon.vue'
import ThemeIcon from '~/components/ThemeIcon.vue'
import Navigation from '~/components/Navigation.vue'
import NavigationList from '~/components/NavigationList.vue'
import NavigationListItem from '~/components/NavigationListItem.vue'
import FloatingButton from '~/components/FloatingButton.vue'
import Footer from '~/components/Footer.vue'
import { Themes } from '~/assets/interfaces/Theme'
import routes from '~/assets/data/routes.json'
import themes from '~/assets/data/themes.json'
export default Vue.extend({
  components: {
    Grid,
    MenuIcon,
    CloseIcon,
    ThemeIcon,
    MobileHeader,
    MobileHeaderButton,
    Navigation,
    NavigationList,
    NavigationListItem,
    FloatingButton,
    'v-footer': Footer
  },
  data() {
    return {
      routes,
      themes,
      theme: 'light',
      isExpanded: null as Boolean | null
    }
  },
  computed: {
    currentTheme(): object {
      return (this.themes as Themes)[this.theme]
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    toggleMenu() {
      const isExpanded = this.isExpanded
      this.isExpanded = isExpanded === null ? true : !isExpanded
    },
    closeMenu() {
      this.isExpanded = false
    }
  }
})
</script>
