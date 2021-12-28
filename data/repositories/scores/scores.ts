import { Score } from '~/data/models/score'
import Repository from '~/data/repositories/repository'

export default class Scores extends Repository {

  async setScore(data:Score): Promise<Score> {
      const res = await this.axios.post('/scores/store', data)
      return res.data
  }

  async getScores(): Promise<any> {
    const res = await this.axios.get('/scores')
    return res.data
  }
}
