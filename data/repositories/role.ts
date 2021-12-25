import Repository from '~/data/repositories/repository'
import { Role } from '~/data/models/role'
import { API } from 'data/utils/Enums'
let bearer = 'Bearer 3|27AqCIZ0Sdkkltns3jCgulJ34a8pfVC59YPg4qnw';

export default class Roles extends Repository {


    async loadRoles(): Promise<Role[]> {

        const res = await this.axios.get('/roles', {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })

        return res.data.data
    };
    async saveRole(data: Role): Promise<{ data: Role, success: boolean, message: string }> {

        const res = await this.axios.post('/roles/store', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })

        return res.data
    };
    async udpateRole(data: Role): Promise<{ data: Role, success: boolean, message: string }> {
        const res = await this.axios.patch(`/roles/update/${data.id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer
            }
        })
        return res.data
    };
    async deleteRole(data: Role): Promise<{ data: Role, success: boolean, message: string }> {
        const res = await this.axios.delete(`/roles/delete/${data.id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': bearer,
            }
        })
        return res.data
    }


}
