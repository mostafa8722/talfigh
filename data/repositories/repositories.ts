import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/data/repositories/postRepository'
import Pages from '~/data/repositories/pages'
import Users from '~/data/repositories/users/users'
import Scores from '~/data/repositories/scores'
import System from '~/data/repositories/settings/system'
import MainPageSetting from '~/data/repositories/settings/mainPage'
import Profile from '~/data/repositories/users/profile'
import Cities from '~/data/repositories/cities/cities'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)

  pages = () => new Pages(this.axios)

  users = () => new Users(this.axios)

  scores = () => new Scores(this.axios)

  systemSettings = () => new System(this.axios)

  profile = () => new Profile(this.axios)

  cities = () => new Cities(this.axios)

  mainPageSetting = () => new MainPageSetting(this.axios)

}
