<template>
  <v-card rounded="xl" class="px-5 py-7">
    <v-row align="center">
      <v-col md="6" cols="12">
        <div class="d-flex flex-wrap mb-9">
          <div class="" id="title">عنوان مدیر</div>

          <div v-if="editMode">
            <v-btn
              @click="activeUser(activeForm.id)"
              rounded
              color="#009D4C"
              class="activate mt-2 mx-4 chp"
            >
              <v-icon left small>fa-check</v-icon>
              فعال سازی
            </v-btn>
            <v-btn
              @click="deActiveUser(activeForm.id)"
              rounded
              color="#FF5C5C"
              class="activate mt-2 chp"
            >
              <v-icon left small>fa-trash</v-icon>
              بلاک مدیر
            </v-btn>
          </div>
        </div>

        <v-text-field
          style="width: 75%"
          class="d-flex rounded-lg"
          placeholder="مدیر داخلی"
          outlined
        ></v-text-field>

        <span>توضیحات نقش</span>
        <v-textarea
          placeholder="توضیحات"
          outlined
          class="d-flex rounded-lg mt-2"
          rows="10"
        ></v-textarea>
      </v-col>

      <v-col cols="12" md="6" class="pl-14">
        <v-form ref="formRef">
          <!-- <v-col cols="12" md="12" class="mb-0 pb-0"> -->
          <span>نام کاربری</span>
          <v-text-field
            class="mt-2 rounded-lg"
            outlined
            placeholder="نام کاربری"
            :rules="[rules.notEmpty]"
            v-model="activeForm.username"
          ></v-text-field>
          <!-- </v-col>  -->

          <v-row>
            <v-col cols="12" md="6" class="pt-0">
              <!-- <span>نام کاربری</span>
              <v-text-field
                class="mt-2 rounded-lg"
                outlined
                placeholder="نام کاربری"
                :rules="[rules.notEmpty]"
                v-model="activeForm.username"
              ></v-text-field> -->

              <span>نام</span>
              <v-text-field
                class="mt-2 rounded-lg"
                outlined
                placeholder="نام"
                :rules="[...rules.notEmpty]"
                v-model="activeForm.firstname"
              ></v-text-field>
              <span>ایمیل</span>
              <v-text-field
                class="rounded-lg mt-2"
                placeholder="ایمیل"
                outlined
                :rules="[...rules.isEmail]"
                v-model="activeForm.email"
              ></v-text-field>
              <span> رمز عبور</span>
              <v-text-field
                class="rounded-lg mt-2"
                placeholder="رمز عبور"
                outlined
                v-model="activeForm.password"
                :rules="[matchingPasswords]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pt-0">
              <span> نام خانوادگی</span>
              <v-text-field
                class="rounded-lg mt-2"
                placeholder=" نام خانوادگی"
                outlined
                v-model="activeForm.lastname"
                :rules="[...rules.notEmpty]"
              ></v-text-field>
              <span>موبایل</span>
              <v-text-field
                class="rounded-lg mt-2"
                placeholder="موبایل"
                outlined
                :rules="[...rules.isPhone]"
                v-model="activeForm.mobile1"
              ></v-text-field>
              <span>تکرار رمز</span>
              <v-text-field
                class="rounded-lg mt-2"
                placeholder="تکرار رمز"
                outlined
                v-model="rePassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <!-- v-model="value" -->
              <v-autocomplete
                v-model="activeForm.role_id"
                :items="roles"
                item-text="title"
                item-value="id"
                :rules="[rules.isRole]"
                outlined
                rounded
                class="mt-2"
                append-icon="fa-search"
                placeholder="جستجوی نقش"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-btn
        class="mx-2 mt-2 mr-auto"
        color="pink"
        depressed
        plain
        dark
        v-if="editMode"
        @click="clearForm"
      >
        لغو تغییرات
      </v-btn>
      <v-btn
        class="sav mt-2"
        :class="{ 'mr-auto': !editMode }"
        color="#00B728"
        rounded
        depressed
        outlined
        @click="submitForm"
      >
        {{ !editMode ? 'ذخیره اطلاعات' : 'بروز رسانی اطلاعات' }}
      </v-btn>
    </v-row>
  </v-card>
</template>

<script lang='ts'>
import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Manager } from '~/data/models/managers'

enum RuleType {
  NOT_EMPTY = 'این مقدار نباید خالی باشد',
  NOT_EMAIL = 'مقدار وارد شده برای ایمیل صحیح نمیباشد',
  NOT_PHONE = 'شماره موبایل اشتباه است',
  PASWD_NOT_MATCH = 'پسورد ها هم خوانی ندارند',
  NOT_EXIST_ROLE = 'چنین قاعده ای وجود ندارد',
}

const validateEmail = (email: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

const validatePhone = (phone: string) => {
  return /(\+989|09)\d{9}$/gm.test(phone)
}

export default Vue.extend({
  name: 'DetailsForm',
  data() {
    return {
      activeForm: {
        id: undefined,
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        mobile1: '',
        password: '',
        role_id: -1,
      } as Manager,
      rePassword: '',
      rules: {
        notEmpty: (val: string) => val !== '' || RuleType.NOT_EMPTY,
        isPhone: (val: string) =>
          validatePhone(val) || val === '' || RuleType.NOT_PHONE,
        isEmail: (val: string) =>
          validateEmail(val) || val === '' || RuleType.NOT_EMAIL,
        isRole: (val: number | string | undefined) => {
          if (typeof val === 'undefined') return RuleType.NOT_EXIST_ROLE
          if (Boolean(Number(val)) === false) return RuleType.NOT_EXIST_ROLE
          return Number(val) > 0 || RuleType.NOT_EXIST_ROLE
        },
      },
    }
  },
  watch: {
    editMode(newval: boolean) {
      this.$refs.formRef.reset()

      if (newval) {
        const form = cloneDeep(this.$store.getters['managers/editables'])
        Object.assign(this.activeForm, form)
      }
    },
  },

  async mounted() {
    await this.$store.dispatch('roles/getRoles')
  },
  computed: {
    ...mapGetters({
      roles: 'roles/roles',
      editMode: 'managers/editMode',
    }),
    matchingPasswords(): boolean | string {
      const fval = this.activeForm.password || ''
      const sval = this.rePassword || ''
      return fval === sval || RuleType.PASWD_NOT_MATCH
    },
  },
  methods: {
    ...mapActions({
      clearForm: 'managers/clearForm',
      activeUser: 'managers/activeUser',
      deActiveUser: 'managers/deActiveUser',
    }),
    submitForm() {
      console.log(cloneDeep(this.activeForm))
      const fr = this.$refs.formRef as Vue & { validate: () => boolean }

      if (fr.validate()) {
        const data = cloneDeep(this.activeForm)
        if (this.editMode) {
          this.$store.dispatch('managers/updateEntries', data)
        } else {
          this.$store.dispatch('managers/submitEntries', data)
        }
      }
    },
  },
})
</script>

<style lang='scss' scoped>
.chp {
  min-width: 112px !important;
  min-height: 26px !important;
}
.activate {
  color: white !important;
  width: 112px !important;
  height: 26px !important;
  background: #009d4c;
  border-radius: 12px !important;
  font-size: 12px !important;
}
.margi {
  margin-top: 64px;
}
.sav {
  width: 171px;
  border: #00b728 2px solid;
}
span {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #747474;
}
#title {
  font-weight: 500;
  font-size: 26px;
  /* identical to box height */
  text-align: center;
  color: #747474;
}
</style>
