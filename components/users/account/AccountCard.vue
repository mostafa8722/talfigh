<template>
  <div class='container__card'>
    <span class='bank__card' style='font-weight: bold; font-size: 1.6rem; color: white'>کارت بانک ملت</span>
    <span class='user__card' style='font-weight: bold; font-size: 1.1rem; color: white; margin-top: 2rem'>کارت به نام</span>
    <span class='sheba__card' style='font-weight: 500; font-size: 1.5rem; color: white; margin-top: 1.43rem'>
      IR 55 2651 0000 0000 8489 455
    </span>
    <span class='account__card' style='font-weight: 800; font-size: 1.5rem; color: white; margin-top: 1.18rem;
    letter-spacing: 2.5px'>شماره حساب : 8185518</span>
    <img
      class='d-none d-sm-inline-block'
      style='position: absolute; bottom: 0; left: 1.5rem'
      src='~/static/images/logo_sefid.svg' alt=''>
  </div>
</template>

<script>
export default {
  name: 'AccountCard'
}
</script>

<style scoped lang='scss'>
.container__card {
  overflow: hidden;
  position: relative;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 2rem;
  padding-top: 3rem;
  height: 315px;
  border-radius: 50px;
  background: linear-gradient(130deg, #F2994A 16.18%,
              rgba(222, 223, 146, 0) 16.22%),
              linear-gradient(103.42deg, #6284FF 13.76%,
              rgba(0, 55, 250, 0) 180.41%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 600px){
    width: 370px;
    border-radius: 20px;
    margin: 2rem auto;
  }
}
@media screen and (max-width: 600px){
  .user__card{
    margin-top: 0.5rem;
  }
  .sheba__card{
    margin-top: 0.7rem;
    font-size: 1.3rem !important;
  }
  .account__card{
    margin-top: 0.7rem;
  }
}
span{
  text-shadow: 0px 2px 0px #2F2F2F;
}
</style>
