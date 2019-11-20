<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    }
  },
  render(): any {
    return this.$scopedSlots.default({
      isOpen: this.isOpen,
      toggleOpen: this.toggleOpen,
      close: this.close
    })
  }
})
</script>
