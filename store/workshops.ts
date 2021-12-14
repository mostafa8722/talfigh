import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Workshop } from '~/data/models/Workshop'


export const state = () => ({
  res: {} as Workshop,
  workshop: {} as Workshop,
  workshops: [] as Workshop[],
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type WorkshopState = ReturnType<typeof state>

export const getters: GetterTree<WorkshopState, any> = {
  GET_WORKSHOPS(state) {
    return state.workshops
  },
  GET_RES(state) {
    return state.res
  },
  getModal(state) {
    return state.modal
  }
}

export const mutations: MutationTree<WorkshopState> = {

  SET_WORKSHOPS(state, workshop) {
    state.workshop = workshop.data
    console.log(workshop)
  },
  SET_RES(state, res) {
    state.res = res.data
    console.log(res)
  },
  SET_MODAL_Res(state, modal) {
    if (modal.data.success === true) {
      state.modal = {
        show: false,
        title: 'موفقیت آمیز بود',
        body: 'درخواست شما با موفقیت انجام شد',
        action: 'success'
      }
    } else {
      state.modal = {
        show: false,
        title: 'موفقیت آمیز نبود',
        body: 'درخواست شما با موفقیت انجام نشد',
        action: 'error'
      }
    }
  },
  SET_MODAL(state, modal) {
    state.modal = modal
  }
}

export const actions: ActionTree<WorkshopState, any> = {
  async setWorkshop({ commit, dispatch }, data) {
    const res = await this.$repositories.workshops().setWorkshop(data)
    commit('SET_WORKSHOPS', res)
    await dispatch('getWorkshops')
  },


  async getWorkshops({ commit }) {
    const res = await this.$repositories.workshops().getWorkshops()
    commit('SET_WORKSHOPS', res)
  },

  async updateWorkshop({ commit, dispatch, getters }, id) {
    const res = await this.$repositories.workshops().updateWorkshop(id, getters.getInfoUpdate)
    await dispatch('getWorkshops')
    commit('SET_MODAL_Res', res)
  },

  async deleteWorkshop({ commit, dispatch }, id) {
    const res = await this.$repositories.workshops().deleteWorkshop(id)
    await dispatch('getWorkshops')
    commit('SET_MODAL_Res', res)
  }

}
