import Repository from '~/data/repositories/repository'
import Score from '~/data/models/score'

export default class ScoreRepository extends Repository {

  headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
  }

  async sendScore(data: Score): Promise<Score> {
    const res = await this.axios.post('/scores/store', data, {
      headers: this.headers
    })
    return res.data
  }

  // async updateScore(data: Score, id: number): Promise<Score> {
  //   const res = await this.axios.patch(`/pages/update/${id}`,data,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
  //     }
  //   })
  //   return res.data
  // }

  // async deleteScore(id: number){
  //   const res = await this.axios.delete(`/pages/delete/${id}`,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
  //     }
  //   })
  //   return res.data
  // }

  async getScores(): Promise<Score[]> {
    const res = await this.axios.get('/scores', {
      headers: this.headers
    })
    return res.data
  }

  async archiveScores(id: number): Promise<Score[]> {
    const res = await this.axios.get(`/scores/archive/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  // async getScore(id: number): Promise<Score> {
  //   const res = await this.axios.get(`/pages/${id}`,{
  // headers: this.headers
  //   })
  //   return res.data
  // }
}
