<template>

 <v-card rounded='xl' class='py-4 px-5' >
   <v-btn rounded color='primary' depressed block>
     اضافه کردن مدیر
     <v-icon small>fa-plus</v-icon>
   </v-btn>
   <v-input class='mt-5'>
        <v-text-field filled rounded append-icon='fa-search' label='
        جستجوی مدیر...'>

        </v-text-field>
   </v-input>
   <v-sheet width='100%' height='400px' color='#FBFBFB'>

 <v-btn-toggle>
   <v-btn active-class='activ' depressed>مدیر بازرگانی</v-btn>
   <v-btn active-class='activ' depressed>مدیر بازرگانی</v-btn>
   <v-btn active-class='activ' depressed>مدیر بازرگانی</v-btn>
 </v-btn-toggle>
   </v-sheet>
 </v-card>

</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend(
  {
    name: 'AddNew'
  }
)
</script>

<style lang='scss' scoped>
.v-btn-toggle {
  flex-direction: column;
  border:#848484 thin solid;
  width: 100%;
}
.activ{
  background-color: #2D9DCD !important;
  color: white !important;
}
</style>
