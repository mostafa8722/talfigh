import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Page, Pages } from '~/data/models/page'

export const state = () => ({
  save: {} as Page,
  res: [],
  resUpdate: [],
  infoUpdate: {} as Page,
  pages: [] as Pages[],
  nowPage: {
    title: '',
    description: '',
    meta_description: ''
  } as Page,
  title: '',
  description: '',
  meta_description: '',
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type PageState = ReturnType<typeof state>

export const getters: GetterTree<PageState, any> = {
  pages(state) {
    return state.save
  },
  res(state){
    return state.res
  },
  resUpdate(state){
    return state.resUpdate
  },
  lists(state){
    return state.pages
  },
  getNowPage(state){
    return state.nowPage
  },
  getTitle(state){
    return state.title
  },
  getDescription(state){
    return state.description
  },
  getMetaDescription(state){
    return state.meta_description
  },
  getInfoUpdate(state){
    return state.infoUpdate
  },
  getModal(state){
    return state.modal
  }
}

export const mutations: MutationTree<PageState> = {
  SET_RES(state, res) {
    state.res = res
  },
  SET_RES_UPDATE(state, resUpdate) {
    state.resUpdate = resUpdate
  },
  SET_PAGES(state, pages){
    console.log(pages)
    state.pages = pages.data
  },
  SET_NOW_PAGE(state, page){
    state.title = page.data.title
    state.description = page.data.description
    state.meta_description = page.data.meta_description
  },
  SET_TITLE(state, title){
    state.title = title
  },
  SET_DESCRIPTION(state, description){
    state.description = description
  },
  SET_META_DESCRIPTION(state, metaDescription){
    state.meta_description = metaDescription
  },
  SET_INFO_UPDATE(state, data){
    state.infoUpdate = data
  },
  SET_MODAL_Res(state, modal){
    if (modal.success){
      state.modal = {
        show: true,
        title: 'موفقیت آمیز بود',
        body: 'درخواست شما با موفقیت انجام شد',
        action: 'success'
      }
    }else {
      state.modal = {
        show: false,
        title: 'موفقیت آمیز نبود',
        body: 'درخواست شما با موفقیت انجام نشد',
        action: 'error'
      }
    }
  },
  SET_MODAL(state, modal){
    state.modal = modal
  }
}

export const actions: ActionTree<PageState, any> = {
  async setPages({ commit }, data) {
    const pageRes = await this.$repositories.pages().sendPage(data)
    commit('SET_MODAL_Res', pageRes)
  },
  async updatePage({ commit, getters }, id) {
    const pageRes = await this.$repositories.pages().updatePage(getters.getInfoUpdate, id)
    commit('SET_MODAL_Res', pageRes)
  },
  async deletePage({ commit }, id) {
    const pageRes = await this.$repositories.pages().deletePage(id)
    commit('SET_MODAL_Res', pageRes)
  },
  async getPages({ commit }) {
    const pageRes = await this.$repositories.pages().getPages()
    commit('SET_PAGES', pageRes)
  },
  async getPage({ commit }, id ) {
    const pageRes = await this.$repositories.pages().getPage(id)
    commit('SET_NOW_PAGE', pageRes)
  }
}
