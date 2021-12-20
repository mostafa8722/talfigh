import Repository from '~/data/repositories/repository'
import { PermissionGroup } from '~/data/models/permission-group'
import { API } from 'data/utils/Enums'
let bearer = 'Bearer RrWLikHF7PAnP9JJS3PVikgdHiWDjFqZ9XkPXZaJ';

export default class PermissionGroups extends Repository {


  async loadPermissions(): Promise<PermissionGroup[]> {

    const res = await this.axios.get('/access-groups',{
      headers: {
        'Accept': 'application/json',
        'Authorization': bearer
      }
    })


    return res.data.data
  };
    async savePermission(data: PermissionGroup): Promise<{data:PermissionGroup,success:boolean,message:string}> {

        const res = await this.axios.post('/access-groups/store', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })

        return res.data
    };
    async udpatePermission(data: PermissionGroup): Promise<{data:PermissionGroup,success:boolean,message:string}> {
        const res = await this.axios.patch(`/access-groups/update/${data.id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })
        return res.data
    };
    async deletePermission(data: PermissionGroup): Promise<{data:PermissionGroup,success:boolean,message:string}> {
        const res = await this.axios.delete(`/access-groups/delete/${data.id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer,
            }
        })
        return res.data
    }


}
