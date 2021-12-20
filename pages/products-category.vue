<template>
  <div class="pa-2 pa-md-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem">رسته محصولات</span>
      </v-col>
      <!-- <v-col cols="12" lg="3" md="3"
        ><v-btn class="button px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      > -->
    </v-row>
    <v-row>
      <v-col cols="12" xl="3">
        <v-card class="pa-6 rounded-xl">
          <div style="font-size: 1.2rem; font-weight: 700">اضافه کردن رسته</div>
          <div class="mr-1 mt-6">عنوان رسته</div>
          <v-row>
            <v-col cols="8">
              <v-text-field
                v-model="category"
                height="40"
                background-color="#FBFBFB"
                class="pt-0"
                placeholder="عنوان رسته"
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="3"
              ><v-btn
                class="rounded-xl mt-1"
                color="primary"
                @click="storeCategory"
                >اضافه کردن</v-btn
              ></v-col
            >
          </v-row>
          <v-text-field
            v-model="search"
            background-color="#FBFBFB"
            height="40"
            rounded
            hide-details
            append-icon="fas fa-search"
            placeholder="جستجو"
            @blur="searchCategory"
          ></v-text-field>
          <v-virtual-scroll
            class="mt-4 tlf-v-scroll"
            :items="searchResult"
            :item-height="60"
            height="200"
          >
            <template #default="{ item }">
              <div class="px-4 py-4 tlf-role-item">
                <v-row>
                  <v-col cols="7"
                    ><span>{{ item[0].title }}</span></v-col
                  >
                  <v-col class="d-flex flex-row" cols="4">
                    <!-- <v-btn
                      class="ma-1 card-btn"
                      color="error"
                      elevation="0"
                      x-small
                      fab
                      @click="deleteCategory(item[0])"
                    >
                      <v-icon>fas fa-trash-alt</v-icon>
                    </v-btn> -->
                    <v-btn
                      color="warning"
                      class="ma-1 card-btn"
                      elevation="0"
                      x-small
                      fab
                      @click="showEditCategoryDialog(item[0])"
                    >
                      <v-icon>fas fa-pencil-alt</v-icon>
                    </v-btn></v-col
                  >
                </v-row>
              </div>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>
      <v-col cols="12" xl="9">
        <v-card class="rounded-xl">
          <v-card-title class="card-title pa-10"
            >چینش رسته محصولات</v-card-title
          >
          <v-card-text class="pa-2">
            <v-draggable-treeview v-model="categories" class="card">
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
                        @click="showEditCategoryDialog(item)"
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
                        @click="deleteCategory(item)"
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
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <div class="ml-4 mb-5">
              <v-btn color="primary" class="px-10" rounded>
                ذخیره اطلاعات رسته
              </v-btn>
            </div>
          </v-card-actions> -->
        </v-card></v-col
      >
    </v-row>
    <th-modal v-model="addChildDialog">
      <template #title>
        <span>افزودن زیر رسته</span>
      </template>
      <template #body>
        <div class="mr-1 mt-2 black--text">عنوان زیر رسته</div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="child"
              height="40"
              background-color="#FBFBFB"
              class="pt-0"
              placeholder="عنوان رسته"
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
    <th-modal v-model="editCategoryDialog">
      <template #title>
        <span>ویرایش رسته</span>
      </template>
      <template #body>
        <div class="mr-1 mt-2 black--text">عنوان رسته</div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="selectedCategory.title"
              height="40"
              background-color="#FBFBFB"
              class="pt-0"
              placeholder="عنوان رسته"
              rounded
            ></v-text-field
          ></v-col>
          <v-col cols="3"
            ><v-btn
              class="rounded-xl mt-1"
              color="primary"
              @click="updateCategory"
              >ذخیره</v-btn
            ></v-col
          >
        </v-row>
      </template>
    </th-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '~/data/models/category'

export default Vue.extend({
  name: 'Cards',
  data() {
    return {
      selectedCategory: {} as Category,
      editCategoryDialog: false,
      addChildDialog: false,
      child: '',
      category: '',
      search: '',
    }
  },
  head: {
    title: 'رسته محصولات',
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters['categories/categories']
      },
      set(value) {
        this.$store.commit('categories/setCategories', value)
      },
    },
    searchResult: {
      get() {
        return this.$store.getters['categories/searchResult']
      },
    },
  },
  created() {
    this.getCategories()
  },
  methods: {
    showEditCategoryDialog(category: Category) {
      this.selectedCategory = { ...category }
      this.editCategoryDialog = true
    },
    showAddChildDialog(category: Category) {
      this.child = ""
      this.selectedCategory = { ...category }
      this.addChildDialog = true
    },
    getCategories() {
      this.$store.dispatch('categories/getCategories', 1)
    },
    updateCategory() {
      this.editCategoryDialog = false
      const data = {
        id: this.selectedCategory.id,
        title: this.selectedCategory.title,
        type: this.selectedCategory.type,
        description: this.selectedCategory.description,
        tab: this.selectedCategory.tab,
      }
      this.$store.dispatch('categories/updateCategory', data).then(() => {
        this.getCategories()
      })
    },
    addChild() {
      this.addChildDialog = false
      const data = {
        title: this.child,
        type: this.selectedCategory.type,
        parent_id: this.selectedCategory.id,
        description: this.selectedCategory.description,
      }
      this.$store.dispatch('categories/addChild', data).then(() => {
        this.getCategories()
      })
    },
    storeCategory() {
      this.addChildDialog = false
      const data = {
        title: this.category,
        type: 1,
        description: '',
      }
      this.$store.dispatch('categories/storeCategory', data).then(() => {
        this.category = ''
        this.getCategories()
      })
    },
    searchCategory() {
      const data = {
        id: 1,
        search: this.search,
      }
      this.$store.dispatch('categories/searchCategory', data).then(() => {
        this.search = ''
      })
    },
    deleteCategory(category: Category) {
      this.selectedCategory = { ...category }

      this.$store
        .dispatch('categories/deleteCategory', this.selectedCategory.id)
        .then(() => {
          this.getCategories()
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
  margin: 15px;
  background-color: #f4f4f4;
  border: 2px solid #dad9d9;
  border-radius: 4px;
}

.tlf-v-scroll {
  background-color: #fbfbfb;
  border-radius: 26px;
}
</style>
