<template>
  <v-app class='container__app tlf-main' dark>
      <Menu :items='items' v-if='!isMobile' />
      <MenuMobile :items='items' v-if='isMobile' />
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
      items: [
        {
          type: 'divider',
          title: 'مدیریت کاربران'
        },
        {
          type: 'item',
          icon: 'fa-user-edit',
          title: 'نقش‌ها',
          to: '/roles'
        },
        {
          type: 'item',
          icon: 'fa-users',
          title: 'کاربران',
          to: '/users'
        },
        {
          type: 'group',
          icon: 'fa-user-graduate',
          title: 'مدیران',
          children: [
            {
              icon: 'fa-user-circle',
              title: 'مدیران',
              to: '/'
            },
            {
              icon: 'fa-user-circle',
              title: 'مدیران 2',
              to: '/'
            }
          ]
        },
        {
          type: 'item',
          icon: 'fa-th',
          title: 'منو ناوبری',
          to: '/main-menu'
        },
        {
          type: 'divider',
          title: 'مدیریت صفحه ها'
        },
        {
          type: 'item',
          icon: 'fa-pen',
          title: 'صفحه سازی',
          to: '/custom'
        },
        {
          type: 'item',
          icon: 'fa-th',
          title: 'منو ناوبری',
          to: '/custom'
        },
        {
          type: 'item',
          icon: 'fa-edit',
          title: 'تنظیمات سایت',
          to: '/settings/home-settings',
          caption: '5 مورد'
        },
        {
          type: 'item',
          icon: 'fa-edit',
          title: 'تنظیمات سیستمی',
          to: '/settings/home-settings'
        },
        {
          type: 'item',
          icon: 'fa-edit',
          title: 'تنظیمات صفحه اصلی',
          to: '/settings/system-settings'
        }
      ],
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 600
  }

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
