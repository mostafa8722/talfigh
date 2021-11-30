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

</style>
