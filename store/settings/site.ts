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
  },
    message(state){
        return state.message
    },
  getPageTitle(state){
    return state.siteSetting?.page_title
  },
  getInstagram(state){
    return state.siteSetting?.instagram
  },
  getFacebook(state){
    return state.siteSetting?.facebook
  },
  getWhatsapp(state){
    return state.siteSetting?.whatsapp
  },
  getGooglePlus(state){
    return state.siteSetting?.google_plus
  },
  getTelegram(state){
    return state.siteSetting?.telegram
  },
  getAparat(state){
    return state.siteSetting?.aparat
  },
  getLogo_menu(state){
    return state.siteSetting?.logo_menu
  },
  getLatitude(state){
    return state.siteSetting?.latitude
  },
  getLongitude(state){
    return state.siteSetting?.longitude
  },
  getAddress(state){
    return state.siteSetting?.address
  },
  getZipcode(state){
    return state.siteSetting?.zipcode
  },
  getMetaDescription(state){
    return state.siteSetting?.meta_description
  },
  getFax(state){
    return state.siteSetting?.fax
  },
  getPhone(state){
    return state.siteSetting?.phone
  },
  getMobile(state){
    return state.siteSetting?.mobile
  },
  getEmail(state){
    return state.siteSetting?.email
  },
    getCreatedAt(state){
        return state.siteSetting?.created_at
    },
    getUpdatedAt(state){
        return state.siteSetting?.updated_at
    },
}

export const mutations: MutationTree<SiteSettingState> = {
  setSiteSetting(state, data){
    state.siteSetting = data.data
  },
    setMessage(state, data){

         state.message=data.data
    },
  setPageTitle(state, data){
    state.siteSetting.page_title = data
  },
  setInstagram(state, data){
    state.siteSetting.instagram = data
  },
  setFacebook(state, data){
    state.siteSetting.facebook = data
  },
  setWhatsapp(state, data){
    state.siteSetting.whatsapp = data
  },
  setGooglePlus(state, data){
    state.siteSetting.google_plus = data
  },
  setTelegram(state, data){
    state.siteSetting.telegram = data
  },
  setAparat(state, data){
    state.siteSetting.aparat = data
  },
  setLogoMenu(state, data){
    state.siteSetting.logo_menu = data
  },
  setLatitude(state, data){
    state.siteSetting.latitude = data
  },
  setLongitude(state, data){
    state.siteSetting.longitude = data
  },
  setAddress(state, data){
    state.siteSetting.address = data
  },
  setZipcode(state, data){
    state.siteSetting.zipcode = data
  },
  setMetaDescription(state, data){
    state.siteSetting.meta_description = data
  },
  setFax(state, data){
    state.siteSetting.fax = data
  },
  setPhone(state, data){
    state.siteSetting.phone = data
  },
  setMobile(state, data){
    state.siteSetting.mobile = data
  },
  setEmail(state, data){
    state.siteSetting.email = data
  },
    setCreatedAt(state, data){
        state.siteSetting.created_at = data
    },
    setUpdatedAt(state, data){
    state.siteSetting.updated_at = data
    },
}

export const actions: ActionTree<SiteSettingState, any> = {
  async getSettings({ commit }) {
    const res = await this.$repositories.siteSetting().loadSiteSetting()
    commit('setSiteSetting', res)
  },
    async setSettings({ commit, dispatch }, data) {
        const response = await this.$repositories.siteSetting().setSettings(data)
        if(response.success){
            commit('setMessage', response.data)
        }


    },
}
