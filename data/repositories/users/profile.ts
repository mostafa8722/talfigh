import Repository from '~/data/repositories/repository'
import { User } from '~/data/models/users/profile'

export default class Profile extends Repository {
  async getInfoUser(id: number): Promise<User> {
    const res = await this.axios.get('/users/' + id, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async updateInfoUser(id: number, data: object) {
    const res = await this.axios.patch('/users/update/' + id, data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
