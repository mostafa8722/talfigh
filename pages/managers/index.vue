<template>
  <div>
    <TLFContainer>
      <managers-component></managers-component>
    </TLFContainer>
<!--    <ManagersTableBox/>-->
    <div class=''>
      <v-data-table class='px-5 py-5'
                    hide-default-footer :items='items'
                    hide-default-header :headers='headers'>
        <template #top='{ pagination, options, updateOptions }'>
          <v-row class='pa-md-0 pa-4'>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو مدیر...'
                rounded
              ></v-text-field
              >
            </v-col>
            <v-col class='pt-1' cols='12' lg='2' md='2'
            >
              <v-text-field
                height='40'
                background-color='#FBFBFB'
                placeholder='جستجو با شماره کد ملی...'
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
            <v-spacer></v-spacer>
            <v-col style='justify-self: flex-end' cols='12' lg='4' md='4'
            >
              <v-data-footer
                :pagination='pagination'
                :options='options'
                items-per-page-text='$vuetify.dataTable.itemsPerPageText'
                @update:options='updateOptions'
              />
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.fullName='{ item }'>
           <span
             class=''
             style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.fullName }}
           </span>
        </template>
        <template v-slot:item.nationalCode='{ item }'>
                            <span
                              style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          به شماره ملی:
        </span>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.nationalCode }}
           </span>
        </template>
        <template v-slot:item.date='{ item }'>
                  <span
                    style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          عضویت:
        </span>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.date }}
           </span>
        </template>
        <template v-slot:item.mobile='{ item }'>
                  <span
                    style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          موبایل:
        </span>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.mobile }}
           </span>
        </template>
        <template v-slot:item.role='{ item }'>
                  <span
                    style='color: #848484;
               font-size: 1rem;
               font-weight: 500;'>
          نقش:
        </span>
          <span
            style='color: #197095; font-size: 1rem; font-weight: 500;'>
             {{ item.type }}
           </span>
        </template>
        <template v-slot:item.actions='{item}'>
          <div class='d-flex py-6 align-center' style='column-gap: 0.5rem'>
            <v-btn width='125' height='25' v-if='item.status === 0' rounded elevation='0' color='error'>
              <v-icon color='#fff' size='15'>fa-trash-alt</v-icon>
              <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>بلاک مدیر</span>
            </v-btn>
            <v-btn width='125' height='25' v-else rounded elevation='0' color='success'>
              <v-icon color='#fff' size='15'>fa-check</v-icon>
              <span style='color: white;
               font-size: 0.8rem;
               font-weight: 300;' class='mr-1'>فعال سازی</span>
            </v-btn>
            <v-btn x-small fab elevation='0' color='warning'>
              <v-icon color='#fff' size='15'>fa-edit</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ManagersComponent from '~/components/managers/ManagersComponent.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import ManagersTableBox from '~/components/managers/ManagersTableBox.vue'

export default Vue.extend({
  components: { ManagersTableBox, TLFContainer, ManagersComponent },
  data() {
    return {
      items: [
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'مدیرعامل',
          status: 0,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'مدیرعامل',
          status: 1,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'مدیرعامل',
          status: 1,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'مدیرعامل',
          status: 0,
        },
        {
          id:1,
          fullName: 'الیاس ملکپور',
          nationalCode: '25616161',
          date: '1370/10/10',
          mobile: '09356665165',
          type: 'مدیرعامل',
          status: 1,
        },
      ],
      headers: [
        {
          text: '',
          value: 'fullName',
          width: '100px'
        },
        {
          text: '',
          value: 'nationalCode',
          width: '100px'
        },
        {
          text: '',
          value: 'date',
          width: '100px'
        },
        {
          text: '',
          value: 'mobile',
          width: '200px'
        },
        {
          text: '',
          value: 'role',
          width: '100'
        },
        {
          text: '',
          value: 'actions',
          width: '200'
        },
      ],
    }
  },
  head: {
    title: "مدیرها"
  },
})
</script>

<style scoped lang='scss'>
#list-title {
  font-weight: 500;
  font-size: 26px;
  line-height: 37px;
  /* identical to box height */
  color: #FFFFFF;
}

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
