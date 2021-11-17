<template>
  <v-container fluid>
<v-row>
  <v-col cols='12' sm='3'>
    <add-new></add-new>
  </v-col>
  <v-col cols='12' sm='9'>
    <details-form></details-form>
  </v-col>
  <v-col cols='12'>
 <managers-table-box></managers-table-box>
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
