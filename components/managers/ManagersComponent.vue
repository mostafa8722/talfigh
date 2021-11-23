<template>
  <v-container fluid>
<v-row>
  <v-col cols='12'>
    <div id='page-title' class='mx-10'>
    اضافه کردن مدیران
    </div>
  </v-col>
  <v-col cols='12' sm='3'>
    <add-new class='mx-10 ' style='height: 100%'></add-new>
  </v-col>
  <v-col cols='12' sm='9'>
    <details-form class='ml-10 '></details-form>
  </v-col>
  <v-col cols='12' >
    <div id='list-title' class='my-8 mx-10'>
      لیست مدیران
    </div>
  </v-col>
  <v-col cols='12' class='mx-0'>
    <v-sheet height='80%' width='100%'>
      <managers-table-box></managers-table-box>
    </v-sheet>

  </v-col>
</v-row>

 </v-container>
</template>

<script lang='ts'>

import Vue from 'vue'
import AddNew from '~/components/managers/AddNew.vue'
import DetailsForm from '~/components/managers/DetailsForm.vue'
import ManagersTableBox from '~/components/managers/ManagersTableBox.vue'

export default Vue.extend({
  name:'ManagersComponent',
  components: { ManagersTableBox,  DetailsForm, AddNew },
  data(){
    return{}
  }
})
</script>
<style lang='scss' scoped>
#page-title{
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #FFFFFF;
  margin-top: 20px;
  margin-bottom: 20px;
}
#list-title{
  font-weight: 500;
  font-size: 26px;
  line-height: 37px;
  /* identical to box height */

  color: #FFFFFF;
}
</style>
