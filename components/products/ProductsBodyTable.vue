<template>
  <div>
    <div v-for='item in items' :key='item.id'>
      <div
        class='d-flex flex-column flex-md-row item-list
      px-7 py-7 justify-space-between align-start align-md-center gap-responsive'>
      <span
        style='color: #197095;
               font-size: 1rem;
               font-weight: 500;
'>
        {{ item.title }}
      </span>
        <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.date }}</span>
        <div class='d-flex align-center'>
        <span
          style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          دسته:
        </span>
          <span class='mr-1' style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>
          {{ item.category }}
        </span>
        </div>
        <div class='d-flex align-center'>
        <span
          style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          موجودی:
        </span>
          <span class='mr-1' style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>
          {{ item.number }}
        </span>
        </div>
        <div class='d-flex' style='column-gap: 0.5rem'>
          <v-btn fab x-small elevation='0' color='error'>
            <v-icon color='#fff' size='15'>fa-trash-alt</v-icon>
          </v-btn>
          <v-btn fab x-small elevation='0' color='warning'>
            <v-icon color='#fff' size='15'>fa-edit</v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductsBodyTable',
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'عنوان محصول',
          date: '1370/10/10',
          category: 'کوزه, سفال',
          number: '5'
        },
        {
          id: 2,
          title: 'عنوان محصول',
          date: '1370/10/10',
          category: 'کوزه, سفال',
          number: '5'
        },
        {
          id: 3,
          title: 'عنوان محصول',
          date: '1370/10/10',
          category: 'کوزه, سفال',
          number: '5'
        },
        {
          id: 4,
          title: 'عنوان محصول',
          date: '1370/10/10',
          category: 'کوزه, سفال',
          number: '5'
        },
        {
          id: 5,
          title: 'عنوان محصول',
          date: '1370/10/10',
          category: 'کوزه, سفال',
          number: '5'
        }
      ]
    }
  }
})
</script>

<style scoped lang='scss'>
span {
  font-family: IranYekanFN, serif !important;
}

.edit-btn {
  @include transition();
  cursor: pointer;

  &:hover {
    background-color: #c26f23 !important
  }
}

.item-list{
  @include transition();
  &:hover{
    background-color: #ece9e9;
  }
}

.gap-responsive{
  @media screen and (max-width: 960px){
    row-gap: 1rem;
    column-gap: 1rem;
  }
}
</style>
