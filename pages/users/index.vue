<template>
  <div>
    <TLFContainer>
      <v-row style='column-gap: 1rem; row-gap: 1rem' class='' align='center'>
        <span class='title mr-3 mr-sm-0'>لیست کاربران</span>
        <v-btn width='230' height='35' class='mr-5 d-none d-md-inline-block' rounded color='primary'>
          <span class='text-btn'>خروجی فایل اکسل</span>
        </v-btn>
      </v-row>
      <v-col class='mt-5 px-0 mx-0'>
        <div style='border-radius: 20px' class='white elevation-3 container__head'>
          <v-row style='column-gap: 1rem' class='d-none d-sm-flex mt-5 mr-5 py-5' align='center'>
            <v-col cols='3' align-self='start'>
              <div>
                <img src='@/static/icons/user-checked-primary.svg' alt=''>
              </div>
              <span class='text-number'>5250 کاربر قدیمی وارد شده</span>
            </v-col>
            <v-col col='3' align-self='start'>
              <div>
                <img src='@/static/icons/user-checked-orange.svg' alt=''>
              </div>
              <span class='text-number'>55 تعداد کاربران جایگذاری شده اند</span>
            </v-col>
          </v-row>
          <div class='d-block d-sm-none mt-5 mr-5 py-5'>
            <v-row align='start' justify='start'>
              <v-col align-self='start'>
                <div>
                  <img src='@/static/icons/user-checked-primary.svg' alt=''>
                </div>
                <span class='text-number'>5250 کاربر قدیمی وارد شده</span>
              </v-col>
            </v-row>
            <v-row align='start' justify='start'>
              <v-col align-self='start'>
                <div>
                  <img src='@/static/icons/user-checked-orange.svg' alt=''>
                </div>
                <span class='text-number'>55 تعداد کاربران جایگذاری شده اند</span>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </TLFContainer>
    <!-- d-none d-md-block-->
    <div class='my-10'>
      <v-data-table class='px-5 py-5'
                    :loading='isLoadPaginate'
                    hide-default-footer :items='users'
                    hide-default-header :headers='headers'>
        <template #top='{ pagination, options, updateOptions }'>
          <v-row class='pa-md-0 pa-4'>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                v-model.trim='search.firstName'
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو نام...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                v-model.trim='search.lastName'
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو نام خانوادگی...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                v-model.trim='search.nationalCode'
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو با کد ملی...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col cols='12' lg='1' md='1'
            >
              <v-btn @click='searchBtn' class='white--text px-8 mt-2' rounded color='#7A7A7A'
              >جستجو
              </v-btn
              >
            </v-col
            >
            <v-spacer></v-spacer>
            <v-col style='justify-self: flex-end' cols='12' lg='4' md='4'
            >
              <v-pagination
                v-model="page"
                :length="totalPage"
                :total-visible="5"
              ></v-pagination>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.fullName='{ item }'>
           <span
             class=''
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.firstname }} {{ item.lastname }}
           </span>
        </template>
                <template v-slot:item.nationalCode='{ item }'>
                                    <span
                                      style='color: #848484;
                       font-size: 1rem;
                       font-weight: 500;'>
                  به شماره ملی:
                </span>
                  <span
                    style='color: #197095; font-size: 1rem; font-weight: 500;'>
                     {{ item.personalParty[0].national_code }}
                   </span>
                </template>
<!--        <template v-slot:item.date='{ item }'>-->
<!--          <span-->
<!--            style='color: #197095; font-size: 1rem; font-weight: 500;'>-->
<!--             {{ item.personalParty[0].birthdate }}-->
<!--           </span>-->
<!--        </template>-->
        <template v-slot:item.mobile='{ item }'>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.mobile1 }}
           </span>
        </template>
        <template v-slot:item.role='{ item }'>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.account_type == 0 ? "حقیقی" : "حقوقی"}}
           </span>
        </template>
        <template v-slot:item.actions='{item}'>
          <div class='d-flex py-6 align-center' style='column-gap: 0.5rem'>
            <v-btn width='125' height='25' v-if='item.status === 0' rounded elevation='0' color='error'>
              <v-icon color='#fff' size='15'>fa-trash-alt</v-icon>
              <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>بلاک مدیر</span>
            </v-btn>
            <v-btn width='125' height='25' v-else rounded elevation='0' color='success'>
              <v-icon color='#fff' size='15'>fa-check</v-icon>
              <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>فعال سازی</span>
            </v-btn>
            <nuxt-link :to='"users/" + item.id' >
              <v-btn x-small fab elevation='0' color='warning'>
                <v-icon color='#fff' size='15'>fa-edit</v-icon>
              </v-btn>
            </nuxt-link>
          </div>
        </template>
      </v-data-table>
    </div>
    <v-btn width='230' height='35' class='mr-5 mt-5 mb-5 d-md-none d-inline-block' rounded color='primary'>
      <span class='text-btn'>خروجی فایل اکسل</span>
    </v-btn>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import _ from 'lodash'
