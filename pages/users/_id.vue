<template>
  <TLFContainer>
    <span class="white--text" style="font-size: 1.6rem"
      >اطلاعات پایه و ویرایش</span
    >
    <v-card class="rounded-xl mt-6 mt-md-12 pa-6 pa-md-12 pb-md-16">
      <v-row>
        <v-col cols="12" lg="3" md="6">
          <div v-if='account_type' class="d-flex flex-column">
            <div class="mb-2 mr-2">نام</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام"
              v-model='firstname'
              outlined
            ></v-text-field>
            <div class="mb-2 mr-2">ایمیل</div>
            <v-text-field
              class="rounded-lg"
              placeholder="ایمیل"
              v-model='email'
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">نام نمایشی</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام نمایشی"
              v-model='display_name'
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">کیء اقتصادی</div>
            <v-text-field
              class="rounded-lg"
              placeholder="کیء اقتصادی"
              v-model='economic_code'
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">استان</div>
            <v-select
              class="rounded-lg"
              placeholder="استان"
              :items='provinces'
              item-text='name'
              item-value='id'
              v-model='province'
              outlined
            ></v-select>

            <div class="mb-2 mr-2">شناسه ثبت</div>
            <v-text-field
              class="rounded-lg"
              placeholder="شناسه ثبت"
              v-model='registration_id'
              outlined
            ></v-text-field>
          </div>
          <div v-else class="d-flex flex-column">
            <div class="mb-2 mr-2">نام</div>
            <v-text-field
              v-model='firstname'
              class="rounded-lg"
              placeholder="نام"
              outlined
            ></v-text-field>
            <div class="mb-2 mr-2">نام کاربری</div>
            <v-text-field
              class="rounded-lg"
              v-model='username'
              placeholder="نام کاربری"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">موبایل اول</div>
            <v-text-field
              v-model='mobile1'
              class="rounded-lg"
              placeholder="موبایل اول"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">موبایل دوم</div>
            <v-text-field
              v-model='mobile2'
              class="rounded-lg"
              placeholder="موبایل دوم"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">استان</div>
            <v-select
              class="rounded-lg"
              placeholder="استان"
              outlined
              :items='provinces'
              item-text='name'
              item-value='id'
              v-model='province'
            ></v-select>

            <div class="mb-2 mr-2">آدرس</div>
            <v-text-field
              class="rounded-lg"
              v-model='address'
              placeholder="آدرس"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">تاریخ تولد</div>
            <date-picker v-model='birthdate' />
