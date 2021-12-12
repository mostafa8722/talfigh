import Repository from '~/data/repositories/repository'
import { City } from '~/data/models/cities/city'
import { Province, ProvinceWithCity } from '~/data/models/cities/province'
import {API} from '~/data/utils/Enums'

export default class Profile extends Repository {
  async getCities(): Promise<City[]> {
    const res = await this.axios.get(API.Web + '/guest/cities',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getCity(id: number): Promise<City> {
    const res = await this.axios.get(API.Web + '/guest/cities/' + id,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getProvinces(): Promise<Province[]> {
    const res = await this.axios.get(API.Web + '/guest/provinces',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getProvincesWithCities(): Promise<ProvinceWithCity[]> {
    const res = await this.axios.get(API.Web + '/guest/provincesWithCities',{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
