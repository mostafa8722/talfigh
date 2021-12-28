import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { SiteSetting } from '~/data/models/settings/site'

export const state = () => ({
  siteSetting: {} as SiteSetting,
    message :""
})
export type SiteSettingState = ReturnType<typeof state>

export const getters: GetterTree<SiteSettingState, any> = {
  getSiteSetting(state){
    return state.siteSetting
  }
}

export const mutations: MutationTree<SiteSettingState> = {
  setSiteSetting(state, data){
    state.siteSetting = data.data
    state.siteSetting.logo_menu=""
  }
}

export const actions: ActionTree<SiteSettingState, any> = {
  async getSettings({ commit }) {
    const res = await this.$repositories.siteSetting().loadSiteSetting()
    commit('setSiteSetting', res)
  },
  async setSettings({ commit, dispatch }, data) 
  {
    try
    {
      const response = await this.$repositories.siteSetting().setSettings(data)
      this.$toast.success(response.message);
    }
    catch(error:any)
    {
      this.$toast.error(error.message);
    }
  },
}