<!--            <v-text-field-->
<!--              class="rounded-lg"-->
<!--              placeholder="تاریخ تولد"-->
<!--              v-model='date'-->
<!--              outlined-->
<!--            ></v-text-field>-->
<!--            <v-date-picker v-model='date' :first-day-of-week='0' locale='fa'></v-date-picker>-->
<!--            <v-menu-->
<!--              v-model="menu"-->
<!--              :close-on-content-click="false"-->
<!--              max-width="350"-->
<!--            >-->
<!--              <template v-slot:activator="{ on, attrs }">-->
<!--                <v-text-field-->
<!--                  readonly-->
<!--                  class="rounded-lg"-->
<!--                  placeholder="تاریخ تولد"-->
<!--                  v-model='date'-->
<!--                  outlined-->
<!--                  v-bind="attrs"-->
<!--                  v-on="on"-->
<!--                ></v-text-field>-->
<!--              </template>-->
<!--              <v-date-picker-->
<!--                locale='fa'-->
<!--                first-day-of-week='6'-->
<!--                locale-first-day-of-year='30'-->
<!--                v-model="date"-->
<!--                @change="menu = false"-->
<!--              ></v-date-picker>-->
<!--            </v-menu>-->
          </div>
        </v-col>
        <v-col cols="12" lg="3" md="6">
          <div v-if='account_type' class="d-flex flex-column">
          <div class="mb-2 mr-2">نام خانوادگی</div>
          <v-text-field
            class="rounded-lg"
            placeholder="نام خانوادگی"
            v-model='lastname'
            outlined
          ></v-text-field>
          <div class="mb-2 mr-2">نام کاربری</div>
          <v-text-field
            class="rounded-lg"
            placeholder="نام کاربری"
            v-model='username'
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">نام سازمان</div>
          <v-text-field
            class="rounded-lg"
            placeholder="نام سازمان"
            v-model='organization'
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">شناسه ملی</div>
          <v-text-field
            class="rounded-lg"
            v-model='national_id'
            placeholder="شناسه ملی"
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">شهر</div>
            <v-select
              class="rounded-lg"
              placeholder="شهر"
              :items='cities'
              item-text='name'
              item-value='id'
              v-model='city'
              outlined
            ></v-select>

          <div class="mb-2 mr-2">شماره تلفن</div>
          <v-text-field
            class="rounded-lg"
            v-model='phone'
            placeholder="شماره تلفن"
            outlined
          ></v-text-field>
        </div>
          <div v-else class="d-flex flex-column">
          <div class="mb-2 mr-2">نام خانوادگی</div>
          <v-text-field
            class="rounded-lg"
            v-model='lastname'
            placeholder="نام خانوادگی"
            outlined
          ></v-text-field>
          <div class="mb-2 mr-2">نام نمایشی</div>
          <v-text-field
            class="rounded-lg"
            v-model='display_name'
            placeholder="نام نمایشی"
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">ایمیل</div>
          <v-text-field
            class="rounded-lg"
            placeholder="ایمیل"
            v-model='email'
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">کد ملی</div>
          <v-text-field
            class="rounded-lg"
            v-model='national_code'
            placeholder="کد ملی"
            outlined
          ></v-text-field>

            <div class="mb-2 mr-2">شهر</div>
            <v-select
              class="rounded-lg"
              placeholder="شهر"
              outlined
              :items='cities'
              item-text='name'
              item-value='id'
              v-model='city'
            ></v-select>

          <div class="mb-2 mr-2">نام پدر</div>
          <v-text-field
            class="rounded-lg"
            placeholder="نام پدر"
            v-model='father_name'
            outlined
          ></v-text-field>

          <div class="mb-2 mr-2">شماره تلفن ثابت</div>
          <v-text-field
            class="rounded-lg"
            v-model='phone'
            placeholder="شماره تلفن ثابت"
            outlined
          ></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <v-radio-group v-model="account_type">
            <v-radio
              :value="false"
              label="ادامه ثبت نام به عنوان شخص حقیقی"
            ></v-radio>
            <v-radio
              class="mt-4"
              :value="true"
              label="ادامه ثبت نام به عنوان شخص حقوقی"
            ></v-radio>
          </v-radio-group>
          <div v-if='account_type' class='mt-10'>
            <div class="mb-2 mr-2">شماره موبایل</div>
            <v-text-field
              class="rounded-lg"
              v-model='mobile1'
              placeholder="شماره موبایل"
              outlined
            ></v-text-field>
          </div>
          <div class='mt-10'>
            <div class="mb-2 mr-2">رمز عبور</div>
            <v-text-field
              class="rounded-lg"
              v-model='password'
              type='password'
              placeholder="رمز عبور"
              outlined
            ></v-text-field>
          </div>
          <div class="map-container mt-10 pb-8 pb-md-0">
            <vl-map
              :load-tiles-while-animating="true"
              :load-tiles-while-interacting="true"
              :style="{
                height:
                  $vuetify.breakpoint.lg ||
                  $vuetify.breakpoint.xl ||
                  $vuetify.breakpoint.md
                    ? '300px'
                    : '420px',
              }"
              @click="setSelectedPosition"
            >
              <vl-view
                :zoom.sync="mapOptions.zoom"
                :max-zoom.sync="mapOptions.maxZoom"
                :center.sync="mapOptions.center"
                :rotation.sync="mapOptions.rotation"
              >
              </vl-view>

              <vl-layer-tile id="osm">
                <vl-source-osm
                  :url="mapOptions.tileUrl"
                  attributions=""
                ></vl-source-osm>
              </vl-layer-tile>

              <vl-feature
                v-if="mapOptions.selectedLocation"
                id="position-feature"
              >
                <vl-geom-point
                  :coordinates="mapOptions.selectedLocation"
                ></vl-geom-point>
                <vl-style-box>
                  <vl-style-icon
                    src="/images/map_marker.png"
                    :scale="0.4"
                    :anchor="[0.5, 1]"
                  />
                </vl-style-box>
              </vl-feature>
            </vl-map>
          </div>
        </v-col>
      </v-row>
      <div class="float-md-left d-flex justify-center">
        <v-btn @click='updateUser' class="px-10" rounded outlined color="success"
          >ذخیره اطلاعات</v-btn
        >
      </div>
    </v-card>
  </TLFContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import { debounce, filter, find } from 'lodash'

