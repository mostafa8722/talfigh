<template>
  <v-app class='container__app tlf-main' dark>
      <Menu v-if='!isMobile' />
      <MenuMobile v-if='isMobile' />
      <v-main>
        <Nuxt />
      </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Menu from '~/components/menu/Menu.vue'
import MenuMobile from '~/components/menu/Menu-Mobile.vue'

export default Vue.extend({
  components: { MenuMobile, Menu, },
  data(){
    return{
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 600
  }

})
</script>

<style lang='scss' scoped>

.container__app{
  @media screen and (max-width: 600px) {
  }
}

.tlf-main {
  background: linear-gradient(117.81deg, #FFB97A -18.78%, #00B2FF 126.29%);
}
</style>
