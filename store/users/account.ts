import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { UserAccount } from '~/data/models/users/account'

export const state = () => ({
  firstname: '',
  lastname: '',
  account_number: '',
  sheba_number: '',
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type UserAccountState = ReturnType<typeof state>

export const getters: GetterTree<UserAccountState, any> = {
  getFirstName(state){
    return state.firstname
  },
  getLastName(state){
    return state.lastname
  },
  getAccountNumber(state){
    return state.account_number
  },
  getShebaNumber(state){
    return state.sheba_number
  },
  getModal(state){
    return state.modal
  }
}

export const mutations: MutationTree<UserAccountState> = {
  setInfoAccount(state, res){
    state.firstname = res.data.firstname
    state.lastname = res.data.lastname
    state.account_number = res.data.account_number
    state.sheba_number = res.data.sheba_number
  },
  setFirstName(state, value){
    state.firstname = value
  },
  setLastName(state, value){
    state.lastname = value
  },
  setAccountNumber(state, value){
    state.account_number = value
  },
  setShebaNumber(state, value){
    state.sheba_number = value
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

export const actions: ActionTree<UserAccountState, any> = {
  async updateUserAccount({ commit, state }) {
    const res = await this.$repositories.account().updateUserAccount({
      firstname: state.firstname,
      lastname: state.lastname,
      account_number: state.account_number,
      sheba_number: state.sheba_number,
    })
    commit('SET_MODAL_Res', res)
  },
}
