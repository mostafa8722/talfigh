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

        <div
          style='column-gap: 1.3rem;cursor: pointer; width: 100%; transition: all 0.2s ease'
          class='d-flex align-center px-6 pt-4'>
          <v-icon size='30'>fas fa-user-circle</v-icon>
          <span class='font-weight-bold'>الیاس ملکپور</span>
        </div>

        <div style='width: 100%; transition: all 0.2s ease' v-for='(item, i) in items'
             class='d-flex flex-column align-start justify-start px-6 py-4 '
             :key='i'>
          <div style='transition: all 0.2s ease' v-if="item.type === 'divider'" class='tlf-menu-divider'>
            <span>{{ item.title }}</span>
          </div>

          <nuxt-link active-class='main-item-active'
                     style='text-decoration: none; width: 100%; transition: all 0.2s ease'
                     v-else-if="item.type==='item'"
                     :to='item.to' exact>
            <div
              style='column-gap: 1.3rem;cursor: pointer; width: 100%; transition: all 0.2s ease'
              class='d-flex main-item align-center tlf-list-item'>

              <v-icon size='20'>{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>

            </div>
          </nuxt-link>


          <div
            v-else-if="item.type==='group'"
            style='width: 100%; transition: all 0.2s ease'
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

    <div class='d-flex menu flex-column'
         style='
         row-gap: 0.5rem; position: fixed;
         width: 95%;
         left: 50%;
         transform: translateX(-50%);
         z-index: 5;
'>
      <div
        class='white
      mt-5 pa-5 d-flex justify-space-between
      align-center tlf-app-bar rounded elevation-3'>
        <v-icon color='#A7A7A7' size='30' @click='drawer = true'>fas fa-bars</v-icon>
        <div class='d-flex align-center' style='column-gap: 1rem'>
          <div>
            <v-badge content='1' color='#C9344F' left offset-y='1rem' offset-x='0.5rem'>
              <v-icon @click='toggleSubMenu' color='#A4A4A4' size='30'>far fa-bell</v-icon>
            </v-badge>
          </div>
          <v-icon color='#A4A4A4' size='30'>fas fa-user-circle</v-icon>
        </div>
      </div>
      <div
        v-if='showSubMenu'
        class='d-flex sub-menu align-self-end white align-center justify-center px-3 py-5'
        style='column-gap: 0.1rem; border-radius: 0 50px 50px 50px; width: max-content;'>

        <v-btn text>
          <v-icon color='#C1C1C1' size='30'>fas fa-money-bill-wave</v-icon>
        </v-btn>

        <v-btn text>
          <v-icon color='#C1C1C1' size='30'>fas fa-pen-square</v-icon>
        </v-btn>

        <v-btn text>
          <v-icon color='#C1C1C1' size='30'>fas fa-user-edit</v-icon>
        </v-btn>

        <v-btn text>
          <v-badge offset-y='1rem' offset-x='0.5rem' content='1' color='#C9344F' left>
            <v-icon color='#353535' size='30'>far fa-envelope</v-icon>
          </v-badge>
        </v-btn>

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
      drawer: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'پنل تلفیق هنر',
      showSubMenu: false
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleMenuItem(event: any): any {

      event.currentTarget
        .querySelector('.card-header')
        .classList
        .toggle('active')

      const headerHeight = event.currentTarget.querySelector('.card-header').clientHeight

      if (event.currentTarget.querySelector('.card-body').classList.contains('d-none')) {
        event.currentTarget.querySelector('.card-body').classList.remove('d-none')
        setTimeout((e) => {
          e.querySelector('.card-body').style.transform = 'translateY(0)'
          e.style.height = e.querySelector('.card-body').clientHeight + headerHeight + 'px'
        }, 1, event.currentTarget)
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(-90deg)'
      } else {
        event.currentTarget.querySelector('.card-body').style.transform = 'translateY(-30px)'
        event.currentTarget.style.height = headerHeight + 'px'
        setTimeout((e) => {
          e.querySelector('.card-body').classList.add('d-none')
        }, 100, event.currentTarget)
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(0deg)'
      }
    },
    toggleSubMenu(){
      this.showSubMenu = !this.showSubMenu
      setTimeout(()=>{
        const menu: any = document.querySelector('.menu')
        this.$emit('heightMenu', menu.clientHeight)
      },1)
    }

  },
  mounted() {
    const menu: any = document.querySelector('.menu')

    if (window.innerWidth < 960){
      this.$emit('heightMenu', menu.clientHeight)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 960){
        this.$emit('heightMenu', menu.clientHeight)
      }
    })
  }
})
</script>

<style scoped lang='scss'>

.tlf-app-bar {

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
  transform: translateY(-30px);

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

