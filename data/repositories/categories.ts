import Repository from '~/data/repositories/repository'

export default class Categorys extends Repository {

  async updateCategory(data: any): Promise<any> {
    const res = await this.axios.patch(`/categories/update/${data.id}`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 33|BpnlRWYQpLm0FZxGcHxG9E8BbHGiLUoF6geQm1q6',
      },
    })
    return res.data
  }

  async addChild(data: any): Promise<any> {
    const res = await this.axios.post(`/categories/addChild`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 33|BpnlRWYQpLm0FZxGcHxG9E8BbHGiLUoF6geQm1q6',
      },
    })
    return res.data
  }

  async storeCategory(data: any): Promise<any> {
    const res = await this.axios.patch(`/categories/store`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 33|BpnlRWYQpLm0FZxGcHxG9E8BbHGiLUoF6geQm1q6',
      },
    })
    return res.data
  }

  async deleteCategory(id: number) {
    const res = await this.axios.delete(`/categories/delete/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 33|BpnlRWYQpLm0FZxGcHxG9E8BbHGiLUoF6geQm1q6',
      },
    })
    return res.data
  }

  async getCategories(id: number): Promise<any> {
    const res = await this.axios.get(`/categories/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 33|BpnlRWYQpLm0FZxGcHxG9E8BbHGiLUoF6geQm1q6',
      },
    })
    return res.data
  }
}
