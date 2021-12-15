import Repository from '~/data/repositories/repository'
import { System } from '~/data/models/settings/system'

export default class system extends Repository {

  headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 24|fLjLNE96BL0omAtyYW7BOfPlS2uz2gCQEcY9qco7'
  }

  async setSettings(data: System): Promise<any> {
    const res = await this.axios.patch('/setting/system/save', data, {
      headers: this.headers
    })
    return res.data
  }

  async getSettings(): Promise<any> {
    const res = await this.axios.get('/setting/system', {
      headers: this.headers
    })
    return res.data
  }

}
