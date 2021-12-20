import Repository from '~/data/repositories/repository'
import { Permission } from '~/data/models/permission'
import { API } from 'data/utils/Enums'
let bearer = 'Bearer RrWLikHF7PAnP9JJS3PVikgdHiWDjFqZ9XkPXZaJ';

export default class Permissions extends Repository {


  async loadPermissions(): Promise<Permission[]> {

    const res = await this.axios.get('/permissions',{
      headers: {
        'Accept': 'application/json',
        'Authorization': bearer
      }
    })

    return res.data.data
  };
    async savePermission(data: Permission): Promise<{data:Permission,success:boolean,message:string}> {
        const res = await this.axios.post('/permissions/store', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })
        return res.data
    };
    async udpatePermission(data: Permission): Promise<{data:Permission,success:boolean,message:string}> {
        const res = await this.axios.patch(`/permissions/update/${data.id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })
        return res.data
    };
    async deletePermission(data: Permission): Promise<{data:Permission,success:boolean,message:string}> {
        const res = await this.axios.delete(`/permissions/delete/${data.id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer,
            }
        })
        return res.data
    }


}
