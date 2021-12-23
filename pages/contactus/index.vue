<template>
  <div>
    <TLFContainer>
              <span class='white--text' style='font-size: 1.6rem'
              >تماس باما</span>
    </TLFContainer>
    <div class='my-8'>
      <v-data-table
        class='px-5 py-5'
        hide-default-footer
        :items='contacts'
        hide-default-header
        :headers='headers'>
        <template #top='{ pagination, options, updateOptions }'>
          <v-row class='pa-md-0 pa-4'>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >

            </v-col>
            <v-col cols='12' lg='1' md='1'
            >

            </v-col
            >
            <v-col cols='12' lg='2' md='2'
            >

            </v-col
            >
            <v-col class='pa-0 pb-5' cols='12' lg='5' md='5'
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
        <template v-slot:item.fullname='{ item }'>
           <span
             class=''
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.fullname }}
           </span>
        </template>
        <template v-slot:item.mobile='{ item }'>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.mobile }}
           </span>
        </template>
        <template v-slot:item.subject='{ item }'>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.subject }}
           </span>
        </template>
<!--        <template v-slot:item.date='{ item }'>-->
<!--          <span-->
<!--            style='color: #197095; font-size: 1rem; font-weight: 500;'>-->
<!--             {{ item.created_at }}-->
<!--           </span>-->
<!--        </template>-->
        <template v-slot:item.actions='{ item }'>
          <div class='d-flex flex-row py-6'>
            <v-btn @click='showMessage(item.id)' fab x-small color='primary' elevation='0'
            >
              <v-icon>far fa-eye</v-icon>
            </v-btn
            >
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
      <template #actions>
        <v-btn @click='updateModal(false)' color='error'>
          بستن
        </v-btn>
      </template>
    </th-modal>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import { ContactUs } from '~/data/models/contactus'
import { find } from 'lodash'

export default Vue.extend({
  name: 'index',
  head(){
    return {
      title: 'تماس باما'
    }
  },
  components: { TLFContainer },
  data(){
    return {
      headers: [
        {
          text: '',
          value: 'fullname',
          width: '100px'
        },
        {
          text: '',
          value: 'mobile',
          width: '100px'
        },
        {
          text: '',
          value: 'subject',
          width: '100px'
        },
        {
          text: '',
          value: 'date',
          width: '100px'
        },
        {
          text: '',
          value: 'actions',
          width: '200px'
        }
      ],
      contacts: [] as ContactUs[],
      modal: {
        show: false,
        title: '',
        body: '',
      }
    }
  },
  created() {
    (this as any).$store.dispatch('contactus/setPages')
      .then((res: object) => {
        (this as any).contacts = res
    })
  },
  methods: {
    showMessage(id: number){
      let contact: ContactUs | any = find(this.contacts, {id: id});
      (this as any).modal.show = true;
      (this as any).modal.title = contact.fullname + ' (' +
        contact.subject + ') ';
      (this as any).modal.body = contact.message;
    },
    updateModal(value: any){
      this.modal.show = false
    }
  }
})
</script>

<style scoped lang='scss'>
.v-data-footer {
  border: none !important;
}
</style>
