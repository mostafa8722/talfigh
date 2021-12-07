<template>
  <div>
    <v-card class='d-inline-flex px-5 py-3 ' rounded='xl'>
      <div class='d-inline-flex'>
        <div class='d-flex'>
          <v-checkbox
            v-model="confirm"
            label='اینجانب تمامی قوانین رو مطالعه کرده و آن را قبول دارم'
          >
          </v-checkbox>
          <v-btn @click='confirmContract' class='my-auto mr-5' width='150px' height='38px' color='primary' rounded depressed>
            ذخیره تغییرات
          </v-btn>
        </div>
      </div>
    </v-card>
    <div   class='my-auto mr-8  ' id='date'>تاریخ تایید شما : 54/151/5</div>


  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AgreeCard',
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

  color: rgba(255, 255, 255, 0.87);
}
::v-deep .v-label {


  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: right;

  color: rgba(23, 23, 23, 0.87);


}
</style>
