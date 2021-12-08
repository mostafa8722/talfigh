import { ActionTree, MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type ModalState = ReturnType<typeof state>

export const getters: GetterTree<ModalState, any> = {
  getModal(state){
    return state.modal
  },
}

export const mutations: MutationTree<ModalState> = {
  SET_MODAL_Res(state, res){
    if (res.success){
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
}

export const actions: ActionTree<ModalState, any> = {

}
