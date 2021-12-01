<template>
    <v-row align='start' class=''>
      <v-col cols='12'>
        <div id='page-title'>
          اضافه کردن مدیران
        </div>
      </v-col>
      <v-col cols='12' lg='3'>
        <add-new class='' style='height: 100%'></add-new>
      </v-col>
      <v-col cols='12' lg='9'>
        <details-form class=''></details-form>
      </v-col>
      <v-col cols='12'>
        <div id='list-title' class='my-8'>
          لیست مدیران
        </div>
      </v-col>
    </v-row>
</template>

<script lang='ts'>

import Vue from 'vue'
import AddNew from '~/components/managers/AddNew.vue'
import DetailsForm from '~/components/managers/DetailsForm.vue'
import ManagersTableBox from '~/components/managers/ManagersTableBox.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'

export default Vue.extend({
  name: 'ManagersComponent',
  components: { TLFContainer, ManagersTableBox, DetailsForm, AddNew },
  data() {
    return {}
  }
})
</script>
<style lang='scss' scoped>
#page-title {
  font-weight: 500;
  font-size: 26px;
  color: #FFFFFF;
  margin-bottom: 20px;
}

#list-title {
  font-weight: 500;
  font-size: 26px;
  line-height: 37px;
  /* identical to box height */

  color: #FFFFFF;
}
</style>
