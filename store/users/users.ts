import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { User } from '~/data/models/users/users'

export const state = () => ({
  users: [] as User[],
  usersWithNameSearch: [] as User[],
  usersWithFamilySearch: [] as User[],
  usersWithCodeSearch: [] as User[],
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  },
  page: 1,
  totalPage: 1,
  isLoadPaginate: false
})
export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, any> = {
  getModal(state) {
    return state.modal
  },
  getUsers(state) {
    return state.users
  },
  getUsersWithNameSearch(state) {
    return state.usersWithNameSearch
  },
  getUsersWithFamilySearch(state) {
    return state.usersWithFamilySearch
  },
  getUsersWithCodeSearch(state) {
    return state.usersWithCodeSearch
  },
  getPage(state) {
    return state.page
  },
  getTotalPage(state) {
    return state.totalPage
  },
  isLoadPaginate(state) {
    return state.isLoadPaginate
  }
}

export const mutations: MutationTree<UserState> = {
  SET_MODAL_Res(state, modal) {
    if (modal.success) {
      state.modal = {
        show: true,
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
  },
  SetUsers(state, res) {
    state.users = res.data
  },
  SetUsersAfterSearch(state, value) {
    state.users = value
  },
  SetUsersWithNameSearch(state, res) {
    state.usersWithNameSearch = res.data
  },
  SetUsersWithFamilySearch(state, res) {
    state.usersWithFamilySearch = res.data
  },
  SetUsersWithCodeSearch(state, res) {
    state.usersWithCodeSearch = res.data
  },
  SetPage(state, page) {
    state.page = page
  },
  SetPageRes(state, page){
    state.page = page.meta.current_page
  },
  SetTotalPage(state, total) {
    state.totalPage = total.meta.last_page
  },
  isLoadPaginate(state, payload) {
    state.isLoadPaginate = payload
  }
}

export const actions: ActionTree<UserState, any> = {
  async getUsers({ commit, state }) {
    const res = await this.$repositories.users().getUsers(state.page)
    commit('SetUsers', res)
    commit('SetPageRes', res)
    commit('SetTotalPage', res)
    commit('isLoadPaginate', false)
  },
  async searchUserWithName({ commit }, search) {
    const res = await this.$repositories.users().getUsersWithName(search)
    commit('SetUsersWithNameSearch', res)
  },
  async searchUserWithFamily({ commit }, search) {
    const res = await this.$repositories.users().getUsersWithFamily(search)
    commit('SetUsersWithFamilySearch', res)
  },
  async searchUserWithCode({ commit }, search) {
    const res = await this.$repositories.users().getUsersWithCode(search)
    commit('SetUsersWithCodeSearch', res)
  },
  async searchUsers({ commit }, search) {

    commit('SetUsersWithNameSearch', [])
    commit('SetUsersWithFamilySearch', [])
    commit('SetUsersWithCodeSearch', [])

    if (search.firstName) {
      const res = await this.$repositories.users().getUsersWithName(search.firstName)
      commit('SetUsersWithNameSearch', res)
    }
    if (search.lastName) {
      const res = await this.$repositories.users().getUsersWithFamily(search.lastName)
      commit('SetUsersWithFamilySearch', res)
    }
    if (search.nationalCode) {
      const res = await this.$repositories.users().getUsersWithCode(search.nationalCode)
      commit('SetUsersWithCodeSearch', res)
    }
  }
}
