import Vue from 'vue'
import Modal from '~/components/Modal.vue'
import UploadComponent from '~/components/UploadComponent.vue'
import UploadComponentBase64 from '~/components/UploadComponentBase64.vue'

Vue.component('th-modal', Modal)
Vue.component('th-upload', UploadComponent)
Vue.component('th-upload-base64', UploadComponentBase64)
