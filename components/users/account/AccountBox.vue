<template>
  <div class='mr-sm-16
  mr-5
  ml-5
  ml-sm-16
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
       <div class='d-flex flex-wrap'
            style='column-gap: 1.9rem; row-gap: 1rem; width: 45%'>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label for='name__input'>نام</label>
           <input style='width: 200px' type='text' placeholder='الیاس' id='name__input'>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label for='family__input'>نام خانوادگی</label>
           <input style='width: 200px' type='text' placeholder='ملکپور' id='family__input'>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label for='sheba__input'>شماره شبا</label>
           <div style='' class='d-flex align-center'>
             <input style='width: 395px;' type='text' placeholder='شماره شبا' id='sheba__input'>
             <span
               style='font-weight: 800;
               display: flex;
               align-items: center;
               justify-content: center;
               padding-right: 0.5rem;
               color: #747474;
               font-size: 0.9rem;
               border-radius: 10px 0 0 10px;
               border: 2px solid #E2E2E2;
               border-right: none;
               transform: translateX(10px);
               height: 100%;
               width: 50px;
               '>IR</span>
           </div>
         </div>
         <div class='d-flex flex-column align-start justify-start' style='row-gap: 0.5rem'>
           <label for='account__input'>شماره حساب</label>
           <input style='width: 435px;' type='text' placeholder='شماره حساب' id='account__input'>
         </div>
       </div>
       <AccountCard class='d-none d-sm-flex' />
    </div>
    <v-btn
      style='border-width: 2px'
      width='150'
      height='35'
      class='mt-15 d-none d-sm-inline-block align-self-end'
      rounded
      outlined
      color='#00B728'>
      <span class='text-btn'>ذخیره اطلاعات</span>
    </v-btn>
  </div>
</template>

<script>
import AccountCard from './AccountCard'
export default {
  name: 'AccountBox',
  components: { AccountCard }
}
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
  #name__input, #family__input, #account__input{
    width: 300px !important;
  }
  #sheba__input{
    width: 263px !important;
  }
}

</style>
