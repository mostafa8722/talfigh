<template>

  <v-card class='py-4 px-5' rounded='xl'>
    <v-btn id='plus' block color='primary' depressed rounded>
      <v-icon left size='16'>fas fa-plus</v-icon>
      <span>اضافه کردن مدیر</span>
    </v-btn>
    <v-text-field
      append-icon='fas fa-search'
      class='mt-4'
      dense
      filled
      hide-details
      placeholder='جستجوی مدیر'
      rounded
      style='min-height: 36px !important;' />

    <v-virtual-scroll
      :item-height='60'
      :items='roles'
      class='mt-4 tlf-v-scroll'
      height='490'

    >
      <template #default='{item}'>
        <div class='px-4 py-4 tlf-role-item' @click='myToggleFunction'>
          {{ item.title }}
        </div>
      </template>
    </v-virtual-scroll>
  </v-card>

</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend(
  {
    name: 'AddRaste',
    props: {
      roles: {
        type: Array, default: () => {
          []
        }
      }
    },
    data() {
      return {
        isActive: false,
        select: 0
      }
    },
    methods: {

      myToggleFunction(event: any) {
        const button = event.target
        button.classList.toggle('activate')
      }
    }
  }
)
</script>

<style lang='scss' scoped>
#plus{

  min-height: 38px !important;
  background: #2D9DCD !important;
  border-radius: 76px !important;
}

.border-bt {
  border-bottom: #F2F2F2 1px solid;
  border-radius: 16px ;
  padding: 15px;
  width: 100% !important;
}
.activate{
  background-color: #2D9DCD!important;
  color: white !important;
}
button{
  width: 100%;

}

.tlf-v-scroll {
  background-color: $near-white;
  border-radius: 26px;
}

.tlf-role-item {
  border-bottom: 1px solid #F2F2F2;
  cursor: pointer;
}

.tlf-role-item.selected {
  background-color: $primary;
  color: white;
}

.tlf-role-form-card-title {
  font-size: 26px;
  font-weight: 500;
  color: $dark-grey;
}
</style>
