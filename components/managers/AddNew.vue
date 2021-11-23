<template>

 <v-card rounded='xl' class='py-4 px-5' >
   <v-btn block depressed rounded color='primary' id='plus'>
     <v-icon left size='16'>fas fa-plus</v-icon>
     <span>اضافه کردن مدیر</span>
   </v-btn>
   <v-text-field
     class='mt-4'
     append-icon='fas fa-search'
     style='min-height: 36px !important;'
     filled
     rounded
     dense
     placeholder="جستجوی مدیر"
     hide-details/>

   <v-virtual-scroll
     class="mt-4 tlf-v-scroll"
     :items="roles"
     :item-height="60"
     height="490"

   >
     <template #default="{item}">
       <div class="px-4 py-4 tlf-role-item"  @click='myToggleFunction'>
         {{ item.title }}
       </div>
     </template>
   </v-virtual-scroll>
 </v-card>

</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend(
  {
    name: 'AddNew',
    data(){
      return{
        isActive:false,
        select:0,
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
            title: 'پشتیبان'
          },

        ]
      }
    },
    methods: {

      myToggleFunction(event:any){
        const button = event.target;
        button.classList.toggle('activate');
      }
    }
  }
)
</script>

<style lang='scss' scoped>
#plus{

  min-height: 38px !important;
  background: #2D9DCD !important;
  border-radius: 76px !important;
}
.border-bt {
 border-bottom: #F2F2F2 1px solid;
  border-radius: 16px ;
  padding: 15px;
  width: 100% !important;
}
.activate{
  background-color: #2D9DCD!important;
  color: white !important;
}
button{
  width: 100%;
}
.tlf-v-scroll {
  background-color: $near-white;
  border-radius: 26px;
}
.tlf-role-item{
  border-bottom: 1px solid #F2F2F2;
}
.tlf-role-item.selected {
  background-color: $primary;
  color: white;
}

.tlf-role-form-card-title {
  font-size: 26px;
  font-weight: 500;
  color: $dark-grey;
}
</style>
