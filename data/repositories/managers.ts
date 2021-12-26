import Repository from '~/data/repositories/repository'
import { Manager, Response, StoreResponse } from '~/data/models/managers'
// from models


export default class Managers extends Repository {
    header = {
        'Accept': 'application/json',
        'Authorization': "Bearer 3|27AqCIZ0Sdkkltns3jCgulJ34a8pfVC59YPg4qnw"
    }

    async list() {
        const res = await this.axios.get<Response<Manager[]>>('/admins', {
            headers: this.header
        })
        return res.data
    }

    async store(data: Manager) {

        const res = await this.axios.post<Response<StoreResponse>>("/admins/store", data, {
            headers: { ...this.header, 'Content-Type': 'application/json' }
        })


        return res.data
    }

    async update(data: Manager) {

        const res = await this.axios.patch<Response<StoreResponse>>("/admins/update/" + data.id, data, {
            headers: this.header
        })

        return res.data
    }

    async active(userId: number) {
        const res = await this.axios.get<Response<[]>>("/admins/active/" + userId, {
            headers: this.header
        })
        return res.data
    }


    async deActive(userId: number) {
        const res = await this.axios.get<Response<[]>>("/admins/deactive/" + userId, {
            headers: this.header
        })
        return res.data
    }
}
