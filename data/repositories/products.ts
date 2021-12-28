import Repository from '~/data/repositories/repository'

export default class Products extends Repository {

  async getProducts(): Promise<any> {
    const res = await this.axios.get(`/products`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 16|hzsh2U9KPhdGM7kylx2b49p3xWcSKshFPj5N2nOu',
      },
    })
    return res.data
  }

}
