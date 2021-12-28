import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Score } from '~/data/models/score'


export const state = () => ({
  score_success: false,
  resUpdate: [],
  scores: [] as Score[],
  scoreUpdate: {} as Score,
})
export type ScoreState = ReturnType<typeof state>

export const getters: GetterTree<ScoreState, any> = {
  GET_SCORES(state) {
    return state.scores
  }
}

export const mutations: MutationTree<ScoreState> = {

  SET_SCORES(state, scores) {
    state.scores = scores.data
    state.score_success    = true
  },
}

export const actions: ActionTree<ScoreState, any> = {
  async setScore({ commit, dispatch }, data) 
  {
    try 
    {
      const response:any = await this.$repositories.scores().setScore(data)
      commit('SET_SCORES',response)
      this.$toast.success(response.message)
    }
    catch (error:any) 
    {
      this.app.$toast.error(error.message)
    }
  },

  async getScores({ commit }) {
    const scoreRes = await this.$repositories.scores().getScores()
    commit('SET_SCORES', scoreRes)
  }

  // async archiveScores({ commit, dispatch }, id) {
  //   const scoreRes = await this.$repositories.scores().archiveScores(id)
  //   await dispatch('getScores')
  //   commit('SET_MODAL_Res', scoreRes)
  // }

}
