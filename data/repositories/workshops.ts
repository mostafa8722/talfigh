import Repository from '~/data/repositories/repository'
import { Workshop } from '~/data/models/Workshop'


export default class Workshops extends Repository {

  headers = {
    'Accept': 'application/json',
    'Authorization': '2|V4fPaEQfLvMQERIuErzXqhMtRw9WoDowzbGkYgmc'
  }

  async getWorkshops(): Promise<Workshop[]> {
    const res = await this.axios.get('/workshop', {
      headers: this.headers
    })
    return res.data
  }

  async setWorkshop(data: Workshop): Promise<Workshop> {
    const res = await this.axios.post('/workshop/store', data, {
      headers: this.headers
    })
    return res.data
  }

  async updateWorkshop(id: number, data: Workshop): Promise<Workshop> {
    const res = await this.axios.patch(`/workshop/update/${id}`, data, {
      headers: this.headers
    })
    return res.data
  }

  async deleteWorkshop(id: number): Promise<Workshop> {
    const res = await this.axios.delete(`/workshop/delete/${id}`, {
      headers: this.headers
    })
    return res.data
  }


}
