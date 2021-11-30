<template>
  <panel-charts></panel-charts>
</template>

<script lang='ts'>
import PanelCharts from './PanelCharts.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'UserPanel',
  components: { PanelCharts }
})
</script>

<style scoped>

</style>
