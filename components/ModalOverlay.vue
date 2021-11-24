<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = !dialog"
    >
      Open Dialog
    </v-btn>
<v-dialog v-model='dialog'    width='331' height='150px'>
  <v-card tile  class='rounded-t-xl'  width='59px' height='48px'>
    <div class='d-flex pt-2'>
      <v-icon color='#F2994A' class='ma-auto'>fas fa-question</v-icon>
    </div>
  </v-card>
  <v-card v-if='dialog' id='card' rounded='xl' class='pt-6 rounded-tr-0'  style='overflow: hidden' width='331'  height='150'>

<v-container>
  <div class='row '>
    <div class='col-12 mb-4 '>آیا از تغییرات در حال انجام اطمینان دارید ؟</div>

    <v-btn style='font-size: 20px;color: #747474' color='#FFDDDD' width='164px' height='65px'  class='col ' depressed>
      <v-icon left size='31' color='red'>fas fa-times-circle</v-icon>
      خیر
    </v-btn>
    <v-btn style='font-size: 20px;color: #747474' class='col' width='164px' height='65px'  color='#E2FFDD' depressed>
      <v-icon left size='31'  color='#00AD26' >fas fa-times-circle</v-icon>
      بله
    </v-btn>
  </div>
</v-container>



  </v-card>
</v-dialog>



  </v-row>
</template>


<script lang='ts'>
import Vue from 'vue'
export default Vue.extend(
  {
    name: 'ModalOverlay',
    data () {
      return{
        dialog: false,
      }
    }
  }
)
</script>

<style scoped>
 #card{

   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 28px;
   /* identical to box height */

   text-align: center;

   color: #747474;
 }
 ::v-deep .v-dialog--active{
 background-color: transparent !important;
 }
</style>
