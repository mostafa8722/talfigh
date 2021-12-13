import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { MainPageSetting } from '~/data/models/settings/mainPage'

export const state = () => ({
  mainPageSetting: {} as MainPageSetting
})
export type MainPageSettingState = ReturnType<typeof state>

export const getters: GetterTree<MainPageSettingState, any> = {
  getMainPageSetting(state){
    return state.mainPageSetting
  },
  getTitle(state){
    return state.mainPageSetting?.title
  },
  getShortDescription(state){
    return state.mainPageSetting?.short_description
  },
  getFirstButtonText(state){
    return state.mainPageSetting?.button_text1
  },
  getFirstButtonLink(state){
    return state.mainPageSetting?.button_link1
  },
  getSecondButtonText(state){
    return state.mainPageSetting?.button_text2
  },
  getSecondButtonLink(state){
    return state.mainPageSetting?.button_link2
  },
  getTopImage(state){
    return state.mainPageSetting?.top_image
  },
  getTopLogoImage(state){
    return state.mainPageSetting?.top_logo_image
  },
  getTopPoemImage(state){
    return state.mainPageSetting?.top_poem_image
  },
  getBottomPoemImage(state){
    return state.mainPageSetting?.bottom_poem_image
  },
  getPointTitle(state){
    return state.mainPageSetting?.point_title
  },
  getLeftPointImage(state){
    return state.mainPageSetting?.left_point_image
  },
  getRightPointImage(state){
    return state.mainPageSetting?.right_point_image
  },
  getFaqTitle(state){
    return state.mainPageSetting?.faq_title
  },
  getFaqLeftImage(state){
    return state.mainPageSetting?.faq_left_image
  },
  getSliders(state){
    return state.mainPageSetting?.sliders
  },
  getFaqs(state){
    return state.mainPageSetting?.faqs
  },
}

export const mutations: MutationTree<MainPageSettingState> = {
  setMainPageSetting(state, data){
    state.mainPageSetting = data.data
  },
  setTitle(state, data){
    state.mainPageSetting.title = data
  },
  setShortDescription(state, data){
    state.mainPageSetting.short_description = data
  },
  setFirstButtonText(state, data){
    state.mainPageSetting.button_text1 = data
  },
  setFirstButtonLink(state, data){
    state.mainPageSetting.button_link1 = data
  },
  setSecondButtonText(state, data){
    state.mainPageSetting.button_text2 = data
  },
  setSecondButtonLink(state, data){
    state.mainPageSetting.button_link2 = data
  },
  setTopImage(state, data){
    state.mainPageSetting.top_image = data
  },
  setTopLogoImage(state, data){
    state.mainPageSetting.top_logo_image = data
  },
  setTopPoemImage(state, data){
    state.mainPageSetting.top_poem_image = data
  },
  setBottomPoemImage(state, data){
    state.mainPageSetting.bottom_poem_image = data
  },
  setPointTitle(state, data){
    state.mainPageSetting.point_title = data
  },
  setLeftPointImage(state, data){
    state.mainPageSetting.left_point_image = data
  },
  setRightPointImage(state, data){
    state.mainPageSetting.right_point_image = data
  },
  setFaqTitle(state, data){
    state.mainPageSetting.faq_title = data
  },
  setFaqLeftImage(state, data){
    state.mainPageSetting.faq_left_image = data
  },
  setSliders(state, data){
    state.mainPageSetting.sliders = data
  },
  setFaqs(state, data){
    state.mainPageSetting.faqs = data
  },
}

export const actions: ActionTree<MainPageSettingState, any> = {
  async getUserAccount({ commit }) {
    const res = await this.$repositories.mainPageSetting().loadMainPageSetting()
    commit('setMainPageSetting', res)
  },
}
