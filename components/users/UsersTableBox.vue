<template>
  <div style='padding-bottom: 250px' class='white ma-0 container__table'>
    <div class='d-flex flex-column'>
      <UsersHeaderTable />
      <v-divider class='mt-7'></v-divider>
      <UsersBodyTable />
    </div>
  </div>
<!--  <div>-->
<!--    <div class="my-8">-->
<!--      <v-data-table hide-default-footer :items="items" :headers="headers">-->
<!--        <template #top="{ pagination, options, updateOptions }">-->
<!--          <v-row class="pa-md-0 pa-4">-->
<!--            <v-col class="pt-1" cols="12" lg="2" md="2"-->
<!--            ><v-text-field-->
<!--              height="40"-->
<!--              background-color="#FBFBFB"-->
<!--              placeholder="جستجو عنوان مقاله..."-->
<!--              rounded-->
<!--            ></v-text-field-->
<!--            ></v-col>-->
<!--            <v-col class="pt-1" cols="12" lg="2" md="2"-->
<!--            ><v-text-field-->
<!--              height="40"-->
<!--              background-color="#FBFBFB"-->
<!--              placeholder="جستجو دسته..."-->
<!--              rounded-->
<!--            ></v-text-field-->
<!--            ></v-col>-->
<!--            <v-col cols="12" lg="1" md="1"-->
<!--            ><v-btn class="white&#45;&#45;text px-8 mt-2" rounded color="#7A7A7A"-->
<!--            >جستجو</v-btn-->
<!--            ></v-col-->
<!--            >-->
<!--            <v-col cols="12" lg="3" md="3"-->
<!--            ><v-btn-->
<!--              class="white&#45;&#45;text px-8 mt-2 mr-md-4"-->
<!--              rounded-->
<!--              color="#7A7A7A"-->
<!--            >جستجو از تاریخ 12 تا 12</v-btn-->
<!--            ></v-col-->
<!--            >-->
<!--            <v-col cols="12" lg="4" md="4"-->
<!--            ><v-data-footer-->
<!--              :pagination="pagination"-->
<!--              :options="options"-->
<!--              items-per-page-text="$vuetify.dataTable.itemsPerPageText"-->
<!--              @update:options="updateOptions"-->
<!--            /></v-col>-->
<!--          </v-row>-->
<!--          <v-divider />-->
<!--        </template>-->
<!--        <template #[`item.actions`]>-->
<!--          <div class="d-flex flex-row py-6">-->
<!--            <v-btn fab x-small color="error" elevation="0"-->
<!--            ><v-icon>fas fa-trash-alt</v-icon></v-btn-->
<!--            >-->
<!--            <v-btn fab x-small color="warning" class="mr-4" elevation="0"-->
<!--            ><v-icon>fas fa-edit</v-icon></v-btn-->
<!--            >-->
<!--          </div>-->
<!--        </template>-->
<!--      </v-data-table>-->
<!--    </div>-->
<!--  </div>-->
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
        topBig: '/images/settings-sample.jpg',
      },
      items: [
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال',
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال',
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال',
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال',
        },
        {
          fullName: 'حسین دانش فر',
          registeryDate: '1400/12/12',
          category: 'کوزه، سفال',
        },
      ],
      headers: [
        {
          text: 'نام و نام‌خانوادگی',
          value: 'fullName',
          width: '100px',
        },
        {
          text: 'تاریخ عضویت',
          value: 'registeryDate',
          width: '100px',
        },
        { text: 'دسته', value: 'category', width: '200px' },
        { text: 'عملیات', value: 'actions', width: '200px' },
      ],
    }
  }
}
</script>

<style scoped lang='scss'>

.container__table{
  height: auto;
@media screen and (max-width: 600px){
  width: 1200px;
}
}


@media screen and (max-width: 800px) {
  .image {
    margin-right: 5% !important;
  }
}
.box {
  outline: 2px solid #efefef;
  background-color: #9f9f9f;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
}
.label {
  font-size: 0.9rem;
  color: #fff;
}
.button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}
.image {
  width: 101px;
  height: 70px;
  margin-right: 10%;
  border-radius: 80px;
}
.add {
  &:hover {
    cursor: pointer;
  }
}
.v-data-footer {
  border: none !important;
}
</style>
