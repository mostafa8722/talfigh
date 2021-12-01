<template>
  <div>
    <panel-charts></panel-charts>
    <panel-detailes></panel-detailes>
  </div>
</template>

<script lang='ts'>
import PanelCharts from './PanelCharts.vue'
import PanelDetails from './PanelDetails.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'UserPanel',
  components: { PanelCharts }
})
</script>

<style scoped>

</style>