export default Vue.extend({
  name: 'BasicInformation',
  components: { TLFContainer },
  data() {
    return {
      menu: false,
      cities: [],
      mapOptions: {
        zoom: 16,
        maxZoom: 18,
        center: [51.337712, 35.699735],
        default: [51.337712, 35.699735],
        rotation: 0,
        tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        selectedLocation: [51.337712, 35.699735],
      },
    }
  },
  head: {
    title: "اطلاعات پایه"
  },
  methods: {
    setSelectedPosition(event: any) {
      (this as any).mapOptions.selectedLocation = event.coordinate
    },
    updateUser(){
          console.log(...arguments)
    }
  },
  computed: {
    email: {
        get(){
          return (this as any).$store.getters['users/profile/getEmail']
        },
      set(value){
        (this as any).$store.commit('users/profile/setEmail', value)
      }
    },
    username: {
      get(){
        return (this as any).$store.getters['users/profile/getUserName']
      },
      set(value){
        (this as any).$store.commit('users/profile/setUserName', value)
      }
    },
    firstname: {
      get(){
        return (this as any).$store.getters['users/profile/getFirstName']
      },
      set(value){
        (this as any).$store.commit('users/profile/setFirstName', value)
      }
    },
    lastname: {
      get(){
        return (this as any).$store.getters['users/profile/getLastName']
      },
      set(value){
        (this as any).$store.commit('users/profile/setLastName', value)
      }
    },
    mobile1: {
      get(){
        return (this as any).$store.getters['users/profile/getMobile1']
      },
      set(value){
        (this as any).$store.commit('users/profile/setMobile1', value)
      }
    },
    mobile2: {
      get(){
        return (this as any).$store.getters['users/profile/getMobile2']
      },
      set(value){
        (this as any).$store.commit('users/profile/setMobile2', value)
      }
    },
    display_name: {
      get(){
        return (this as any).$store.getters['users/profile/getDisplayName']
      },
      set(value){
        (this as any).$store.commit('users/profile/setDisplayName', value)
      }
    },
    account_type: {
      get(){
        return (this as any).$store.getters['users/profile/getAccountType']
      },
      set(value){
        (this as any).$store.commit('users/profile/setAccountType', value)
      }
    },
    confirm_plan: {
      get(){
        return (this as any).$store.getters['users/profile/getConfirmPlan']
      },
      set(value){
        (this as any).$store.commit('users/profile/setConfirmPlan', value)
      }
    },
    confirm_datetime: {
      get(){
        return (this as any).$store.getters['users/profile/getConfirmDateTime']
      },
      set(value){
        (this as any).$store.commit('users/profile/setConfirmDateTime', value)
      }
    },
    national_code: {
      get(){
        return (this as any).$store.getters['users/profile/getNationalCode']
      },
      set(value){
        (this as any).$store.commit('users/profile/setNationalCode', value)
      }
    },
    father_name: {
      get(){
        return (this as any).$store.getters['users/profile/getFatherName']
      },
      set(value){
        (this as any).$store.commit('users/profile/setFatherName', value)
      }
    },
    birthdate: {
      get(){
        return (this as any).$store.getters['users/profile/getBirthDate']
      },
      set(value){
        (this as any).$store.commit('users/profile/setBirthDate', value)
      }
    },
    phone: {
      get(){
        return (this as any).$store.getters['users/profile/getPhone']
      },
      set(value){
        (this as any).$store.commit('users/profile/setPhone', value)
      }
    },
    address_id: {
      get(){
        return (this as any).$store.getters['users/profile/getAddressID']
      },
      set(value){
        (this as any).$store.commit('users/profile/setAddressID', value)
      }
    },
    organization: {
      get(){
          return (this as any).$store.getters['users/profile/getOrganization']
      },
      set(value){
        (this as any).$store.commit('users/profile/setOrganization', value)
      }
    },
    economic_code: {
      get(){
        return (this as any).$store.getters['users/profile/getEconomicCode']
      },
      set(value){
        (this as any).$store.commit('users/profile/setEconomicCode', value)
      }
    },
    national_id: {
      get(){
        return (this as any).$store.getters['users/profile/getNationalID']
      },
      set(value){
        (this as any).$store.commit('users/profile/setNationalID', value)
      }
    },
    registration_id: {
      get(){
        return (this as any).$store.getters['users/profile/getRegistrationID']
      },
      set(value){
        (this as any).$store.commit('users/profile/setRegistrationID', value)
      }
    },
    address: {
      get(){
        return (this as any).$store.getters['users/profile/getAddress']
      },
      set(value){
        (this as any).$store.commit('users/profile/setAddress', value)
      }
    },
    city: {
      get(){
        return (this as any).$store.getters['users/profile/getCity']
      },
      set(value){
        (this as any).$store.commit('users/profile/setCity', value)
      }
    },
    province: {
      get(){
        return (this as any).$store.getters['users/profile/getProvince']
      },
      set(value){
        (this as any).$store.commit('users/profile/setProvince', value)
      }
    },
    password: {
      get(){
        return (this as any).$store.getters['users/profile/getPassword']
      },
      set(value){
        (this as any).$store.commit('users/profile/setPassword', value)
      }
    },
    provinces: {
      get(){
        return (this as any).$store.getters['cities/provinces/getProvincesWithCity']
      }
    },
  },
  created() {
    (this as any).$store.dispatch('users/profile/getUser', this.$route.params.id);
    (this as any).$store.dispatch('cities/provinces/getProvincesWithCity').then(()=>{
      debounce(()=>{
        if ((this as any).provinces){
          let finds = find((this as any).provinces, (item)=>{
            return item.id == (this as any).province
          });
          (this as any).cities = finds.city
        }
      }, 1000)
    })
  },
  watch: {
    province(){
      let finds = find((this as any).provinces, (item)=>{
        return item.id == (this as any).province
      });
      (this as any).cities = finds.city
    },
  },
  mounted() {
  }
})
</script>

<style lang="scss" scoped>
.map-container:hover {
  cursor: pointer;
}
</style>
