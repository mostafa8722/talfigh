<template>
  <div class='pa-md-10 pa-2'>
    <v-row>
      <v-col cols='12' lg='3' md='3'>
        <span class='white--text' style='font-size: 1.6rem'>
          اضافه کردن سیستمی
        </span>
      </v-col>
      <v-col cols='12' lg='3' md='3'>
        <v-btn class='button px-10 rounded-xl' color='primary' @click='save'
        >ذخیره محتویات
        </v-btn>
      </v-col>
      <v-col class='mt-4' cols='12'
      ><span class='label'>code api پست</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          v-model='system.post_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api پست'
          solo>

        </v-text-field>
      </v-col>
      <v-col cols='12'><span class='label'>code api درگاه</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          v-model='system.payment_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api درگاه'
          solo
        ></v-text-field>
      </v-col>
      <v-col cols='12'>
        <span class='label'>code api شاهکار</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          v-model='system.shahkar_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api شاهکار'
          solo
        >
        </v-text-field>
      </v-col>
      <v-col cols='12'
      >
        <span class='label'>code api رسمیو</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          v-model='system.rasmio_apikey'
          class='rounded-lg'
          outlined
          placeholder='code api رسمیو'
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <div class='d-flex justify-end mt-8'>
      <v-btn class='px-10 rounded-xl' color='primary' @click='save'>ذخیره محتویات</v-btn>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { System } from '~/data/models/settings/system'

export default Vue.extend({
  head: { title: 'تنظیمات سیستمی' },
  async fetch() {
    await this.$store.dispatch('settings/system/getSettings')
    this.system = this.$store.getters['settings/system/GET_SETTINGS']
  },
  data() {
    return {
      system: {} as System,
      items: {}
      // images: {
      //   topBig: '/images/settings-sample.jpg',
      // },
      // tips: [] as any[],
      // questions: [
      //   { icon: '', text: '' },
      //   { icon: '', text: '' },
      // ],
    }
  },
  methods: {
    save() {
      this.$store.dispatch('settings/system/setSettings', this.system)
    }
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
