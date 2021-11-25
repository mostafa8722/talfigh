<template>
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
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols='3'>
        <add-raste :roles='roles'></add-raste>
      </v-col>
      <v-col cols='6' >
        <div class='d-inline-flex' style='flex-wrap: wrap'>
          <div v-for='item in roles'  :key='item.id'>
            <v-btn   width='138px' class='mb-3 ml-3' rounded color='#F2994A' style='box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);'>
              <div style='width: 80px'>{{item.title}}</div>
              <v-icon class='rounded-circle white' color='black'   right>fas fa-times-circle</v-icon>
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
  data(){
    return{
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
        },

      ]
    }
  },
})
</script>


<style lang='scss' scoped>
.v-card{
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

}
#form-title{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  .v-text-field{
    border-radius: 10px;
  }

}
#form-image{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  .v-btn{
    background: #2D9DCD;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 76px;
  }
}
#title-image{
 background-color: black;
}
#form-content{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
}
#meta{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
}
</style>
