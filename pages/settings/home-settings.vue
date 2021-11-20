<template>
  <div class="pa-md-10 pa-2">
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
    <div class="white--text mt-6" style="font-size: 1.3rem">بخش نکات</div>
    <div class="label mt-4">متن عنوان نکات</div>
    <div class="mt-6">
      <v-text-field
        outlined
        solo
        class="rounded-lg"
        placeholder="عنوان بالای صفحه"
      ></v-text-field>
    </div>
    <v-card class="mt-4 pa-8 rounded-lg">
      <v-row>
        <v-col class="pt-0" cols="12" lg="5" md="5">
          <span class="label grey--text mr-1">عنوان نکته</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="عنوان نکته"
          ></v-text-field
        ></v-col>
        <v-col cols="12" lg="3" md="3">
          <div class="mt-8">
            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>
            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>
          </div>
        </v-col>

        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس چپ
            </v-btn>
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col class="pt-0" cols="12" lg="5" md="5">
          <span class="label grey--text mr-1">عنوان نکته</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="عنوان نکته"
          ></v-text-field
        ></v-col>
        <v-col cols="12" lg="3" md="3">
          <div class="mt-8">
            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>
            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>
          </div>
        </v-col>

        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس چپ
            </v-btn>
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col class="pt-0" cols="12" lg="5" md="5">
          <span class="label grey--text mr-1">عنوان نکته</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="عنوان نکته"
          ></v-text-field
        ></v-col>
        <v-col cols="12" lg="3" md="3">
          <div class="mt-8">
            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>
            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>
          </div>
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3"></v-col>
      </v-row>
      <v-row v-for="(tip, index) in tips" :key="index">
        <v-col class="pt-5" cols="12" lg="5" md="5">
          <span class="label grey--text mr-1">عنوان نکته</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="عنوان نکته"
          ></v-text-field
        ></v-col>
        <v-col cols="12" lg="7" md="7">
          <div class="mt-14">
            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>
            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>
          </div>
        </v-col>
      </v-row>
      <div class="ma-4 add" @click="newTip">
        <span class="label" style="color: #009d4c">اضافه کردن نکته</span>
        <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
      </div>
    </v-card>
    <div class="white--text mt-6" style="font-size: 1.3rem">
      بخش سوالات متداول
    </div>
    <div class="label mt-4">متن عنوان سوالات</div>
    <div class="mt-6">
      <v-text-field
        outlined
        solo
        class="rounded-lg"
        placeholder="عنوان بالای صفحه"
      ></v-text-field>
    </div>
    <v-card class="mt-4 pa-8 rounded-lg">
      <v-row>
        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
            <v-btn class="button px-10 rounded-xl mt-8" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس چپ
            </v-btn>
            <v-img class="image" :src="images.topBig"></v-img>
          </div> </v-col
        ><v-col class="mt-2" cols="12" lg="8" md="8"></v-col>
      </v-row>
      <v-row v-for="(question, index) in questions" :key="index">
        <v-col class="pt-1" cols="12" lg="5" md="5">
          <span class="label grey--text mr-1">عنوان سوال</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="عنوان سوال"
          ></v-text-field
        ></v-col>
        <v-col class="pt-1" cols="12" xl="5" lg="4" md="5">
          <span class="label grey--text mr-1">لینک ادامه مطلب</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="لینک ادامه مطلب"
          ></v-text-field></v-col
        ><v-col cols="12" xl="2" lg="3" md="2">
          <div class="mt-10">
            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>
            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>
          </div>
        </v-col>
        <v-col class="pt-1" cols="12" xl="10" lg="9" md="10">
          <span class="label grey--text mr-1">جواب سوال</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="جواب سوال"
          ></v-text-field
        ></v-col>
      </v-row>
      <div class="ma-4 add" @click="newQuestion">
        <span class="label" style="color: #009d4c">اضافه کردن نکته</span>
        <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>
      </div>
    </v-card>
    <div class="d-flex justify-end mt-8">
      <v-btn class="px-10 rounded-xl" color="primary">ذخیره محتویات</v-btn>
    </div>
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
      tips: [] as any[],
      questions: [
        { icon: '', text: '' },
        { icon: '', text: '' },
      ],
    }
  },
  methods: {
    newTip() {
      this.tips.push({
        icon: '',
        text: '',
      })
    },
    newQuestion() {
      this.questions.push({
        icon: '',
        text: '',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
