import Repository from '~/data/repositories/repository'
import { Page } from '~/data/models/page'

export default class Pages extends Repository {
  async sendPage(data: Page): Promise<Page> {
    const res = await this.axios.post('/pages/store',data,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async updatePage(data: Page, id: number): Promise<Page> {
    const res = await this.axios.patch(`/pages/update/${id}`,data,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async deletePage(id: number){
    const res = await this.axios.delete(`/pages/delete/${id}`,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getPages(): Promise<Page[]> {
    const res = await this.axios.get('/pages',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getPage(id: number): Promise<Page> {
    const res = await this.axios.get(`/pages/${id}`,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
