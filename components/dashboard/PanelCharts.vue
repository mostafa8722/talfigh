<template>

  <v-container class='px-8' fluid>
    <v-row class='flex-row-reverse'>
      <v-col v-for='(chart,i) in charts' :key='i' cols='6'>
        <v-card>
          <div class='d-flex pa-2'>

            <v-img :src='`images/panel/${chart.icon}.png`' height='27.5px' max-width='39px'></v-img>
            <div class='mr-2'>{{ chart.title }}</div>
          </div>

          <v-img src='images/panel/chart.png'></v-img>

        </v-card>
      </v-col>
      <v-col>
        <v-container class='py-0' fluid>
          <v-card class='pr-10 py-9 pl-16'>
            <div class='d-flex'>
              <div class='bold'> پاداش و کسر</div>
              <div class='mr-auto read'>خواندن همه</div>
            </div>
            <v-divider class='my-3'></v-divider>
            <div class='d-flex mb-2'>
              <div class='my-auto ml-2'>
                <v-icon color='#00BB5A'>fas fa-circle</v-icon>
                <span class='mx-1'>123</span></div>
              <div class='my-auto titl'>پاداش شما</div>
              <v-btn class='mr-auto' color='#00BB5A' depressed rounded style='color: white'>خواندن پیام</v-btn>
            </div>

            <div class='d-flex '>
              <div class='my-auto ml-2'>
                <v-icon color='#00BB5A'>fas fa-circle</v-icon>
                <span class='mx-1'>5412</span></div>
              <div class='my-auto titl'>کسر بدهی شما</div>
              <v-btn class='mr-auto' color='#00BB5A' depressed rounded style='color: white'>خواندن پیام</v-btn>
            </div>
          </v-card>
          <v-card class='pr-10 py-9 pl-16 mt-2'>
            <div class='d-flex'>
              <div class='bold'> پیام های شما</div>
              <div class='mr-auto read'>خواندن همه</div>
            </div>
            <v-divider class='my-3'></v-divider>
            <div class='d-flex mb-2'>
              <div class='my-auto ml-2'>
                <v-icon color='red'>fas fa-circle</v-icon>
                <span class='mx-1'>123</span></div>
              <div class='my-auto titl'>پاداش شما</div>
              <v-btn class='mr-auto' color='primary' depressed rounded>خواندن پیام</v-btn>
            </div>

            <div class='d-flex '>
              <div class='my-auto ml-2'>
                <v-icon color='red'>fas fa-circle</v-icon>
                <span class='mx-1'>5412</span></div>
              <div class='my-auto titl'>کسر بدهی شما</div>
              <v-btn class='mr-auto' color='primary' depressed rounded>خواندن پیام</v-btn>
            </div>
          </v-card>
        </v-container>

      </v-col>
    </v-row>

  </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'PanelCharts',
  data() {
    return {
      charts: [{ title: 'تعداد افراد زیر دستی شما 25', icon: 'units' }, {
        title: 'میزان پاداش شما 50000',
        icon: 'cash'
      }, { title: 'تعداد کاربران کل 205140', icon: 'person' }]
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
