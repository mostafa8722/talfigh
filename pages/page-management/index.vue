<template>
  <div>
    <v-row class='pa-md-10 pa-2'>
      <v-col cols='12' lg='3' md='3'>
        <span class='white--text' style='font-size: 1.6rem'
        >مدیریت صفحه‌ها</span
        >
      </v-col>
      <v-col cols='12' lg='3' md='3'
      >
        <v-btn
          @click='sendPage'
          :disabled='!save.title'
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
          v-model='save.title'
          outlined
          solo
          class='rounded-lg'
          placeholder='عنوان بلاگ'
        ></v-text-field>
      </v-col>
      <v-col cols='12'><span class='label'>محتوا مقاله</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <Editor @content='getContent' />
      </v-col>
      <v-col cols='12'><span class='label'>توضیحات متا</span></v-col>
      <v-col class='pt-0 pb-0' cols='12'>
        <v-text-field
          v-model='save.meta_description'
          outlined
          solo
          class='rounded-lg'
          placeholder='توضیحات متا'
        ></v-text-field>
      </v-col>
    </v-row>
    <div class='my-8'>
      <v-data-table hide-default-footer :items='pages' :headers='headers'>
        <template #top='{ pagination, options, updateOptions }'>
          <v-row class='pa-md-0 pa-4'>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو عنوان مقاله...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو دسته...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col cols='12' lg='1' md='1'
            >
              <v-btn class='white--text px-8 mt-2' rounded color='#7A7A7A'
              >جستجو
              </v-btn
              >
            </v-col
            >
            <v-col cols='12' lg='3' md='3'
            >

            </v-col
            >
            <v-col cols='12' lg='4' md='4'
            >
              <v-data-footer
                :pagination='pagination'
                :options='options'
                items-per-page-text='$vuetify.dataTable.itemsPerPageText'
                @update:options='updateOptions'
              />
            </v-col>
          </v-row>
          <v-divider />
        </template>
        <template v-slot:item.title='{ item }'>
           <span
             class=''
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.title }}
           </span>
        </template>
        <template v-slot:item.meta='{ item }'>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.meta_description }}
           </span>
        </template>
        <template v-slot:item.actions='{ item }'>
          <div class='d-flex flex-row py-6'>
            <v-btn @click='deletePage(item.id)' fab x-small color='error' elevation='0'
            >
              <v-icon>fas fa-trash-alt</v-icon>
            </v-btn
            >
            <nuxt-link :to='"page-management/" + item.id'>
              <v-btn
                fab x-small color='warning' class='mr-4'
                elevation='0'
              >
                <v-icon>fas fa-edit</v-icon>
              </v-btn
              >
            </nuxt-link>
          </div>
        </template>
      </v-data-table>
    </div>
    <th-modal @input='updateModal' :value='modal.show'>
      <template #title>
        {{ modal.title }}
      </template>
      <template #body>
        {{ modal.body }}
      </template>
      <template v-if='modalConfirm' #actions>
        <v-btn @click='deletePage(-1, true)' color='success'>
          بله
        </v-btn>
        <v-btn @click='deletePage(-1, false)' color='error'>
          خیر
        </v-btn>
      </template>
      <template v-else #actions>
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
  components: { Modal, Editor },
  data() {
    return {
      headers: [
        {
          text: '',
          value: 'title',
          width: '100px'
        },
        {
          text: '',
          value: 'meta',
          width: '100px'
        },
        { text: '', value: 'actions', width: '200px' }
      ],
      save: {
        title: '',
        description: '',
        meta_description: ''
      },
      rules: {
        required: (value: string) => !!value || 'این فیلد الزامی می باشد'
      },
      modalConfirm: false,
      lastId: null
    }
  },
  methods: {
    getContent(value: any) {
      (this as any).save.description = value
    },
    sendPage() {
      this.$store.dispatch('pages/setPages', (this as any).save).then(()=>{
        this.$store.dispatch('pages/getPages');
        (this as any).save = {
          title: '',
          description: '',
          meta_description: ''
        };
      })
    },
    confirmModal() {
      this.$store.commit('pages/SET_MODAL', {
        show: false,
        title: '',
        body: '',
        action: ''
      })
    },
    deletePage(id: number, confirm: boolean = false) {
      if (id === -1) {
        if (confirm) {
          (this as any).modalConfirm = false;
          (this as any).modal = {
            show: false,
            title: '',
            body: '',
            action: ''
          }
          this.$store.dispatch('pages/deletePage', (this as any).lastId).then(()=>{
            this.$store.dispatch('pages/getPages');
          });
          (this as any).lastId = null
        } else {
          (this as any).modalConfirm = false;
          (this as any).modal = {
            show: false,
            title: '',
            body: '',
            action: ''
          };
          (this as any).lastId = null
        }
      } else {
        (this as any).modalConfirm = true;
        (this as any).lastId = id;
        (this as any).modal = {
          show: true,
          title: 'حذف صفحه',
          body: 'آیا مطمئن از حذف این صفحه هستید؟',
          action: ''
        }
      }
    },
    updateModal(value: any){
      (this as any).modal = {
        show: value,
        title: '',
        body: '',
        action: ''
      }
    }
  },
  computed: {
    pages: {
      get() {
        return (this as any).$store.getters['pages/lists']
      }
    },
    modal: {
      get() {
        return (this as any).$store.getters['pages/getModal']
      },
      set(value) {
        (this as any).$store.commit('pages/SET_MODAL', value)
      }
    }
  },
  head: {
    title: 'مدیریت صفحه‌ها'
  },
  mounted() {
    this.$store.dispatch('pages/getPages')
  }
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
