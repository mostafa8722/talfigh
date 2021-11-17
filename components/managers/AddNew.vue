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
   <v-sheet rounded='xl' width='100%' height='400px' color='#FBFBFB'>
 <v-container class='pa-0'>
     <div class='border-bt'  @click='myToggleFunction'>
      مدیر بازرگانی
     </div>
   <div class='border-bt'  @click='myToggleFunction'>
     مدیر بازرگانی
   </div>
   <div class='border-bt'  @click='myToggleFunction'>
     مدیر بازرگانی
   </div>
 </v-container>
   </v-sheet>
 </v-card>

</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend(
  {
    name: 'AddNew',
    data(){
      return{
        isActive:false
      }
    },
    methods: {
      myToggleFunction(event:any){
        const button = event.target;
        button.classList.toggle('activ');
      }
    }
  }
)
</script>

<style lang='scss' scoped>
.border-bt {
 border-bottom: #F2F2F2 1px solid;
  border-radius: 16px ;
  padding: 15px;
  width: 100% !important;
}
.activ{
  background-color: #2D9DCD!important;
  color: white !important;
}
button{
  width: 100%;
}

</style>
