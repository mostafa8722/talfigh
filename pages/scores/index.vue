<template>
  <v-container fluid>
    <tlf-container>
      <div class='txt'>امتیاز و مبلغ</div>
    </tlf-container>
    <div id='add'>
      <sum-score></sum-score>
    </div>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import SumScore from '~/components/financial/score/SumScore.vue'
import TlfContainer from '~/components/utilities/TLF-Container.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: { SumScore, TlfContainer },
  head: { title: 'امتیاز و مبلغ' },
  async fetch() {
    await this.$store.dispatch('scores/scores/getScores')
  },
  computed: {
    ...mapGetters({
      items: 'scores/scores/GET_SCORES'
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
