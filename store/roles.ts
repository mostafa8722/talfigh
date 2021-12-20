import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Role } from 'data/models/role'
import { PermissionGroup } from 'data/models/permission-group'

export const state = () => ({
    roleList: [] as Role[],
    message :""
})
export type RolesState = ReturnType<typeof state>

export const getters: GetterTree<RolesState, any> = {
    roles(state){
        return state.roleList
    },
    message(state){
        return state.message
    },
}

export const mutations: MutationTree<RolesState> = {
    setRoles(state, roles){
        console.log("ttt2",roles)
        state.roleList = roles
    },
    setMessage(state, data){
        state.message=data
    },

}

export const actions: ActionTree<RolesState, any> = {
    async getRoles({ commit }) {
        const res = await this.$repositories.Roles().loadRoles()
        console.log("ttt",res)
        commit('setRoles', res)
    },
    async saveRole({ commit, dispatch }, data) {
        console.log("tt1",data)
        const response = await this.$repositories.Roles().saveRole(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async updateRole({ commit, dispatch }, data) {
        const response = await this.$repositories.Roles().udpateRole(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
    async deleteRole({ commit, dispatch }, data) {
        const response = await this.$repositories.Roles().deleteRole(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
}
