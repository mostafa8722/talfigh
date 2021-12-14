<template>
  <v-container class='pa-0' fluid>
    <tlf-container class='d-flex'>
      <div class='txt'>ایجاد کارگاه</div>
      <v-btn class='mr-auto my-auto ' color='primary' depressed height='38px' rounded width='185px'
      >
        ذخیره محتویات
      </v-btn>
    </tlf-container>
    <v-container id='add' class='pa-0' fluid>
      <work-shop></work-shop>
    </v-container>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import TlfContainer from '~/components/utilities/TLF-Container.vue'
import { mapGetters } from 'vuex'
import WorkShop from '~/components/workshop/WorkShop.vue'

export default Vue.extend({
  head: { title: 'کارگاه' },
  components: { WorkShop, TlfContainer },
  async fetch() {
    await this.$store.dispatch('finance/scores/getScores')
  },
  computed: {
    ...mapGetters({
      items: 'finance/scores/GET_SCORES'
    })
  }
})
</script>

<style lang='scss' scoped>
.txt {
  font-weight: bold;
  font-size: 26px;
  line-height: 45px;
  text-align: center;
  color: #FFFFFF;
}

#add {
  margin-top: 10px;

}
</style>
