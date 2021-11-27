<template>
  <div style='padding-bottom: 250px' class='white ma-0 container__table'>
    <div class='d-flex flex-column'>
      <UsersHeaderTable />
      <v-divider class='mt-7'></v-divider>
      <UsersBodyTable />
    </div>
  </div>
</template>

<script>
import UsersHeaderTable from '~/components/users/UsersHeaderTable'
import UsersBodyTable from '~/components/users/UsersBodyTable'

export default {
  name: 'UsersTableBox',
  components: { UsersBodyTable, UsersHeaderTable },
  data() {
    return {
      images: {
        topBig: '/images/settings-sample.jpg'
      },
      items: [
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال'
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال'
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال'
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال'
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال'
        }
      ],
      headers: [
        {
          text: 'نام و نام‌خانوادگی',
          value: 'fullName',
          width: '100px'
        },
        {
          text: 'تاریخ عضویت',
          value: 'registeryDate',
          width: '100px'
        },
        { text: 'دسته', value: 'category', width: '200px' },
        { text: 'عملیات', value: 'actions', width: '200px' }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>

.container__table {
  height: auto;
  @media screen and (max-width: 600px) {
    width: 1200px;
  }

}
</style>
