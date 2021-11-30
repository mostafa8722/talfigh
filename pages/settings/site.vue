<template>
  <div class="py-10 px-10">
    <div class="d-flex">
      <h1 class="tlf-title ml-16">تنظیمات سایت</h1>
      <v-btn class="rounded-xl mr-16" color="primary">ذخیره محتویات</v-btn>
    </div>

    <div class="mt-10">
      <p class="tlf-subtitle">عنوان وبسایت - page title</p>
      <v-row>
        <v-col cols="3">
          <v-text-field class="rounded-lg"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        dense
                        outlined/>
        </v-col>
      </v-row>
    </div>

    <div class="mt-4">
      <p class="tlf-subtitle">لینک شبکه‌های اجتماعی</p>
      <v-row>
        <v-col cols="3" class="d-flex">
          <v-icon size="36" color="white">fab fa-instagram</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>

        <v-col cols="3" class="mr-10 d-flex">
          <v-icon size="36" color="white">fab fa-facebook-f</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex">
          <v-icon size="36" color="white">fab fa-whatsapp</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>

        <v-col cols="3" class="mr-10 d-flex">
          <v-icon size="36" color="white">fab fa-google-plus-g</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "Site"
})
</script>

<style scoped>
.tlf-title {
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
}

.tlf-subtitle {
  font-weight: 700;
  font-size: 0.9rem;
  color: white;
}
</style>
