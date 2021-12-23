import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { User } from '~/data/models/users/profile'
import { assign, concat, flattenDeep, toNumber } from 'lodash'
import moment from 'jalali-moment'

export const state = () => ({
  user: {} as User,
  password: '',
  email: '',
  username: '',
  firstname: '',
  lastname: '',
  mobile1: '',
  mobile2: '',
  display_name: '',
  account_type: '0',
  confirm_plan: '',
  confirm_datetime: '',
  phone: '',
  national_code: '',
  father_name: '',
  birthdate: '',
  address_id: '',
  organization: '',
  economic_code: '',
  national_id: '',
  registration_id: '',
  address: '',
  city_id: '',
  province_id: '',
  latitude: '51.337712',
  longitude: '35.699735',
})
export type ProfileState = ReturnType<typeof state>

export const getters: GetterTree<ProfileState, any> = {
  getUser(state) {
    return state.user
  },
  getPassword(state) {
    return state.password
  },
  getEmail(state) {
    return state.email
  },
  getUserName(state) {
    return state.username
  },
  getFirstName(state) {
    return state.firstname
  },
  getLastName(state) {
    return state.lastname
  },
  getMobile1(state) {
    return state.mobile1
  },
  getMobile2(state) {
    return state.mobile2
  },
  getDisplayName(state) {
    return state.display_name
  },
  getAccountType(state) {
    return state.account_type === '1'
  },
  getConfirmPlan(state) {
    return state.confirm_plan
  },
  getConfirmDateTime(state) {
    return state.confirm_datetime
  },
  getNationalCode(state) {
    return state.national_code
  },
  getFatherName(state) {
    return state.father_name
  },
  getBirthDate(state) {
    return moment.from(state.birthdate || moment().format('jYYYY-jMM-jDD'), 'fa',  'YYYY-MM-DD')
      .locale('en')
      .format('YYYY-MM-DD')
  },
  getBirthDateFa(state){
    return state.birthdate || moment().format('jYYYY-jMM-jDD')
  },
  getPhone(state) {
    return state.phone
  },
  getAddressID(state) {
    return state.address_id
  },
  getOrganization(state) {
    return state.organization
  },
  getEconomicCode(state) {
    return state.economic_code
  },
  getNationalID(state) {
    return state.national_id
  },
  getRegistrationID(state) {
    return state.registration_id
  },
  getAddress(state) {
    return state.address
  },
  getCity(state) {
    return state.city_id
  },
  getProvince(state) {
    return state.province_id
  },
  getLatitude(state){
    return Number(state.latitude)
  },
  getLongitude(state){
    return Number(state.longitude)
  }
}