import UsersTableBox from '~/components/users/UsersTableBox.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'

export default Vue.extend({
  name: 'Index',
  components: { TLFContainer, UsersTableBox },
  data() {
    return {
      headers: [
        {
          text: '',
          value: 'fullName',
          width: '100px'
        },
        {
          text: '',
          value: 'nationalCode',
          width: '100px'
        },
        // {
        //   text: '',
        //   value: 'date',
        //   width: '100px'
        // },
        {
          text: '',
          value: 'mobile',
          width: '200px'
        },
        {
          text: '',
          value: 'role',
          width: '100'
        },
        {
          text: '',
          value: 'actions',
          width: '200'
        }
      ],
      firstNameSearch: '',
      lastNameSearch: '',
      nationalCodeSearch: '',
      search: {
        firstName: '',
        lastName: '',
        nationalCode: ''
      },
    }
  },
  head: {
    title: 'لیست کاربرها'
  },
  computed: {
    users: {
      get() {
        return (this as any).$store.getters['users/users/getUsers']
      },
      set(value) {
        (this as any).$store.commit('users/users/SetUsersAfterSearch', value)
      }
    },
    usersWithName: {
      get() {
        return (this as any).$store.getters['users/users/getUsersWithNameSearch']
      }
    },
    usersWithFamily: {
      get() {
        return (this as any).$store.getters['users/users/getUsersWithFamilySearch']
      }
    },
    usersWithCode: {
      get() {
        return (this as any).$store.getters['users/users/getUsersWithCodeSearch']
      }
    },
    page: {
      get(){
        return (this as any).$store.getters['users/users/getPage']
      },
      set(value){
        (this as any).$store.commit('users/users/SetPage', value)
      }
    },
    totalPage: {
      get(){
        return (this as any).$store.getters['users/users/getTotalPage']
      },
      set(value){
        (this as any).$store.commit('users/users/SetTotalPage', value)
      }
    },
    isLoadPaginate: {
      get(){
        return (this as any).$store.getters['users/users/isLoadPaginate']
      },
      set(value){
        (this as any).$store.commit('users/users/isLoadPaginate', value)
      }
    }
  },
  watch: {
    page(){
      (this as any).isLoadPaginate = true;
      (this as any).$store.dispatch('users/users/getUsers')
    }
  },
  methods: {
    searchBtn() {
      (this as any).isLoadPaginate = true
      if (
        !(this as any).search.firstName &&
        !(this as any).search.lastName &&
        !(this as any).search.nationalCode
      ) {
        (this as any).$store.dispatch('users/users/getUsers')
      } else {
        (this as any).$store.dispatch('users/users/searchUsers', (this as any).search)
          .then(() => {
            (this as any).users = _.union(
              (this as any).usersWithName,
              (this as any).usersWithFamily,
              (this as any).usersWithCode,
            )
          })
      }
    },
  },
  created() {
    (this as any).$store.dispatch('users/users/getUsers')
  }
})
</script>

<style scoped lang='scss'>

.title {
  font-size: 1.9rem !important;
  color: #fff !important;
  font-weight: 500 !important;
  font-family: IranYekanFN, serif !important;
}

.text-btn {
  font-size: 1rem !important;
  color: #fff !important;
  font-weight: 400 !important;
  font-family: IranYekanFN, serif !important;
}

.text-number {
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: #000;
  font-family: IranYekanFN, serif !important;
}

.v-data-footer {
  border: none !important;
}

.container__head {
  @media screen and (max-width: 600px) {
    //width: 1200px;
  }
}

</style>
