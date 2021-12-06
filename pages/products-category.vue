<template>
  <div class="pa-2 pa-md-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >رسته محصولات</span
        >
      </v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn class="button px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <v-card class="pa-6 rounded-xl">
          <div style="font-size: 1.2rem; font-weight: 700">اضافه کردن رسته</div>
          <div class="mr-1 mt-6">عنوان رسته</div>
          <v-row>
            <v-col cols="8">
              <v-text-field
                height="40"
                background-color="#FBFBFB"
                class="pt-0"
                placeholder="عنوان رسته"
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="3"
              ><v-btn class="rounded-xl mt-1" color="primary"
                >اضافه کردن</v-btn
              ></v-col
            >
          </v-row>
          <v-text-field
                background-color="#FBFBFB"
                height="40"
                rounded
                hide-details
                append-icon="fas fa-search"
                placeholder="جستجو"
              ></v-text-field>
          <v-virtual-scroll
            class="mt-4 tlf-v-scroll"
            :items="categories"
            :item-height="60"
            height="200"
          >
            <template #default="{ item }">
              <div
                class="px-4 py-4 tlf-role-item"
                :class="{ selected: item.id == 3 }"
              >
                <v-row>
                  <v-col cols="7"
                    ><span>{{ item.title }}</span></v-col
                  >
                  <v-col class="d-flex flex-row" cols="4">
                    <v-btn
                      class="ma-1 card-btn"
                      color="error"
                      elevation="0"
                      x-small
                      fab
                    >
                      <v-icon>fas fa-trash-alt</v-icon>
                    </v-btn>
                    <v-btn
                      color="warning"
                      class="ma-1 card-btn"
                      elevation="0"
                      x-small
                      fab
                      @click="showEditCategoryDialog(item.title)"
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
      <v-col cols="12" lg="9" md="9">
        <v-card class="rounded-xl">
          <v-card-title class="card-title pa-10"
            >چینش رسته محصولات</v-card-title
          >
          <v-card-text class="pa-2">
            <v-draggable-treeview v-model="treeItems" class="card">
              <template #label="{ item }" class="card">
                <div>{{ item.name }}</div>
              </template>
              <template #append>
                <v-row>
                  <v-col cols="12" lg="4" md="4" class="pr-4 pr-md-0">
                    <div class="float-left">
                      <v-btn
                        color="warning"
                        class="ma-1 card-btn"
                        elevation="0"
                        x-small
                        fab
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
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-trash-alt</v-icon
                        > </v-btn
                      ><v-btn color="primary" small class="ma-2 card-btn" icon>
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
              <v-btn color="primary" class="px-10" rounded>
                ذخیره اطلاعات رسته
              </v-btn>
            </div>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
    <th-modal v-model="editCategoryDialog">
      <template #title>
        <span>ویرایش رسته</span>
      </template>
      <template #body>
        <div class="mr-1 mt-2 black--text">عنوان رسته</div>
          <v-row>
            <v-col cols="8">
              <v-text-field
                v-model="selectedCategory"
                height="40"
                background-color="#FBFBFB"
                class="pt-0"
                placeholder="عنوان رسته"
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="3"
              ><v-btn class="rounded-xl mt-1" color="primary"
                >اضافه کردن</v-btn
              ></v-col
            >
          </v-row>
      </template>
      
    </th-modal>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      selectedCategory: {},
      editCategoryDialog: true,
      categories: [
        {
          id: 1,
          title: 'کوزه'
        },
        {
          id: 2,
          title: 'سفال'
        }
      ],
      treeItems: [
        {
          id: 1,
          name: 'چوب1',
          children: [{ name: 'چوب2' }, { name: 'چوب3' }]
        },
        {
          id: 2,
          name: 'چوب4',
          children: [
            { name: 'چوب5' },
            { name: 'چوب6' },
            {
              name: 'چوب7',
              children: [{ name: 'چوب8' }, { name: 'چوب9' }]
            }
          ]
        },
        {
          id: 3,
          name: 'چوب10',
          children: [{ name: 'چوب11' }, { name: 'چوب12' }]
        },
        {
          id: 4,
          name: 'چوب13',
          children: [{ name: 'چوب14' }, { name: 'چوب15' }]
        }
      ]
    }
  },
  methods: {
    showEditCategoryDialog(category) {
      this.selectedCategory = category
      this.editCategoryDialog = true
    }
  }
}
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
