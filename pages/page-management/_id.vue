<template>
  <div>
    <v-row class='pa-md-10 pa-2'>
      <v-col cols='12' lg='3' md='3'>
        <span class='white--text' style='font-size: 1.6rem'
        >ویرایش صفحه‌</span
        >
      </v-col>
      <v-col cols='12' lg='3' md='3'
      >
        <v-btn
          @click='sendPage'
          :disabled='!title'
          class='button px-10 rounded-xl'
          color='primary'
        >ذخیره محتویات
        </v-btn
        >
      </v-col
      >
      <v-col class='mt-4' cols='12'
      ><span class='label'>عنوان بلاگ</span></v-col
      >
      <v-col class='pt-0 pb-0' cols='12' lg='4' md='4'>
        <v-text-field
          :rules='[rules.required]'
          v-model='title'
          outlined
          solo
          class='rounded-lg'
          placeholder='عنوان بلاگ'
        ></v-text-field>
      </v-col>
      <v-col cols='12'><span class='label'>محتوا مقاله</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <Editor :value='description' @content='getContent' />
      </v-col>
      <v-col cols='12'><span class='label'>توضیحات متا</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          outlined
          solo
          v-model='meta_description'
          class='rounded-lg'
          placeholder='توضیحات متا'
        ></v-text-field>
      </v-col>
    </v-row>
    <th-modal v-model='modal.show'>
      <template #title>
        {{ modal.title }}
      </template>
      <template #body>
        {{modal.body}}
      </template>
      <template #actions>
        <v-btn @click='confirmModal' :color='modal.action'>
          باشه
        </v-btn>
      </template>
    </th-modal>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Editor from '~/components/Editor.vue'
import Modal from '~/components/Modal.vue'

export default Vue.extend({
  name: 'PageManagement',
  head: {
    title: 'ویرایش صفحه'
  },
  data(){
    return{
      rules: {
        required: (value: string) => !!value || 'این فیلد الزامی می باشد'
      },
    }
  },
  components: { Modal, Editor },
  methods: {
    getContent(value: any) {
      (this as any).description = value
    },
    sendPage(){
      this.$store.commit('pages/SET_INFO_UPDATE', {
        title: (this as any).title,
        description: (this as any).description,
        meta_description: (this as any).meta_description,
      });
      (this as any).$store.dispatch('pages/updatePage', (this as any).$route.params.id)
    },
    confirmModal(){
      (this as any).$store.commit('pages/SET_MODAL', {
        show: false,
        title: '',
        body: '',
        action: ''
      })
    }
  },
  computed: {
    title: {
        get(){
          return (this as any).$store.getters['pages/getTitle']
        },
        set(value){
          (this as any).$store.commit('pages/SET_TITLE', value)
        }
    },
    description: {
      get(){
        return (this as any).$store.getters['pages/getDescription']
      },
      set(value){
        (this as any).$store.commit('pages/SET_DESCRIPTION', value)
      }
    },
    meta_description: {
      get(){
        return (this as any).$store.getters['pages/getMetaDescription']
      },
      set(value){
        (this as any).$store.commit('pages/SET_META_DESCRIPTION', value)
      }
    },
    modal: {
      get(){
        return (this as any).$store.getters['pages/getModal']
      }
    }
  },
  mounted() {
    (this as any).$store.dispatch('pages/getPage', this.$route.params.id)
  },
})
</script>
<style lang='scss' scoped>
@media screen and (max-width: 800px) {
  .image {
    margin-right: 5% !important;
  }
}

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

.button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}

.image {
  width: 101px;
  height: 70px;
  margin-right: 10%;
  border-radius: 80px;
}

.add {
  &:hover {
    cursor: pointer;
  }
}

.v-data-footer {
  border: none !important;
}
</style>
