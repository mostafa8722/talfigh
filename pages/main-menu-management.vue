<template>
  <div class="pa-2 pa-md-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <div class="mt-4">
          <span class="white--text" style="font-size: 0.9rem"> صفحه‌ها </span>
          <v-autocomplete
            v-model="pageId"
            :items="pages"
            item-text="title"
            item-value="id"
            return-object
            background-color="#D0D0D0"
            hide-details
            outlined
          >
          </v-autocomplete>
        </div>
        <div class="mt-4">
          <span class="white--text" style="font-size: 0.9rem"> دسته‌ها </span>
          <v-autocomplete
            v-model="categoryId"
            :items="categories"
            item-text="title"
            item-value="id"
            return-object
            background-color="#D0D0D0"
            hide-details
            outlined
          >
          </v-autocomplete>
        </div>
        <div class="mt-4">
          <span class="white--text" style="font-size: 0.9rem"> بلاگ </span>
          <v-autocomplete
            v-model="pageId"
            :items="pages"
            item-text="title"
            item-value="id"
            return-object
            background-color="#D0D0D0"
            hide-details
            outlined
          >
          </v-autocomplete>
        </div>
        <div class="mt-4">
          <span class="white--text" style="font-size: 0.9rem"> محصولات </span>
          <v-autocomplete
            v-model="productId"
            :items="products"
            item-text="title"
            item-value="id"
            return-object
            background-color="#D0D0D0"
            hide-details
            outlined
          >
          </v-autocomplete>
        </div>

        <v-expansion-panels class="mt-16" flat>
          <v-expansion-panel class="mb-2">
            <v-expansion-panel-header style="background-color: #d0d0d0">
              لینک اختصاصی
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <!-- <v-col class="mt-4 pb-0" cols="12">
                  <span style="color: #747474">عنوان</span>
                  <v-text-field
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col> -->
                <v-col class="my-4 py-0" cols="12">
                  <span style="color: #747474">لینک خارجی</span>
                  <v-text-field
                    v-model="externalLink"
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="float-left">
                <v-btn color="primary" class="px-10" rounded @click="storeMenu">
                  اضافه کردن به منو
                </v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" lg="9" md="9">
        <v-row>
          <v-col cols="6">
            <span class="white--text" style="font-size: 0.9rem">عنوان</span>
            <v-row>
              <v-col cols="10">
                <v-text-field
                  v-model="title"
                  placeholder="عنوان"
                  background-color="#fff"
                  class="my-4"
                  hide-details
                  outlined
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <span class="white--text" style="font-size: 0.9rem"
              >منوی مورد نظر را انتخاب کنید</span
            >
            <v-row>
              <v-col cols="10">
                <v-autocomplete
                  v-model="type"
                  placeholder="نام منو"
                  :items="items"
                  item-text="name"
                  item-value="key"
                  background-color="#fff"
                  class="my-4"
                  hide-details
                  return-object
                  outlined
                >
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card>
          <v-card-title class="card-title pa-10">نام منو</v-card-title>
          <v-card-text class="pa-2">
            <v-draggable-treeview v-model="menus" class="card">
              <template #label="{ item }" class="card">
                <div>{{ item.title }}</div>
              </template>
              <template #append="{ item }">
                <v-row>
                  <v-col cols="12" lg="4" md="4" class="pr-4 pr-md-0">
                    <div class="float-left">
                      <v-btn
                        color="warning"
                        class="ma-1 card-btn"
                        elevation="0"
                        x-small
                        fab
                        @click="showEditMenuDialog(item)"
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-pencil-alt</v-icon
                        > </v-btn
                      ><v-btn
                        class="ma-1 card-btn"
                        color="error"
                        elevation="0"
                        x-small
                        fab
                        @click="deleteMenu(item)"
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-trash-alt</v-icon
                        > </v-btn
                      ><v-btn
                        color="primary"
                        small
                        class="ma-2 card-btn"
                        icon
                        @click="showAddChildDialog(item)"
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-plus</v-icon
                        >
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </template>
            </v-draggable-treeview>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="ml-4 mb-5">
              <v-btn color="primary" class="px-10" rounded @click="storeMenu">
                ذخیره اطلاعات رسته
              </v-btn>
            </div>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>

    <th-modal v-model="addChildDialog">
      <template #title>
        <span>افزودن زیر منو</span>
      </template>
      <template #body>
        <div class="mr-1 mt-2 black--text">عنوان زیر منو</div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="child"
              height="40"
              background-color="#FBFBFB"
              class="pt-0"
              placeholder="عنوان منو"
              rounded
            ></v-text-field
          ></v-col>
          <v-col cols="3"
            ><v-btn class="rounded-xl mt-1" color="primary" @click="addChild"
              >ذخیره</v-btn
            ></v-col
          >
        </v-row>
      </template>
    </th-modal>
    <th-modal v-model="editMenuDialog">
      <template #title>
        <span>ویرایش منو</span>
      </template>
      <template #body>
        <div class="mr-1 mt-2 black--text">عنوان منو</div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="selectedMenu.title"
              height="40"
              background-color="#FBFBFB"
              class="pt-0"
              placeholder="عنوان منو"
              rounded
            ></v-text-field
          ></v-col>
          <v-col cols="3"
            ><v-btn class="rounded-xl mt-1" color="primary" @click="updateMenu">ذخیره</v-btn></v-col
          >
        </v-row>
      </template>
    </th-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cards',
  data() {
    return {
      selectedMenu: {} as any,
      editMenuDialog: false,
      addChildDialog: false,
      child: '',
      title: '',
      type: {} as any,
      externalLink: '',
      productId: {} as any,
      pageId: {} as any,
      postId: {} as any,
      categoryId: {} as any,
      items: [
        { key: 1, name: 'صفحه اصلی' },
        { key: 2, name: 'فروشگاه' },
      ],
    }
  },
  head: {
    title: 'مدیریت منوها',
  },
  computed: {
    menus: {
      get() {
        return this.$store.getters['main-menu-management/menus']
      },
      set(value) {
        this.$store.commit('main-menu-management/setMenus', value)
      },
    },
    searchResult: {
      get() {
        return this.$store.getters['main-menu-management/searchResult']
      },
    },
    pages: {
      get() {
        return (this as any).$store.getters['pages/lists']
      },
    },
    products: {
      get() {
        return (this as any).$store.getters['products/products']
      },
    },
    categories: {
      get() {
        return this.$store.getters['categories/categories']
      },
    },
  },
  created() {
    this.getMenus()
    this.getPages()
    this.getCategories()
    this.getProducts()
  },
  methods: {
    getPages() {
      this.$store.dispatch('pages/getPages')
    },
    getCategories() {
      this.$store.dispatch('categories/getCategories', 1)
    },
    getProducts() {
      this.$store.dispatch('products/getProducts')
    },
    showEditMenuDialog(menu: any) {
      this.selectedMenu = { ...menu }
      this.editMenuDialog = true
    },
    showAddChildDialog(menu: any) {
      this.child = ''
      this.selectedMenu = { ...menu }
      this.addChildDialog = true
    },
    getMenus() {
      this.$store.dispatch('main-menu-management/getMenus', 1)
    },
    updateMenu() {
      this.editMenuDialog = false
      const data = {
        id: this.selectedMenu.id,
        title: this.selectedMenu.title,
        type: this.type.key,
        parent_id: this.selectedMenu.id,
        external_link: this.externalLink,
        product_id: this.productId.id,
        page_id: this.pageId.id,
        post_id: this.postId.id,
        category_id: this.categoryId.id,
      }
      this.$store.dispatch('main-menu-management/updateMenu', data).then(() => {
        this.getMenus()
      })
    },
    addChild() {
      this.addChildDialog = false
      const data = {
        title: this.child,
        type: this.type.key,
        parent_id: this.selectedMenu.id,
        external_link: this.externalLink,
        product_id: this.productId.id,
        page_id: this.pageId.id,
        post_id: this.postId.id,
        category_id: this.categoryId.id,
      }
      this.$store.dispatch('main-menu-management/addChild', data).then(() => {
        this.getMenus()
      })
    },
    storeMenu() {
      this.addChildDialog = false
      const data = {
        title: this.title,
        type: this.type,
        external_link: this.externalLink,
        product_id: this.productId.id,
        page_id: this.pageId.id,
        post_id: this.postId.id,
        category_id: this.categoryId.id,
      }
      this.$store.dispatch('main-menu-management/storeMenu', data).then(() => {
        this.title = ''
        this.getMenus()
      })
    },
    deleteMenu(menu: any) {
      this.selectedMenu = { ...menu }

      this.$store
        .dispatch('main-menu-management/deleteMenu', this.selectedMenu.id)
        .then(() => {
          this.getMenus()
        })
    },
  },
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .card-btn {
    max-width: 25px;
    max-height: 25px;
  }
}
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
