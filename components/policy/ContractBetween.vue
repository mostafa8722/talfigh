<template>
  <div id='wrapper'>
    <v-container fluid>
      <v-card  class='d-inline-flex pa-6 ' rounded='xl'>
        <div class='d-inline-flex'>
          <div class='d-flex'>
            <v-checkbox
              v-model="agreed"
              label='اینجانب تمامی قوانین رو مطالعه کرده و آن را قبول دارم'
            >
            </v-checkbox>
            <v-btn class='my-auto mr-5' width='150px' height='38px' color='primary' rounded depressed>
              ذخیره تغییرات
            </v-btn>
          </div>
        </div>
      </v-card>

    </v-container>
    <contract-text></contract-text>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ContractText from '~/components/policy/ContractText.vue'
export default Vue.extend({
  name: 'ContractBetween',
  components: { ContractText },
  data(){
    return{
      agreed:true
    }
  }
})
</script>

<style lang='scss' scoped>
#wrapper{
  margin-right: 61px;
  margin-top:57px;
  margin-left:89px
}
</style>
