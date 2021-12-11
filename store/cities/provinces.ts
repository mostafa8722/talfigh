import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Province, ProvinceWithCity } from '~/data/models/cities/province'

export const state = () => ({
  Provinces: [] as Province[],
  ProvincesWithCity: [] as ProvinceWithCity[],
})
export type ProvincesState = ReturnType<typeof state>

export const getters: GetterTree<ProvincesState, any> = {
  getProvinces(state){
    return state.Provinces
  },
  getProvincesWithCity(state){
    return state.ProvincesWithCity
  }
}

export const mutations: MutationTree<ProvincesState> = {
  setProvinces(state, res){
    state.Provinces = res
  },
  setProvincesWithCity(state, res){
    state.ProvincesWithCity = res
  }
}

export const actions: ActionTree<ProvincesState, any> = {
  async getProvinces({ commit }) {
    const res = await this.$repositories.cities().getProvinces()
    commit('setProvinces', res)
  },
  async getProvincesWithCity({ commit }) {
    const res = await this.$repositories.cities().getProvincesWithCities()
    commit('setProvincesWithCity', res)
  }
}
