<template>
  <div id='wrapper'>
    <agree-card v-if='!mobile'></agree-card>
    <agree-card-mobile v-if='mobile'></agree-card-mobile>
    <contract-text></contract-text>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ContractText from '~/components/policy/ContractText.vue'
import AgreeCard from '~/components/contract/AgreeCard.vue'
import AgreeCardMobile from '~/components/contract/AgreeCardMobile.vue'
export default Vue.extend({
  name: 'ContractBetween',
  components: { AgreeCardMobile, AgreeCard, ContractText },
  data(){
    return{
      agreed:true
    }
  },
  computed:{
    mobile(){
      return this.$vuetify.breakpoint.mobile
    }
  }
})
</script>

<style lang='scss' scoped>
@import '~vuetify/src/styles/styles.sass';
#wrapper{
  margin-right: 61px;
  margin-top:57px;
  margin-left:89px;

}

@media #{map-get($display-breakpoints, 'sm-and-down')}{
  #wrapper{
    margin-right: 22px;
    margin-top:57px;
    margin-left:22px
  }
}

</style>
