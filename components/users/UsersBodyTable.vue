<template>
  <div>
    <div v-for='item in items' :key='item.id' >
    <div
      class='d-flex flex-column flex-md-row item-list
      px-7 py-7 justify-space-between align-start align-md-center gap-responsive'>
      <span
        style='color: #197095;
               font-size: 1rem;
               font-weight: 500;
'>
        {{ item.fullName }}
      </span>
      <div class='d-flex align-center'>
        <span
          style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          به شماره ملی :
        </span>
        <span class='mr-1'  style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>
          {{ item.nationalCode }}
        </span>
      </div>
      <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.date }}</span>
      <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.mobile }}</span>
      <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.type }}</span>
      <div class='d-flex align-center' style='column-gap: 1rem'>
        <v-btn height='25' width='125' color='#009D4C' v-if='item.status === 0' rounded >
          <img src='@/static/icons/checked.svg' alt=''>
          <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>فعال سازی</span>
        </v-btn>
        <v-btn height='25' width='125' v-else rounded color='#FF5C5C' >
          <img src='@/static/icons/trash.svg' alt=''>
          <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>بلاک مدیر</span>
        </v-btn>
        <div style='background-color: #F2994A; border-radius: 50%'
             class='py-2 edit-btn px-2 d-flex justify-center align-center' >
          <img src='@/static/icons/edit.svg' alt=''>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'UsersBodyTable',
  data() {
    return{
      items: [
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'رزروی',
          status: 0,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'رزروی',
          status: 1,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'رزروی',
          status: 1,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'رزروی',
          status: 0,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'رزروی',
          status: 1,
        },
      ]
    }
  }
})
</script>

<style scoped lang='scss'>
span{
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
