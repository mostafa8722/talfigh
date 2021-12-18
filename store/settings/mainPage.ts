import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { MainPageSetting } from '~/data/models/settings/mainPage'
import { API } from '~/data/utils/Enums'
import { assign } from 'lodash'

export const state = () => ({
  mainPageSetting: {} as MainPageSetting,
  topImage: '',
  topLogoImage: '',
  topPoemImage: '',
  bottomPoemImage: '',
  leftPointImage: '',
  rightPointImage: '',
  faqLeftImage: '',
  sliders: [] as string[]
})
export type MainPageSettingState = ReturnType<typeof state>

export const getters: GetterTree<MainPageSettingState, any> = {
  getMainPageSetting(state) {
    return state.mainPageSetting
  },
  getTitle(state) {
    return state.mainPageSetting?.title
  },
  getShortDescription(state) {
    return state.mainPageSetting?.short_description
  },
  getFirstButtonText(state) {
    return state.mainPageSetting?.button_text1
  },
  getFirstButtonLink(state) {
    return state.mainPageSetting?.button_link1
  },
  getSecondButtonText(state) {
    return state.mainPageSetting?.button_text2
  },
  getSecondButtonLink(state) {
    return state.mainPageSetting?.button_link2
  },
  getTopImage(state) {
    return state.mainPageSetting?.top_image
  },
  getTopLogoImage(state) {
    return state.mainPageSetting?.top_logo_image
  },
  getTopPoemImage(state) {
    return state.mainPageSetting?.top_poem_image
  },
  getBottomPoemImage(state) {
    return state.mainPageSetting?.bottom_poem_image
  },
  getPointTitle(state) {
    return state.mainPageSetting?.point_title
  },
  getLeftPointImage(state) {
    return state.mainPageSetting?.left_point_image
  },
  getRightPointImage(state) {
    return state.mainPageSetting?.right_point_image
  },
  getFaqTitle(state) {
    return state.mainPageSetting?.faq_title
  },
  getFaqLeftImage(state) {
    return state.mainPageSetting?.faq_left_image
  },
  getSliders(state) {
    return state.mainPageSetting?.sliders
  },
  getFaqs(state) {
    return state.mainPageSetting?.faqs
  },
  getPoints(state) {
    return state.mainPageSetting?.points
  },
  topImage(state){
    return state.topImage
  },
  topLogoImage(state){
    return state.topLogoImage
  },
  topPoemImage(state){
    return state.topPoemImage
  },
  bottomPoemImage(state){
    return state.bottomPoemImage
  },
  leftPointImage(state){
    return state.leftPointImage
  },
  rightPointImage(state){
    return state.rightPointImage
  },
  faqLeftImage(state){
    return state.faqLeftImage
  },
  sliders(state){
    return state.sliders
  },

}

