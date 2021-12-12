import Repository from '~/data/repositories/repository'
import { System } from '~/data/models/settings/system'


export default class system extends Repository {

  headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
  }

  async setSettings(data: System): Promise<System> {
    const res = await this.axios.patch('/setting/system/save', data, {
      headers: this.headers
    })
    return res.data
  }

  async getSettings(): Promise<System> {
    const res = await this.axios.get('/setting/system', {
      headers: this.headers
    })
    return res.data
  }

}
