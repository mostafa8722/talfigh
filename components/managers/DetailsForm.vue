<template>

    <v-card rounded='xl' class='py-4 px-5'>
      <v-row>
        <v-col cols='12' sm='5'>
            <div class='d-flex mb-9 mt-4'>
              <div class='pt-2 mx-4'>عنوان مدیر</div>
              <v-btn depressed rounded  color='#009D4C' class='activ mx-4'  >
                <v-icon left small >fa-check</v-icon>
                 فعال سازی
              </v-btn>
              <v-btn depressed rounded color='#FF5C5C' class='activ '>
                <v-icon left small >fa-trash</v-icon>
                بلاک مدیر
              </v-btn>
            </div>

            <v-text-field class='d-inline-flex' label='مدیر داخلی' outlined></v-text-field>

          <div>توضیحات نقش</div>
      <v-text-field  label='توضیحات' outlined class='d-flex' height='300px'></v-text-field>

        </v-col>
        <v-col cols='12' sm='7' cl>
          <v-row>
            <v-col cols='12' sm='6' class='margi'>
                  نام
              <v-text-field outlined label='نام'></v-text-field>
              ایمیل
              <v-text-field label='ایمیل' outlined></v-text-field>
              رمز عبور
              <v-text-field label='رمز عبور' outlined></v-text-field>
            </v-col>
            <v-col cols='12' sm='6' class='margi'>
              نام خانوادگی
              <v-text-field label=' نام خانوادگی' outlined></v-text-field>
              موبایل
              <v-text-field label='موبایل' outlined></v-text-field>
              تکرار رمز
              <v-text-field label='تکرار رمز' outlined></v-text-field>

            </v-col>
            <v-col cols='12'>
              <v-text-field append-icon='fa-search'  label='جستجوی نقش' outlined></v-text-field>
            </v-col>

            <v-btn class='mr-auto' color='#00B728' rounded depressed outlined>ذخیره اطلاعات</v-btn>
          </v-row>

        </v-col>
      </v-row>
     </v-card>

</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend(
  {
    name: 'DetailsForm'
  }
)
</script>

<style lang='scss' scoped>
.activ{
color: white !important;
}
.margi{
  margin-top: 15%;
}
</style>
