<template>
  <v-container fluid>
    <tlf-container>
      <div class='txt'>کارگاه</div>

    </tlf-container>
    <div id='add'>
      <work-shop></work-shop>
    </div>
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
  font-weight: 800;
  font-size: 24px;
  line-height: 41px;
  color: #FFFFFF;
}

#add {
  margin-top: 88px;
}
</style>
