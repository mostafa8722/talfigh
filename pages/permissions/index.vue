<template>
  <div>
    <v-row>
      <div class="white--text pa-md-10 pa-8" style="font-size: 1.6rem">
        دسترسی‌ها
      </div>
      <v-spacer></v-spacer>
      <v-btn
        class="px-10 ma-8 mt-md-10 mt-0 rounded-xl"
        color="primary"
        @click="addPermissionDialog = true"
        >افزودن دسترسی</v-btn
      >
    </v-row>
    <div class="mb-8 table-card">
      <v-data-table
        :items="items"
        :headers="headers"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <template #top>
          <v-row class="pa-md-0 pa-4">
            <v-col class="pt-1" cols="12" lg="3" md="3"
              ><v-text-field
                height="40"
                background-color="#FBFBFB"
                placeholder="جستوجوی دسترسی..."
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="1" md="1"
              ><v-btn class="white--text px-8 mt-2" rounded color="#7A7A7A"
                >جستجو</v-btn
              ></v-col
            >
          </v-row>
          <v-divider />
        </template>
        <template #[`item.actions`]>
          <div class="d-flex flex-row py-6">
            <v-btn fab x-small color="error" elevation="0"
              ><v-icon>fas fa-trash-alt</v-icon></v-btn
            >
            <v-btn fab x-small color="warning" class="mr-4" elevation="0">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-end ma-4 pb-6">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
    <th-modal v-model="addPermissionDialog" width="700">
      <template #body>
        <v-row>
          <v-col cols="12" lg="4" md="4">
            <span class="mr-4">عنوان گروه دسترسی</span>
            <v-text-field
              height="40"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="عنوان گروه دسترسی"
              rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4">
            <span class="mr-4">slug</span>
            <v-text-field
              height="40"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="slug"
              rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4">
            <span class="mr-4">توضیحات رسته</span>
            <v-textarea
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="توضیحات رسته"
              rounded
            ></v-textarea>
          </v-col>
        </v-row>
      </template>
      <template #actions>
        <div>
          <v-btn
            rounded
            color="error"
            class="px-8"
            text
            @click="addPermissionDialog = false"
            >لغو</v-btn
          >
          <v-btn rounded color="primary" class="px-8">ثبت</v-btn>
        </div>
      </template>
    </th-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Permissions',
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      addPermissionDialog: false,
      items: [
        {
          title: 'حذف و ویرایش',
          slug: 'test.slug',
        },
        {
          title: 'حذف و ویرایش',
          slug: 'test.slug',
        },
        {
          title: 'حذف و ویرایش',
          slug: 'test.slug',
        },
        {
          title: 'حذف و ویرایش',
          slug: 'test.slug',
        },
        {
          title: 'حذف و ویرایش',
          slug: 'test.slug',
        },
      ],
      headers: [
        {
          text: 'عنوان',
          value: 'title',
          width: '100px',
        },
        {
          text: 'slug',
          value: 'slug',
          width: '100px',
        },
        { text: 'عملیات', value: 'actions', width: '100px' },
      ],
    }
  },
  head: {
    title: "دسترسی‌ها"
  },
})
</script>

<style lang="scss" scoped>
.table-card {
  background-color: #fff;
}
</style>
