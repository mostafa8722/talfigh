import Repository from '~/data/repositories/repository'
import { MainPageSetting } from '~/data/models/settings/mainPage'
import { API } from '~/data/utils/Enums'

export default class MainPage extends Repository {
  async loadMainPageSetting(): Promise<MainPageSetting> {
    const res = await this.axios.get('/setting/main',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 9|G53z1CRM174XmlGlsNBvRqt5TR7T4fBV6wYRVze5'
      }
    })
    return res.data
  }

  async saveMainPageSetting(data: any): Promise<MainPageSetting> {

    console.log(data)

    const res = await this.axios.patch('/setting/main/save', data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 9|G53z1CRM174XmlGlsNBvRqt5TR7T4fBV6wYRVze5'
      }
    })
    return res.data
  }
}
