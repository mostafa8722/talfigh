<template>

 <v-card rounded='xl' class='py-4 px-5' >
   <v-btn block depressed rounded color='primary'>
     <v-icon left size='16'>fas fa-plus</v-icon>
     <span>اضافه کردن نقش</span>
   </v-btn>
   <v-text-field
     class='mt-4'
     append-icon='fas fa-search'
     filled
     rounded
     dense
     placeholder="جستجو نقش‌ها"
     hide-details/>

   <v-virtual-scroll
     class="mt-4 tlf-v-scroll"
     :items="roles"
     :item-height="60"
     height="490"
   >
     <template #default="{item}">
       <div class="px-4 py-4 tlf-role-item" :class="{selected:item.id===3}">
         <span>{{ item.title }}</span>
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
        roles: [
          {
            id: 1,
            title: 'نقش شماره 1'
          },
          {
            id: 2,
            title: 'نقش شماره 2'
          },
          {
            id: 3,
            title: 'نقش شماره 3'
          },
          {
            id: 4,
            title: 'نقش شماره 4'
          },
          {
            id: 5,
            title: 'نقش شماره 5'
          },
          {
            id: 6,
            title: 'نقش شماره 6'
          },
          {
            id: 7,
            title: 'نقش شماره 7'
          },
          {
            id: 8,
            title: 'نقش شماره 8'
          }
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