export const mutations: MutationTree<MainPageSettingState> = {
  setMainPageSetting(state, data) {
    state.mainPageSetting = data.data
    state.topImage = API.File + data.data.top_image
    state.topLogoImage = API.File + data.data.top_logo_image
    state.topPoemImage = API.File + data.data.top_poem_image
    state.bottomPoemImage = API.File + data.data.bottom_poem_image
    state.leftPointImage = API.File + data.data.left_point_image
    state.rightPointImage = API.File + data.data.right_point_image
    state.faqLeftImage = API.File + data.data.faq_left_image
    data.data.sliders.forEach((item: any) =>{
      state.sliders.push(API.File + item.image)
    })

    state.mainPageSetting.top_image = ''
    state.mainPageSetting.top_logo_image = ''
    state.mainPageSetting.top_poem_image = ''
    state.mainPageSetting.bottom_poem_image = ''
    state.mainPageSetting.left_point_image = ''
    state.mainPageSetting.right_point_image = ''
    state.mainPageSetting.faq_left_image = ''
    state.mainPageSetting.sliders = []
  },
  setTitle(state, data) {
    state.mainPageSetting.title = data
  },
  setShortDescription(state, data) {
    state.mainPageSetting.short_description = data
  },
  setFirstButtonText(state, data) {
    state.mainPageSetting.button_text1 = data
  },
  setFirstButtonLink(state, data) {
    state.mainPageSetting.button_link1 = data
  },
  setSecondButtonText(state, data) {
    state.mainPageSetting.button_text2 = data
  },
  setSecondButtonLink(state, data) {
    state.mainPageSetting.button_link2 = data
  },
  setTopImage(state, data) {
    state.mainPageSetting.top_image = data
  },
  setTopLogoImage(state, data) {
    state.mainPageSetting.top_logo_image = data
  },
  setTopPoemImage(state, data) {
    state.mainPageSetting.top_poem_image = data
  },
  setBottomPoemImage(state, data) {
    state.mainPageSetting.bottom_poem_image = data
  },
  setPointTitle(state, data) {
    state.mainPageSetting.point_title = data
  },
  setLeftPointImage(state, data) {
    state.mainPageSetting.left_point_image = data
  },
  setRightPointImage(state, data) {
    state.mainPageSetting.right_point_image = data
  },
  setFaqTitle(state, data) {
    state.mainPageSetting.faq_title = data
  },
  setFaqLeftImage(state, data) {
    state.mainPageSetting.faq_left_image = data
  },
  setSliders(state, data: string) {
    state.mainPageSetting.sliders.push(data)
  },
  setFaqs(state, data) {
    state.mainPageSetting.faqs = data
  },
  pushFaqs(state, data: any) {
    state.mainPageSetting.faqs.push(data)
  },
  changeFaqs(state, data) {
    if (data.type === 'question') {
      state.mainPageSetting.faqs[data.index].question = data.value
    }
    if (data.type === 'answer') {
      state.mainPageSetting.faqs[data.index].answer = data.value
    }
    if (data.type === 'link') {
      state.mainPageSetting.faqs[data.index].link = data.value
    }
    if (data.type === 'icon') {
      state.mainPageSetting.faqs[data.index].icon = data.value
    }
  },
  setPoints(state, data) {
    state.mainPageSetting.points = data
  },
  changePoints(state, data) {

    if (data.type === 'title') {
      state.mainPageSetting.points[data.index].title = data.value
    }
    if (data.type === 'icon') {
      state.mainPageSetting.points[data.index].icon = data.value
    }
  },
  pushPoints(state, data: any) {
    state.mainPageSetting.points.push(data)
  },
}

export const actions: ActionTree<MainPageSettingState, any> = {
  async getSettingMainPage({ commit }) {
    const res = await this.$repositories.mainPageSetting().loadMainPageSetting()
    commit('setMainPageSetting', res)
  },
  async setSettingMainPage({ commit, state }) {

    const data: object = {
      title: state.mainPageSetting.title,
      short_description: state.mainPageSetting.title,
      button_text1: state.mainPageSetting.button_text1,
      button_link1: state.mainPageSetting.button_link1,
      button_text2: state.mainPageSetting.button_text2,
      button_link2: state.mainPageSetting.button_link2,
      point_title: state.mainPageSetting.point_title,
      faq_title: state.mainPageSetting.faq_title,
      faqs:  state.mainPageSetting.faqs,
      points: state.mainPageSetting.points
    }

    if (state.mainPageSetting.top_image){
      Object.assign(data, {
        top_image: state.mainPageSetting.top_image
      })
    }
    if (state.mainPageSetting.top_logo_image){
      Object.assign(data,{
        top_logo_image: state.mainPageSetting.top_logo_image
      })
    }
    if (state.mainPageSetting.top_poem_image){
      Object.assign(data,{
        top_poem_image: state.mainPageSetting.top_poem_image
      })
    }
    if (state.mainPageSetting.bottom_poem_image){
      Object.assign(data,{
        bottom_poem_image: state.mainPageSetting.bottom_poem_image
      })
    }
    if (state.mainPageSetting.left_point_image){
      Object.assign(data,{
        left_point_image: state.mainPageSetting.left_point_image
      })
    }
    if (state.mainPageSetting.right_point_image){
      Object.assign(data,{
        right_point_image: state.mainPageSetting.right_point_image
      })
    }
    if (state.mainPageSetting.faq_left_image){
      Object.assign(data,{
        faq_left_image: state.mainPageSetting.faq_left_image
      })
    }
    if (state.mainPageSetting.sliders){

      interface Sliders {
        slider: string
      }
      const sliders = [] as Sliders[]
      state.mainPageSetting.sliders.forEach((item: string)=>{
        sliders.push({ slider: item })
      })
      Object.assign(data,{
        sliders: sliders
      })

    }

    console.log(data)
    const res = await this.$repositories.mainPageSetting().saveMainPageSetting(data)
    commit('setMainPageSetting', res)
    return res
  }
}
