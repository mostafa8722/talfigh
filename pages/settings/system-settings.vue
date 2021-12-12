<template>
  <div class='pa-md-10 pa-2'>
    <system-settings :settings='settings'></system-settings>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { System } from '~/data/models/settings/system'
import SystemSettings from '~/components/settings/SystemSettings.vue'
import { mapGetters } from 'vuex'


export default Vue.extend({
  components: { SystemSettings },
  async fetch() {
    await this.$store.dispatch('finance/scores/getScores')
  },
  data() {
    return {
      system: {} as System
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings/system/GET_SETTINGS'
    })
  },
  head: {
    title: 'تنظیمات سیستمی'
  }
})
</script>


