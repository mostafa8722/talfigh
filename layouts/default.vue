<template>
  <v-app dark>
    <Menu />
    <v-main class='tlf-main'>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Menu from '~/components/menu/Menu.vue'

export default Vue.extend({
  components: { Menu, },

})
</script>

<style lang='scss' scoped>
@import '~vuetify/src/styles/styles.sass';
.tlf-main {
  background: linear-gradient(117.81deg, #FFB97A -18.78%, #00B2FF 126.29%);
}
@media #{map-get($display-breakpoints, 'sm-and-down')}{
  .tlf-main {
    background: linear-gradient(30.5deg, #FFB97A -50.22%, #00B2FF 109.72%);
  }
}
</style>
