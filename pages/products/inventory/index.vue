<template>
  <div>
    <TLFContainer>
      <span class='title mr-3 mr-sm-0'>لیست محصولات</span>
    </TLFContainer>
    <div class='my-7'>
      <v-data-table class='px-5' hide-default-footer :items='items' :headers='headers'>
        <template #top='{ pagination, options, updateOptions }'>
          <v-row class='pa-md-0 pa-4'>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو محصول...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو دسته...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col cols='12' lg='1' md='1'
            >
              <v-btn class='white--text px-8 mt-2' rounded color='#7A7A7A'
              >جستجو
              </v-btn
              >
            </v-col
            >
            <v-spacer></v-spacer>
            <v-col style='justify-self: flex-end' cols='12' lg='4' md='4'
            >
              <v-data-footer
                :pagination='pagination'
                :options='options'
                items-per-page-text='$vuetify.dataTable.itemsPerPageText'
                @update:options='updateOptions'
              />
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.title='{ item }'>
           <span
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.title }}
           </span>
        </template>
        <template v-slot:item.category='{ item }'>
           <span
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.category }}
           </span>
        </template>
        <template v-slot:item.inventory='{ item }'>
           <span
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             موجودی:
             {{ item.inventory }}
           </span>
        </template>
        <template #[`item.actions`]>
          <div class='d-flex flex-row py-6'>
            <v-btn rounded color='primary' elevation='0'>
              گزینش محصول
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
    <TLFContainer>
      <v-row
        justify='space-between'
        style='column-gap: 1rem; row-gap: 1rem'
        class='' align='center'>
        <span class='title mr-3 mr-sm-0'>موجودی محصولات</span>
        <v-btn width='230' height='35' class='mr-5 d-none d-md-inline-block' rounded color='primary'>
          <span class='text-btn'>ذخیره اطلاعات محصول</span>
        </v-btn>
      </v-row>
      <v-row class='mt-5'>
        <v-col cols='12' md='6'>
          <v-card
            class='d-flex justify-space-between align-center py-5 px-5 rounded-lg'>
            <div class='d-flex' style='column-gap: 0.5rem'>
              <span
                style='color: #197095; font-size: 1rem; font-weight: 400;'>
                عنوان محصول انتخاب شده:
              </span>
              <span
                style='font-size: 1rem; font-weight: 400;'>
                یک تنگ زیبا خیلی خیلی عجیب
              </span>
            </div>
            <img src='~/static/images/product.png' alt=''>
          </v-card>
        </v-col>
        <v-col cols='12' md='6'>
          <v-card
            height='100%'
            class='d-flex flex-column flex-md-row justify-space-between align-center py-5 px-5 rounded-lg'>
            <div class='d-flex flex-column' style='row-gap: 0.5rem'>
              <span
                style='font-size: 1rem; font-weight: 400;'>
                موجودی این محصول
              </span>
              <span
                style='color: #197095; font-size: 12px; font-weight: 400;'>
                برای کم کردن منفی را بزنید و برای زیاد کردن بر روی مثبت کلیک کنید
              </span>
            </div>
            <div class='d-flex align-center justify-center'>
              <div @click='decrease' class='controller-number'>-</div>
              <input
                style='width: 50px; outline: none;
                text-align: center;
                border-bottom: 1px solid #B9B9B9;
                border-top: 1px solid #B9B9B9;'
                type='number'
                v-model='inventory' />
              <div @click='increase' class='controller-number'>+</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class='mt-5'>
                <span style='font-size: 14px; color: white; font-weight: 400'
                      class='mr-3 mr-sm-0'>تاریخچه موجودی محصول</span>
      </v-row>
      <v-row class='mt-5'>
        <v-col cols='12'>
          <InventoryTableBox />
        </v-col>
      </v-row>
    </TLFContainer>
  </div>
</template>

<script lang='ts'>
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import Vue from 'vue'
import InventoryTableBox from '~/components/products/inventory/InventoryTableBox.vue'

export default Vue.extend({
  name: 'index',
  components: { InventoryTableBox, TLFContainer },
  data() {
    return {
      items: [
        {
          title: 'عنوان محصول',
          category: 'کوزه، سفال',
          inventory: '5'
        },
        {
          title: 'عنوان محصول',
          category: 'کوزه، سفال',
          inventory: '5'
        },
        {
          title: 'عنوان محصول',
          category: 'کوزه، سفال',
          inventory: '5'
        },
        {
          title: 'عنوان محصول',
          category: 'کوزه، سفال',
          inventory: '5'
        },
        {
          title: 'عنوان محصول',
          category: 'کوزه، سفال',
          inventory: '5'
        }
      ],
      headers: [
        {
          text: 'عنوان محصول',
          value: 'title',
          width: '100px'
        },
        {
          text: 'دسته محصول',
          value: 'category',
          width: '100px'
        },
        { text: 'موجودی', value: 'inventory', width: '200px' },
        { text: '', value: 'actions', width: '200px' }
      ],
      inventory: 500
    }
  },
  methods: {
    increase() {
      this.inventory++
    },
    decrease() {
      if (this.inventory > 0) {
        this.inventory--
      }
    }
  },
  head: {
    title: 'موجودی محصولات'
  }
})
</script>

<style lang='scss' scoped>

* {
  user-select: none;
}

.controller-number {
  cursor: pointer;
  border: 1px solid #F5A06F;
  color: #F5A06F;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include transition();

  &:hover {
    background-color: rgba(245, 160, 111, 0.1);
  }
}

.title {
  font-size: 1.6rem !important;
  color: #fff !important;
  font-weight: normal !important;
  font-family: IranYekanFN, serif !important;
}

.box {
  outline: 2px solid #efefef;
  background-color: #9f9f9f;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
}

.label {
  font-size: 0.9rem;
  color: #fff;
}

.button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}

.add {
  &:hover {
    cursor: pointer;
  }
}

.v-data-footer {
  border: none !important;
}

.text-btn {
  font-size: 1rem !important;
  color: #fff !important;
  font-weight: 400 !important;
  font-family: IranYekanFN, serif !important;
}

.v-data-table-header {
  border-top: none !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

</style>
