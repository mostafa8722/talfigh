<template>
  <div>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='miniVariant'
      clipped
      right
      fixed
      app
    >
      <div class='d-flex flex-column align-start justify-start'>
        <div v-for='(item, i) in items'
             class='d-flex flex-column align-start justify-start px-8 py-4 '
             :key='i'>
          <div v-if="item.type === 'divider'" class='tlf-menu-divider'>
            <span>{{ item.title }}</span>
          </div>

          <nuxt-link active-class='main-item-active' style='text-decoration: none' v-else-if="item.type==='item'"
                     :to='item.to' exact>
            <div
              style='column-gap: 1.5rem;cursor: pointer'
              class='d-flex main-item align-center tlf-list-item'>

              <v-icon>{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>

            </div>
          </nuxt-link>


          <div
            v-else-if="item.type==='group'"
            style='height: max-content; width: 100%'
            class='card d-flex flex-column tlf-list-item'
            @click='toggleMenuItem'
          >
            <div style='width: 100%; height: auto; column-gap: 0.7rem' class='card-header d-flex flex-row'>
              <v-icon>{{ item.icon }}</v-icon>
              <v-icon class='card-arrow' style='font-size: 0.7rem'>fa-chevron-left</v-icon>
              <span class='card-title pa-0 ma-0'>{{ item.title }}</span>
            </div>
            <div class='card-body d-none'>
              <nuxt-link v-for='(child,childIndex) in item.children' :key='childIndex' style='text-decoration: none'
                         :to='child.to' exact>
                <div style='column-gap: 1rem' class='card-item d-flex flex-row align-center mt-5 pr-5'>
                  <v-icon>{{ child.icon }}</v-icon>
                  <span class='card-item-title'>{{ child.title }}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      class='tlf-app-bar'
      fixed
      clipped-right
      app
      elevation='0'
      height='80'
    >

      <img src='@/static/icons/menu.svg' @click.stop='drawer = !drawer' alt='' />
      <v-img class='mr-8 ml-6' src='~/static/images/logo.png' max-width='36' max-height='28' />
      <v-toolbar-title style='font-size: 1rem; font-weight: 700; color: #848484' class='ml-16' v-text='title' />
      <v-avatar class='mr-5 ml-2'>
        <v-icon size='36'>fas fa-user-circle</v-icon>
      </v-avatar>
      <span class='font-weight-bold'>
        الیاس ملک پور
      </span>
      <span class='mr-8' style='color: #848484; font-size: 1rem; font-weight: 500'>
        09027777254
      </span>

<!--      <span class='mr-16' style='color: #848484; font-size: 1rem; font-weight: 500'>-->
<!--        کدملی : 0017693527-->
<!--      </span>-->

      <v-spacer></v-spacer>


      <v-btn text class='mr-8'>
        <span style='color: #C1C1C1'>جدول پاداش</span>
        <v-icon color='#C1C1C1' class='mr-4'>fas fa-money-bill-wave</v-icon>
      </v-btn>

      <v-btn class='mr-10' text>
        <span style='color: #C1C1C1'>تیکت</span>
        <v-icon color='#C1C1C1' class='mr-4'>fas fa-pen-square</v-icon>
      </v-btn>

      <v-btn class='mr-10' text>
        <span class='ml-4'>پیام‌ها</span>
        <v-badge content='1' color='#C9344F' left>
          <v-icon>far fa-envelope</v-icon>
        </v-badge>
      </v-btn>

      <v-btn class='mr-10' text>
        <span style='color: #C1C1C1' class='ml-4'>پشتیبانی</span>
        <v-badge content='2' color='#C9344F' left>
          <v-icon color='#C1C1C1'>fas fa-user-edit</v-icon>
        </v-badge>
      </v-btn>


    </v-app-bar>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu',
  data() {
    return {
      drawer: true,
      items: [
        {
          type: 'divider',
          title: 'مدیریت محصولات'
        },
        {
          type: 'item',
          icon: 'fa-user-circle',
          title: 'محصولات',
          to: '/'
        },
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
          type: 'group',
          icon: 'fa-cog',
          title: 'تنظیمات سایت',
          children: [
            {
              icon: 'fa-check-square',
              title: 'تنظیمات فوتر - پاورقی',
              to: '/settings/footer'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'پنل تلفیق هنر'
    }
  },
  methods: {
    toggleMenuItem(event: any): any {
      event.currentTarget.querySelector('.card-body').classList.toggle('card-opened')
      event.currentTarget
        .querySelector('.card-header')
        .classList
        .toggle('active')
      if (event.currentTarget.querySelector('.card-body').classList.contains('card-opened')) {
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(-90deg)'
      } else {
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

.tlf-menu-divider {
  font-size: 16px;
  font-weight: 300;
  color: $lighter-grey;
}

.tlf-list-item {
  font-weight: bold;
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

.card-body.card-opened {
  display: unset !important;
}

.tlf-app-bar {
  background: linear-gradient(90.91deg, #F0FBFF -2.31%, #FFF7F0 110.95%);
  color: $dark-grey;
}

.tlf-app-bar .v-btn {
  color: $dark-grey;
}


.card-body {
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
  .main-item{
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
