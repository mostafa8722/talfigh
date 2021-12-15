import Repository from '~/data/repositories/repository'
import { Score } from '~/data/models/score'

export default class Scores extends Repository {
  headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 24|fLjLNE96BL0omAtyYW7BOfPlS2uz2gCQEcY9qco7'
  }

  async setScore(data: Score): Promise<Score> {
    const res = await this.axios.post('/scores/store', data, {
      headers: this.headers
    })
    return res.data
  }

  async getScores(): Promise<Score[]> {
    const res = await this.axios.get('/scores', {
      headers: this.headers
    })
    return res.data
  }

  async archiveScores(id: number): Promise<Score[]> {
    const res = await this.axios.get(`/scores/archive/${id}`, {
      headers: this.headers
    })
    return res.data
  }

}
