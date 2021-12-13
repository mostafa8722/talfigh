<template>
  <v-container class='pa-0' fluid>

    <!-- Add Workshop-->
    <add-workshop class='mb-11'></add-workshop>
    <!--Workshop Chart-->
    <workshop-table></workshop-table>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'

import WorkshopTable from '~/components/workshop/WorkshopTable.vue'
import AddWorkshop from '~/components/workshop/AddWorkshop.vue'


export default Vue.extend({
  name: 'WorkShop',
  components: { AddWorkshop, WorkshopTable },
  data() {
    return {}
  }
})
</script>

<style lang='scss' scoped>

</style>
