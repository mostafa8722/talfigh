import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from "~/data/repositories/postRepository";
import Pages from '~/data/repositories/pages'
import Account from '~/data/repositories/users/account'
import Users from '~/data/repositories/users/users'
import Contract from '~/data/repositories/contract'
import Profile from '~/data/repositories/users/profile'
import Cities from '~/data/repositories/cities/cities'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)

  pages = () => new Pages(this.axios)

  account = () => new Account(this.axios)

  contract = () => new Contract(this.axios)

  users = () => new Users(this.axios)

  profile = () => new Profile(this.axios)

  cities = () => new Cities(this.axios)

}
