<template>
  <TLFContainer>
    <div style="color: #fff; font-size: 1.5rem">کالاهای رزرو</div>
    <div class="page-title mb-8 mt-4"></div>
    <v-card class="top-card pa-4 d-md-none mb-2">
      <div class="d-flex align-center">
        <v-icon color="#D9D9D9" class="ml-4"> fa-shopping-cart</v-icon
        ><span class="card-index black--text" style="font-size: 1rem !important"
          >شما باید <span style="color: red">5</span> محصول دیگر نیاز
          دارید</span
        >
      </div>
    </v-card>
    <v-row>
      <v-col cols="12" lg="8" md="8">
        <Container @drop="onDrop($event)">
          <Draggable v-for="item in items" :key="item.id">
            <v-card class="card my-2 my-md-4 pa-1 px-3 pa-md-6">
              <v-row class="d-flex align-center pr-4">
                <v-col class="pa-0" cols="12" lg="7">
                  <v-row class="d-flex align-center">
                    <v-col cols="3" md="2" lg="2" xl="2">
                      <v-icon color="#D9D9D9" class="ml-4">
                        fa-align-justify</v-icon
                      ><span class="card-index">{{ item.id }}</span></v-col
                    >

                    <v-col cols="2" class="d-none d-md-block">
                      <v-img
                        :src="item.image"
                        width="80"
                        height="80"
                        contain
                      ></v-img>
                    </v-col>
                    <v-col cols="6" md="8" lg="8" xl="8"
                      ><span class="goods-name">{{ item.data }}</span></v-col
                    >
                    <v-col cols="3" class="d-md-none">
                      <v-img
                        :src="item.image"
                        width="75"
                        height="75"
                        contain
                      ></v-img>
                    </v-col> </v-row
                ></v-col>
                <v-col class="pa-0 d-none d-md-block" cols="12" lg="5">
                  <v-row>
                    <v-col class="pa-0 pb-3" cols="5"
                      ><v-btn class="px-6 white--text" color="grey" small
                        >بالا بردن اولویت&nbsp;<v-icon
                          >fas fa-chevron-up</v-icon
                        ></v-btn
                      ></v-col
                    >
                    <v-col class="pa-0" cols="5"
                      ><v-btn class="px-6 white--text" color="grey" small
                        >پایین بردن اولویت&nbsp;<v-icon
                          >fas fa-chevron-down</v-icon
                        ></v-btn
                      ></v-col
                    >
                    <v-col class="pa-0" cols="2"
                      ><v-btn color="error lighten-2" text small
                        ><v-icon>fas fa-recycle</v-icon></v-btn
                      ></v-col
                    >
                    <v-col class="pa-0" cols="6"
                      ><span class="price">{{
                        item.price + ' تومان'
                      }}</span></v-col
                    >
                    <v-col class="pa-0" cols="4"
                      ><v-rating
                        dir="ltr"
                        background-color="orange lighten-3"
                        color="orange"
                        size="30"
                        length="3"
                        :value="3"
                      ></v-rating
                    ></v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </Draggable>
        </Container>
      </v-col>
      <v-col class="d-none d-md-block" cols="12" lg="4" md="4">
        <div class="ma-2 white--text">انتخاب امتیاز</div>
        <v-expansion-panels flat>
          <v-expansion-panel class="mb-2">
            <v-expansion-panel-header>
              <span>
                پنل 3 امتیازی
                <v-icon color="#E3CC00" class="ml-4"> fa-star</v-icon>
              </span>
              <template #actions>
                <v-icon class="mt-2"> fas fa-sort-up </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="pa-4 d-flex align-center">
                <v-col cols="2">
                  <v-icon color="black">fas fa-shopping-cart</v-icon>
                </v-col>
                <v-col cols="6">
                  <h3>کالاهای انتخاب شده شما</h3>
                </v-col>
                <v-col cols="3">
                  <div
                    class="float-left"
                    style="font-size: 2.5rem; font-weight: 700"
                  >
                    5/10
                  </div>
                </v-col>
              </v-row>
              <div class="mr-4">
                <div
                  class="card-index black--text mb-6"
                  style="font-size: 1rem !important"
                >
                  شما باید
                  <span style="color: red; font-size: 1.5rem">5</span> محصول
                  دیگر در این لیست رزرو کنید تا پلن فعال شود
                </div>
                <div
                  class="card-index black--text my-6"
                  style="font-size: 1rem !important"
                >
                  تا زمان تکمیل محصولات وضعیت جایگاه شما
                  <span style="color: red; font-size: 1.5rem">غیرفعال</span> است
                </div>
              </div>
              <v-btn color="primary" class="pa-8" block>رفتن به فروشگاه</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
     <div class="d-md-none d-flex justify-end mt-8">
      <v-btn class="px-10 rounded-xl" color="primary">نهایی کردن رزرو</v-btn>
    </div>
  </TLFContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import { applyDrag, generateItems } from '../utils/helpers'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
export default Vue.extend({
  name: 'ReservedGoods',
  components: {
    TLFContainer
  },
  data() {
    return {
      items: generateItems(5, (i: any) => ({
        id: i+1,
        data: 'یک کوزه بسیار زیبا به اسم ',
        image: '/images/1.png',
        price: '6.600.000'
      }))
    }
  },
  head: {
    title: 'کالاهای رزرو'
  },
  methods: {
    onDrop(dropResult: any) {
      this.items = applyDrag(this.items, dropResult)
    }
  }
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .v-expansion-panels {
    width: 100% !important;
  }
  .goods-name {
    font-size: 12px !important;
  }
  .card-index {
    font-size: 1.2rem !important;
  }
}
.card {
  border: 2px solid #ececec;
}
.top-card {
  background-color: #ececec;
  border: 3px solid #c4c4c4;
}
.page-title {
  border-bottom: 2px solid whitesmoke;
}
.card-index {
  font-size: 1.7rem;
  color: #747474;
}
.price {
  font-size: 1.7rem;
  color: #2d9dcd;
}
</style>
