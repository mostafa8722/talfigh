<template>
  <v-container class='px-8' fluid>
    <v-row>
      <v-col cols='12' md='4'>
        <v-card class='d-flex' min-height='63px'>
          <v-icon class='mr-4' color='primary' x-large>fas fa-user-circle</v-icon>
          <div class='my-auto mr-2'>کد شما برای معرفی : 1654165165</div>
          <v-btn class='mr-auto my-auto ml-4' color='warning' icon>
            <v-icon>fas fa-redo</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols='9'>
        <v-row>
          <v-col>
            <v-card class='d-flex' min-height='63px'>
              <v-icon class='mr-4' color='primary' x-large>fas fa-check-circle</v-icon>
              <div class='my-auto mr-2'>در حال تکمیل ثبت نام</div>
              <v-btn class='mr-auto my-auto ml-4' icon small>
                <v-icon>fas fa-question-circle</v-icon>
              </v-btn>
            </v-card>
          </v-col>
          <v-col>
            <v-card class='d-flex' min-height='63px'>
              <v-icon class='mr-4' color='primary' x-large>fas fa-network-wired</v-icon>
              <div class='my-auto mr-2'>تعداد افراد زیر بالا دستی شما 26</div>
            </v-card>
          </v-col>
          <v-col>
            <v-card class='d-flex' min-height='63px'>
              <v-icon class='mr-4' color='#3CD486' x-large>fas fa-money-bill-wave-alt</v-icon>
              <div class='my-auto mr-2'>میزان پاداش شما 50001</div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'PanelDetails',
  components: {}
})
</script>

<style scoped>

</style>
