import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Score from '~/data/models/score'


export const state = () => ({
  save: {} as Score,
  res: [],
  resUpdate: [],
  scores: [] as Score[],
  scoreUpdate: {} as Score,
  newScore: {
    id: 0,
    title: '',
    price: 0,
    rate_number: 0
  } as Score,
  title: '',
  description: '',
  meta_description: '',
  modal: {
    show: false,
    title: '',
    body: '',
    action: ''
  }
})
export type ScoreState = ReturnType<typeof state>

export const getters: GetterTree<ScoreState, any> = {
  GET_SCORES(state) {
    return state.scores
  },
  getTitle(state) {
    return state.title
  },
  getModal(state) {
    return state.modal
  },
  res(state) {
    return state.res
  },
  resUpdate(state) {
    return state.resUpdate
  }
}

export const mutations: MutationTree<ScoreState> = {
  SET_RES(state, res) {
    state.res = res
  },
  SET_TITLE(state, title) {
    state.title = title
  },
  SET_RES_UPDATE(state, resUpdate) {
    state.resUpdate = resUpdate
  },
  SET_SCORES(state, scores) {
    console.log(scores)
    state.scores = scores.data
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

export const actions: ActionTree<ScoreState, any> = {
  async setScore({ commit, dispatch }, data) {
    const scoreRes = await this.$repositories.scores().sendScore(data)
    commit('SET_MODAL_Res', scoreRes)
    await dispatch('getScores')
  },
  // async updateScore({ commit, getters }, id) {
  //   const scoreRes = await this.$repositories.scores().updateScore(getters.getInfoUpdate, id)
  //   commit('SET_MODAL_Res', scoreRes)
  // },
  // async deleteScore({ commit }, id) {
  //   const scoreRes = await this.$repositories.scores().deleteScore(id)
  //   commit('SET_MODAL_Res', scoreRes)
  // },
  async getScores({ commit }) {
    const scoreRes = await this.$repositories.scores().getScores()
    commit('SET_SCORES', scoreRes)
  },

  async archiveScores({ commit, dispatch }, id) {
    const scoreRes = await this.$repositories.scores().archiveScores(id)
    await dispatch('getScores')
    commit('SET_MODAL_Res', scoreRes)
  }
  // async getScore({ commit }, id) {
  //   const scoreRes = await this.$repositories.scores().getScore(id)
  //   commit('SET_NOW_PAGE', scoreRes)
  // }
}
