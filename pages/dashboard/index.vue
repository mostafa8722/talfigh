<template>
  <TLFContainer style='width: 100%'>
    <v-row>
      <v-col cols='12' md='5' lg='3'>
        <v-card class='py-3 px-5' rounded>
          <div style='width: 100%; column-gap: 1rem' class='d-flex align-center justify-center'>
            <v-icon size='30' color='primary'>fa-check-circle</v-icon>
            <span style='font-weight: 400'>کاربر ملکپور خوش آمدین</span>
          </div>
        </v-card>
      </v-col>
      <v-col cols='12' md='6' lg='4'>
        <v-card class='py-3 px-5' rounded>
          <div style='width: 100%; column-gap: 1rem' class='d-flex align-center justify-center'>
            <v-icon size='30' color='primary'>fa-user-check</v-icon>
            <span style='font-weight: 400'>
              نقش شما مدیر شرکت تلفیق هنر است
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class='mt-10'>
      <v-col class='mr-lg-16' cols='12' lg='3'>
        <div
          style='border-bottom-right-radius: 90px;
            position: relative;
            border-top-left-radius: 90px'
          class='white pt-5 d-flex flex-column align-center'>
          <v-icon
            class='d-none d-lg-inline-block' style='position: absolute; bottom: 0; right: -65px'
                  size='100' color='warning'>fa-user-check
          </v-icon>
          <span class='' style='font-weight: bold'>کاربر قدیمی وارد شده</span>
          <div
            class='align-self-end mt-2 py-1 px-5'
            style='background-color: #2D9DCD; border-top-left-radius: 50px;
              border-top-right-radius: 50px; border-bottom-right-radius: 50px'>
            <span style='font-weight: bold; color: white; font-size: 20px'>55524</span>
          </div>
        </div>
      </v-col>
      <v-col class='mr-lg-10' cols='12' lg='3'>
        <div
          style='border-bottom-right-radius: 90px;
            position: relative;
            border-top-left-radius: 90px'
          class='white pt-5 d-flex flex-column align-center'>
          <v-icon class='d-none d-lg-inline-block'
                  style='position: absolute; bottom: 0; right: -30px'
                  size='100' color='warning'>fab fa-accessible-icon
          </v-icon>
          <span class='' style='font-weight: bold'>کاربر قدیمی وارد شده</span>
          <div
            class='align-self-end mt-2 py-1 px-5'
            style='background-color: #2D9DCD; border-top-left-radius: 50px;
              border-top-right-radius: 50px; border-bottom-right-radius: 50px'>
            <span style='font-weight: bold; color: white; font-size: 20px'>55524</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class='mt-10'>
      <v-col cols='12' lg='6'>
        <v-card height='100%' style='row-gap: 2rem' class='d-flex flex-column py-3 px-5' rounded>
          <div style='column-gap: 1rem' class='d-flex align-center'>
            <img src='~/static/icons/branch.svg' alt=''>
            <span style='font-weight: 400'>تعداد افراد کل درخت</span>
          </div>
          <div>
            <LineChart :styles='TLFStyle' :options='options' :chart-data='collection' />
          </div>
        </v-card>
      </v-col>
      <v-col cols='12' lg='6'>
        <v-card height='100%' style='row-gap: 2rem' class='d-flex flex-column py-3 px-5' rounded>
          <div style='column-gap: 1rem; row-gap: 0.5rem' class='d-flex flex-wrap align-center'>
            <img src='~/static/icons/money.svg' alt=''>
            <span style='font-weight: 400'>صندوق شرکت</span>
            <div style='column-gap: 1rem' class='d-flex justify-center align-center'>
              <span style='font-weight: bold'>فروش کامل</span>
              <span style='font-weight: bold'>+</span>
              <span style='font-weight: bold'>فروش نقد</span>
              <span style='font-weight: bold'>60 به 60</span>
            </div>
          </div>
          <div>
            <LineChart :styles='TLFStyle' :options='options' :chart-data='collection' />
          </div>
        </v-card>
      </v-col>
      <v-col cols='12' lg='6'>
        <v-card height='100%'
                style='row-gap: 2rem; position: relative; overflow: hidden'
                class='d-flex flex-column py-3 px-5' rounded>
          <div style='row-gap: 1rem' class='d-flex flex-column width-response'>
            <div class='d-flex align-center justify-space-between'>
              <div style='column-gap: 1rem' class='align-center'>
                <span style='font-weight: 400'>پیام های پشتیبانی</span>
                <v-badge
                  inline
                  content='1'
                ></v-badge>
              </div>
              <span style='font-weight: bold; color: #A1A1A1; font-size: 10px'>خواندن همه</span>
            </div>
            <v-divider style='width: 70%'></v-divider>
            <div style='row-gap: 0.1rem' class='d-flex flex-column'>
              <div
                v-for='message in messages'
                :key='message.id'
                style='width: 100%' class='d-flex align-start justify-space-between'>
                <div style='column-gap: 0.5rem' class='align-start d-flex'>
                  <v-badge
                    v-if='!message.isShow'
                    inline
                    dot
                  ></v-badge>
                  <v-badge
                    v-else
                    style='visibility: hidden'
                    inline
                    dot
                  ></v-badge>
                  <p v-if='message.isShow'
                     style='font-weight: 400; font-size: 12px; color: #CACACA'>
                    پاداش شما قبل از معد واریز شده است پس لطفا ...
                  </p>
                  <p v-else
                     style='font-weight: 400; font-size: 12px'>
                    پاداش شما قبل از معد واریز شده است پس لطفا ...
                  </p>
                </div>
                <v-btn
                  v-if='message.isShow'
                  small
                  rounded
                  color='#B9B9B9'>
                  <span style='color: white'>خوانده شده</span>
                </v-btn>
                <v-btn v-else small rounded color='primary'>خواندن پیام</v-btn>
              </div>
            </div>
          </div>
          <v-icon color='#C5EDFF'
                  size='125'
                  class='d-none d-lg-inline-block'
                  style='position: absolute; bottom: -5px;left: -15px'>
            fa-user-edit
          </v-icon>
        </v-card>
      </v-col>
      <v-col cols='12' lg='6'>
        <v-card height='100%' style='row-gap: 2rem' class='d-flex flex-column py-3 px-5' rounded>
          <div style='column-gap: 1rem' class='d-flex align-center'>
            <v-icon color='primary' size='30'>fa-user-check</v-icon>
            <span style='font-weight: 400'>تعداد کاربران کل 20503</span>
          </div>
          <div>
            <LineChart :styles='TLFStyle' :options='options' :chart-data='collection' />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </TLFContainer>
</template>

<script lang='ts'>
import Vue from 'vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import LineChart from '~/components/utilities/charts/LineChart.vue'

export default Vue.extend({
  name: 'index',
  components: { LineChart, TLFContainer },
  data() {
    return {
      collection: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true,
            }
          }],
        }
      },
      TLFStyle: {
          height: '300px'
      },
      messages: [
        {id: 1,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: false},
        {id: 2,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: true},
        {id: 3,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: false},
        {id: 4,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: false},
        {id: 5,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: true},
        {id: 6,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: true},
        {id: 7,content:'پاداش شما قبل از معد واریز شده است پس لطفا ...', isShow: false},
      ]
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.collection = {
        labels: ['azar', 'khordad', 'tir'],
        datasets: [
          {
            label: 'Visitors',
            borderColor: '#2D9DCD',
            borderWidth: '1',
            backgroundColor: '#cfeaf5',
            data: [1, 2, 3]
          }, {
            label: 'Returning Visitors',
            borderColor: '#FF5C5C',
            borderWidth: '1',
            backgroundColor: '#efd1d1',
            data: [10, 3, 5]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
})
</script>

<style scoped lang='scss'>
.width-response{
  width: 80%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
}
</style>
