import Repository from '~/data/repositories/repository'
import { SiteSetting } from '~/data/models/settings/site'
import { API } from '~/data/utils/Enums'


export default class MainPage extends Repository {
  async loadSiteSetting(): Promise<SiteSetting> {
    const res = await this.axios.get('/setting/site')
    return res.data
   };
    async setSettings(data: SiteSetting): Promise<any> {
        const res = await this.axios.patch('/setting/site/save', data)
        return res.data
    }
}
