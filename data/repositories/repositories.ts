import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from "~/data/repositories/postRepository";
import PageRepository from '~/data/repositories/pageRepository'
import AccountRepository from '~/data/repositories/users/accountRepository'
import ContractRepository from '~/data/repositories/contractRepository'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)
  pages = () => new PageRepository(this.axios)
  account = () => new AccountRepository(this.axios)
  contract = () => new ContractRepository(this.axios)

}
