import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Category } from '~/data/models/category'

export const state = () => ({
  categories: [] as Category[],
})
export type CategoryState = ReturnType<typeof state>

export const getters: GetterTree<CategoryState, any> = {
  categories(state) {
    return state.categories
  },
}

export const mutations: MutationTree<CategoryState> = {
  setCategories(state, res) {
    state.categories = res
  },
}

export const actions: ActionTree<CategoryState, any> = {
  async getCategories({ commit }, id: number) {
    const res = await this.$repositories.categories().getCategories(id)
    commit('setCategories', res.data)
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
  async deleteCategory({ commit }, id) {
    await this.$repositories.categories().deleteCategory(id)
  },
}
