import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { User } from '~/data/models/users/users'

export const state = () => ({
  user: {} as User
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: (state: any) => state.user,
}

export const mutations: MutationTree<AuthState> = {
  loggedIn(state,user)
  {
    state.user= user
  }
}

export const actions: ActionTree<AuthState, any> = {
  async loginUser({ commit, dispatch }, data) {

    await this.$repositories
    .authUser()
    .loginUser(data)
    .then((res) => {
      console.log("mylog",res);
      commit('loggedIn', res)
    })
    .catch((error) => {
      console.log(error);
      // dispatch('toast/showErrorToast', error, { root: true })
    })
  }
}
