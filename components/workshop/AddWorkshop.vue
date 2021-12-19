<template>
  <v-container class='d-flex flex-column' fluid>
    <v-btn v-if='!edit' class='mr-auto mb-auto ' color='primary' depressed height='38px' rounded width='185px'
           @click='addWorkshop'
    >
      ذخیره محتویات
    </v-btn>
    <v-btn v-if='edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
           @click='updateItem'>
      ویرایش
    </v-btn>
    <v-container :class='{white:edit}' class='d-flex wrapper-card mb-auto' fluid>

      <div class=' d-flex flex-column my-auto'>
        <div class='txt-label mb-2   mr-10'>کد کارگاه</div>
        <v-card class='  mr-2' elevation='4px' height='40px' rounded='lg'>
          <v-text-field v-model='item.code' class='txt-input' dense filled outlined placeholder='
          کد کارگاه' rounded>
          </v-text-field>
        </v-card>
      </div>
      <div class=' d-flex flex-column my-auto'>
        <div class='txt-label mb-2  mr-10'>نام کارگاه</div>
        <v-card class='  mr-2' elevation='4px' height='40px' rounded='lg'>
          <v-text-field v-model='item.title' class='txt-input' dense filled outlined placeholder='نام کارگاه' rounded>
          </v-text-field>
        </v-card>
      </div>
      <div class=' d-flex flex-column my-auto'>
        <div class='txt-label mb-2  mr-10'>استان کارگاه</div>
        <v-card class='  mr-2' elevation='4px' height='40px' rounded='lg'>
          <!--        <v-text-field v-model='item.city_id' class='txt-input' dense filled outlined placeholder='شهر کارگاه' rounded>-->
          <!--        </v-text-field>-->
          <v-autocomplete
            v-model='item.provinceId'
            :items='provinces'
            class='txt-input'
            color='warning'
            dense
            filled
            item-text='name'
            item-value='id'
            label='استان'
            outlined
          ></v-autocomplete>

        </v-card>

      </div>
      <div class=' d-flex flex-column my-auto'>
        <div class='txt-label mb-2  mr-10'>شهر کارگاه</div>
        <v-card class='  mr-2' elevation='4px' height='40px' rounded='lg'>
          <v-autocomplete
            v-model='item.city_id'
            :items='filteredCities'
            class='txt-input'
            color='warning'
            dense
            filled
            item-text='name'
            item-value='id'
            label='شهر'
            outlined
            placeholder='شهر کارگاه'
          ></v-autocomplete>
        </v-card>

      </div>

    </v-container>
  </v-container>


</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'AddWorkshop',
  props: { edit: { type: Boolean, default: false } },
  data() {
    return {
      dialog: true,
      modalConfirm: false,
      item: {
        code: null,
        title: '',
        city_id: '',
        provinceId: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      provinces: 'cities/provinces/getProvinces',
      cities: 'cities/cities/getCities'
    }),
    filteredCities(): object {
      const filteredCities = this.cities.filter(
        (x: any) => x.province_id === this.item.provinceId
      )
      return filteredCities
    }
  },
  methods: {
    addWorkshop() {
      this.$store.dispatch('workshops/setWorkshop', this.$data.item)
    },
    updateItem() {
      //TODO fix it after edit api was ready
      this.$store.dispatch('workshops/setWorkshop', this.$data.item)
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
  color: #FFFFFF;
}

.wrapper-card {
  height: 132px;


}

.txt-input {

  border-radius: 10px

}
</style>
