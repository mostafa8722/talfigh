<template>
  <div>
    <v-row>
      <div class="white--text pa-md-8 pa-6" style="font-size: 1.6rem">
        گروه‌های دسترسی
      </div>
      <v-spacer></v-spacer>
      <v-btn
        class="px-10 ma-8 rounded-xl"
        color="primary"
        @click="addPermissionGroupDialog = true"
        >اضافه کردن گروه دسترسی تکی</v-btn
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
                placeholder="جستوجوی گروه دسترسی..."
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
    <th-modal v-model="addPermissionGroupDialog" width="500">
      <template #body>
        <v-row>
          <v-col cols="12">
            <span class="mr-4">عنوان گروه دسترسی</span>
            <v-text-field
              height="40"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="عنوان گروه دسترسی"
              rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span class="mr-4">انتخاب دسترسی را جستجو کنید</span>
            <v-autocomplete
              class="pt-0"
              background-color="#FBFBFB"
              rounded
              chips
              multiple
              deletable-chips
              :items="permissions"
              item-value="id"
              item-text="text"
            >
              <template #selection="data">
                <v-chip
                  close
                  color="warning"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.text }}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12"> </v-col>
        </v-row>
      </template>
    </th-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PermissionGroups',
  data() {
    return {
      addPermissionGroupDialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      permissions: [
        { id: 1, text: 'تستی' },
        { id: 2, text: 'تستی2' },
        { id: 3, text: 'تستی3' },
        { id: 4, text: 'تستی4' },
      ],
      items: [
        {
          title: 'لیست درخواست‌ها',
          slug: 'test.slug',
        },
        {
          title: 'لیست درخواست‌ها',
          slug: 'test.slug',
        },
        {
          title: 'لیست درخواست‌ها',
          slug: 'test.slug',
        },
        {
          title: 'لیست درخواست‌ها',
          slug: 'test.slug',
        },
        {
          title: 'لیست درخواست‌ها',
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
  methods: {
    remove(item: any) {
      const index = this.permissions.indexOf(item.name)
      if (index >= 0) this.permissions.splice(index, 1)
    },
  },
})
</script>

<style lang="scss" scoped>
.table-card {
  background-color: #fff;
}
</style>
