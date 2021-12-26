import Repository from '~/data/repositories/repository'

export default class Menus extends Repository {
  async updateMenu(data: any): Promise<any> {
    const res = await this.axios.patch(`/menu/update/${data.id}`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }

  async addChild(data: any): Promise<any> {
    const res = await this.axios.post(`/menu/addChild`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }

  async storeMenu(data: any): Promise<any> {
    const res = await this.axios.post(`/menu/store`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }

  async searchMenu(data: any): Promise<any> {
    const res = await this.axios.post(`/menu/search/${data.id}`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }

  async deleteMenu(id: number) {
    const res = await this.axios.delete(`/menu/delete/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }

  async getMenus(): Promise<any> {
    const res = await this.axios.get(`/menus`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 13|QKm4FzEg5OrQrvocbB0LmGOV6uOH3Vd5SrdwkRtH',
      },
    })
    return res.data
  }
}
