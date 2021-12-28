<template>
  <v-container fluid>

    <!--    Add Score-->
    <add-score></add-score>

    <!--Score Chart-->
    <!-- <score-table></score-table> -->
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import ScoreTable from '~/components/financial/score/ScoreTable.vue'
import AddScore from '~/components/financial/score/AddScore.vue'


export default Vue.extend({
  name: 'SumScore',
  components: { AddScore, ScoreTable },
  data() {
    return {}
  }
})
</script>

<style lang='scss' scoped>

</style>
