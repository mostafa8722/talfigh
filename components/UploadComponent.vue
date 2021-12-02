<template>
  <div>
    <v-snackbar v-model="oops" timeout="2000" color="error" top outlined>
      بارگذاری ناموفق بود!
    </v-snackbar>

    <v-file-input
      ref="files"
      v-model="files"
      label="بارگذاری فایل"
      counter
      outlined
      multiple
      show-size
      prepend-icon="fas fa-paperclip"
      :disabled="isUploading"
      @change="updateFiles"
    >
      <template #selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    <v-btn
      class="white--text"
      color="blue"
      block
      elevation="2"
      :disabled="isUploading || !files.length"
      @click="submitFilesByOne()"
    >
      <v-icon>fas fa-upload</v-icon>&nbsp; بارگذاری
    </v-btn>
    <br />
    <v-card flat>
      <div v-for="file of fileInfo" :key="file.id">
        <v-chip
          class="mb-1 mt-2"
          color="blue darken-2"
          text-color="white"
          label
          small
        >
          <v-icon small left> mdi-paperclip </v-icon>
          {{ file.name }}
        </v-chip>
      </div>
      <v-progress-linear
        v-if="fileInfo.length"
        v-model="fileInfo[0].uploadPercentage"
        class="mt-2 rounded-xl"
        :color="fileInfo[0].uploadPercentage == 100 ? 'green' : 'blue'"
        height="19"
        dark
      >
        <strong
          >{{ fileInfo[0].uploadPercentage }}
          {{ fileInfo[0].uploadPercentage ? '%' : '' }}</strong
        >
      </v-progress-linear>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      files: [],
      fileInfo: [],
      uploadPercentage: [],
      isUploading: false,
      oops: false
    }
  },
  computed: {},
  methods: {
    updateFiles() {
      this.fileInfo = []
      for (const file of this.files) {
        const ITEM = { name: file.name, size: file.size, uploadPercentage: 0 }
        this.fileInfo.push(ITEM)
      }
    },
    async submitFilesByOne() {
      let i = 0
      this.isUploading = true
      const formData = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        formData.append(`image${i + 1}`, file)
      }
      try {
        const onUploadProgress = (event) => {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          )
          this.fileInfo[i].uploadPercentage = percentCompleted
        }

        await axios.post(
          'https://p.forghoon.co/api/v1/images/upload/multiple',
          formData,
          { onUploadProgress }
        )
      } catch (error) {
        this.fileInfo[i].uploadPercentage = 0
        this.oops = true
      }
      i++

      this.isUploading = false
    }
  }
}
</script>
