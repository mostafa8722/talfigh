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
                        solo
                        filled
                        hide-details
                        dense
                        outlined/>
        </v-col>
      </v-row>

      <div class="mt-10">
        <p class="tlf-subtitle">عکس نوار - page icon</p>
        <v-row class="align-end">
          <v-col cols="3">
            <v-btn color="primary" rounded>
              آپلود عکس بزرگ بالا
            </v-btn>
          </v-col>

          <v-col cols="2">
            <v-img src="~/static/images/logo.png"/>
          </v-col>
        </v-row>
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
                          solo
                          filled
                          dense
                          outlined/>
          </v-col>
        </v-row>
      </div>

      <div class="text-left">
        <v-btn class="rounded-xl" color="primary">ذخیره محتویات</v-btn>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "Site",
  data() {
    return {
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
  methods: {
    setSelectedPosition(event: any) {
      this.mapOptions.selectedLocation = event.coordinate
    },
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
