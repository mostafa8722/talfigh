<template>
  <div class='pt-7 px-4'>
    <div
      style='row-gap: 1rem'
      class='d-flex flex-wrap justify-space-between align-center'>
      <div class='d-flex flex-wrap align-center'
           style='column-gap: 1rem; row-gap: 1rem'>
        <input placeholder='جستجوی عنوان محصول...' type='text' class='input__search py-2 pr-5'/>
        <input placeholder='جستجوی دسته...' type='text' class='input__search py-2 pr-5'/>
        <v-btn
          style='color: white; font-size: 0.9rem; font-weight: 500; font-family: IranYekanFN, serif'
          color='#7A7A7A'
          class='px-10'
          rounded>جستجو</v-btn>
      </div>
      <div class='d-flex align-center'
           style='column-gap: 1.5rem;'>
        <div class='d-flex align-center' style='column-gap: 1rem'>
          <img class='paginator-controller' src='@/static/icons/arrow.svg' style='cursor:pointer;' alt=''>
          <img class='paginator-controller' style='transform: rotate(180deg); cursor:pointer;' src='@/static/icons/arrow.svg' alt=''>
        </div>
        <div class='d-flex align-center' style='column-gap: 0.5rem'>
          <span class='text__range'>1-50</span>
          <span class='text__range'>از</span>
          <span class='text__range'>266</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductsHeaderTable'
})
</script>

<style scoped lang='scss'>

.input__search{
  width: 200px;
  appearance: none;
  outline: none;
  border-radius: 25px;
  background-color: #FBFBFB;
  &::placeholder{
    color: #979797 !important;
    font-family: IranYekanFN, serif !important;
    font-weight: 500 !important;
    font-size: 0.9rem !important;
    font-style: normal;
  }
}
.text__range{
  color: #B0B0B0 !important;
  font-family: IranYekanFN, serif !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  font-style: normal;
}

.paginator-controller {
  @include transition();
  opacity: 0.3;
  &:hover {
    opacity: 0.7;
  }
}

</style>
