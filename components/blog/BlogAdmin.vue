<template>

 <v-container id='wrapper' fluid>
   <div id='head' class='d-flex'>
     <div id='title'>بلاگ</div>
     <v-btn color='primary' rounded class='mr-10'>ذخیره مقاله</v-btn>
   </div>
   <div  class='mt-14 '>
    <blog-form></blog-form>
   </div>
 </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'
import BlogForm from '~/components/blog/BlogForm.vue'
export default Vue.extend({
  components: { BlogForm  },
  name:'BlogAdmin',
  data(){
    return{}
  }
})
</script>
<style lang='scss' scoped>
#wrapper{
  margin-right: 66px;
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

</style>
