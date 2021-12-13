<template>
  <div class="pa-md-10 pa-2">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >تنظیمات صفحه اصلی</span
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
          v-model='title'
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
          v-model='short_description'
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
          v-model='button_text1'
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن دکمه آبی بالا"
        ></v-text-field
      ></v-col>
      <v-col class="pt-0" cols="12" lg="4" md="4">
        <span class="label mr-1">لینک دکمه آبی</span>

        <v-text-field
          outlined
          v-model='button_link1'
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
          v-model='button_text2'
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
          v-model='button_link2'
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
        <v-col class='mt-2' cols='12' md='4' lg='4'>
          <th-upload />
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس لوگو</span>
        </v-col>
        <v-col class='mt-2' cols='12' md='4' lg='4'>
          <th-upload />
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس شعر بالا</span>
        </v-col>
        <v-col class='mt-2' cols='12' md='4' lg='4'>
          <th-upload />
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود عکس شعر پایین</span>
        </v-col>
        <v-col class='mt-2' cols='12' md='4' lg='4'>
          <th-upload />
        </v-col>
        <v-col class="mt-2" cols="12" lg="3" md="3">
          <div class="d-flex flex-row">
            <v-img class="image" :src="images.topBig"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <span class="grey--text">آپلود مجموعه عکس‌های اسلایدر</span>
        </v-col>
        <v-row class="mt-2">
          <v-col class='mt-2' cols='12' md='4' lg='4'>
            <th-upload />
          </v-col>
          <div class="d-flex flex-row">
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
            <v-img class="image mr-8" :src="images.topBig"></v-img>
          </div>
        </v-row>

<!--        <v-col cols="12" lg="4" md="4">-->
<!--          <v-row>-->
<!--            <v-col cols="12">-->
<!--              <span class="label black&#45;&#45;text"-->
<!--                >بخش دوم انتخاب دسته برای نمایش مطالب</span-->
<!--              >-->
<!--            </v-col>-->
<!--            <v-col cols="12" lg="8" md="8">-->
<!--              <v-text-field-->
<!--                filled-->
<!--                rounded-->
<!--                hide-details-->
<!--                append-icon="fas fa-search"-->
<!--                placeholder="جستجو"-->
<!--              ></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12" lg="8" md="8"></v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-chip-group class="mt-4">-->
<!--                <v-chip-->
<!--                  color="#F2994A"-->
<!--                  text-color="black"-->
<!--                  close-->
<!--                  close-icon="fas fa-times-circle"-->
<!--                >-->
<!--                  مدیر فروش-->
<!--                </v-chip>-->
<!--                <v-chip-->
<!--                  color="#F2994A"-->
<!--                  text-color="black"-->
<!--                  close-->
<!--                  close-icon="fas fa-times-circle"-->
<!--                >-->
<!--                  مدیر فروش-->
<!--                </v-chip>-->
<!--                <v-chip-->
<!--                  color="#F2994A"-->
<!--                  text-color="black"-->
<!--                  close-->
<!--                  close-icon="fas fa-times-circle"-->
<!--                >-->
<!--                  مدیر فروش-->
<!--                </v-chip>-->
<!--              </v-chip-group>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
      </v-row>
    </v-card>
    <div class="white--text mt-6" style="font-size: 1.3rem">بخش نکات</div>
    <div class="label mt-4">متن عنوان نکات</div>
    <div class="mt-6">
      <v-text-field
        outlined
        v-model='point_title'
        solo
        class="rounded-lg"
        placeholder="متن عنوان نکات"
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
            <IconsSelect v-model='pointIcon' title='نکته' />
<!--            <span class="label" style="color: #009d4c">انتخاب آیکن نکته</span>-->
<!--            <v-icon class="mr-2" color="#009D4C">fas fa-plus-square</v-icon>-->
<!--            <v-icon class="mr-2" color="#FF5C5C">fas fa-trash-alt</v-icon>-->
          </div>
        </v-col>

        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
              <th-upload />
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
            <IconsSelect v-model='pointIcon' title='نکته' />
          </div>
        </v-col>

        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
              <th-upload />
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
            <IconsSelect v-model='pointIcon' title='نکته' />
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
            <IconsSelect v-model='pointIcon' title='نکته' />
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
        v-model='faq_title'
        class="rounded-lg"
        placeholder="متن عنوان سوالات"
      ></v-text-field>
    </div>
    <v-card class="mt-4 pa-8 rounded-lg">
      <v-row>
        <v-col class="mt-2" cols="12" lg="4" md="4">
          <span class="grey--text">آپلود عکس چپ</span>
          <div class="d-flex flex-row">
              <th-upload />
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
        >
        <v-col class="pt-1" cols="12" xl="10" lg="9" md="10">
          <span class="label grey--text mr-1">جواب سوال</span>

          <v-text-field
            outlined
            class="rounded-lg pb-0 mt-2"
            hide-details
            placeholder="جواب سوال"
          ></v-text-field
        ></v-col>
        <v-col cols="12" xl="2" lg="3" md="2">
          <div class="mt-10">
            <IconsSelect v-model='faqIcon' title='سوالات متداول' />
          </div>
        </v-col>
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
import IconsSelect from '~/components/utilities/IconsSelect.vue'

export default Vue.extend({
  name: 'HomeSettings',
  components: { IconsSelect },
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
      pointIcon: '',
      faqIcon: ''
    }
  },
  head: {
    title: "تنظیمات صفحه اصلی"
  },
  methods: {
    newTip() {
      // this.tips.push({
      //   icon: '',
      //   text: '',
      // })
    },
    newQuestion() {
      // this.questions.push({
      //   icon: '',
      //   text: '',
      // })
    },
    changePoints(value: any){
      console.log(value)
    }
  },
  async created() {
    try{
      await (this as any).$store.dispatch('settings/mainPage/getUserAccount')
    }catch(error){
      //
    }
  },
  computed: {
    title: {
      get(){
        return (this as any).$store.getters['settings/mainPage/getTitle']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setTitle', value)
      }
    },
    short_description:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getShortDescription']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setShortDescription', value)
      }
    },
    button_text1:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getFirstButtonText']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setFirstButtonText', value)
      }
    },
    button_link1:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getFirstButtonLink']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setFirstButtonLink', value)
      }
    },
    button_text2:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getSecondButtonText']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setSecondButtonText', value)
      }
    },
    button_link2:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getSecondButtonLink']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setSecondButtonLink', value)
      }
    },
    top_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getTopImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setTopImage', value)
      }
    },
    top_logo_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getTopLogoImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setTopLogoImage', value)
      }
    },
    top_poem_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getTopPoemImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setTopPoemImage', value)
      }
    },
    bottom_poem_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getBottomPoemImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setBottomPoemImage', value)
      }
    },
    point_title:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getPointTitle']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setPointTitle', value)
      }
    },
    left_point_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getLeftPointImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setLeftPointImage', value)
      }
    },
    right_point_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getRightPointImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setRightPointImage', value)
      }
    },
    faq_title:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getFaqTitle']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setFaqTitle', value)
      }
    },
    faq_left_image:{
      get(){
        return (this as any).$store.getters['settings/mainPage/getFaqLeftImage']
      },
      set(value){
        (this as any).$store.commit('settings/mainPage/setFaqLeftImage', value)
      }
    },
  }
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
