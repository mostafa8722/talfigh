<template>
  <v-app dark>
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
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />

      <v-img class='mr-8 ml-6' src='~/static/images/logo.png' max-width='36' max-height='28' />

      <v-toolbar-title class='font-weight-bold ml-16' v-text='title' />

      <v-avatar class='mr-5 ml-4'>
        <v-icon size='36'>fas fa-user-circle</v-icon>
      </v-avatar>

      <span class='font-weight-bold'>
        الیاس ملک پور
      </span>

      <span class='mr-8'>
        09027777254
      </span>

      <v-spacer />

      <v-btn text>
        <span>جدول پاداش</span>
        <v-icon class='mr-4'>fas fa-money-bill-wave</v-icon>
      </v-btn>

      <v-btn class='mr-16' text>
        <span>تیکت</span>
        <v-icon class='mr-4'>fas fa-pen-square</v-icon>
      </v-btn>

      <v-btn class='mr-16' text>
        <span class='ml-4'>پیام‌ها</span>
        <v-badge content='1' color='red lighten-2' left>
          <v-icon>far fa-envelope</v-icon>
        </v-badge>
      </v-btn>

      <v-btn class='mr-16' text>
        <span class='ml-4'>پشتیبانی</span>
        <v-badge content='2' color='red lighten-2' left>
          <v-icon>fas fa-user-edit</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main class='tlf-main'>

        <Nuxt />

    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
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
          icon: 'fa-user-circle',
          title: 'مدیران',
          to: '/managers'
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
            },
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

<style lang='scss' scoped>
.tlf-app-bar {
  background: linear-gradient(90.91deg, #F0FBFF -2.31%, #FFF7F0 110.95%);
  color: $dark-grey;
}

.tlf-app-bar .v-btn {
  color: $dark-grey;
}

.tlf-main {
  background: linear-gradient(117.81deg, #FFB97A -18.78%, #00B2FF 126.29%);
}

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
</style>