export const mutations: MutationTree<ProfileState> = {
  setUser(state, user) {
    state.user = user
  },
  setUserWithRes(state, user) {
    // if (user.data.account_type == '1') {
    //   state.user = { ...user.data, ...user.data.organizeParty[0] }
    // } else {
    //   state.user = { ...user.data, ...user.data.personalParty[0] }
    // }
    // state.user.account_type = user.data.account_type

    state.firstname = user.data.firstname
    state.lastname = user.data.lastname
    state.username = user.data.username
    state.email = user.data.email
    state.mobile1 = user.data.mobile1
    state.mobile2 = user.data.mobile2
    state.display_name = user.data.display_name
    state.account_type = user.data.account_type
    state.confirm_plan = user.data.confirm_plan
    state.confirm_datetime = user.data.confirm_datetime
    state.address = user.data.address.address
    state.latitude = user.data.address?.latitude || '51.337712'
    state.longitude = user.data.address?.longitude || '35.699735'
    state.city_id = user.data.address.city_id
    state.province_id = user.data.address.province_id
    state.phone = state.account_type == '1'
      ? user.data.partyOrganize?.phone : user.data.partyPersonal?.phone
    state.national_code = user.data.partyPersonal?.national_code || ""
    state.father_name = user.data.partyPersonal?.father_name || ""
    state.birthdate = user.data.partyPersonal?.birthdate || ""
    state.organization = user.data.partyOrganize?.organization || ""
    state.economic_code = user.data.partyOrganize?.economic_code || ""
    state.national_id = user.data.partyOrganize?.national_id || ""
    state.registration_id = user.data.partyOrganize?.registration_id || ""
  },
  setEmail(state, email) {
    state.email = email
  },
  setUserName(state, userName) {
    state.username = userName
  },
  setFirstName(state, firstName) {
    state.firstname = firstName
  },
  setLastName(state, lastName) {
    state.lastname = lastName
  },
  setMobile1(state, mobile) {
    state.mobile1 = mobile
  },
  setMobile2(state, mobile) {
    state.mobile2 = mobile
  },
  setDisplayName(state, displayName) {
    state.display_name = displayName
  },
  setAccountType(state, accountType) {
    if (accountType)
      state.account_type = '1'
    else
      state.account_type = '0'
  },
  setConfirmPlan(state, confirmPlan) {
    state.confirm_plan = confirmPlan
  },
  setConfirmDateTime(state, confirmDateTime) {
    state.confirm_datetime = confirmDateTime
  },
  setNationalCode(state, nationalCode) {
    state.national_code = nationalCode
  },
  setFatherName(state, fatherName) {
    state.father_name = fatherName
  },
  setBirthDate(state, birthDate) {
    state.birthdate = moment.from(birthDate, 'en',  'YYYY-MM-DD')
      .locale('fa')
      .format('YYYY-MM-DD')
  },
  setPhone(state, phone) {
    state.phone = phone
  },
  setAddressID(state, addressID) {
    state.address_id = addressID
  },
  setOrganization(state, organization) {
    state.organization = organization
  },
  setEconomicCode(state, economicCode) {
    state.economic_code = economicCode
  },
  setNationalID(state, nationalID) {
    state.national_id = nationalID
  },
  setRegistrationID(state, registrationID) {
    state.registration_id = registrationID
  },
  setAddress(state, address) {
    state.address = address
  },
  setCity(state, city) {
    state.city_id = city
  },
  setProvince(state, province) {
    state.province_id = province
  },
  setPassword(state, password) {
    state.password = password
  },
  setLatitude(state, latitude){
    state.latitude = latitude.toString()
  },
  setLongitude(state, longitude){
    state.longitude = longitude.toString()
  }
}

export const actions: ActionTree<ProfileState, any> = {
  async getUser({ commit }, id) {
    const res = await this.$repositories.profile().getInfoUser(id)
    commit('setUserWithRes', res)
  },
  async updateUser({ commit, state }, id) {

    let data:object
    if (state.account_type == '1'){
      data = {
        email: state.email,
        username: state.username,
        firstname: state.firstname,
        lastname: state.lastname,
        mobile1: state.mobile1,
        mobile2: state.mobile2,
        display_name: state.display_name,
        account_type: state.account_type,
        phone: state.phone,
        organization: state.organization,
        economic_code: state.economic_code,
        national_id: state.national_id,
        registration_id: state.registration_id,
        address: state.address,
        latitude: state.latitude,
        longitude: state.longitude,
        city_id: state.city_id,
        province_id: state.province_id,
      }
    }else {
      data = {
        email: state.email,
        username: state.username,
        firstname: state.firstname,
        lastname: state.lastname,
        mobile1: state.mobile1,
        mobile2: state.mobile2,
        display_name: state.display_name,
        account_type: state.account_type,
        phone: state.phone,
        national_code: state.national_code,
        father_name: state.father_name,
        birthdate: moment.from(state.birthdate, 'fa', 'YYYY-MM-DD')
          .locale('fa')
          .format('YYYY/MM/DD'),
        address: state.address,
        latitude: state.latitude,
        longitude: state.longitude,
        city_id: state.city_id,
        province_id: state.province_id,
      }
    }

    if (state.password){
      assign(data, {
        password: state.password
      })
    }

    const res = await this.$repositories.profile().updateInfoUser(id, data)
    return res
  }
}
