import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Permission } from 'data/models/permission'

export const state = () => ({
    permissionList: [] as Permission[],

    message :""
})
export type PermissionsState = ReturnType<typeof state>

export const getters: GetterTree<PermissionsState, any> = {
    permissions(state){
        return state.permissionList
    },
    message(state){
        return state.message
    },
}

export const mutations: MutationTree<PermissionsState> = {
    setPermissions(state, permissions){
        state.permissionList = permissions
    },
    setMessage(state, data){
        state.message=data
    },

}

export const actions: ActionTree<PermissionsState, any> = {
    async getPermissions({ commit }) {
        const res = await this.$repositories.Permissions().loadPermissions()
        commit('setPermissions', res)
    },
    async savePermission({ commit, dispatch }, data) {
        const response = await this.$repositories.Permissions().savePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async updatePermission({ commit, dispatch }, data) {
        const response = await this.$repositories.Permissions().udpatePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async deletePermission({ commit, dispatch }, data) {
        const response = await this.$repositories.Permissions().deletePermission(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
}
