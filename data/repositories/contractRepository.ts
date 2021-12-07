import Repository  from '~/data/repositories/repository'
import { ContractConfirm } from '~/data/models/contract'

export default class ContractRepository extends Repository {
  async confirmContract(data: boolean): Promise<ContractConfirm> {
    const res = await this.axios.post('/profile/confirm-plans', {
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
