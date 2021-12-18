import Repository from '~/data/repositories/repository'
import { SiteSetting } from '~/data/models/settings/site'
import { API } from '~/data/utils/Enums'


export default class MainPage extends Repository {
  async loadSiteSetting(): Promise<SiteSetting> {
    const res = await this.axios.get('/setting/site',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 11|c2ArnRDFrHxvV3hO46wHTbYCRSWxwBJ7ofvEwhIV'
      }
    })
    return res.data
  };
    async setSettings(data: SiteSetting): Promise<{data:SiteSetting,success:boolean}> {
        const res = await this.axios.patch('/setting/site/save', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 11|c2ArnRDFrHxvV3hO46wHTbYCRSWxwBJ7ofvEwhIV'
            }
        })
        return res.data
    }
}
