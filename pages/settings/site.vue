<template>
  <div class="py-10 px-10">
    <div class="d-flex justify-space-between">
      <h1 class="tlf-title ml-16">تنظیمات سایت</h1>
      <v-btn class="rounded-xl" color="primary">ذخیره محتویات</v-btn>
    </div>

    <div class="mt-10">
      <p class="tlf-subtitle">عنوان وبسایت - page title</p>
      <v-row>
        <v-col cols="3">
          <v-text-field class="rounded-lg"
                        background-color="white"
                        v-model='site.page_title'
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        dense
                        outlined/>
        </v-col>
      </v-row>
    </div>

    <div class="mt-4">
      <p class="tlf-subtitle">لینک شبکه‌های اجتماعی</p>
      <v-row>
        <v-col cols="3" class="d-flex">
          <v-icon size="36" color="white">fab fa-instagram</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        v-model='site.instagram'
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>

        <v-col cols="3" class="mr-10 d-flex">
          <v-icon size="36" color="white">fab fa-facebook-f</v-icon>
          <v-text-field class="rounded-lg mr-12"
                        background-color="white"
                        v-model='site.facebook'
                        placeholder="تلفیق هنر"
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3" class="d-flex">
          <v-icon size="36" color="white">fab fa-whatsapp</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        v-model='site.whatsapp'
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>

        <v-col cols="3" class="mr-10 d-flex">
          <v-icon size="36" color="white">fab fa-google-plus-g</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        v-model='site.google_plus'
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3" class="d-flex">
          <v-icon size="36" color="white">fab fa-telegram-plane</v-icon>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        v-model='site.telegram'
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>

        <v-col cols="3" class="mr-10 d-flex">
          <v-img src="~/static/images/aparat.png" max-width="48px" contain/>
          <v-text-field class="rounded-lg mr-6"
                        background-color="white"
                        placeholder="تلفیق هنر"
                        v-model='site.aparat'
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>

      <div class="mt-10">

        <p class="tlf-subtitle">عکس نوار - page icon</p>
        <UploadComponent @addImage="addImage" />
      </div>

      <div class="map-container mt-10">
        <v-row>
          <v-col cols="3">
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
          </v-col>
        </v-row>
      </div>

      <div class="mt-10">
        <p class="tlf-subtitle">آدرس به صورت متنی</p>
        <v-text-field class="rounded-lg"
                      background-color="white"
                      placeholder="تلفیق هنر"
                      v-model='site.address'
                      solo
                      filled
                      dense
                      outlined/>
      </div>

      <div>
        <p class="tlf-subtitle">کد پستی</p>
        <v-text-field class="rounded-lg"
                      background-color="white"
                      placeholder="تلفیق هنر"
                      v-model='site.zipcode'
                      solo
                      filled
                      dense
                      outlined/>
      </div>

      <div>
        <p class="tlf-subtitle">توضیحات متا</p>
        <v-text-field class="rounded-lg"
                      background-color="white"
                      placeholder="تلفیق هنر"
                      v-model='site.meta_description'
                      solo
                      filled
                      dense
                      outlined/>
      </div>



      <div class="mt-10">
        <v-row>
          <v-col cols="3">
            <p class="tlf-subtitle">شماره فکس</p>
            <v-text-field class="rounded-lg"
                          background-color="white"
                          placeholder="تلفیق هنر"
                          v-model='site.fax'
                          solo
                          filled
                          dense
                          outlined/>
          </v-col>

          <v-col cols="3">
            <p class="tlf-subtitle">شماره تلفن</p>
            <v-text-field class="rounded-lg"
                          background-color="white"
                          placeholder="تلفیق هنر"
                          v-model='site.phone'
                          solo
                          filled
                          dense
                          outlined/>
          </v-col>

          <v-col cols="3">
            <p class="tlf-subtitle">شماره موبایل</p>
            <v-text-field class="rounded-lg"
                          background-color="white"
                          placeholder="تلفیق هنر"
                          v-model='site.mobile'
                          solo
                          filled
                          dense
                          outlined/>
          </v-col>
        </v-row>
      </div>

      <div>
        <v-row>
          <v-col cols="3">
            <p class="tlf-subtitle">ایمیل</p>
            <v-text-field class="rounded-lg"
                          background-color="white"
                          placeholder="تلفیق هنر"
                          v-model='site.email'
                          solo
                          filled
                          dense
                          outlined/>
          </v-col>
        </v-row>
      </div>

      <div class="text-left">
        <v-btn class="rounded-xl" @click="save" color="primary">ذخیره محتویات</v-btn>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SiteSetting } from '~/data/models/settings/site'
import { mapGetters } from 'vuex'
import VueToast from 'vue-toast-notification';
import UploadComponent from '~/components/UploadComponentBase64.vue';
Vue.use(VueToast);
export default Vue.extend({
  name: "Site",
    components:{
        UploadComponent
    },
    computed: {
        ...mapGetters({
            message: 'settings/site/message',


        })
    },
  data() {
    return {
        site: {
            id: Number,
            page_title: "" as string,
            instagram: "" as string,
            facebook: "" as string,
            whatsapp: "" as string,
            google_plus: "" as string,
            telegram: "" as string,
            aparat: "" as string,
            logo_menu: "" as string,
            latitude: 0 as number,
            longitude: 0 as number,
            address: "" as string ,
            zipcode: "" as string,
            meta_description: "" as string,
            fax: "" as string,
            phone: "" as string,
            mobile: "" as string,
            email: "" as string,
            created_at: "" as string,
            updated_at: "" as string
        },
        logo_menu:"",
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
    title: "تنظیمات سایت"
  },
    async fetch() {

        await this.$store.dispatch('settings/site/getSettings')
        let site = this.$store.getters['settings/site/getSiteSetting']

        this.site = {
            id: site.id,
            page_title: site.page_title,
            instagram: site.instagram,
            facebook: site.facebook,
            whatsapp: site.whatsapp,
            google_plus: site.google_plus,
            telegram: site.telegram,
            aparat: site.aparat,
            logo_menu: site.logo_menu,
            latitude: site.latitude,
            longitude: site.longitude,
            address: site.address,
            zipcode: site.zipcode,
            meta_description: site.meta_description,
            fax: site.fax,
            phone: site.phone,
            mobile: site.mobile,
            email: site.email,
            created_at: site.created_at,
            updated_at: site.updated_at
        }
        if(this.site.latitude && this.site.longitude) {
            this.mapOptions.selectedLocation = [this.site.latitude, this.site.longitude];
            this.mapOptions.default = [this.site.latitude, this.site.longitude];
            this.mapOptions.center = [this.site.latitude, this.site.longitude];
        }
    },
    watch:{
        message(old_value,new_value){

            this.$toast.open({
                message: 'settings updated successfully',
                type: 'success',
                position:'bottom-left'
                // all of other options may go here
            });

        },

    },
  methods: {
    setSelectedPosition(event: any) {
      this.mapOptions.selectedLocation = event.coordinate
        this.site.latitude = this.mapOptions.selectedLocation[0]
        this.site.longitude = this.mapOptions.selectedLocation[1]


    },

       save(){
          this.$store.dispatch('settings/site/setSettings', this.site)

      },
      addImage(base64: string){
        this.site.logo_menu = base64
      }
  },
})
</script>

<style scoped>
.tlf-title {
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
}

.tlf-subtitle {
  font-weight: 700;
  font-size: 0.9rem;
  color: white;
}

.map-container:hover {
  cursor: pointer;
}
</style>
