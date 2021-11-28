<template>

 <v-container id='wrapper' fluid>
   <div id='head' class='d-flex'>
     <div id='title'>بلاگ</div>
     <v-btn color='primary' rounded class='mr-10'>ذخیره مقاله</v-btn>
   </div>
   <div id='form-title' class='mt-14'>
      <div>عنوان بلاگ</div>
     <v-card height='55px' rounded='lg' class='d-inline-flex pa-0'>
       <v-text-field outlined filled   placeholder='عنوان بلاگ'  ></v-text-field>
     </v-card>
   </div>
 </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  components: {  },
  data(){
    return{}
  }
})
</script>
<style lang='scss' scoped>
#wrapper{
  margin-right: 78px;
}
#head{
  margin-top: 50px;
  #title{
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 37px;
    text-align: center;
    color: #FFFFFF;

  }
  .v-btn{
    width: 185px;
    height: 38px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 76px;
  }
}
#form-title{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  color: #FFFFFF;
  .v-text-field{
    width: 542px;

    border-radius: 10px;
  }
}
</style>
