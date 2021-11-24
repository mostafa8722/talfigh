<template>
  <div class="pa-md-10 pa-4">
    <span class="white--text" style="font-size: 1.6rem"
      >اطلاعات پایه و ویرایش</span
    >
    <v-card class="rounded-xl mt-6 mt-md-12 pa-6 pa-md-12 pb-md-16">
      <v-row>
        <v-col cols="12" lg="3" md="3">
          <div class="d-flex flex-column">
            <div class="mb-2 mr-2">نام</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام"
              outlined
            ></v-text-field>
            <div class="mb-2 mr-2">نام کاربری</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام کاربری"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">موبایل اول</div>
            <v-text-field
              class="rounded-lg"
              placeholder="موبایل اول"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">موبایل دوم</div>
            <v-text-field
              class="rounded-lg"
              placeholder="موبایل دوم"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">آدرس</div>
            <v-text-field
              class="rounded-lg"
              placeholder="آدرس"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">تاریخ تولد</div>
            <v-text-field
              class="rounded-lg"
              placeholder="تاریخ تولد"
              outlined
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" lg="3" md="3"
          ><div class="d-flex flex-column">
            <div class="mb-2 mr-2">نام خانوادگی</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام خانوادگی"
              outlined
            ></v-text-field>
            <div class="mb-2 mr-2">نام نمایشی</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام نمایشی"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">ایمیل</div>
            <v-text-field
              class="rounded-lg"
              placeholder="ایمیل"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">کد ملی</div>
            <v-text-field
              class="rounded-lg"
              placeholder="کد ملی"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">نام پدر</div>
            <v-text-field
              class="rounded-lg"
              placeholder="نام پدر"
              outlined
            ></v-text-field>

            <div class="mb-2 mr-2">شماره تلفن ثابت</div>
            <v-text-field
              class="rounded-lg"
              placeholder="شماره تلفن ثابت"
              outlined
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" lg="3" md="3">
          <v-radio-group v-model="isLegal">
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
        <v-btn class="px-10" rounded outlined color="success"
          >ذخیره اطلاعات</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BasicInformation',
  data() {
    return {
      isLegal: false,
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

<style lang="scss" scoped>
.map-container:hover {
  cursor: pointer;
}
</style>
