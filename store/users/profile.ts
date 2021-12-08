import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { User } from '~/data/models/users/profile'
import { types } from 'sass'
import Boolean = types.Boolean
import { toNumber } from 'lodash'

export const state = () => ({
  user: {} as User,
  email: '',
  username: '',
  firstname: '',
  lastname: '',
  mobile1: '',
  mobile2: '',
  display_name: '',
  account_type: '',
})
export type ProfileState = ReturnType<typeof state>

export const getters: GetterTree<ProfileState, any> = {
  getUser(state){
    return state.user
  },
}

export const mutations: MutationTree<ProfileState> = {
  setUser(state, user){
    state.user = user
  },
  setUserWithRes(state, user){
    state.user = user.data
    state.user.account_type = user.data.account_type === '1'
  }
}

export const actions: ActionTree<ProfileState, any> = {
  async getUser({ commit }, id) {
    const res = await this.$repositories.profile().getInfoUser(id)
    commit('setUserWithRes', res)
  },
}
