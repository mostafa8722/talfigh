import Repository from '~/data/repositories/repository'
import { ContactUs as Contact } from '~/data/models/contactus'

export default class ContactUs extends Repository {

  async getContacts(): Promise<Contact[]> {
    const res = await this.axios.get(`/forms/contactus`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 8|a0haKGnLKxqF8vtTPOqEf9txXuBt0KBmelZwID4c',
      },
    })
    return res.data.data
  }
}
