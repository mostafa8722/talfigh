<template>

  <v-container class='d-flex wrapper-card' fluid>
    <div class=' d-flex flex-column my-auto'>
      <div class='txt-label mb-2   mr-10'>کد کارگاه</div>
      <v-card class='  mr-10' elevation='4px' height='40px' rounded='lg'>
        <v-text-field v-model='item.code' class='txt-input' dense filled outlined placeholder='
          کد کارگاه' rounded>
        </v-text-field>
      </v-card>
    </div>
    <div class=' d-flex flex-column my-auto'>
      <div class='txt-label mb-2  mr-10'>نام کارگاه</div>
      <v-card class='  mr-10' elevation='4px' height='40px' rounded='lg'>
        <v-text-field v-model='item.title' class='txt-input' dense filled outlined placeholder='نام کارگاه' rounded>
        </v-text-field>
      </v-card>
    </div>
    <div class=' d-flex flex-column my-auto'>
      <div class='txt-label mb-2  mr-10'>شهر کارگاه</div>
      <v-card class='  mr-10' elevation='4px' height='40px' rounded='lg'>
        <v-text-field v-model='item.city_id' class='txt-input' dense filled outlined placeholder='شهر کارگاه' rounded>
        </v-text-field>
      </v-card>
    </div>
    <v-btn v-if='!edit' class='mr-auto my-auto ' color='primary' depressed height='38px' rounded width='185px'
           @click='addWorkshop'
    >
      ذخیره محتویات
    </v-btn>
    <v-btn v-if='edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
           @click='updateItem'>
      ویرایش
    </v-btn>
  </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'AddWorkshop',
  props: { edit: { type: Boolean, default: false } },
  data() {
    return {
      dialog: true,
      modalConfirm: false,
      item: {
        code: 0,
        title: '',
        city_id: ''
      }
    }
  },

  methods: {
    addWorkshop() {
      this.$store.dispatch('workshops/setWorkshop', this.$data.item)
    },
    updateItem() {
      //TODO fix it after edit api was ready for scores
      this.$store.dispatch('workshops/setWorkshop', this.$data.item)
    }
  }


})
</script>

<style lang='scss' scoped>
.txt-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}

.wrapper-card {
  height: 132px;


}

.txt-input {

  border-radius: 10px

}
</style>
