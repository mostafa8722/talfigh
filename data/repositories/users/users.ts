import Repository from '~/data/repositories/repository'
import { User } from '~/data/models/users/users'

export default class Users extends Repository {

  async getUsers(page: number): Promise<User[]> {
    const res = await this.axios.get('/users?page=' + page)
    return res.data
  }

  async getUsersWithName(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchFirstname', {
      search
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUsersWithFamily(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchLastname', {
      search
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUsersWithCode(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchNationalCode', {
      search
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
//
