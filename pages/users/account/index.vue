<template>
  <div>
    <TLFContainer>
      <v-row style='column-gap: 1rem;' class='mb-5' align='center'>
        <span class='title'>تکمیل اطلاعات حساب</span>
        <v-btn :disabled='!firstname || !lastname || !account_number' @click='updateAccount' width='150' height='35' class='d-none d-sm-inline-block mr-5' rounded color='primary'>
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
        :disabled='!firstname || !lastname || !account_number'
        @click='updateAccount'
        width='150'
        height='35'
        class='py-6 px-6 pa-sm-0'
        rounded
        color='primary'>
        <span class='text-btn'>ذخیره اطلاعات</span>
      </v-btn>
    </div>
    <th-modal @input='updateModal' :value='modal.show'>
      <template #title>
        {{ modal.title }}
      </template>
      <template #body>
        {{ modal.body }}
      </template>
      <template #actions>
        <v-btn @click='confirmModal' :color='modal.action'>
          باشه
        </v-btn>
      </template>
    </th-modal>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import AccountBox from '~/components/users/account/AccountBox.vue'
import AccountCard from '~/components/users/account/AccountCard.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'

export default Vue.extend({
  name: 'index',
  components: { TLFContainer, AccountBox, AccountCard },
  head: {
    title: "تکمیل اطلاعات حساب"
  },
  methods: {
    updateAccount(){
      this.$store.dispatch('users/account/updateUserAccount')
    },
    confirmModal() {
      this.$store.commit('users/account/SET_MODAL', {
        show: false,
        title: '',
        body: '',
        action: ''
      })
    },
    updateModal(value: any){
      (this as any).modal = {
        show: value,
        title: '',
        body: '',
        action: ''
      }
    }
  },
  computed: {
    modal: {
      get() {
        return (this as any).$store.getters['users/account/getModal']
      },
      set(value) {
        (this as any).$store.commit('users/account/SET_MODAL', value)
      }
    },
    firstname: {
      get(){
        return (this as any).$store.getters['users/account/getFirstName']
      },
      set(value){
        (this as any).$store.commit('users/account/setFirstName', value)
      }
    },
    lastname: {
      get(){
        return (this as any).$store.getters['users/account/getLastName']
      },
      set(value){
        (this as any).$store.commit('users/account/setLastName', value)
      }
    },
    account_number: {
      get(){
        return (this as any).$store.getters['users/account/getAccountNumber']
      },
      set(value){
        (this as any).$store.commit('users/account/setAccountNumber', value)
      }
    },
    sheba_number: {
      get(){
        return (this as any).$store.getters['users/account/getShebaNumber']
      },
      set(value){
        (this as any).$store.commit('users/account/setShebaNumber', value)
      }
    },
  },
  created() {
    (this as any).$store.dispatch('users/account/getUserAccount')
  }
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
