<template>
  <TLFContainer>
    <v-row>
      <v-col cols="12" lg="3" md="3"
        ><v-autocomplete
          v-for="item in items"
          :key="item.id"
          :label="item.name"
          :items="item.children"
          item-text="name"
          background-color="#D0D0D0"
          hide-details
          outlined
        >
        </v-autocomplete>
        <v-expansion-panels class="mt-16" flat>
          <v-expansion-panel class="mb-2">
            <v-expansion-panel-header style="background-color: #d0d0d0">
              لینک اختصاصی
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col class="mt-4 pb-0" cols="12">
                  <span style="color: #747474">عنوان</span>
                  <v-text-field
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="mb-4 py-0" cols="12">
                  <span style="color: #747474">لینک خارجی</span>
                  <v-text-field
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="float-left">
                <v-btn color="primary" class="px-10" rounded>
                  اضافه کردن به منو
                </v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" lg="9" md="9">
        <span class="white--text" style="font-size: 0.9rem"
          >منوی مورد نظر را انتخاب کنید</span
        >
        <v-row>
          <v-col cols="12" lg="5" md="5">
            <v-autocomplete
              label="نام منو"
              :items="items"
              item-text="name"
              background-color="#fff"
              class="my-4"
              hide-details
              outlined
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-card>
          <v-card-title class="card-title pa-10">نام منو</v-card-title>
          <v-card-text>
            <v-draggable-treeview v-model="treeItems" class="card">
              <template #prepend="{ item }" class="card">
                <span>{{ item.name }}</span>
              </template>
              <template #label>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col
                    align-self="center"
                    cols="12"
                    lg="3"
                    md="3"
                    sm="3"
                  ></v-col>
                  <v-col cols="12" lg="4" md="4" sm="4"
                    ><v-btn
                      color="warning"
                      class="ma-1"
                      elevation="0"
                      x-small
                      fab
                    >
                      <v-icon>fas fa-pencil-alt</v-icon> </v-btn
                    ><v-btn
                      class="ma-1"
                      color="error"
                      elevation="0"
                      x-small
                      fab
                    >
                      <v-icon>fas fa-trash-alt</v-icon> </v-btn
                    ><v-btn color="primary" small class="ma-2" icon>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </template>
            </v-draggable-treeview>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
  </TLFContainer>
</template>

<script>
import TLFContainer from '~/components/utilities/TLF-Container.vue'

export default {
  name: 'Cards',
  components: { TLFContainer },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'صفحه‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 2,
          name: 'دسته‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 3,
          name: 'بلاگ',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 4,
          name: 'محصولات',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        }
      ],
      treeItems: [
        {
          id: 1,
          name: 'صفحه‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 2,
          name: 'دسته‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            {
              name: 'پشتیبان',
              children: [
                { name: 'صفحه اصلی' },
                { name: 'درباره ما' },
                { name: 'مدیر بازرسی' },
                { name: 'پشتیبان' },
                { name: 'مدیر بازرسی' },
                { name: 'پشتیبان' }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'بلاگ',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 4,
          name: 'محصولات',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title {
  color: #747474;
  font-size: 1.6rem;
}

.card {
  margin: 5px;
  background-color: #f4f4f4;
  border: 2px solid #dad9d9;
  border-radius: 4px;
}
</style>
