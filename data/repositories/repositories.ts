import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/data/repositories/postRepository'
import Roles from '~/data/repositories/role'
import Pages from '~/data/repositories/pages'
import Permissions from '~/data/repositories/permissions/permission'
import PermissionGroups from '~/data/repositories/permissions/permissionGroup'
import Users from '~/data/repositories/users/users'
import Scores from '~/data/repositories/scores/scores'
import System from '~/data/repositories/settings/system'
import Footer from '~/data/repositories/settings/footer'
import MainPageSetting from '~/data/repositories/settings/mainPage'
import SiteSetting from '~/data/repositories/settings/site'
import Profile from '~/data/repositories/users/profile'
import Cities from '~/data/repositories/cities/cities'
import Workshops from '~/data/repositories/workshops'
import AuthUser from '~/data/repositories/users/auth'
import Categories from '~/data/repositories/categories'
import ContactUs from '~/data/repositories/contactus'
import Managers from '~/data/repositories/managers'
import Menus from '~/data/repositories/main-menu-management'
import Products from '~/data/repositories/products'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)

  pages = () => new Pages(this.axios)

  Roles = () => new Roles(this.axios)

  Permissions = () => new Permissions(this.axios)

  PermissionGroups = () => new PermissionGroups(this.axios)

  users = () => new Users(this.axios)

  scores = () => new Scores(this.axios)

  systemSettings = () => new System(this.axios)

  footerSettings = () => new Footer(this.axios)

  profile = () => new Profile(this.axios)

  cities = () => new Cities(this.axios)

  mainPageSetting = () => new MainPageSetting(this.axios)

  siteSetting = () => new SiteSetting(this.axios)

  workshops = () => new Workshops(this.axios)

  authUser = () => new AuthUser(this.axios)

  managers = () => new Managers(this.axios)

  categories = () => new Categories(this.axios)

  contact = () => new ContactUs(this.axios)

  menus = () => new Menus(this.axios)

  products = () => new Products(this.axios)
}
