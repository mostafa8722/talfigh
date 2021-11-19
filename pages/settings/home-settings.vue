<template>
  <div class="pa-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >تنظیمات پاورقی</span
        >
      </v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="button px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
      <v-col class="mt-4" cols="12"
        ><span class="label">عنوان بالای صفحه</span></v-col
      >
      <v-col class="pt-0 pb-0" cols="12">
        <v-text-field
          outlined
          solo
          class="rounded-lg"
          placeholder="عنوان بالای صفحه"
        ></v-text-field>
      </v-col>
      <v-col class="mt-0 pt-0" cols="12"
        ><span class="label">متن بالای صفحه</span></v-col
      >
      <v-col class="pt-0" cols="12">
        <v-text-field
          outlined
          solo
          class="rounded-lg"
          placeholder="متن بالای صفحه"
        ></v-text-field>
      </v-col>

      <v-col class="pt-0" cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه آبی بالا</span>
        <v-text-field
          outlined
          solo
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن دکمه آبی بالا"
        ></v-text-field
      ></v-col>
      <v-col class="pt-0" cols="12" lg="4" md="4">
        <span class="label mr-1">لینک دکمه آبی</span>

        <v-text-field
          outlined
          solo
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="لینک دکمه آبی"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="3" md="3"></v-col>
      <v-col class="pt-0" cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه مشکی بالا</span>

        <v-text-field
          outlined
          solo
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن دکمه مشکی بالا"
        ></v-text-field
      ></v-col>
      <v-col class="pt-0" cols="12" lg="4" md="4">
        <span class="label mr-1">لینک دکمه مشکی</span>

        <v-text-field
          outlined
          solo
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="لینک دکمه مشکی"
        ></v-text-field
      ></v-col>
      <v-col class="pt-0" cols="12" lg="8" md="8"></v-col>
    </v-row>
    <v-card class="mt-4 pa-8 rounded-lg">
      <v-row>
        <v-col class="mb-0 pb-0" cols="12">
          <span class="grey--text">آپلود عکس بزرگ بالا</span>
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس بزرگ
              بالا</v-btn
            >
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس لوگو</span>
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس لوگو
            </v-btn>
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس شعر بالا</span>
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس شعر
              بالا</v-btn
            >
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس شعر پایین</span>
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس شعر
              پایین</v-btn
            >
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود مجموعه عکس‌های اسلایدر</span>
        </v-col>
        <v-col class="mt-2" cols="12" lg="8" md="8">
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس‌های
              اسلایدر</v-btn
            >
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
          </div>
        </v-col>

        <v-col cols="12" lg="4" md="4">
          <v-row>
            <v-col cols="12">
              <span class="label black--text"
                >بخش دوم انتخاب دسته برای نمایش مطالب</span
              >
            </v-col>
            <v-col cols="12" lg="8" md="8">
              <v-text-field
                filled
                rounded
                hide-details
                append-icon="fas fa-search"
                placeholder="جستجو"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="8" md="8"></v-col>
            <v-col cols="12">
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      images: {
        topBig: '/images/settings-sample.jpg',
      },
    }
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
.button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}
.image {
  width: 101px;
  height: 70px;
  margin-right: 10%;
  border-radius: 80px;
}
</style>
