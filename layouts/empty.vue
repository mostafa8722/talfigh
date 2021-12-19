<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
 computed: {
    ...mapGetters({
      showError: 'toast/showError',
      showSuccess: 'toast/showSuccess',
      errorText: 'toast/errorText',
      successText: 'toast/successText'
    })
  },
  watch: {
    showError(newVal) {
      if (newVal) {
        if (this.errorText) {
          this.$toast.error(this.errorText)
        }
      }
    },
    showSuccess(newVal) {
      if (newVal) {
        if (this.successText) {
          this.$toast.success(this.successText)
        }
      }
    }
  }

})
</script>
<style>
html {
    height: 100vh;
    width: 100vw;
}
</style>