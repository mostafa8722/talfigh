<template>
  <v-container class='d-flex flex-column' fluid>
    <div id='title' class='ml-auto mb-10'>قرارداد فی مابین</div>
    <v-card  class='px-5 py-3' rounded='xl'>
    <div class='d-flex flex-column'>
      <v-checkbox
        class="black-label"
        v-model="confirm"
        label='اینجانب تمامی قوانین رو مطالعه کرده و آن را قبول دارم'
      >
      </v-checkbox>
      <v-btn @click='confirmContract' class='mr-auto mt-10 mb-4' width='150px' height='38px' color='primary' rounded depressed>
        ذخیره تغییرات
      </v-btn>
      <div   class='my-auto mr-8  ' id='date'>تاریخ تایید شما : 54/151/5</div>
    </div>
    </v-card>
  </v-container>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AgreeCardMobile',
  data(){
    return{
    }
  },
  methods: {
    confirmContract(){
      (this as any).$store.dispatch('contract/confirmContract')
    }
  },
  computed: {
    confirm: {
      get(){
        return (this as any).$store.getters['contract/getContract']
      },
      set(value){
        (this as any).$store.commit('contract/SetContract', value)
      }
    }
  }
})
</script>
<style lang='scss' scoped>
#date{
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: rgba(36, 36, 36, 0.87);
}
::v-deep .v-label {
  font-size: 14px;
  line-height: 24px;
  text-align: right;

  color: rgba(23, 23, 23, 0.87);



}
#title{
  font-weight: normal;
  font-size: 26px;
  line-height: 45px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
}
</style>
