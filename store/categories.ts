import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Category } from '~/data/models/category'

export const state = () => ({
  categories: [] as Category[],
  searchResult: [] as any,
})
export type CategoryState = ReturnType<typeof state>

export const getters: GetterTree<CategoryState, any> = {
  categories(state) {
    return state.categories
  },
  searchResult(state) {
    return state.searchResult
  },
}

export const mutations: MutationTree<CategoryState> = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_SEARCHRESULT(state, results) {
    state.searchResult = Array(results)
  },
}

export const actions: ActionTree<CategoryState, any> = {
  async getCategories({ commit }, id: number) {
    const res = await this.$repositories.categories().getCategories(id)
    commit('SET_CATEGORIES', res.data)
  },
  async updateCategory({ commit }, data: any) {
    await this.$repositories.categories().updateCategory(data)
  },
  async addChild({ commit }, data: any) {
    await this.$repositories.categories().addChild(data)
  },
  async storeCategory({ commit }, data: any) {
    await this.$repositories.categories().storeCategory(data)
  },
  async searchCategory({ commit }, data: any) {
    const res = await this.$repositories.categories().searchCategory(data)
    commit("SET_SEARCHRESULT", res.data)
  },
  async deleteCategory({ commit }, id: number) {
    await this.$repositories.categories().deleteCategory(id)
  },
}
