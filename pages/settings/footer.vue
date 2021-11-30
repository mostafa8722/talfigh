<template>
  <div class="pa-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >تنظیمات پاورقی</span
        >
      </v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
      <v-col cols="12" lg="6" md="6"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><span class="label">بخش اول آدرس و اطلاعات شبکه اجتماعی</span></v-col
      >
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12"
        ><div class="box">
          به صورت خودکار از بخش تنظیمات سیستم پر می‌شود
        </div></v-col
      >
      <v-col cols="12" lg="3" md="3"
        ><span class="label">بخش دوم انتخاب عنوان</span></v-col
      >
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg"
          placeholder="بخش دوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><span class="label">بخش دوم انتخاب دسته برای نمایش مطالب</span></v-col
      >
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-text-field
          outlined
          solo
          class="rounded-xl pb-0"
          hide-details
          append-icon="fas fa-search"
          placeholder="جستجو"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-chip-group class="mt-4">
        <v-chip
          color="#F2994A"
          text-color="black"
          close
          close-icon="fas fa-times-circle"
        >
          مدیر فروش
        </v-chip>
        <v-chip
          color="#F2994A"
          text-color="black"
          close
          close-icon="fas fa-times-circle"
        >
          مدیر فروش
        </v-chip>
        <v-chip
          color="#F2994A"
          text-color="black"
          close
          close-icon="fas fa-times-circle"
        >
          مدیر فروش
        </v-chip>
      </v-chip-group>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3">
        <span class="label">بخش سوم انتخاب عنوان</span>
      </v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0"
          hide-details
          placeholder="بخش سوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-textarea
          outlined
          solo
          class="rounded-lg"
          placeholder="متن بخش سوم از راست"
        ></v-textarea
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3">
        <span class="label">بخش سوم انتخاب عنوان</span>
      </v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه آبی بالا</span>
        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن و بالای صفحه"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه آبی بالا</span>

        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="بخش سوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="3" md="3"></v-col>

      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه سفید پایین</span>

        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن دکمه سفید پایین"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">لینک دکمه سفید پایین</span>

        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="لینک دکمه سفید پایین"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="3" md="3"></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">آپلود عکس بزرگ بالا</span></v-col
      >
      <v-col cols="12" lg="6" md="6"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="px-10 rounded-xl" color="primary"
          >آپلود عکس بزرگ بالا</v-btn
        ></v-col
      >
      <v-col cols="12" lg="3" md="3"></v-col>
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="px-10 rounded-xl" color="primary"
          >آپلود عکس بزرگ بالا</v-btn
        ></v-col
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {}
  },
  head: {
    title: "تنظیمات پاورقی"
  },
})
</script>

<style lang="scss" scoped>
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
</style>
