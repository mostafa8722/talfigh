<template>
  <div style='overflow-x: auto'>
    <v-container>
      <v-row style='column-gap: 1rem; row-gap: 1rem' class='mt-5 mr-5' align='center'>
        <span class='title'>لیست کاربران</span>
        <v-btn width='230' height='35' class='mr-5' rounded color='primary'>
          <span class='text-btn'>خروجی فایل اکسل</span>
        </v-btn>
      </v-row>
      <v-col class='mt-5'>
        <div style='border-radius: 20px' class='white elevation-3 container__head'>
          <v-row style='column-gap: 1rem' class='mt-5 mr-5 py-5' align='center'>
            <v-col cols='3' align-self='start'>
              <div>
                <img src='@/static/icons/user-checked-primary.svg' alt=''>
              </div>
              <span class='text-number'>5250 کاربر قدیمی وارد شده</span>
            </v-col>
            <v-col col='3' align-self='start'>
              <div>
                <img src='@/static/icons/user-checked-orange.svg' alt=''>
              </div>
              <span class='text-number'>55 تعداد کاربران جایگذاری شده اند</span>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-container>
    <UsersTableBox class='mt-10 mb-10' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import UsersTableBox from '~/components/users/UsersTableBox.vue'

export default Vue.extend({
  name: 'Index',
  components: { UsersTableBox },
  data() {
    return {}
  }
})
</script>

<style scoped lang='scss'>

.title {
  font-size: 1.9rem !important;
  color: #fff !important;
  font-weight: 500 !important;
  font-family: IranYekanFN, serif !important;
}

.text-btn {
  font-size: 1rem !important;
  color: #fff !important;
  font-weight: 400 !important;
  font-family: IranYekanFN, serif !important;
}

.text-number {
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: #000;
  font-family: IranYekanFN, serif !important;
}


.container__head{
  @media screen and (max-width: 600px){
    width: 1200px;
  }
}

</style>
