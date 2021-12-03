<template>
  <v-app class='container__app tlf-main' dark>
    <Menu :items='items' v-if='!isMobile' />
    <MenuMobile @heightMenu='setMarginMain' :items='items' v-if='isMobile' />
    <v-main :style='{marginTop: marginTopMenuMobile + "px"}'>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Menu from '~/components/menu/Menu.vue'
import MenuMobile from '~/components/menu/Menu-Mobile.vue'

export default Vue.extend({
  components: { MenuMobile, Menu },
  data() {
    return {
      items: [
        {
          type: 'divider',
          title: 'محصولات'
        },
        {
          type: 'item',
          icon: '',
          title: 'اضافه کردن محصول',
          to: '/products',
        },
        {
          type: 'item',
          icon: '',
          title: 'موجودی محصول',
          to: '/products/inventory',
        },
        {
          type: 'divider',
          title: 'مدیریت کاربران'
        },
        {
          type: 'item',
          icon: 'fa-user-edit',
          title: 'نقش‌ ها',
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
          to: '/page-management'
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
        },
        {
          type: 'item',
          icon: 'fa-edit',
          title: 'تنظیمات پاورقی',
          to: '/settings/footer'
        }
      ],
      isMobile: false,
      marginTopMenuMobile: 0,
    }
  },
  methods: {
    setMarginMain(number: any){
      this.marginTopMenuMobile = number
    }
  },
  mounted() {
    let $ = this

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 960
      if (!this.isMobile){
        this.marginTopMenuMobile = 0
      }
    })

    if (!this.isMobile){
      this.marginTopMenuMobile = 0
    }
    this.isMobile = window.innerWidth < 960
  }
})
</script>

<style lang='scss' scoped>
@import '~vuetify/src/styles/styles.sass';

.tlf-main {
  background: url("static/images/background.jpg") 50% 0;
}




//@media #{map-get($display-breakpoints, 'sm-and-down')}{
//  .tlf-main {
//    background: url("static/images/background.jpg") 50% 0;
//  }
//}
</style>
