import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Role } from 'data/models/role'
import { PermissionGroup } from 'data/models/permission-group'

export const state = () => ({
    roleList: [] as Role[],
    role : {} ,
    message :""
})
export type RolesState = ReturnType<typeof state>

export const getters: GetterTree<RolesState, any> = {
    roles(state){
        return state.roleList
    },
    role(state){
        return state.role
    },
    message(state){
        return state.message
    },
}

export const mutations: MutationTree<RolesState> = {
    setRoles(state, roles){
        state.roleList = roles
    },
    setRole(state, role){

        state.role = role
    },
    setMessage(state, data){
        state.message=data
    },

}

export const actions: ActionTree<RolesState, any> = {
    async getRoles({ commit }) {
        const res = await this.$repositories.Roles().loadRoles()

        commit('setRoles', res)
    },
    async saveRole({ commit, dispatch }, data) {

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
    async selectRole({ commit, dispatch }, id) {
        const response = await this.$repositories.Roles().selectRole(id)

            commit('setRole', response.data)

    },
    async deleteRole({ commit, dispatch }, data) {
        const response = await this.$repositories.Roles().deleteRole(data)
        if(response.success){
            commit('setMessage', response.message)
        }
    },
}
