import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { City } from '~/data/models/cities/city'

export const state = () => ({
  cities: [] as City[],
})
export type CityState = ReturnType<typeof state>

export const getters: GetterTree<CityState, any> = {
  getCities(state){
    return state.cities
  }
}

export const mutations: MutationTree<CityState> = {
  setCities(state, res){
    state.cities = res
  }
}

export const actions: ActionTree<CityState, any> = {
  async getCities({ commit }) {
    const res = await this.$repositories.cities().getCities()
    commit('setCities', res)
  }
}
