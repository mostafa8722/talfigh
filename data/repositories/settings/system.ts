import Repository from '~/data/repositories/repository'
import { System } from '~/data/models/settings/system'

export default class system extends Repository {

  async setSettings(data: System): Promise<any> {
    const res = await this.axios.patch('/setting/system/save', data)
    return res.data
  }

  async getSettings(): Promise<any> {
    const res = await this.axios.get('/setting/system')
    return res.data
  }

}
