import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Permission } from 'data/models/permission'
import { PermissionGroup } from 'data/models/permission-group'

export const state = () => ({
    permissionList: [] as PermissionGroup[],

    message :""
})
export type PermissionGroupsState = ReturnType<typeof state>

export const getters: GetterTree<PermissionGroupsState, any> = {
    permissions(state){
        console.log("bb",state.permissionList)
        return state.permissionList
    },
    message(state){
        return state.message
    },
}

export const mutations: MutationTree<PermissionGroupsState> = {
    setPermissionGroups(state, permissions){
        state.permissionList = permissions
    },
    setMessage(state, data){
        state.message=data
    },

}

export const actions: ActionTree<PermissionGroupsState, any> = {
    async getPermissionGroups({ commit }) {
        const res = await this.$repositories.PermissionGroups().loadPermissions()
        commit('setPermissionGroups', res)
    },
    async savePermissionGroup({ commit, dispatch }, data) {
        const response = await this.$repositories.PermissionGroups().savePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async updatePermissionGroup({ commit, dispatch }, data) {
        const response = await this.$repositories.PermissionGroups().udpatePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async deletePermissionGroup({ commit, dispatch }, data) {
        const response = await this.$repositories.PermissionGroups().deletePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
}
