<template>
  <div>
    <TLFContainer>
      <div class="white--text" style="font-size: 1.6rem">
        نقش‌ها
      </div>
    </TLFContainer>
    <div class="mb-8 mt-10 table-card">
      <v-data-table
        class='px-5'
        hide-default-footer
        :items="items"
        :headers="headers"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
        <template #top>
          <v-row class="pa-md-0 pa-4 px-md-5">
            <v-col class="pt-1" cols="12" lg="3" md="3"
              ><v-text-field
                height="40"
                background-color="#FBFBFB"
                placeholder="جستجو عنوان مقاله..."
                rounded
              ></v-text-field
            ></v-col>
            <v-col class="pt-1" cols="12" lg="3" md="3"
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
          </v-row>
          <v-divider />
        </template>
        <template #[`item.actions`]>
          <div class="d-flex flex-row py-6">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'

export default Vue.extend({
  name: 'Roles',
  components: { TLFContainer },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      items: [
        {
          title: 'مدیر فروش',
        },
        {
          title: 'مدیر فروش',
        },
        {
          title: 'مدیر فروش',
        },
        {
          title: 'مدیر فروش',
        },
        {
          title: 'مدیر فروش',
        },
      ],
      headers: [
        {
          text: 'عنوان',
          value: 'title',
          width: '300px',
        },
        { text: 'عملیات', value: 'actions', width: '100px' },
      ],
    }
  },
  head: {
    title: "نقش‌ها"
  },
})
</script>

<style lang="scss" scoped>
.table-card {
  background-color: #fff;
}
</style>
