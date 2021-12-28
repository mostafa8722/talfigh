import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Menu } from '~/data/models/main-menu'

export const state = () => ({
  menus: [] as Menu[],
  searchResult: [] as any,
})
export type MenuState = ReturnType<typeof state>

export const getters: GetterTree<MenuState, any> = {
  menus(state) {
    return state.menus
  },
  searchResult(state) {
    return state.searchResult
  },
}

export const mutations: MutationTree<MenuState> = {
  SET_MENUS(state, menus) {
    state.menus = menus
  },
  SET_SEARCHRESULT(state, results) {
    state.searchResult = Array(results)
  },
}

export const actions: ActionTree<MenuState, any> = {
  async getMenus({ commit }) {
    const res = await this.$repositories.menus().getMenus()
    commit('SET_MENUS', res.data)
  },
  async updateMenu({ commit }, data: any) {
    await this.$repositories.menus().updateMenu(data)
  },
  async addChild({ commit }, data: any) {
    await this.$repositories.menus().addChild(data)
  },
  async storeMenu({ commit }, data: any) {
    await this.$repositories.menus().storeMenu(data)
  },
  async searchMenu({ commit }, data: any) {
    const res = await this.$repositories.menus().searchMenu(data)
    commit('SET_SEARCHRESULT', res.data)
  },
  async deleteMenu({ commit }, id: number) {
    await this.$repositories.menus().deleteMenu(id)
  },
}
