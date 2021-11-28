<template>
<<<<<<< HEAD
  <v-container fluid>
    <v-row>
      <v-col id='form-title' cols='8' md='5'>
        <div class='mb-3 mr-2'>عنوان بلاگ</div>
        <v-card class=' pa-0' height='40px'>
          <v-text-field dense filled outlined placeholder='عنوان بلاگ'></v-text-field>
        </v-card>
      </v-col>
      <v-col id='form-image' cols='8' md='2'>
        <div class='mb-3 mr-3'>عکس شاخص مقاله</div>
        <v-btn color='primary' height='37px' rounded width='100%'>
          <v-icon left size='10'>fas fa-plus</v-icon>
          عکس شاخص مقاله
        </v-btn>
      </v-col>
      <v-col class='white pa-0' cols='2' md='1' offset='3' offset-md='0'>
        <v-img id='title-image' class='rounded-circle' contain height='100%'
               src='~/static/images/contractmini1.png'></v-img>
      </v-col>
      <v-col id='form-content' cols='10'>
        <div class='mb-3 mr-2'>محتوا مقاله</div>
        <v-card class='pa-0' height='232px'>
          <v-textarea filled height='232px' outlined>
          </v-textarea>
        </v-card>
      </v-col>
      <v-col id='form-content' cols='10'>
        <div id='meta' class='mb-3 mr-2'>توضیحات متا</div>
        <v-card class='pa-0' height='40px'>
          <v-text-field dense filled outlined>
=======
  <v-container fluid  >
    <v-row>
      <v-col cols='8' md='5'  id='form-title'>
        <div class='mb-3 mr-2'>عنوان بلاگ</div>
        <v-card height='40px'  class=' pa-0'>
          <v-text-field dense outlined filled   placeholder='عنوان بلاگ'  ></v-text-field>
        </v-card>
      </v-col>
      <v-col cols='8' md='2' id='form-image'    >
        <div class='mb-3 mr-3'>عکس شاخص مقاله</div>
        <v-btn width='100%' height='37px' color='primary' rounded  >
          <v-icon size='10' left>fas fa-plus</v-icon>
          عکس شاخص مقاله
        </v-btn>
      </v-col>
      <v-col offset='3' offset-md='0' cols='2' md='1' class='white pa-0'>
        <v-img height='100%'  contain class='rounded-circle' id='title-image'   src='~/static/images/contractmini1.png'></v-img>
      </v-col>
      <v-col cols='10' id='form-content'>
        <div class='mb-3 mr-2'>محتوا مقاله</div>
        <v-card height='232px' class='pa-0'>
          <v-textarea height='232px' outlined filled>
          </v-textarea>
        </v-card>
      </v-col>
      <v-col cols='10' id='form-content'>
        <div class='mb-3 mr-2' id='meta'>توضیحات متا</div>
        <v-card height='40px' class='pa-0'>
          <v-text-field dense outlined filled>
>>>>>>> origin/feature/Blog_admin
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols='3'>
        <add-raste :roles='roles'></add-raste>
      </v-col>
<<<<<<< HEAD
      <v-col cols='6'>
        <div class='d-inline-flex' style='flex-wrap: wrap'>
          <div v-for='item in roles' :key='item.id'>
            <v-btn class='mb-3 ml-3' color='#F2994A' rounded style='box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);'
                   width='138px'>
              <div style='width: 80px'>{{ item.title }}</div>
              <v-icon class='rounded-circle white' color='black' right>fas fa-times-circle</v-icon>
=======
      <v-col cols='6' >
        <div class='d-inline-flex' style='flex-wrap: wrap'>
          <div v-for='item in roles'  :key='item.id'>
            <v-btn   width='138px' class='mb-3 ml-3' rounded color='#F2994A' style='box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);'>
              <div style='width: 80px'>{{item.title}}</div>
              <v-icon class='rounded-circle white' color='black'   right>fas fa-times-circle</v-icon>
>>>>>>> origin/feature/Blog_admin
            </v-btn>
          </div>
        </div>

      </v-col>

    </v-row>

  </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'
import AddRaste from '~/components/blog/AddRaste.vue'
export default Vue.extend({
  name: 'BlogForm',
  components: { AddRaste },
<<<<<<< HEAD
  data() {
    return {
=======
  data(){
    return{
>>>>>>> origin/feature/Blog_admin
      roles: [
        {
          id: 1,
          title: 'مدیر بازرگانی'
        },
        {
          id: 2,
          title: 'مدیر فروش'
        },
        {
          id: 3,
          title: 'مدیر بازرسی'
        },
        {
          id: 4,
          title: 'کارگر'
        },
        {
          id: 5,
          title: ' کارفرما'
        },
        {
          id: 6,
          title: 'پشتیبان'
<<<<<<< HEAD
        }
=======
        },
>>>>>>> origin/feature/Blog_admin

      ]
    }
  },
})
</script>


<style lang='scss' scoped>
<<<<<<< HEAD
.v-card {
=======
.v-card{
>>>>>>> origin/feature/Blog_admin
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

}
<<<<<<< HEAD

#form-title {
=======
#form-title{
>>>>>>> origin/feature/Blog_admin
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
<<<<<<< HEAD

  .v-text-field {
=======
  .v-text-field{
>>>>>>> origin/feature/Blog_admin
    border-radius: 10px;
  }

}
<<<<<<< HEAD

#form-image {
=======
#form-image{
>>>>>>> origin/feature/Blog_admin
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
<<<<<<< HEAD

  .v-btn {
=======
  .v-btn{
>>>>>>> origin/feature/Blog_admin
    background: #2D9DCD;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 76px;
  }
}
<<<<<<< HEAD

#title-image {
  background-color: black;
}

#form-content {
=======
#title-image{
 background-color: black;
}
#form-content{
>>>>>>> origin/feature/Blog_admin
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
}
<<<<<<< HEAD

#meta {
=======
#meta{
>>>>>>> origin/feature/Blog_admin
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
}
</style>
