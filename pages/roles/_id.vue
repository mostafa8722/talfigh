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
              outlined
              class="rounded-lg mt-4"
              background-color="white"
              placeholder="عنوان نقش"
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
              <div v-show="permissionGroup.permissions.length > 0">
                <v-checkbox
                  label="انتخاب همه"
                  :value="isPermissionGroupCompletelySelected(permissionGroup)"
                  @change="toggleSelectPermissionGroup(permissionGroup)"
                />
                <v-divider />
              </div>

              <v-checkbox
                v-for="permission in permissionGroup.permissions"
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
        <v-btn class="px-10 rounded-xl" color="success" outlined>ثبت و ویرایش نقش</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PermissionGroup from '~/data/models/permission-group'
import Permission from '~/data/models/permission'
export default Vue.extend({
  name: 'Roles',
  data() {
    return {
      selectedPermissions: [{}],
      permissionGroupsWithPermission: [
        {
          id: 1,
          title: 'test',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 2,
          title: 'test2',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 3,
          title: 'test3',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 4,
          title: 'test4',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 5,
          title: 'test5',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 6,
          title: 'test6',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 7,
          title: 'test7',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 8,
          title: 'test8',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
        {
          id: 9,
          title: 'test9',
          permissions: [
            { id: 2, title: 'test2' },
            { id: 3, title: 'test3' },
            { id: 4, title: 'test4' },
          ],
        },
      ],
    }
  },
  methods: {
    isPermissionGroupCompletelySelected(permissionGroup: PermissionGroup) {
      return permissionGroup.permissions.every((permission: Permission) =>
        this.selectedPermissions.includes(permission.id)
      )
    },
    toggleSelectPermissionGroup(permissionGroup: PermissionGroup) {
      if (this.isPermissionGroupCompletelySelected(permissionGroup)) {
        const permissionIds = permissionGroup.permissions.map(
          (permission: Permission) => permission.id
        )
        this.selectedPermissions = this.selectedPermissions.filter(
          (selectedPermissionId: any) => {
            return !permissionIds.includes(selectedPermissionId)
          }
        )
      } else {
        permissionGroup.permissions.forEach((permission: Permission) => {
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
