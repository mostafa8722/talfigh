<template>
  <div>
    <v-dialog :width="width" :value="value" @input="updateValue">
      <v-card class="dialog-card">
        <v-card-title>
          <slot name="title"></slot>
        </v-card-title>
        <v-card-text>
          <slot name="body"></slot>
        </v-card-text>
        <v-card-actions class="float-left mb-2">
          <slot name="actions"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '400',
    },
  },
  methods: {
    updateValue(value: any) {
      this.$emit('input', value)
    },
  },
})
</script>

<style lang="scss" scoped>
.dialog-card {
  overflow: hidden !important;
}
</style>
