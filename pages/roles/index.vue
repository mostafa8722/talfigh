<template>
  <div>
    <TLFContainer>
      <v-row>
        <div class="white--text" style="font-size: 1.6rem">
         نقش ها
        </div>
        <v-spacer></v-spacer>
        <v-btn
                class="px-10 rounded-xl"
                color="primary"
                @click="addRoleDialog = true"
        >اضافه کردن نقش</v-btn
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
                    v-model="search"
                    height="40"
                    background-color="#FBFBFB"
                    placeholder="جستوجوی نقش ..."
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
            <nuxt-link v-bind:to="editItem(item)">
            <v-btn   fab x-small color="warning" class="mr-4" elevation="0">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
            </nuxt-link>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-end ma-4 pb-6">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
    <th-modal v-model="addRoleDialog" width="500">
      <template #body>
        <v-row>
          <v-col cols="12">
            <span class="mr-4">عنوان نقش</span>
            <v-text-field
                    v-model="title"
                    height="40"
                    class="pt-0"
                    background-color="#FBFBFB"
                    placeholder="عنوان نقش"
                    rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span class="mr-4">عنوان نقش به انگلیسی</span>
            <v-text-field
                    v-model="name"
                    height="40"
                    class="pt-0"
                    background-color="#FBFBFB"
                    placeholder="عنوان نقش به انگلیسی"
                    rounded
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span class="mr-4">انتخاب گروه دسترسی را جستجو کنید</span>
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
                  @click="addRoleDialog = false"
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
        name: 'Roles',
        computed: {
            ...mapGetters({

                permissions: 'permissions/permissionGroups/permissions',
                items: 'roles/roles',
                message: 'roles/message'
            })
        },
        components: { TLFContainer,ModalAsk },

        async fetch() {
            await this.$store.dispatch('roles/getRoles');
            await this.$store.dispatch('permissions/permissionGroups/getPermissionGroups');

        },

        data() {
            return {
                id:0,
                title :"",
                name :"",
                search:"",
                addRoleDialog: false,
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
            title: "نقش ها "
        },
        methods: {
            remove(item: any) {
                const index = this.selectedPermissions.indexOf(item.id)
                if (index >= 0) this.selectedPermissions.splice(index, 1)
            },

            save(){
                if(this.id==0)
                    this.$store.dispatch('roles/saveRole', {
                        title:this.title,
                        name:this.name,
                        accessGroups:this.selectedPermissions
                    })
                else
                    this.$store.dispatch('roles/updateRole', {
                        id:this.id,
                        title:this.title,
                        accessGroups:this.selectedPermissions
                    })
            },
            addDialog(item:any){

                if(item=="add"){
                    this.id=0
                    this.title=""
                    this.name=""
                    this.selectedPermissions=[]
                } else{
                    this.id=item.id
                    this.title=item.title
                    this.name=item.name
                    this.selectedPermissions=item.permissions
                }

                this.addRoleDialog = true

            },

            editItem(item:any){
                return `roles/${item.id}`
            },
            deleteItem(item:any){
                this.id = item.id
                this.dialog = true;
            },
            confirmFile(type:any){
                if(type=="cancel")
                    this.dialog = false;
                else{
                    this.$store.dispatch('roles/deleteRole', {
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
