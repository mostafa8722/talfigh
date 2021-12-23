<template>
  <div>
    <TLFContainer>
      <v-row>
        <div class="white--text" style="font-size: 1.6rem">
          دسترسی‌ها
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="px-10 rounded-xl"
          color="primary"
          @click="addDialog('add')"
        >افزودن دسترسی</v-btn
        >
      </v-row>
    </TLFContainer>
    <div class="mb-8 mt-10 table-card">
      <v-data-table
        class='px-5'
        :items="items"
        :headers="headers"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        :search="search"
        @page-count="pageCount = $event"
      >
        <template #top>
          <v-row class="pa-md-0 pa-4 px-md-5">
            <v-col class="pt-1" cols="12" lg="3" md="3"
              ><v-text-field
                    v-model="search"
                height="40"
                background-color="#FBFBFB"
                placeholder="جستوجوی دسترسی..."
                rounded
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="1" md="1"
              ><v-btn class="white--text px-8 mt-2" rounded color="#7A7A7A"
                >جستجو</v-btn
              ></v-col
            >
          </v-row>
          <v-divider />
        </template>
        <template  v-slot:item.actions="{ item }" >
          <div class="d-flex flex-row py-6">
            <v-btn   @click="deleteItem(item)" fab x-small color="error" elevation="0"
              ><v-icon>fas fa-trash-alt</v-icon></v-btn
            >
            <v-btn   @click="addDialog(item)" fab x-small color="warning" class="mr-4" elevation="0">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-end ma-4 pb-6">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
    <th-modal v-model="addPermissionDialog" width="700">
      <template #body>
        <v-row>
          <v-col cols="12" lg="4" md="4">
            <span class="mr-4">عنوان گروه دسترسی</span>
            <v-text-field
              height="40"
              v-model="title"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="عنوان گروه دسترسی"
              rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4">
            <span class="mr-4">عنوان به انگلیسی</span>
            <v-text-field
              height="40"
              v-model="name"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="عنوان به انگلیسی"
              rounded
            ></v-text-field>
          </v-col>

        </v-row>
      </template>
      <template #actions>
        <div>
          <v-btn
            rounded
            color="error"
            class="px-8"
            text
            @click="addPermissionDialog = false"
            >لغو</v-btn
          >
          <v-btn rounded @click="save" color="primary" class="px-8">ثبت</v-btn>
        </div>
      </template>
    </th-modal>
    <ModalAsk @confirmFile="confirmFile" :dialog="dialog" title="آیا از حذف این مورد اطمینان دارید؟" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex"
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import ModalAsk from '~/components/ModalAsk.vue'

export default Vue.extend({
  name: 'Permissions',
  components: { TLFContainer,ModalAsk },
    computed: {
        ...mapGetters({
            items: 'permissions/permissions/permissions',
            message: 'permissions/permissions/message'
        })
    },
    async fetch() {
        await this.$store.dispatch('permissions/permissions/getPermissions');

    },

  data() {
    return {
        search:"",
        title:"",
        name:"",
        id:0,
        dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      addPermissionDialog: false,

      headers: [
        {
          text: 'عنوان',
          value: 'title',
          width: '100px',
        },

        { text: 'عملیات', value: 'actions', width: '100px' },
      ],
    }
  },
  head: {
    title: "دسترسی‌ها"
  },
    methods:{
      save(){
          if(this.id==0)
          this.$store.dispatch('permissions/permissions/savePermission', {
              title:this.title,
              name:this.name
          })
          else
              this.$store.dispatch('permissions/permissions/updatePermission', {
                  id:this.id,
                  title:this.title,
                  name:this.name
              })
      },


        addDialog(item:any){

          if(item=="add"){
              this.id=0
              this.title=""
              this.name=""
          } else{
              this.id=item.id
              this.title=item.title
              this.name=item.name
            }

          this.addPermissionDialog = true

        },
        deleteItem(item:any){
          this.id = item.id
          this.dialog = true;
        },
        confirmFile(type:any){
          if(type=="cancel")
              this.dialog = false;
          else{
              this.$store.dispatch('permissions/permissions/deletePermission', {
                  id:this.id,
              })
          }
        }
    },
    watch:{
        message(old_v,new_v){
            alert(old_v)
            if(this.id==0) {
                this.title = ""
                this.name = ""
            }
            this.dialog = false;
        }
    }
})
</script>

<style lang="scss" scoped>
.table-card {
  background-color: #fff;
}
</style>
