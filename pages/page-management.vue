<template>
  <div>
    <v-row class="pa-md-10 pa-2">
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >مدیریت صفحه‌ها</span
        >
      </v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="button px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
      <v-col class="mt-4" cols="12"
        ><span class="label">عنوان بلاگ</span></v-col
      >
      <v-col class="pt-0 pb-0" cols="12" lg="4" md="4">
        <v-text-field
          outlined
          solo
          class="rounded-lg"
          placeholder="عنوان بلاگ"
        ></v-text-field>
      </v-col>
      <v-col class="pt-0" cols="12" lg="4" md="4">
        <v-row>
          <v-col class="pl-0 pt-0" cols="6"
            ><span class="label">عکس شاخص مقاله</span
            ><v-btn class="button px-10 rounded-xl mt-2" color="primary"
              ><v-icon size="10" class="mt-1">fas fa-plus</v-icon>&nbsp;عکس بزرگ
              بالا</v-btn
            ></v-col
          >
          <v-col class="pt-0 pr-xl-0 pr-4" cols="6">
            <v-img class="image" :src="images.topBig"></v-img
          ></v-col>
        </v-row>
      </v-col>
      <v-col cols="12"><span class="label">محتوا مقاله</span></v-col>
      <v-col class="pt-0 pb-0" cols="12">
        <v-textarea
          outlined
          solo
          class="rounded-lg"
          height="300"
          placeholder="محتوا مقاله"
        ></v-textarea>
      </v-col>
      <v-col cols="12"><span class="label">توضیحات متا</span></v-col>
      <v-col class="pt-0 pb-0" cols="12">
        <v-text-field
          outlined
          solo
          class="rounded-lg"
          placeholder="توضیحات متا"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="my-8">
      <v-data-table hide-default-footer :items="items" :headers="headers">
        <template #top="{ pagination, options, updateOptions }">
          <v-row class="pa-md-0 pa-4">
            <v-col class="pt-1" cols="12" lg="2" md="2"
              ><v-text-field
                height="40"
                background-color="#FBFBFB"
                placeholder="جستجو عنوان مقاله..."
                rounded
              ></v-text-field
            ></v-col>
            <v-col class="pt-1" cols="12" lg="2" md="2"
              ><v-text-field
                height="40"
                background-color="#FBFBFB"
                placeholder="جستجو دسته..."
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="1" md="1"
              ><v-btn class="white--text px-8 mt-2" rounded color="#7A7A7A"
                >جستجو</v-btn
              ></v-col
            >
            <v-col cols="12" lg="3" md="3"
              ><v-btn
                class="white--text px-8 mt-2 mr-md-4"
                rounded
                color="#7A7A7A"
                >جستجو از تاریخ 12 تا 12</v-btn
              ></v-col
            >
            <v-col cols="12" lg="4" md="4"
              ><v-data-footer
                :pagination="pagination"
                :options="options"
                items-per-page-text="$vuetify.dataTable.itemsPerPageText"
                @update:options="updateOptions"
            /></v-col>
          </v-row>
          <v-divider />
        </template>
        <template #[`item.actions`]>
          <div class="d-flex flex-row py-6">
            <v-btn fab x-small color="error" elevation="0"
              ><v-icon>fas fa-trash-alt</v-icon></v-btn
            >
            <v-btn fab x-small color="warning" class="mr-4" elevation="0"
              ><v-icon>fas fa-edit</v-icon></v-btn
            >
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageManagement',
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
  },
})
</script>

<style lang="scss" scoped>
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
