<template>
  <v-container fluid>

    <!--    Add Score-->
    <add-card></add-card>

    <!--Score Chart-->
    <score-table></score-table>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import ScoreTable from '~/components/financial/score/ScoreTable.vue'
import AddCard from '~/components/financial/score/AddCard.vue'


export default Vue.extend({
  name: 'SumScore',
  components: { AddCard, ScoreTable },
  data() {
    return {}
  }
})
</script>

<style lang='scss' scoped>

</style>
