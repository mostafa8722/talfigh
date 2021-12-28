import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { System } from '~/data/models/settings/system'


export const state = () => ({
  res: {},

  settings: {} as System

})
export type SettingState = ReturnType<typeof state>

export const getters: GetterTree<SettingState, any> = {
  GET_SETTINGS(state) {
    return state.settings
  },
  GET_RES(state) {
    return state.res
  }
}

export const mutations: MutationTree<SettingState> = {

  SET_RES(state, res) {
    state.res = res
    state.settings = res.data
  }
}

export const actions: ActionTree<SettingState, any> = {
  async setSettings({ state, commit, dispatch }) {
    try
    {
      const response = await this.$repositories.systemSettings().setSettings(state.res)
      commit('SET_RES', response)
      await dispatch('getSettings')
      this.$toast.success(response.message)
    }
    catch(error:any)
    {
      this.$toast.error(error.message)
    }

  },


  async getSettings({ commit }) {
    const response = await this.$repositories.systemSettings().getSettings()
    commit('SET_RES', response)
  }

}
