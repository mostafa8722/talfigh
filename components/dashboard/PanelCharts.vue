<template>
    <v-row class=''>
      <v-col cols='12' lg='6'>
        <v-card height='100%' style='row-gap: 2rem' class='d-flex flex-column py-3 px-5' rounded>
          <div style='column-gap: 1rem' class='d-flex align-center'>
            <img src='~/static/icons/branch.svg' alt=''>
            <span style='font-weight: 400'>تعداد افراد زیر دستی شما</span>
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
            <span style='font-weight: 400'>میزان پاداش شما 50000</span>
          </div>
          <div>
            <LineChart :styles='TLFStyle' :options='options' :chart-data='collection' />
          </div>
        </v-card>
      </v-col>
      <v-col cols='12' lg='6'>
        <v-container class='pa-0' fluid>
          <v-card style='position: relative; overflow: hidden'
                  class='pr-5 pr-md-10 pl-5 pl-md-0 py-9'>
            <div class='width-response'>
              <div class='d-flex'>
                <div class='bold'> پاداش و کسر</div>
                <div class='mr-auto read'>خواندن همه</div>
              </div>
              <v-divider class='my-3'></v-divider>
              <div class='d-flex mb-2'>
                <div class='my-auto ml-2'>
                  <v-icon small color='success'>fas fa-circle</v-icon>
                  <span class='mx-1'>123</span></div>
                <div class='my-auto titl'>پاداش شما</div>
                <v-btn class='mr-auto' small rounded color='success'>خواندن پیام</v-btn>
              </div>
              <div class='d-flex '>
                <div class='my-auto ml-2'>
                  <v-icon small color='success'>fas fa-circle</v-icon>
                  <span class='mx-1'>5412</span></div>
                <div class='my-auto titl'>کسر بدهی شما</div>
                <v-btn class='mr-auto' small rounded color='success'>خواندن پیام</v-btn>
              </div>
            </div>
            <v-icon color='#C9FEE3'
                    size='150'
                    class='d-none d-lg-inline-block'
                    style='position: absolute; bottom: 0;left: 0; top: 0'>
              fa-dollar-sign
            </v-icon>
          </v-card>
          <v-card style='position: relative; overflow: hidden'
                  class='pr-5 pr-md-10 pl-5 pl-md-0 py-9 mt-2'>
            <div class='width-response'>
              <div class='d-flex'>
                <div class='bold'> پیام های شما</div>
                <div class='mr-auto read'>خواندن همه</div>
              </div>
              <v-divider class='my-3'></v-divider>
              <div class='d-flex mb-2'>
                <div class='my-auto ml-2'>
                  <v-icon small color='error'>fas fa-circle</v-icon>
                  <span class='mx-1'>123</span></div>
                <div class='my-auto titl'>پاداش شما</div>
                <v-btn class='mr-auto' small rounded color='primary'>خواندن پیام</v-btn>
              </div>
              <div class='d-flex '>
                <div class='my-auto ml-2'>
                  <v-icon small color='error'>fas fa-circle</v-icon>
                  <span class='mx-1'>5412</span></div>
                <div class='my-auto titl'>کسر بدهی شما</div>
                <v-btn class='mr-auto' small rounded color='primary'>خواندن پیام</v-btn>
              </div>
              <v-icon color='#FFE7D1'
                      size='150'
                      class='d-none d-lg-inline-block'
                      style='position: absolute; bottom: 0;left: -15px; top: 0'>
                fa-envelope
              </v-icon>
            </div>
          </v-card>
        </v-container>
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
</template>

<script lang='ts'>
import Vue from 'vue'
import LineChart from '~/components/utilities/charts/LineChart.vue'

export default Vue.extend({
  name: 'PanelCharts',
  components: { LineChart },
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
    }
  }
})
</script>
<style lang='scss' scoped>
.read {
  margin-top: auto;
  margin-left: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 17px;
  color: #A2A2A2;

}

.width-response{
  width: 70%;
  @media screen and (max-width: 600px){
    width: 100%;
  }
}

.titl {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 223.02%;
  /* or 27px */

  text-align: right;

  color: #404040;

}
</style>
