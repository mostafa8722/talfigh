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
      <v-list>
        <div v-for='(item, i) in items'
             :key='i'>
          <div v-if="item.type === 'divider'" class='px-8 py-4 tlf-menu-divider'>
            <span>{{ item.title }}</span>
          </div>

          <v-list-item
            v-else-if="item.type==='item'"
            class='tlf-list-item'
            :to='item.to'
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text='item.title' />
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else-if="item.type === 'group'" append-icon=''>
            <template #activator>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text='item.title' />
              </v-list-item-content>
            </template>

            <v-list-item
              v-for='(child,childIndex) in item.children'
              :key='childIndex'
              class='tlf-list-item-child'
              :to='child.to'
              router
              exact
            >
              <v-list-item-action class='mr-4'>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text='child.title' />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
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
          <span class='mr-8' style='color: #848484; font-size: 1rem; font-weight: 500' >
        09027777254
      </span>

      <span class='mr-16' style='color: #848484; font-size: 1rem; font-weight: 500' >
        کدملی : 0017693527
      </span>

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
              <v-icon >far fa-envelope</v-icon>
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
          icon: 'fa-user-circle',
          title: 'نقش‌ها',
          to: '/roles'
        },
        {
          type: 'item',
          icon: 'fa-user-edit',
          title: 'کاربران',
          to: '/users'
        },
        {
          type: 'group',
          icon: 'fa-user-circle',
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
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'پنل تلفیق هنر'
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

.tlf-list-item{
  font-weight: bold;
  color: $dark-grey;
}

.tlf-list-item-child{
  font-weight: 400;
  color: $dark-grey;
}

.tlf-app-bar {
  background: linear-gradient(90.91deg, #F0FBFF -2.31%, #FFF7F0 110.95%);
  color: $dark-grey;
}

.tlf-app-bar .v-btn {
  color: $dark-grey;
}
</style>
