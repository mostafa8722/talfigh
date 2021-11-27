<template>
  <div>
    <div class="white--text pa-md-8 pa-6" style="font-size: 1.6rem">نقش‌ها</div>

    <div class="mb-8">
      <v-data-table hide-default-footer :items="items" :headers="headers">
        <template #top="{ pagination, options, updateOptions }">
          <v-row class="pa-md-0 pa-4">
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
            <v-col cols="12" lg="5" md="5"
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
            <v-btn fab x-small color="warning" class="mr-4" elevation="0">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Roles',
  data() {
    return {
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
})
</script>

<style lang="scss" scoped>
.v-data-footer {
  border: none !important;
}
</style>
