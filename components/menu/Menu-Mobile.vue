<template>
  <div>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='miniVariant'
      clipped
      right
      app
      fixed
      width='300px'
      class='tlf-drawer'
      style='bottom: 0; height: unset'
    >
      <div class='d-flex flex-column align-start justify-start'>

        <div style='background-color: #F2994A; width: 100%; height: 100px'
             class='d-flex align-center justify-space-between'>
          <div class='d-flex align-center'>
            <img style='' src='@/static/images/logo_sefid_2.svg' alt=''>
            <span class='mr-5' style='font-weight: bold; color: white'>پنل تلفیق هنر</span>
          </div>
          <v-icon @click='drawer = false' color='white' class='ml-5'>fas fa-times</v-icon>
        </div>

        <div style='width: 100%; transition: all 0.2s ease' v-for='(item, i) in items'
             class='d-flex flex-column align-start justify-start px-6 py-4 '
             :key='i'>
          <div style='transition: all 0.2s ease' v-if="item.type === 'divider'" class='tlf-menu-divider'>
            <span>{{ item.title }}</span>
          </div>

          <nuxt-link active-class='main-item-active'
                     style='text-decoration: none; width: 100%; transition: all 0.2s ease' v-else-if="item.type==='item'"
                     :to='item.to' exact>
            <div
              style='column-gap: 1.3rem;cursor: pointer; width: 100%; transition: all 0.2s ease'
              class='d-flex main-item align-center tlf-list-item'>

              <v-icon size='20'>{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>
              <!--              <span-->
              <!--                style='background-color: #2D9DCD;-->
              <!--                    color: white;-->
              <!--                    font-size: 10px;-->
              <!--                    border-radius: 15px;-->
              <!--                    width: 60px;-->
              <!--                    height: 25px;-->
              <!--                    display: flex;-->
              <!--                    justify-content: center;-->
              <!--                    align-items: center;-->
              <!--                    justify-self: flex-end;'-->
              <!--                v-if='item.caption'>5 مورد</span>-->

            </div>
          </nuxt-link>


          <div
            v-else-if="item.type==='group'"
            style='height: max-content; width: 100%; transition: all 0.2s ease'
            class='card d-flex flex-column tlf-list-item'
            @click='toggleMenuItem'
          >
            <div style='width: 100%; height: auto; column-gap: 0.7rem' class='card-header d-flex flex-row'>
              <v-icon size='20'>{{ item.icon }}</v-icon>
              <v-icon class='card-arrow' style='font-size: 0.7rem'>fa-chevron-left</v-icon>
              <span class='card-title pa-0 ma-0'>{{ item.title }}</span>
            </div>
            <div class='card-body d-none'>
              <nuxt-link v-for='(child,childIndex) in item.children' :key='childIndex' style='text-decoration: none'
                         :to='child.to' exact>
                <div style='column-gap: 1rem' class='card-item d-flex flex-row align-center mt-5 pr-10'>
                  <v-icon size='20'>{{ child.icon }}</v-icon>
                  <span class='card-item-title'>{{ child.title }}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <div
      class='white
      mt-5 mr-7 pa-3 d-flex justify-space-between
      align-center tlf-app-bar rounded elevation-2'>
      <v-icon @click='drawer = true'>fas fa-bars</v-icon>
      <div class='d-flex align-center' style='column-gap: 1rem'>
        <div>
          <v-badge content='1' color='#C9344F' left offset-y='1rem' offset-x='0.5rem'>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </div>
        <v-icon>fas fa-user-circle</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu-Mobile',
  data() {
    return {
      drawer: true,
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
        // {
        //   type: 'group',
        //   icon: 'fa-cog',
        //   caption: '5 مورد',
        //   title: 'تنظیمات سایت',
        //   children: [
        //     {
        //       icon: 'fa-check-square',
        //       title: 'تنظیمات فوتر - پاورقی',
        //       to: '/settings/footer'
        //     },
        //     {
        //       icon: 'fa-check-square',
        //       title: 'تنظیمات صفحه اصلی',
        //       to: '/settings/home-settings'
        //     },
        //     {
        //       icon: 'fa-check-square',
        //       title: 'تنظیمات سیستمی',
        //       to: '/settings/system-settings'
        //     },
        //   ]
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'پنل تلفیق هنر'
    }
  },
  methods: {
    toggleMenuItem(event: any): any {

      event.currentTarget
        .querySelector('.card-header')
        .classList
        .toggle('active')

      if (event.currentTarget.querySelector('.card-body').classList.contains('d-none')) {
        event.currentTarget.querySelector('.card-body').classList.remove('d-none')
        setTimeout((e)=>{
          e.querySelector('.card-body').style.transform = 'translateY(0)'
        },1,event.currentTarget)
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(-90deg)'
      } else {
        event.currentTarget.querySelector('.card-body').style.transform = 'translateY(-35px)'
        setTimeout((e)=>{
          e.querySelector('.card-body').classList.add('d-none')
        },100,event.currentTarget)
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(0deg)'
      }
    }
  }
})
</script>

<style scoped lang='scss'>

.tlf-app-bar {
  width: 350px;
}

.tlf-menu-divider {
  font-size: 16px;
  font-weight: 300;
  color: $lighter-grey;
}

.tlf-list-item {
  font-weight: bold;
  font-size: 16px;
  color: $dark-grey;

  .fa, .fas {
    color: #D8D8D8;
  }
}

.tlf-list-item-child {
  font-weight: 400;
  color: $dark-grey;
}

.card {
  cursor: pointer;
  //row-gap: 2rem;
}

.tlf-app-bar {
  background: white;
  color: $dark-grey;
}

.tlf-app-bar .v-btn {
  color: $dark-grey;
}

.card-body {
  transition: all 0.2s ease;
  transform: translateY(-35px);

  .card-item {
    .card-item-title {
      font-size: 0.9rem !important;
      font-weight: 400 !important;
      font-family: IranYekanFN, serif !important;
      color: #848484;
      cursor: pointer;
    }
  }
}

.card-header {
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    color: #F2994A;

    .fa, .fas {
      color: #F2994A;
    }
  }

  &:hover {
    .fa, .fas {
      color: #F2994A;
    }

    color: #F2994A
  }
}

.main-item-active {
  .main-item {
    color: #F2994A;

    .fa, .fas {
      color: #F2994A;
    }
  }
}

.main-item {
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    color: #F2994A
  }

  &:hover {
    .fa, .fas {
      color: #F2994A;
    }

    color: #F2994A
  }
}

</style>

