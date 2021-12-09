import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { User } from '~/data/models/users/profile'
import { assign, concat, flattenDeep, toNumber } from 'lodash'

export const state = () => ({
  user: {} as User
})
export type ProfileState = ReturnType<typeof state>

export const getters: GetterTree<ProfileState, any> = {
  getUser(state) {
    return state.user
  },
  getEmail(state) {
    return state.user.email
  },
  getUserName(state) {
    return state.user.username
  },
  getFirstName(state) {
    return state.user.firstname
  },
  getLastName(state) {
    return state.user.lastname
  },
  getMobile1(state) {
    return state.user.mobile1
  },
  getMobile2(state) {
    return state.user.mobile2
  },
  getDisplayName(state) {
    return state.user.display_name
  },
  getAccountType(state) {
    return state.user.account_type === '1'
  },
  getConfirmPlan(state) {
    return state.user.confirm_plan
  },
  getConfirmDateTime(state) {
    return state.user.confirm_datetime
  },
  getNationalCode(state) {
    return state.user.national_code
  },
  getFatherName(state) {
    return state.user.father_name
  },
  getBirthDate(state) {
    return state.user.birthdate
  },
  getPhone(state) {
    return state.user.phone
  },
  getAddressID(state) {
    return state.user.address_id
  },
  getOrganization(state) {
    return state.user.organization
  },
  getEconomicCode(state) {
    return state.user.economic_code
  },
  getNationalID(state) {
    return state.user.national_id
  },
  getRegistrationID(state) {
    return state.user.registration_id
  }
}

export const mutations: MutationTree<ProfileState> = {
  setUser(state, user) {
    state.user = user
  },
  setUserWithRes(state, user) {
    if (user.data.account_type == '1') {
      state.user = { ...user.data, ...user.data.organizeParty[0] }
      // state.user.national_code = ''
      // state.user.father_name = ''
      // state.user.birthdate = ''
      // state.user.address_id = ''
    } else {
      state.user = { ...user.data, ...user.data.personalParty[0] }
      // state.user.organization = ''
      // state.user.economic_code = ''
      // state.user.national_id = ''
      // state.user.registration_id = ''
    }
    // state.user.account_type = user.data.account_type
  },
  setEmail(state, email) {
    state.user.email = email
  },
  setUserName(state, userName) {
    state.user.username = userName
  },
  setFirstName(state, firstName) {
    state.user.firstname = firstName
  },
  setLastName(state, lastName) {
    state.user.lastname = lastName
  },
  setMobile1(state, mobile) {
    state.user.mobile1 = mobile
  },
  setMobile2(state, mobile) {
    state.user.mobile2 = mobile
  },
  setDisplayName(state, displayName) {
    state.user.display_name = displayName
  },
  setAccountType(state, accountType) {
    if (accountType)
      state.user.account_type = '1'
    else
      state.user.account_type = '0'
  },
  setConfirmPlan(state, confirmPlan) {
    state.user.confirm_plan = confirmPlan
  },
  setConfirmDateTime(state, confirmDateTime) {
    state.user.confirm_datetime = confirmDateTime
  },
  setNationalCode(state, nationalCode) {
    state.user.national_code = nationalCode
  },
  setFatherName(state, fatherName) {
    state.user.father_name = fatherName
  },
  setBirthDate(state, birthDate) {
    state.user.birthdate = birthDate
  },
  setPhone(state, phone) {
    state.user.phone = phone
  },
  setAddressID(state, addressID) {
    state.user.address_id = addressID
  },
  setOrganization(state, organization) {
    state.user.organization = organization
  },
  setEconomicCode(state, economicCode) {
    state.user.economic_code = economicCode
  },
  setNationalID(state, nationalID) {
    state.user.national_id = nationalID
  },
  setRegistrationID(state, registrationID) {
    state.user.registration_id = registrationID
  }
}

export const actions: ActionTree<ProfileState, any> = {
  async getUser({ commit }, id) {
    const res = await this.$repositories.profile().getInfoUser(id)
    commit('setUserWithRes', res)
  }
}
