<template>
  <grid>
    <template #header>
      <mobile-header>
        <mobile-header-button label="Toggle Theme">
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
import Footer from '~/components/Footer.vue'
import routes from '~/assets/data/routes'
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
    'v-footer': Footer
  },
  data() {
    return {
      routes,
      isExpanded: null as Boolean | null
    }
  },
  methods: {
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
