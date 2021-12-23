<template>
  <div>
    <TLFContainer>
      <v-row>
        <div class="white--text" style="font-size: 1.6rem">
          گروه‌های دسترسی
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="px-10 rounded-xl"
          color="primary"
          @click="addPermissionGroupDialog = true"
        >اضافه کردن گروه دسترسی تکی</v-btn
        >
      </v-row>
    </TLFContainer>
    <div class="mb-8 mt-10 table-card">
      <v-data-table
        class='px-5'
        :items="items"
        :headers="headers"
        hide-default-footer
        :page.sync="page"
        :search="search"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
        <template #top>
          <v-row class="pa-4 pa-md-0 px-md-5">
            <v-col class="pt-1" cols="12" lg="3" md="3"
              ><v-text-field
                height="40"
                v-model="search"
                background-color="#FBFBFB"
                placeholder="جستوجوی گروه دسترسی..."
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
        <template   v-slot:item.actions="{ item }" >
          <div class="d-flex flex-row py-6">
            <v-btn @click="deleteItem(item)"  fab x-small color="error" elevation="0"
              ><v-icon>fas fa-trash-alt</v-icon></v-btn
            >
            <v-btn  @click="addDialog(item)"  fab x-small color="warning" class="mr-4" elevation="0">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-end ma-4 pb-6">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
    <th-modal v-model="addPermissionGroupDialog" width="500">
      <template #body>
        <v-row>
          <v-col cols="12">
            <span class="mr-4">عنوان گروه دسترسی</span>
            <v-text-field
                    v-model="title"
              height="40"
              class="pt-0"
              background-color="#FBFBFB"
              placeholder="عنوان گروه دسترسی"
              rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span class="mr-4">انتخاب دسترسی را جستجو کنید</span>
            <v-autocomplete
              v-model="selectedPermissions"
              class="pt-0"
              background-color="#FBFBFB"
              rounded
              chips
              multiple
              deletable-chips
              :items="permissions"
              item-value="id"
              item-text="title"
            >
              <template #selection="data">
                <v-chip close color="warning" @click:close="remove(data.item)">
                  {{ data.item.title }}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12"> </v-col>
        </v-row>
      </template>
      <template #actions>
        <div>
          <v-btn
            rounded
            color="error"
            class="px-8"
            text
            @click="addPermissionGroupDialog = false"
            >لغو</v-btn
          >
          <v-btn @click="save" rounded color="primary" class="px-8">ثبت</v-btn>
        </div>
      </template>
    </th-modal>
    <ModalAsk @confirmFile="confirmFile" :dialog="dialog" title="آیا از حذف این مورد اطمینان دارید؟" />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import {mapGetters} from "vuex"
import ModalAsk from '~/components/ModalAsk.vue'
export default Vue.extend({
  name: 'PermissionGroups',
    computed: {
        ...mapGetters({
            permissions: 'permissions/permissions/permissions',
            items: 'permissions/permissionGroups/permissions',
            message: 'permissions/permissionGroups/message'
        })
    },
  components: { TLFContainer,ModalAsk },

    async fetch() {
        await this.$store.dispatch('permissions/permissions/getPermissions');
        await this.$store.dispatch('permissions/permissionGroups/getPermissionGroups');

    },
  data() {
    return {
        id:0,
        title :"",
        search:"",
      addPermissionGroupDialog: false,
        dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      selectedPermissions: [] as number[],

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
    title: "گروه‌های دسترسی"
  },
  methods: {
    remove(item: any) {
      const index = this.selectedPermissions.indexOf(item.id)
      if (index >= 0) this.selectedPermissions.splice(index, 1)
    },

      save(){
          if(this.id==0)
              this.$store.dispatch('permissions/permissionGroups/savePermissionGroup', {
                  title:this.title,
                  permissions:this.selectedPermissions
              })
          else
              this.$store.dispatch('permissions/permissionGroups/updatePermissionGroup', {
                  id:this.id,
                  title:this.title,
                  permissions:this.selectedPermissions
              })
      },
      addDialog(item:any){
          if(item=="add"){
              this.id=0
              this.title=""
              this.selectedPermissions=[]
          } else{
              this.id=item.id
              this.title=item.title
              this.selectedPermissions=item.permission
          }

          this.addPermissionGroupDialog = true

      },
      deleteItem(item:any){
          this.id = item.id
          this.dialog = true;
      },
      confirmFile(type:any){
          if(type=="cancel")
              this.dialog = false;
          else{
              this.$store.dispatch('permissions/permissionGroups/deletePermissionGroup', {
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
                this.selectedPermissions = []
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
