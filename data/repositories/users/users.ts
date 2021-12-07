import Repository from '~/data/repositories/repository'
import { User } from '~/data/models/users/users'

export default class Account extends Repository {
  async getUsers(): Promise<User[]> {
    const res = await this.axios.get('/users',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUsersWithName(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchFirstname', {
      search: search
    } ,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUsersWithFamily(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchLastname', {
      search: search
    } ,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUsersWithCode(search: string): Promise<User[]> {
    const res = await this.axios.post('/users/searchNationalCode', {
      search: search
    } ,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
