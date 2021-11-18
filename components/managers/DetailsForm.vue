<template>

    <v-card rounded='xl' class='pa-10 '>
      <v-row>
        <v-col cols='12' sm='5'>
            <div class='d-flex mb-9 mt-4'>
              <div class='pt-2 '>عنوان مدیر</div>
              <v-btn depressed rounded  color='#009D4C' class='activate mx-4'  >
                <v-icon left small >fa-check</v-icon>
                 فعال سازی
              </v-btn>
              <v-btn depressed rounded color='#FF5C5C' class='activate '>
                <v-icon left small >fa-trash</v-icon>
                بلاک مدیر
              </v-btn>
            </div>

            <v-text-field style="width:50%"  class='d-flex rounded-xl '  label='مدیر داخلی' outlined></v-text-field>

          <div>توضیحات نقش</div>
      <v-textarea label='توضیحات' outlined class='d-flex rounded-lg' rows="10" ></v-textarea>

        </v-col>
        <v-col cols='12' sm='7'  class='pl-14'>
          <v-row>
            <v-col cols='12' sm='6' class='margi'>
                  نام
              <v-text-field class='rounded-xl' outlined label='نام'></v-text-field>
              ایمیل
              <v-text-field class='rounded-xl' label='ایمیل' outlined></v-text-field>
              رمز عبور
              <v-text-field class='rounded-xl' label='رمز عبور' outlined></v-text-field>
            </v-col>
            <v-col cols='12' sm='6' class='margi'>
              نام خانوادگی
              <v-text-field class='rounded-xl' label=' نام خانوادگی' outlined></v-text-field>
              موبایل
              <v-text-field class='rounded-xl' label='موبایل' outlined></v-text-field>
              تکرار رمز
              <v-text-field class='rounded-xl' label='تکرار رمز' outlined></v-text-field>

            </v-col>
            <v-col cols='12'>
              <v-text-field filled   class='rounded-xl'  append-icon='fa-search'  label='جستجوی نقش' outlined></v-text-field>
            </v-col>

          </v-row>

        </v-col>

        <v-btn class='mr-auto sav' color='#00B728'  rounded depressed outlined>ذخیره اطلاعات</v-btn>
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

.activate{
color: white !important;
  width: 112px;
  height: 26px;
  background: #009D4C;

  font-size: 12px;
}
.margi{
  margin-top: 64px
}
.sav{
  width: 171px;
 border: #00B728 2px solid;
}

</style>
