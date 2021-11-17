<template>
  <div style='padding-bottom: 250px' class='white ma-0 container__table'>
    <div class='d-flex flex-column'>
    <managers-header-table></managers-header-table>
      <v-divider class='mt-7'></v-divider>
       <managers-body-table></managers-body-table>
    </div>
  </div>
</template>

<script>

import ManagersHeaderTable from '~/components/managers/ManagersHeadderTable'
import ManagersBodyTable from '~/components/managers/ManagersBodyTable'
export default {
  name: 'ManagersTableBox',
  components: { ManagersBodyTable, ManagersHeaderTable },
}
</script>

<style scoped lang='scss'>

.container__table{
  @media screen and (max-width: 600px){
    width: 1200px;
  }
}

</style>
