<template>
  <v-container fluid>
    <v-row>
      <v-col cols='12' lg='3' md='3'>
        <span class='white--text' style='font-size: 1.6rem'>
          اضافه کردن سیستمی
        </span>
      </v-col>
      <v-col cols='12' lg='3' md='3'>
        <v-btn class='button px-10 rounded-xl' color='primary'
        >ذخیره محتویات
        </v-btn>
      </v-col>
      <v-col class='mt-4' cols='12'
      ><span class='label white--text'>code api پست</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          :value='items.post_apikey'
          class='rounded-lg'
          outlined
          solo

          @input='sett.post_apikey=$event'>

        </v-text-field>
      </v-col>
      <v-col cols='12'><span class='label white--text'>code api درگاه</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          :value='items.payment_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api درگاه'
          solo
          @input='sett.payment_apikey=$event'
        ></v-text-field>
      </v-col>
      <v-col cols='12'>
        <span class='label white--text'>code api شاهکار</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          :value='items.shahkar_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api شاهکار'
          solo
          @input='sett.shahkar_apikey=$event'
        >
        </v-text-field>
      </v-col>
      <v-col cols='12'
      >
        <span class='label white--text'>code api رسمیو</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          :value='items.rasmio_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api رسمیو'
          solo
          @input='sett.rasmio_apikey=$event'
        ></v-text-field>
      </v-col>
    </v-row>
    <div class='d-flex justify-end mt-8'>
      <v-btn class='px-10 rounded-xl' color='primary' @click='save'>ذخیره محتویات</v-btn>
    </div>
  </v-container>

</template>


<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'SystemSettings',
  props: { system: { type: Object, default: () => ({}) } },
  data() {
    return {
      items: this.system,
      sett: {
        post_apikey: 0,
        payment_apikey: 0,
        rasmio_apikey: 0,
        shahkar_apikey: 0
      }
    }
  },
  methods: {
    save() 
    {
      this.$store.commit('settings/system/SET_RES', this.sett)
      this.$store.dispatch('settings/system/setSettings')
    }
  }
})
</script>

<style scoped>

</style>
