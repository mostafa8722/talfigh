<script lang='ts'>
import Vue from 'vue'
import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default Vue.extend({
  name: 'LineChart',
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
})
</script>

<style scoped lang='scss'>

</style>
