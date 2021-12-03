<template>
  <TLFContainer>
    <panel-details></panel-details>
    <panel-charts></panel-charts>
  </TLFContainer>
</template>

<script lang='ts'>
import PanelCharts from './PanelCharts.vue'

import Vue from 'vue'
import PanelDetails from '~/components/dashboard/panel-details.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
export default Vue.extend({
  name: 'UserPanel',
  components: { TLFContainer, PanelDetails, PanelCharts }
})
</script>

<style scoped>

</style>
