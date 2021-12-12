<template>
  <v-container fluid>
    <v-data-table
      :headers='headers'
      :items='filteredItems'
      class='elevation-1'
      sort-by='calories'
    >
      <!--Delete Dialog-->
      <template v-slot:top>
        <v-dialog
          v-model='dialog'
        >
          <add-score :edit='true'></add-score>
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
import AddScore from '~/components/financial/score/AddScore.vue'
import { Score } from '~/data/models/score'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'WorkShopTable',
  components: { AddScore },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      confirmDelete: false,
      modalConfirm: false,
      lastId: 0,
      headers: [
        { text: 'شناسه', value: 'id', align: 'start' },
        { text: 'امتیازدهی', value: 'title', align: 'start' },
        { text: 'مبلغ', value: 'price', align: 'start' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
        title: '',
        price: 0,
        is_archive: 0,
        rate_number: 0,
        created_at: '',
        updated_at: ''
      } as Score,
      defaultItem: {
        id: 0,
        title: '',
        price: '',
        is_archive: 0,
        created_at: '',
        updated_at: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      items: 'finance/scores/GET_SCORES'
    }),
    filteredItems() {
      return this.items.filter((e: Score) => {

        return e.is_archive != 1
      })

    }
    ,
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
    editItem(item: Score) {

      console.log(item.id)
      this.$data.lastId = item.id
      this.$data.dialog = true
      this.modal = {
        show: true,
        title: 'حذف صفحه',
        body: 'آیا مطمئن از حذف این صفحه هستید؟',
        action: ''
      }
    },
    deleteItem(item: Score) {
      console.log(item.id)
      this.$data.lastId = item.id
      this.$data.confirmDelete = true
      this.modal = {
        show: true,
        title: 'حذف صفحه',
        body: 'آیا مطمئن از حذف این صفحه هستید؟',
        action: ''
      }
    },
    confirmModal() {
      this.$store.dispatch('finance/scores/archiveScores', this.$data.lastId)
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
