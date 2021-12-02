<template>
  <div class='pb-7'>
    <v-row justify='space-between' align='start'>
      <v-col style='' md='6' cols='12'>
        <div style='border-left: 1px solid #E1E1E1' v-for='item in itemsRight' :key='item.id'>
          <div
            class='d-flex flex-wrap item-list
      px-7 py-3 justify-space-between align-start align-md-center gap-responsive'>
      <span
        style='color: #197095;
               font-size: 1rem;
               font-weight: 500;
'>
        {{ item.id }}
      </span>
            <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.title }}</span>
            <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.date }}</span>
            <div style='column-gap: 0.5rem' class='d-flex align-center'>
        <span
          style='
               font-size: 1rem;
               font-weight: 800;'>
          {{ item.number }}
        </span>
              <img v-if='item.type === "increase"' src='~/static/icons/increase.svg' alt=''>
              <img v-else src='~/static/icons/decrease.svg' alt=''>
            </div>
          </div>
          <v-divider class='d-md-none'></v-divider>
        </div>
      </v-col>
      <v-col cols='12' md='6'>
        <div v-for='item in itemsLeft' :key='item.id'>
          <div
            class='d-flex flex-wrap item-list
      py-3 pl-7 pr-7 pr-md-0 justify-space-between align-start align-md-center gap-responsive'>
      <span
        style='color: #197095;
               font-size: 1rem;
               font-weight: 500;
'>
        {{ item.id }}
      </span>
            <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.title }}</span>
            <span style='color: #197095;
               font-size: 1rem;
               font-weight: 500;'>{{ item.date }}</span>
            <div style='column-gap: 0.5rem' class='d-flex align-center'>
        <span
          style='
               font-size: 1rem;
               font-weight: 800;'>
          {{ item.number }}
        </span>
              <img v-if='item.type === "increase"' src='~/static/icons/increase.svg' alt=''>
              <img v-else src='~/static/icons/decrease.svg' alt=''>
            </div>
          </div>
          <v-divider class='d-md-none'></v-divider>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'InventoryBodyTable',
  data() {
    return {
      itemsRight: [
        {
          id: 1,
          title: 'عنوان محصول',
          date: '1370/10/10',
          number: '5',
          type: 'increase'
        },
        {
          id: 2,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 3,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 4,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 5,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 6,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 7,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 8,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 9,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 10,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 11,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        },
        {
          id: 12,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        }
      ],
      itemsLeft: [
        {
          id: 13,
          title: 'عنوان محصول',
          date: '1370/10/10',
          number: '5',
          type: 'increase'
        },
        {
          id: 14,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 15,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 16,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'increase',
          number: '5'
        },
        {
          id: 17,
          title: 'عنوان محصول',
          date: '1370/10/10',
          type: 'decrease',
          number: '5'
        }
      ]
    }
  }
})
</script>

<style scoped lang='scss'>
span {
  font-family: IranYekanFN, serif !important;
}

.edit-btn {
  @include transition();
  cursor: pointer;

  &:hover {
    background-color: #c26f23 !important
  }
}

.item-list {
  @include transition();


}

.gap-responsive {
  @media screen and (max-width: 960px) {
    row-gap: 1rem;
    column-gap: 1rem;
  }
}
</style>
