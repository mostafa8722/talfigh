import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { ContractConfirm } from '~/data/models/contract'

export const state = () => ({
  contract: false,
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type ContractState = ReturnType<typeof state>

export const getters: GetterTree<ContractState, any> = {
  getModal(state){
    return state.modal
  },
  getContract(state){
    return state.contract
  }
}

export const mutations: MutationTree<ContractState> = {
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
  },
  SetContract(state, data){
    state.contract = data
  }
}

export const actions: ActionTree<ContractState, any> = {
  async confirmContract({ commit, state }) {
    const res = await (this as any).$repositories.contract().confirmContract(state.contract)
    commit('SET_MODAL_Res', res)
  },
}
