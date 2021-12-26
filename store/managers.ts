import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Manager, StoreResponse } from 'data/models/managers'

export const state = () => ({
    managersList: [] as Manager[],
    lastResponse: {
        message: "",
        success: true,
        counter: 0
    },
    isEditMode: false,
    serverResponse: {} as StoreResponse,
    editable: {
        firstname: "",
        lastname: "",
        email: "",
        mobile1: "",
        password: "",
        role_id: -1
    } as Manager,
})


export type ManagersState = ReturnType<typeof state>


export const getters: GetterTree<ManagersState, any> = {
    managersList(state) {
        return state.managersList
    },
    editMode(state) {
        return state.isEditMode
    },
    editables(state) {
        return state.editable
    },
    serverMessage(state) {
        return state.lastResponse
    },
    MessaegUpdateCounter(state) {
        return state.lastResponse.counter
    }
}

export const mutations: MutationTree<ManagersState> = {

    SET_EDIT_MODE(state, editmode: boolean) {
        state.isEditMode = editmode
    },

    LAST_MESSAGE(state, payload: { [key: string]: any, message: string, success: boolean }) {
        state.lastResponse.message = payload.message
        state.lastResponse.success = payload.success;
        state.lastResponse.counter++
        console.log('server:: ' + payload.message)
    },

    SET_MANAGERS_LIST(state, payload: Manager[]) {
        state.managersList.splice(0, state.managersList.length)
        payload.forEach(i => {
            state.managersList.push(i)
        })
    },
    SET_SERVER_RESPONSE(state, payload: StoreResponse) {
        Object.assign(state.serverResponse, payload)
    },

    SET_EDITABLE(state, payload: Manager) {
        Object.assign(state.editable, payload)
    }

}

export const actions: ActionTree<ManagersState, any> = {
    async getManagersList({ commit }) {
        const res = await this.$repositories.managers().list()
        commit("SET_MANAGERS_LIST", res.data)
        commit('LAST_MESSAGE', res)
    },

    async submitEntries({ commit, dispatch }, payload: Manager) {
        const res = await this.$repositories.managers().store(payload)
        commit("SET_SERVER_RESPONSE", res.data)

        if (res.success) {
            commit('LAST_MESSAGE', res)
            commit("SET_SERVER_RESPONSE", res.data)
            // refresh managers list
            dispatch('getManagersList')
        } else {
            if (res.errors)
                if (res.errors.username && Array.isArray(res.errors.username)) {
                    res.message = (res.errors.username[0])
                }
            commit('LAST_MESSAGE', res)


        }

    },

    async updateEntries({ commit }, manager: Manager) {

        const res = await this.$repositories.managers().update(manager)

        if (res.success) {
            commit("SET_SERVER_RESPONSE", res.data)
            // Reset form
            commit('SET_EDIT_MODE', false)
            commit('LAST_MESSAGE', res)
        } else {
            if (res.errors)
                if (res.errors.username && Array.isArray(res.errors.username)) {
                    res.message = (res.errors.username[0])
                }
            commit('LAST_MESSAGE', res)
        }
    },

    editForm({ commit }, data: Manager) {
        commit('SET_EDIT_MODE', true)
        commit('SET_EDITABLE', data)

    },
    clearForm({ commit }) {
        commit('SET_EDIT_MODE', false)
    },

    async activeUser({ commit }, id: number) {
        const res = await this.$repositories.managers().active(id)
        commit('LAST_MESSAGE', res)
    },


    async deActiveUser({ commit }, id: number) {
        const res = await this.$repositories.managers().deActive(id)
        commit('LAST_MESSAGE', res)
    }
}
