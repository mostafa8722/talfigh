import Repository from '~/data/repositories/repository'
import { MainPageSetting } from '~/data/models/settings/mainPage'
import { API } from '~/data/utils/Enums'

export default class MainPage extends Repository {
  async loadMainPageSetting(): Promise<MainPageSetting> {
    const res = await this.axios.get('/setting/main',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
