<template>
  <v-container fluid>
    <v-card class='d-flex wrapper-card' height='132px'>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto'>امتیاز دهی</div>
        <div class='my-auto'>
          <v-text-field v-model='item.title' class='txt-input' dense filled label='امتیاز دهی' outlined></v-text-field>
        </div>
      </div>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto mr-10'>مبلغ</div>
        <div class='my-auto'>
          <v-text-field v-model='item.price' class='txt-input mr-10' dense filled label='مبلغ' outlined
                        rounded></v-text-field>
        </div>
      </div>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto mr-10'>درجه</div>
        <div class='my-auto'>
          <v-text-field v-model='item.rate' class='txt-input mr-10' dense filled label='درجه' outlined
                        rounded></v-text-field>
        </div>
      </div>
      <v-btn v-if='!edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
             @click='addScore'>
        اضافه به لیست
      </v-btn>
      <v-btn v-if='edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
             @click='updateItem'>
        ویرایش
      </v-btn>
    </v-card>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'AddCard',
  props: { edit: { type: Boolean, default: false } },
  data() {
    return {
      dialog: true,
      modalConfirm: false,
      item: {
        title: '',
        price: 0,
        rate_number: 0
      }
    }
  },

  methods: {
    addScore() {
      this.$store.dispatch('finance/scores/setScore', this.$data.item)


    },
    updateItem() {
      //TODO fix it after edit api was ready for scores
      this.$store.dispatch('finance/scores/setScore', this.$data.item)
    }
  }


})
</script>

<style lang='scss' scoped>
.txt-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}

.wrapper-card {
  padding: 11px 65px;
  box-shadow: 0 28px 30px -16px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
}

.txt-input {
  border: 2px solid #FBFBFB;
  box-sizing: border-box;
  border-radius: 10px

}
</style>
