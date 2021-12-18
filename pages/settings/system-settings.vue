<template>
  <div v-if='system' class='pa-md-10 pa-2'>
    <system-settings :system='system'></system-settings>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import SystemSettings from '~/components/settings/SystemSettings.vue'

export default Vue.extend({
  components: { SystemSettings },
  head: { title: 'تنظیمات سیستمی' },

  async fetch() {
    await this.$store.dispatch('settings/system/getSettings')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      system: 'settings/system/GET_SETTINGS'
    })
  }

})
</script>
<style lang='scss' scoped>
@media screen and (max-width: 800px) {
  .image {
    margin-right: 5% !important;
  }
}

.box {
  outline: 2px solid #efefef;
  background-color: #9f9f9f;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
}

.label {
  font-size: 0.9rem;
  color: #fff;
}

.button {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}

.image {
  width: 101px;
  height: 70px;
  margin-right: 10%;
  border-radius: 80px;
}

.add {
  &:hover {
    cursor: pointer;
  }
}
</style>
