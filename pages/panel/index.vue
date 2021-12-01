<template>


<user-panel></user-panel>


</template>

<script lang='ts'>
import Vue from 'vue'
import UserPanel from '~/components/dashboard/UserPanel.vue'

export default Vue.extend({
  components: { UserPanel },
  data() {
    return {}
  }
})
</script>
