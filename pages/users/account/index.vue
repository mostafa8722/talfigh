<template>
  <div>
    <TLFContainer>
      <v-row style='column-gap: 1rem;' class='mb-5' align='center'>
        <span class='title'>تکمیل اطلاعات حساب</span>
        <v-btn width='150' height='35' class='d-none d-sm-inline-block mr-5' rounded color='primary'>
          <span class='text-btn'>ذخیره اطلاعات</span>
        </v-btn>
      </v-row>
      <AccountBox />
    </TLFContainer>
    <AccountCard class='d-lg-none mx-auto' />
    <div
      style='border-radius: 25px'
      class='d-flex d-sm-none white justify-center align-center mx-5 mb-5 pa-10'>
      <v-btn
        width='150'
        height='35'
        class='py-6 px-6 pa-sm-0'
        rounded
        color='primary'>
        <span class='text-btn'>ذخیره اطلاعات</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AccountBox from '~/components/users/account/AccountBox'
import AccountCard from '~/components/users/account/AccountCard'
import TLFContainer from '../../../components/utilities/TLF-Container'

export default Vue.extend({
  name: 'index',
  components: { TLFContainer, AccountBox, AccountCard },
  head: {
    title: "تکمیل اطلاعات حساب"
  },
})
</script>

<style scoped lang='scss'>
.text-btn {
  font-size: 0.9rem !important;
  color: #fff !important;
  font-weight: 400 !important;
  font-family: IranYekanFN, serif !important;
  @media screen and (max-width: 600px) {
    font-size: 1.1rem !important;
  }
}

.title {
  font-size: 1.5rem !important;
  color: #fff !important;
  font-weight: 500 !important;
  font-family: IranYekanFN, serif !important;
}

</style>
