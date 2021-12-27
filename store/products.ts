import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Product } from '~/data/models/product'

export const state = () => ({
  products: [] as Product[],
})
export type ProductState = ReturnType<typeof state>

export const getters: GetterTree<ProductState, any> = {
  products(state) {
    return state.products
  },
}

export const mutations: MutationTree<ProductState> = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions: ActionTree<ProductState, any> = {
  async getProducts({ commit }) {
    const res = await this.$repositories.products().getProducts()
    commit('SET_PRODUCTS', res.data)
  },
}
