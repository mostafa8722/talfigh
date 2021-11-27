<template>
  <div>
    <v-dialog :width="width" :value="value" @input="updateValue">
      <v-card class="dialog-card">
        <v-card-title></v-card-title>
        <v-card-text>
          <slot name="body"></slot>
        </v-card-text>
        <v-row class="text-center mt-4">
          <v-col class="reject-btn" cols="6">
            <div class="mr-5 pb-3" @click="closeModal">
              <v-icon class="ml-3" color="error">fas fa-times-circle</v-icon>
              {{ rejectText }}
            </div>
          </v-col>
          <v-col class="confirm-btn" cols="6">
            <div class="ml-5">
              <v-icon class="ml-3" color="success">fas fa-check-square</v-icon>
              {{ confirmText }}
            </div>
          </v-col>
        </v-row>
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
    rejectText: {
      type: String,
      default: 'خیر',
    },
    confirmText: {
      type: String,
      default: 'بله',
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
    closeModal() {
      let value = this.$props.value
      value = false
      this.$emit('input', value)
    },
  },
})
</script>

<style lang="scss" scoped>
.dialog-card {
  overflow: hidden !important;
}
.reject-btn {
  background: #ffdddd;
  &:hover {
    cursor: pointer;
  }
}
.confirm-btn {
  background: #e2ffdd;
  &:hover {
    cursor: pointer;
  }
}
</style>
