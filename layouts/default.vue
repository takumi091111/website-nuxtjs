<template>
  <theme>
    <template #default="{currentTheme, toggleTheme}">
      <grid :style="currentTheme">
        <template #header>
          <toggle-open>
            <template #default="{isOpen, toggleOpen, close}">
              <navigation :is-open="isOpen">
                <mobile-header>
                  <mobile-header-button
                    @click.native="toggleTheme"
                    label="Toggle Theme"
                  >
                    <theme-icon />
                  </mobile-header-button>
                  <mobile-header-button
                    @click.native="toggleOpen"
                    label="Toggle Menu"
                  >
                    <menu-icon v-if="!isOpen" />
                    <close-icon v-if="isOpen" />
                  </mobile-header-button>
                </mobile-header>
                <navigation-list :items="menuItems">
                  <template #default="{item}">
                    <navigation-list-item
                      :title="item.title"
                      :link="item.link"
                      @click.native="close"
                    />
                  </template>
                </navigation-list>
              </navigation>
            </template>
          </toggle-open>
        </template>
        <template #main>
          <nuxt />
          <floating-button @click.native="toggleTheme" label="Toggle Theme">
            <theme-icon />
          </floating-button>
        </template>
        <template #footer>
          <p>&copy; 2019 Asamac</p>
        </template>
      </grid>
    </template>
  </theme>
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
import Theme from '~/components/renderless/Theme.vue'
import ToggleOpen from '~/components/renderless/ToggleOpen.vue'
import menuItems from '~/assets/data/menu.json'
export default Vue.extend({
  components: {
    Grid,
    MobileHeader,
    MobileHeaderButton,
    MenuIcon,
    CloseIcon,
    ThemeIcon,
    Navigation,
    NavigationList,
    NavigationListItem,
    FloatingButton,
    Theme,
    ToggleOpen
  },
  data() {
    return {
      menuItems
    }
  }
})
</script>
