<template>
  <div>
    <panel-charts></panel-charts>
    <panel-details></panel-details>
  </div>
</template>

<script lang='ts'>
import PanelCharts from './PanelCharts.vue'

import Vue from 'vue'
import PanelDetails from '~/components/dashboard/panel-details.vue'
export default Vue.extend({
  name: 'UserPanel',
  components: { PanelDetails, PanelCharts }
})
</script>

<style scoped>

</style>
