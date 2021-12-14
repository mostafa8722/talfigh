<template>
  <v-container class='pa-0' fluid>
    <v-data-table
      :headers='headers'
      :items='items'
      class='elevation-1 px-5'
      sort-by='calories'
    >
      <!--Delete Dialog-->
      <template #top>
        <v-dialog
          v-model='dialog'
        >
          <add-workshop :edit='true'></add-workshop>
        </v-dialog>

        <v-dialog v-model='dialogDelete' max-width='500px'>
          <!--          <v-card class='wrapper-card'>-->
          <!--            <v-card-title class='text-h5'>از حذف کردن این مورد اطمینان دارید؟</v-card-title>-->
          <!--            <v-card-actions>-->
          <!--              <v-spacer></v-spacer>-->
          <!--              <v-btn color='blue darken-1' text @click=' '>خیر</v-btn>-->
          <!--              <v-btn color='blue darken-1' text @click=' '>بله</v-btn>-->
          <!--              <v-spacer></v-spacer>-->
          <!--            </v-card-actions>-->
          <!--           </v-card>-->
        </v-dialog>
        <th-modal v-model='confirmDelete' el='thModal'>
          <template #title>
            {{ modal.title }}
          </template>
          <template #body>
            {{ modal.body }}
          </template>
          <template #actions>
            <v-btn :color='modal.action' @click='confirmModal'>
              بله
            </v-btn>
            <v-btn :color='modal.action' @click='confirmDelete=false'>
              خیر
            </v-btn>
          </template>
        </th-modal>

      </template>
      <template #top>
        <v-row class='pa-md-0 pa-4 px-md-5'>
          <v-col class='pt-1' cols='12' lg='3' md='3'
          >
            <v-text-field
              v-model='searchCode'
              background-color='#FBFBFB'
              height='40'
              placeholder='جستجوی بر اساس کد کارگاه'
              rounded
            ></v-text-field
            >
          </v-col>
          <v-col class='pt-1' cols='12' lg='3' md='3'
          >
            <v-text-field
              v-model='searchName'
              background-color='#FBFBFB'
              height='40'
              placeholder='جستجوی نام کارگاه'
              rounded
            ></v-text-field
            >
          </v-col>
          <v-col cols='12' lg='1' md='1'
          >
            <v-btn class='white--text px-8 mt-2' color='#7A7A7A' rounded
            >جستجو
            </v-btn
            >
          </v-col
          >
        </v-row>
        <v-divider />
      </template>
      <!--      edit and delete buttons-->
      <template v-slot:item.actions='{ item }'>
        <v-btn
          color='#FF5C5C'
          depressed
          rounded
          small
          @click='deleteItem(item)'
        >
          <v-icon color='white' small>
            fas fa-trash
          </v-icon>
        </v-btn>
        <v-btn
          color='warning'
          depressed
          rounded
          small
          @click='editItem(item)'
        >
          <v-icon color='white' small>
            fas fa-edit
          </v-icon>
        </v-btn>
      </template>


      <template v-slot:no-data>
        چیزی برای نمایش وجود ندازد
      </template>
    </v-data-table>

  </v-container>
</template>


<script lang='ts'>
import Vue from 'vue'

import { mapGetters } from 'vuex'
import AddWorkshop from '~/components/workshop/AddWorkshop.vue'
import { Workshop } from '~/data/models/Workshop'

export default Vue.extend({
  name: 'WorkShopTable',
  components: { AddWorkshop },
  data() {
    return {
      searchName: '',
      searchCode: '',
      dialog: false,
      dialogDelete: false,
      confirmDelete: false,
      modalConfirm: false,
      lastId: 0,
      headers: [
        { text: 'شناسه', value: 'city_id', align: 'start' },
        { text: 'نام کارگاه', value: 'title', align: 'start' },
        { text: 'کد کارگاه', value: 'code', align: 'start' },
        { text: 'عملیات', value: 'actions', align: 'center', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        code: 0,
        title: '',
        city_id: ''
      } as Workshop,
      defaultItem: {
        code: 0,
        title: '',
        city_id: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      items: 'workshops/GET_WORKSHOPS'
    }),
    modal: {
      get() {
        return (this as any).$store.getters['finance/scores/getModal']
      },
      set(value) {
        (this as any).$store.commit('finance/scores/SET_MODAL', value)
      }
    },
    formTitle(): string {
      return (this as any).editedIndex === -1 ? 'New Item' : 'Edit Item'
    }

  },
  methods: {
    editItem(item: Workshop) {

      console.log(item.code)
      this.$data.lastId = item.code
      this.$data.dialog = true
      this.modal = {
        show: true,
        title: 'تغییر کارگاه',
        body: 'آیا مطمئن از تغییر این مورد هستید؟',
        action: ''
      }
    },
    deleteItem(item: Workshop) {
      console.log(item.code)
      this.$data.lastId = item.code
      this.$data.confirmDelete = true
      this.modal = {
        show: true,
        title: 'حذف کارگاه',
        body: 'آیا مطمئن از حذف این مورد هستید؟',
        action: ''
      }
    },
    confirmModal() {
      this.$store.dispatch('workshops/deleteWorkshop', this.$data.lastId)
      this.$data.confirmDelete = false
    }
  }
})
</script>

<style lang='scss' scoped>
.wrapper-card {
  padding: 11px 65px;
  box-shadow: 0 28px 30px -16px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
}
</style>
