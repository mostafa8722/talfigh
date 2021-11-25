<template>
  <div>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='miniVariant'
      fixed
      clipped
      right
      app
      width='300'
      class='tlf-drawer'
      style='bottom: 0; height: unset;'
    >
      <div class='d-flex container-drawer flex-column align-start justify-start'>
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
              style='column-gap: 1.3rem;cursor: pointer; width: 100%;'
              class='d-flex main-item align-center tlf-list-item'>

              <v-icon size='18'>{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>
              <span
                style='background-color: #2D9DCD;
                color: white;
                font-size: 10px;
                border-radius: 15px;
                width: 60px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                justify-self: flex-end;'
                v-if='item.caption'>5 مورد</span>

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
    <v-app-bar
      class='tlf-app-bar'
      fixed
      clipped-right
      app
      elevation='0'
      height='80'
    >

        <img class='mr-lg-3 mr-md-2 mr-sm-1' style='cursor:pointer;' src='@/static/icons/menu.svg' @click.stop='drawer = !drawer' alt='' />
      <v-img class='mr-13 ml-6' src='~/static/images/logo.svg' max-width='38' />
      <v-toolbar-title style='font-size: 1rem; font-weight: 700; color: #848484' class='ml-10' v-text='title' />
      <v-avatar class='mr-5 ml-2'>
        <v-icon color='#757575' size='36'>fas fa-user-circle</v-icon>
      </v-avatar>
      <span style='color: #848484' class='font-weight-bold'>
        الیاس ملک پور
      </span>
      <span class='mr-8' style='color: #848484; font-size: 1rem; font-weight: 500'>
        09027777254
      </span>

      <!--      <span class='mr-16' style='color: #848484; font-size: 1rem; font-weight: 500'>-->
      <!--        کدملی : 0017693527-->
      <!--      </span>-->

      <v-spacer></v-spacer>


      <!--      <v-btn text class='mr-8'>-->
      <!--        <span style='color: #C1C1C1'>جدول پاداش</span>-->
      <!--        <v-icon color='#C1C1C1' class='mr-4'>fas fa-money-bill-wave</v-icon>-->
      <!--      </v-btn>-->

      <!--      <v-btn class='mr-10' text>-->
      <!--        <span style='color: #C1C1C1'>تیکت</span>-->
      <!--        <v-icon color='#C1C1C1' class='mr-4'>fas fa-pen-square</v-icon>-->
      <!--      </v-btn>-->

      <v-btn class='mr-10' text>
        <span class='ml-4'>پیام‌ها</span>
        <v-badge content='1' color='#C9344F' left>
          <v-icon>far fa-envelope</v-icon>
        </v-badge>
      </v-btn>

      <!--      <v-btn class='mr-10' text>-->
      <!--        <span style='color: #C1C1C1' class='ml-4'>پشتیبانی</span>-->
      <!--        <v-badge content='2' color='#C9344F' left>-->
      <!--          <v-icon color='#C1C1C1'>fas fa-user-edit</v-icon>-->
      <!--        </v-badge>-->
      <!--      </v-btn>-->


    </v-app-bar>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Menu',
  data() {
    return {
      drawer: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'پنل تلفیق هنر'
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
        setTimeout((e)=>{
          e.querySelector('.card-body').style.transform = 'translateY(0)'
          e.style.height = e.querySelector('.card-body').clientHeight + headerHeight + 'px'
        },1,event.currentTarget)
        event.currentTarget
          .querySelector('.card-header')
          .querySelector('.card-arrow')
          .style
          .transform = 'rotate(-90deg)'
      } else {
        event.currentTarget.querySelector('.card-body').style.transform = 'translateY(-30px)'
        event.currentTarget.style.height = headerHeight + 'px'
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

.tlf-drawer{
  background: url("static/images/logo_sidebar.svg") -35px 200px,
  linear-gradient(270deg, #FFFFFF 97.75%, #F2994A 98.14%),;
}

.tlf-menu-divider {
  font-weight: 300;
  color: $lighter-grey;
}

.tlf-list-item {
  font-weight: 500;
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
  @include transition();
  //row-gap: 2rem;
}

.card-body.card-opened {
  display: unset !important;
}

.tlf-app-bar {
  background: linear-gradient(105deg, #FFFFFF 94.29%, #F2994A 94.33%);
  box-shadow: 0px -63px 60px 37px rgba(0, 0, 0, 0.25);
  color: $dark-grey;
@media screen and (max-width: 1200px){
  background: linear-gradient(105deg, #FFFFFF 93.29%, #F2994A 93.33%);
}
  @media screen and (max-width: 960px){
    background: linear-gradient(105deg, #FFFFFF 92.29%, #F2994A 92.33%);
  }
  @media screen and (max-width: 600px){
    background: linear-gradient(105deg, #FFFFFF 90.29%, #F2994A 90.33%);
  }
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
