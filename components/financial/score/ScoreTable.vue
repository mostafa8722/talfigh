<template>
  <v-container fluid>
    <v-data-table
      :headers='headers'
      :items='items'
      class='elevation-1'
      sort-by='calories'
    >
      <!--Delete Dialog-->
      <template v-slot:top>
        <v-dialog
          v-model='dialog'
        >
          <add-card :edit='true'></add-card>
        </v-dialog>

        <v-dialog v-model='dialogDelete' max-width='500px'>
          <v-card class='wrapper-card'>
            <v-card-title class='text-h5'>از حذف کردن این مورد اطمینان دارید؟</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color='blue darken-1' text @click='closeDelete'>خیر</v-btn>
              <v-btn color='blue darken-1' text @click='deleteItemConfirm'>بله</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </template>
      <!--      edit and delete buttons-->
      <template v-slot:item.actions='{ item }'>
        <v-icon
          class='mr-2'
          small
          @click='editItem(item)'
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click='deleteItem(item)'
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        چیزی برای نمایش وجود ندازد
      </template>
    </v-data-table>
  </v-container>
</template>


<script lang='ts'>
import Vue from 'vue'
import AddCard from '~/components/financial/score/AddCard.vue'

export default Vue.extend({
  name: 'ScoreTable',
  components: { AddCard },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'شناسه', value: 'calories', align: 'start' },
        { text: 'امتیازدهی', value: 'fat', align: 'start' },
        { text: 'مبلغ', value: 'fat', align: 'start' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.items = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
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
