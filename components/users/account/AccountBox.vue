<template>
  <div class='
  d-flex
  flex-column
  white
  pt-12
  pb-12
  pr-7
  pl-5
  pr-sm-10
  pl-sm-10'
       style='border-radius: 25px;'>
    <div class='d-flex align-start' style='column-gap: 0.5rem'>
       <div class='d-flex flex-wrap form-inputs'
            style='column-gap: 1.9rem; row-gap: 1rem; width: 45%'>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label>نام</label>
           <v-text-field type='text' :rules='[rules.required]' hide-details outlined v-model='firstname'
                         style='width: 200px' placeholder='الیاس' class='name__input'></v-text-field>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label>نام خانوادگی</label>
           <v-text-field type='text' hide-details outlined :rules='[rules.required]' v-model='lastname' style='width: 200px' placeholder='ملکپور' class='family__input'></v-text-field>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label>شماره شبا</label>
           <div style='' class='d-flex align-center'>
             <v-text-field suffix="IR" v-model='sheba_number' type='text' class='sheba__input' hide-details outlined style='width: 435px' placeholder='شماره شبا' id='sheba__input'></v-text-field>
<!--             <span-->
<!--               style='font-weight: 800;-->
<!--               display: flex;-->
<!--               align-items: center;-->
<!--               justify-content: center;-->
<!--               padding-right: 0.5rem;-->
<!--               color: #747474;-->
<!--               font-size: 0.9rem;-->
<!--               border: 2px solid #E2E2E2;-->
<!--               border-right: none;-->
<!--               transform: translateX(10px);-->
<!--               height: 100%;-->
<!--               width: 50px;-->
<!--               '>IR</span>-->
           </div>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label>شماره حساب</label>
           <v-text-field hide-details outlined :rules='[rules.required]' v-model='account_number' type='text' style='width: 435px;' placeholder='شماره حساب' class='account__input'></v-text-field>
         </div>
       </div>
       <AccountCard class='d-none d-lg-flex' />
    </div>
    <v-btn
      @click='updateAccount'
      style='border-width: 2px'
      width='150'
      height='35'
      class='mt-15 d-none d-sm-inline-block align-self-end'
      rounded
      outlined
      :disabled='!firstname || !lastname || !account_number'
      color='#00B728'>
      <span class='text-btn'>ذخیره اطلاعات</span>
    </v-btn>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

import AccountCard from '~/components/users/account/AccountCard.vue'

export default Vue.extend({
  name: 'AccountBox',
  components: { AccountCard },
  computed: {
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
  data(){
    return{
      rules: {
        required: (value: string) => !!value || 'این فیلد الزامی می باشد'
      }
    }
  },
  methods: {
    updateAccount(){
      this.$store.dispatch('users/account/updateUserAccount')
    }
  }
})
</script>

<style scoped lang='scss'>
input{
  appearance: none;
  outline: none;
  border-radius: 10px;
  border: 2px solid #E2E2E2;
  padding-right: 1rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  &::placeholder{
    font-family: IranYekanFN, serif !important;
    font-size: 0.9rem;
    font-weight: normal;
    color: #D1D1D1;
  }
}
label{
  margin-right: 0.2rem;
  color: #747474;
  font-family: IranYekanFN, serif !important;
  font-size: 0.9rem;
  font-weight: normal;
}
.text-btn {
  font-size: 0.9rem !important;
  color: #04C500 !important;
  font-weight: bold !important;
  font-family: IranYekanFN, serif !important;
}

@media screen and (max-width: 600px){
  .name__input, .family__input, .account__input, .sheba__input{
    width: 100% !important;
  }

  .form-inputs{
      width: 100% !important;
  }
}
@media screen and (max-width: 1400px){
  .name__input, .family__input, .account__input, .sheba__input{
    width: 100% !important;
  }

  .form-inputs{
    div {
      width: 100%;
    }
  }
}
</style>
