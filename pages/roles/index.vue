<template>
  <div class='pa-10'>
    <v-row>
      <v-col cols='3'>
        <v-card rounded='lg' class='pa-4'>
          <v-btn block depressed rounded='lg' color='primary'>
            <v-icon size='16'>fas fa-plus</v-icon>
            <span>اضافه کردن نقش</span>
          </v-btn>

          <v-text-field
            class='mt-4'
            append-icon='fas fa-search'
            filled
            rounded
            dense
            placeholder="جستجو نقش‌ها"
            hide-details/>

          <v-virtual-scroll
            class="mt-4 tlf-v-scroll"
            :items="roles"
            :item-height="60"
            height="490"
          >
            <template #default="{item}">
              <div class="px-4 py-4 tlf-role-item" :class="{selected:item.id==3}">
                <span>{{ item.title }}</span>
              </div>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>

      <v-col cols='9' class='pr-2'>
        <v-card rounded='lg' class='pa-4'>
          <v-row>
            <v-col cols="4">
              <h2 class="tlf-role-form-card-title">عنوان نقش</h2>

              <div class="mt-6 d-flex align-center">
                <v-text-field
                  placeholder="مدیر عامل"
                  class="rounded-lg"
                  hide-details
                  outlined/>

                <v-btn
                  class="mr-4"
                  color="red lighten-1"
                  text>
                  <v-icon>fas fa-trash-alt</v-icon>
                  <span class="mr-2">حذف</span>
                </v-btn>
              </div>

              <div class="mt-3 text-body-1">
                <span>توضیحات نقش</span>
              </div>

              <v-textarea
                class="mt-6 rounded-lg"
                placeholder="توضیحات..."
                outlined/>
            </v-col>

            <v-col cols="4">
              <v-card rounded='xl'
                      class='pa-4 d-flex flex-column align-center justify-center'
                      elevation="0"
                      color="#E4E4E4">

                <h3 class="black--text">گروه دسترسی</h3>

                <v-text-field
                  class='mt-4'
                  append-icon='fas fa-search'
                  filled
                  rounded
                  dense
                  placeholder="جستجو گروه دسترسی"
                  background-color="white"
                  hide-details/>

                <v-virtual-scroll
                  class="mt-4 tlf-v-scroll"
                  :items="roles"
                  :item-height="60"
                  width="100%"
                  max-height="300"
                >
                  <template #default="{item}">
                    <div class="px-4 py-4 tlf-role-item" :class="{selected:item.id==2}">
                      <span>{{ item.title }}</span>
                    </div>
                  </template>
                </v-virtual-scroll>

                <v-btn class="mt-3 white--text"
                       color="#7A7A7A"
                       elevation="0"
                       rounded>
                  اضافه کردن
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="4">
              <v-card rounded='xl'
                      class='pa-4 d-flex flex-column align-center justify-center'
                      elevation="0"
                      color="#E4E4E4">

                <h3 class="black--text">دسترسی</h3>

                <v-text-field
                  class='mt-4'
                  append-icon='fas fa-search'
                  filled
                  rounded
                  dense
                  placeholder="جستجو دسترسی"
                  background-color="white"
                  hide-details/>

                <v-virtual-scroll
                  class="mt-4 tlf-v-scroll"
                  :items="roles"
                  :item-height="60"
                  width="100%"
                  max-height="300"
                >
                  <template #default="{item}">
                    <div class="px-4 py-4 tlf-role-item" :class="{selected:item.id==5}">
                      <span>{{ item.title }}</span>
                    </div>
                  </template>
                </v-virtual-scroll>

                <v-btn class="mt-3 white--text"
                       color="#7A7A7A"
                       elevation="0"
                       rounded>
                  اضافه کردن
                </v-btn>
              </v-card>
            </v-col>
          </v-row>

          <v-chip-group class="mt-4">
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
            <v-chip color="#F2994A" text-color="white" close close-icon="fas fa-question-circle">
              مدیر فروش
            </v-chip>
          </v-chip-group>

          <div class="mt-4 d-flex">
            <v-spacer/>
            <v-btn color="#00B728" rounded outlined>
              ثبت و ویرایش نقش
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      roles: [
        {
          id: 1,
          title: 'نقش شماره 1'
        },
        {
          id: 2,
          title: 'نقش شماره 2'
        },
        {
          id: 3,
          title: 'نقش شماره 3'
        },
        {
          id: 4,
          title: 'نقش شماره 4'
        },
        {
          id: 5,
          title: 'نقش شماره 5'
        },
        {
          id: 6,
          title: 'نقش شماره 6'
        },
        {
          id: 7,
          title: 'نقش شماره 7'
        },
        {
          id: 8,
          title: 'نقش شماره 8'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.tlf-v-scroll {
  background-color: $near-white;
  border-radius: 26px;
}

.tlf-role-item.selected {
  background-color: $primary;
  color: white;
}

.tlf-role-form-card-title {
  font-size: 26px;
  font-weight: 500;
  color: $dark-grey;
}
</style>
