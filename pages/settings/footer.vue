<template>
  <div class="pa-10">
    <v-row>
      <v-col cols="12" lg="3" md="3">
        <span class="white--text" style="font-size: 1.6rem"
          >تنظیمات پاورقی</span
        >
      </v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn @click="saveSettings" class="px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
      <v-col cols="12" lg="6" md="6"></v-col>
     
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12"
        ></v-col
      >
      <v-col cols="12" lg="3" md="3"
        ><span class="label">بخش دوم انتخاب عنوان</span></v-col
      >
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-text-field
          v-model="footerSettings.title2"
          outlined
          solo
          height="41px"
          class="rounded-lg"
          placeholder="بخش دوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><span class="label">بخش دوم انتخاب دسته برای نمایش مطالب</span></v-col
      >
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-text-field
          outlined
          solo
          class="rounded-xl pb-0"
          hide-details
          append-icon="fas fa-search"
          placeholder="جستجو"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="4" md="4">
        <v-chip-group class="mt-4">
          <v-chip
            v-for="(cat, index) in footerSettings.category"
            :key="index"
            color="#F2994A"
            text-color="black"
            close
            close-icon="fas fa-times-circle"
          >
            {{ cat.category_id }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3">
        <span class="label">بخش سوم انتخاب عنوان</span>
      </v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0"
          hide-details
          v-model="footerSettings.title3"
          placeholder="بخش سوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4"
        ><v-textarea
          outlined
          solo
          v-model="footerSettings.description3"
          class="rounded-lg"
          placeholder="متن بخش سوم از راست"
        ></v-textarea
      ></v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="3" md="3">
        <span class="label">بخش سوم انتخاب عنوان</span>
      </v-col>
      <v-col cols="12" lg="8" md="8"></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه آبی بالا</span>
        <v-text-field
          v-model="footerSettings.button_text1"
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="متن و بالای صفحه"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه آبی بالا</span>

        <v-text-field
          outlined
          solo
          v-model="footerSettings.button_link1"
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          placeholder="بخش سوم انتخاب عنوان"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="3" md="3"></v-col>

      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">متن دکمه سفید پایین</span>

        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          v-model="footerSettings.button_text2"
          placeholder="متن دکمه سفید پایین"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">لینک دکمه سفید پایین</span>

        <v-text-field
          outlined
          solo
          height="41px"
          class="rounded-lg pb-0 mt-2"
          hide-details
          v-model="footerSettings.button_link2"
          placeholder="لینک دکمه سفید پایین"
        ></v-text-field
      ></v-col>
      <v-col cols="12" lg="3" md="3"></v-col>
      <v-col cols="12" lg="4" md="4">
        <span class="label mr-1">آپلود عکس بزرگ بالا</span></v-col
      >
      <v-col cols="12" lg="6" md="6"></v-col>
      <v-col cols="12" lg="3" md="3">
        <v-file-input
          truncate-length="30"
          label="آپلود عکس بزرگ بالا"
          dark
          filled
          background-color="primary"
          prepend-icon=""
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          v-model="fileHandler"
          class="px-10 rounded-xl"
        ></v-file-input>
      </v-col>
      <v-col cols="12" lg="3" md="3">
        <v-btn
          v-if="!!fileUrl"
          @click="clearImage"
          color="primary"
          fab
          small
          dark
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-img
          ref="imageRef"
          max-height="150"
          max-width="250"
          :src="fileUrl"
        ></v-img>
      </v-col>
      <v-col cols="12" lg="9" md="9"></v-col>
      <v-col cols="12" lg="3" md="3"
        ><v-btn @click="saveSettings" class="px-10 rounded-xl" color="primary"
          >ذخیره محتویات</v-btn
        ></v-col
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { Footer } from '~/data/models/settings/footer'

function blobToDataURL(
  file: File,
  callback: (dataUrl: string | ArrayBuffer | null) => void
) {
  // const blob = URL.createObjectURL(file)
  const a = new FileReader()
  a.onload = (e) => {
    callback(e.target && e.target.result)
  }
  a.readAsDataURL(file)
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

function getBase64RemoteImage(
  axios: NuxtAxiosInstance,
  imgUrl: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/' + imgUrl,
      responseType: 'blob',
    })
      .then(({ data }) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          if (reader.result instanceof ArrayBuffer)
            resolve(arrayBufferToBase64(reader.result))
          else resolve(reader.result!)
        }

        reader.onerror = (err) => {
          reject(err)
        }

        reader.abort = () => {
          reject(new Error('operation aborded'))
        }

        reader.readAsDataURL(data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      fileHandler: null as null | File,
      fileUrl: '' as string,
      serverMessage: '',
      footerSettings: {
        title1: '',
        title2: '',
        title3: '',
        description3: '',
        button_text1: '',
        button_link1: '',
        button_text2: '',
        button_link2: '',
        category: [],
        footer_logo: '',
      } as Footer['data'],
    }
  },

  async fetch() {
    await this.$store.dispatch('settings/footer/getSettings')
    const fs = this.$store.getters['settings/footer/GET_SETTINGS'] as Footer

    Object.assign(this.footerSettings, cloneDeep(fs.data))

    this.fileUrl = this.footerSettings.footer_logo || ''

    if (fs.message) 
    {
      this.$toast.success(fs.message)
    }
  },
  watch: {
    fileHandler(newVal: null | File) {
      if (newVal instanceof File) this.fileUrl = URL.createObjectURL(newVal)
      else this.fileUrl = ''
    },
    fileUrl(nval: string) {
      // it should determine what to do with this.footerSettings.footer_logo
      if (!nval) {
        this.footerSettings.footer_logo = ''
        return
      }

      if (nval.split(':')[0] === 'blob') {
        blobToDataURL(this.fileHandler!, (res) => {
          if (!res) {
            this.footerSettings.footer_logo = ''
            return
          }

          if (typeof res === 'string') this.footerSettings.footer_logo = res
          else this.footerSettings.footer_logo = arrayBufferToBase64(res)
        })
      } else {
        getBase64RemoteImage(this.$axios, nval)
          .then((e) => {
            this.footerSettings.footer_logo = e
          })
          .catch((error) => {
            if (this.fileUrl !== '') console.error(error)

            this.footerSettings.footer_logo = ''
          })
      }
    },
  },

  fetchOnServer: false,
  methods: {
    clearImage() {
      this.fileHandler = null
      this.fileUrl = ''
    },
    async saveSettings() {
      await this.$store.dispatch(
        'settings/footer/setSettings',
        cloneDeep(this.footerSettings)
      )

      const res = this.$store.getters['settings/footer/GET_RES'] as Footer

      if (res.message) 
      {
        this.$toast.success(res.message)
      }

      this.clearImage()

      this.$fetch()
    },
  },
  head: {
    title: 'تنظیمات پاورقی',
  },
})
</script>

<style lang="scss" scoped>
.box {
  outline: 2px solid #efefef;
  background-color: #9f9f9f;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
}
.label {
  font-size: 0.9rem;
  color: #fff;
}
</style>
