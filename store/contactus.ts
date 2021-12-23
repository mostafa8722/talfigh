import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { ContactUs } from '~/data/models/contactus'

export const state = () => ({
  contacts: {} as ContactUs[],
})
export type ContactState = ReturnType<typeof state>

export const getters: GetterTree<ContactState, any> = {

}

export const mutations: MutationTree<ContactState> = {

}

export const actions: ActionTree<ContactState, any> = {
  async setPages({ commit }) {
    try{
      const res = await this.$repositories.contact().getContacts()
      return res
    }catch (error){

    }
  },
}
