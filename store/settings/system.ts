import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { System } from '~/data/models/settings/system'


export const state = () => ({
  res: {} as System,
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

  SET_SETTINGS(state, settings) {
    state.settings = settings.data
    console.log(settings)
  },
  SET_RES(state, res) {
    state.res = res.data
    console.log(res)
  }
}

export const actions: ActionTree<SettingState, any> = {
  async setSettings({ commit, dispatch }, data) {
    const response = await this.$repositories.systemSettings().setSettings(data)
    commit('SET_RES', response)
    await dispatch('getSettings')
  },


  async getSettings({ commit }) {
    const response = await this.$repositories.systemSettings().getSettings()
    commit('SET_SETTINGS', response)
  }

}
