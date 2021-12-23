<template>
  <div>
    <div class="white--text pa-md-10 pa-8" style="font-size: 1.6rem">
      ویرایش نقش
    </div>

    <v-card min-height="600" class="mb-8">
      <v-card-title class="card-header">
        <v-row class="px-4">
          <v-col class="pb-0" cols="12" lg="4" md="4">
            <span>عنوان نقش</span>
            <v-text-field
              v-model="title"
              outlined
              class="rounded-lg mt-4"
              background-color="white"
              placeholder="عنوان نقش"
            ></v-text-field
          ></v-col>
          <v-col class="pb-0" cols="12" lg="4" md="4">
            <span>عنوان نقش به انگلیسی</span>
            <v-text-field
                    v-model="name"
                    outlined
                    class="rounded-lg mt-4"
                    background-color="white"
                    placeholder="عنوان نقش به انگلیسی"
            ></v-text-field
            ></v-col>
        </v-row>
      </v-card-title>

      <div class="pa-8">گروه‌های دسترسی</div>

      <v-expansion-panels multiple>
        <v-col
          v-for="permissionGroup in permissionGroupsWithPermission"
          :key="permissionGroup.id"
          cols="12"
          md="4"
        >
          <v-expansion-panel class="rounded">
            <v-expansion-panel-header>
              <span class="font-weight-bold">{{ permissionGroup.title }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-show="permissionGroup.permission.length > 0">
                <v-checkbox
                  label="انتخاب همه"
                  :value="isPermissionGroupCompletelySelected(permissionGroup)"
                  @change="toggleSelectPermissionGroup(permissionGroup)"
                />
                <v-divider />
              </div>

              <v-checkbox
                v-for="permission in permissionGroup.permission"
                :key="permission.id"
                v-model="selectedPermissions"
                :label="permission.title"
                :value="permission.id"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-expansion-panels>
      <div class="d-flex justify-md-end justify-center py-8 ml-md-8">
        <v-btn @click="save" class="px-10 rounded-xl" color="success" outlined>ثبت و ویرایش نقش</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PermissionGroup } from '~/data/models/permission-group'
import { Permission } from '~/data/models/permission'
import {mapGetters} from "vuex"

export default Vue.extend({
  name: 'Roles',
    computed: {
        ...mapGetters({

            permissionGroupsWithPermission2: 'permissions/permissionGroups/permissions',
            role: 'roles/role',
            message: 'roles/message'
        })
    },
    async fetch() {
        let id = this.$route.params.id
        await this.$store.dispatch('roles/selectRole',id);
        await this.$store.dispatch('permissions/permissionGroups/getPermissionGroups');

    },
    watch:{
      role(old_value,new_value){
          this.title = old_value.title;
          this.name = old_value.name;

          old_value.permissions.map((permission:any) =>
              this.selectedPermissions.push(permission.id)
          )

        },
        permissionGroupsWithPermission2(old_value,new_value){

            this.permissionGroupsWithPermission = old_value
        }
    },
  data() {
    return {
        title :"",
        name :"",
      selectedPermissions: [{}],
      permissionGroupsWithPermission: [

      ],
    }
  },
  head: {
    title: "ویرایش نقش"
  },
  methods: {
      save(){


      },
    isPermissionGroupCompletelySelected(permissionGroup: any) {
      return permissionGroup.permission.every((permission: Permission) =>
        this.selectedPermissions.includes(permission.id)

      )
    },
    toggleSelectPermissionGroup(permissionGroup: any) {
      if (this.isPermissionGroupCompletelySelected(permissionGroup)) {
        const permissionIds = permissionGroup.permission.map(
          (permission: Permission) => permission.id
        )
        this.selectedPermissions = this.selectedPermissions.filter(
          (selectedPermissionId: any) => {
            return !permissionIds.includes(selectedPermissionId)
          }
        )
      } else {
        permissionGroup.permission.forEach((permission: Permission) => {
          if (!this.selectedPermissions.includes(permission.id)) {
            this.selectedPermissions.push(permission.id)
          }
        })
      }

    },
  },
})
</script>

<style lang="scss" scoped>
.card-header {
  background-color: #dfdfdf;
}
</style>
