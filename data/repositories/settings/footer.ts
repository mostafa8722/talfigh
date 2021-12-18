import { trim } from 'lodash'
import Repository from '~/data/repositories/repository'
import { Footer } from '~/data/models/settings/footer'
import { API } from '~/data/utils/Enums'

function foterLogoFullURL(fsettings: Footer) {

  if (fsettings.data.footer_logo) {
    const rg = /^(ftp|http|https):\/\/[^ "]+$/;

    if (rg.test(fsettings.data.footer_logo))
      return


    fsettings.data.footer_logo = trim(API.Admin, '/api') + '/' + trim(fsettings.data.footer_logo, '/')
  }

}

export default class footer extends Repository {

  headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 2|Sthy1vVaEsh4JKhQrpyN18lq6PVxXJLAZoa5G9Kp',
    'Content-Type': 'application/json'
  }

  async setSettings(data: Footer): Promise<Footer> {
    const res = await this.axios.patch<Footer>('/setting/footer/save', data, {
      headers: this.headers
    })

    if (res.status === 500)
      return {
        data: { category: [] },
        message: 'خطای سرور',
        success: false
      }

    foterLogoFullURL(res.data)

    return res.data
  }

  async getSettings(): Promise<Footer> {
    const res = await this.axios.get('/setting/footer', {
      headers: this.headers
    })

    if (res.status === 500)
      return {
        data: { category: [] },
        message: 'خطای سرور',
        success: false
      }

    foterLogoFullURL(res.data)


    return res.data
  }

}

