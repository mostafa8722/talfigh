import Repository  from '~/data/repositories/repository'
import { ContractConfirm } from '~/data/models/contract'
import { API } from '~/data/utils/Enums'

export default class Contract extends Repository {
  async confirmContract(data: boolean): Promise<ContractConfirm> {
    const res = await this.axios.post(API.Web + '/profile/confirm-plans', {
      confirm: data
    },{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}
