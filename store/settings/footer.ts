import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Footer } from '~/data/models/settings/footer'



export const state = () => ({
  res: {} as Footer,
  settings: {} as Footer
})
export type FooterState = ReturnType<typeof state>

export const getters: GetterTree<FooterState, any> = {
  GET_SETTINGS(state) {
    return state.settings
  },
  GET_RES(state) {
    return state.res
  }
}

export const mutations: MutationTree<FooterState> = {

  SET_SETTINGS(state, settings) {

    Object.assign(state.settings, settings)
  },
  SET_RES(state, res) {

    Object.assign(state.res, res)
  }
}

export const actions: ActionTree<FooterState, any> = {
  async setSettings({ commit }, data) {
    const response = await this.$repositories.footerSettings().setSettings(data)
    commit('SET_RES', response)
    // await dispatch('getSettings')

  },


  async getSettings({ commit }) {
    const response = await this.$repositories.footerSettings().getSettings()
    commit('SET_SETTINGS', response)

  }

}
