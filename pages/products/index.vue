<template>
  <div>
    <TLFContainer>
      <v-row style='column-gap: 1rem; row-gap: 1rem' class='' align='center'>
        <span class='title mr-3 mr-sm-0'>مدیریت محصولات</span>
        <v-btn width='230' height='35' class='mr-5 d-none d-md-inline-block' rounded color='primary'>
          <span class='text-btn'>ذخیره اطلاعات محصول</span>
        </v-btn>
      </v-row>
      <v-row style='column-gap: 0.5rem;row-gap: 1rem;' class='mt-15' align='center'>
        <v-col cols='12' sm='6' md='4'>
          <span class='white--text' style='font-size: 14px; font-weight: 400'>عنوان محصول</span>
          <v-text-field
            height='40'
            class='elevation-3 mt-3'
            hide-details
            solo
            placeholder='عنوان محصول'></v-text-field>
        </v-col>
        <v-col cols='12' sm='5' md='3'>
          <span class='white--text' style='font-size: 14px; font-weight: 400'>عکس شاخص محصولات</span>
          <label style='width: 200px; background-color: #2D9DCD;'
                 class='mt-3 d-flex justify-center align-center rounded-xl py-2 upload'>
            <v-icon color='#fff' size='10'>fa-plus</v-icon>
            <span class='white--text mr-1' style='font-size: 14px; font-weight: 400'>عکس های محصول</span>
            <input @input='addFiles' class='d-none' type='file' accept='image/*'>
          </label>
        </v-col>
        <v-col v-for='(file, index) in files' :key='index' class='pa-0' md='1' cols='2' style='width: 100px; height: 50px'>
          <img style='width: 100%; height: 100%; object-fit: cover' :src='file' alt=''>
        </v-col>
      </v-row>
      <v-row style='column-gap: 0.5rem;row-gap: 1rem;' class='mt-5' align='start'>
        <v-col cols='12'>
          <span class='white--text' style='font-size: 14px; font-weight: 400'>
            محتوا کوتاه محصول (
            {{ counterCH }}
            )
          </span>
          <v-textarea
            v-model='description'
            class='elevation-3 mt-3'
            solo
            height='150'
            :rules='[rules.counter]'
            counter
            @input='showNumsCh'
            maxlength='100'
            hide-details
            placeholder='محتوا کوتاه محصول'></v-textarea>
        </v-col>
        <v-col cols='12'>
                    <span class='white--text' style='font-size: 14px; font-weight: 400'>
            محتوا محصول
          </span>
          <Editor class='mt-3' />
        </v-col>
      </v-row>
      <v-row style='column-gap: 0.5rem;row-gap: 1rem;' class='mt-5' align='start'>
        <v-col md='4' cols='12'>
          <v-card rounded='xl' class='py-4 px-5'>
<!--            <v-text-field-->
<!--              class='mt-4'-->
<!--              append-icon='fas fa-search'-->
<!--              style='min-height: 36px !important;'-->
<!--              filled-->
<!--              rounded-->
<!--              dense-->
<!--              placeholder='جستجوی دسته'-->
<!--              hide-details />-->
            <v-autocomplete
              chips
              deletable-chips
              filled
              multiple
              rounded
              dense
              background-color='#FBFBFB'
              append-icon='fa-search'
              :items='categorItems'
              v-model='values'
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  @click="data.select"
                  color='warning'
                  class='elevation-3'
                >
                  {{ data.item }}
                </v-chip>
              </template>
            </v-autocomplete>

            <v-virtual-scroll
              class='mt-4 tlf-v-scroll'
              :items='categories'
              :item-height='60'
              height='400'
            >
              <template #default='{item}'>
                <div class='px-4 py-4 tlf-role-item'
                     :class='{activate: item.isSelect}'
                     @click='myToggleFunction($event, item.id)'>
                  {{ item.title }}
                </div>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-col>
        <v-col cols='12' md='3'>
          <span class='white--text' style='font-size: 14px; font-weight: 400'>انتخاب امتیاز</span>
          <v-select
            class='elevation-3 mt-3'
            :items='rateItems'
            append-icon='fa-chevron-down'
            label='انتخاب امتیاز'
            hide-details
            solo
          ></v-select>
        </v-col>
        <v-col cols='12' md='3'>
          <span class='white--text' style='font-size: 14px; font-weight: 400'>انتخاب کارگاه</span>
          <v-select
            class='elevation-3 mt-3'
            :items='workShopItems'
            hide-details
            label='انتخاب کارگاه'
            append-icon='fa-chevron-down'
            solo
          ></v-select>
        </v-col>
<!--        <v-col md='6' sm='4' cols='12'>-->
<!--          <span class='white&#45;&#45;text' style='font-size: 14px; font-weight: 400'>دسته های محصول</span>-->
<!--          <v-row class='mt-3'>-->
<!--            <v-col v-for='select in categories' :key='select.id'-->
<!--                   v-if='select.isSelect'-->
<!--                   cols='4'>-->
<!--              <v-btn @click='unSelectCategories($event, select.id)' rounded color='warning'>-->
<!--                <span style='color: #FFFFFF'>{{ select.title }}</span>-->
<!--                <div class='mr-3'-->
<!--                     style='border-radius: 50%;-->
<!--                     background-color: #000000; padding: 1px 4px'>-->
<!--                  <v-icon size='15' color='#ffffff'>fa-times</v-icon>-->
<!--                </div>-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
      </v-row>
    </TLFContainer>
    <ProductsTableBox class='mt-10 mb-10 d-none d-md-block' />
    <v-btn width='230' height='35' class='mr-5 mb-3 mt-3 d-inline-block d-md-none' rounded color='primary'>
      <span class='text-btn'>ذخیره اطلاعات محصول</span>
    </v-btn>
  </div>
</template>

<script>
import Vue from 'vue'
import TLFContainer from '../../components/utilities/TLF-Container'
import UsersTableBox from '../../components/users/UsersTableBox'
import ProductsTableBox from '../../components/products/ProductsTableBox'
import Editor from '../../components/Editor'


export default Vue.extend({
  name: 'index',
  components: { Editor, ProductsTableBox, UsersTableBox, TLFContainer },
  data() {
    return {
      rateItems: ['1 امتیاز', '2 امتیاز', '3 امتیاز'],
      workShopItems: ['کارگاه 1', 'کارگاه 2', 'کارگاه 3'],
      isActive: false,
      select: 0,
      categories: [
        {
          id: 1,
          title: 'سفال',
          isSelect: false
        },
        {
          id: 2,
          title: 'کوزه',
          isSelect: false
        }
      ],
      categorItems: ['سفال','کوزه'],
      values: [],
      files: [],
      counterCH: 100,
      description: '',
      rules:{
        counter: value => value.length <= 100 || 'Max 100 characters',
      }
    }
  },
  watch: {
    values(newValue, oldValue) {
      console.log(newValue)
      this.categories.forEach(c=>{
        c.isSelect = false
      })
        newValue.forEach((i) => {
          const itemSelect = this.categories.find((item) => {
            return item.title === i
          })
          itemSelect.isSelect = !itemSelect.isSelect
        })
    }
  },
  methods: {
    myToggleFunction(event, id) {
      const itemSelect = this.categories.find((item) => {
        return item.id === id
      })
      itemSelect.isSelect = !itemSelect.isSelect
      if (itemSelect.isSelect){
        this.values.push(itemSelect.title)
      }else{
        this.values = this.values.filter((item,index)=>{
          return item !== itemSelect.title
        })
      }
    },
    unSelectCategories(event, id) {
      const itemSelect = this.categories.find((item) => {
        return item.id === id
      })
      itemSelect.isSelect = false
    },
    addFiles(event) {
      this.files.push(URL.createObjectURL(event.target.files[0]))
      console.log(this.files)
    },
    showNumsCh(){
      this.counterCH = 100 - this.description.length
    }
  }
})
</script>

<style scoped lang='scss'>

.title {
  font-size: 1.6rem !important;
  color: #fff !important;
  font-weight: normal !important;
  font-family: IranYekanFN, serif !important;
}

.text-btn {
  font-size: 1rem !important;
  color: #fff !important;
  font-weight: 400 !important;
  font-family: IranYekanFN, serif !important;
}

.text-number {
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: #000;
  font-family: IranYekanFN, serif !important;
}

.upload {
  @include transition();
  cursor: pointer;

  &:hover {
    background-color: #258ca8 !important;
  }
}


#plus {

  min-height: 38px !important;
  background: #2D9DCD !important;
  border-radius: 76px !important;
}

.border-bt {
  border-bottom: #F2F2F2 1px solid;
  border-radius: 16px;
  padding: 15px;
  width: 100% !important;
}

.activate {
  background-color: #2D9DCD !important;
  color: white !important;
}

button {
  width: 100%;
}

.tlf-v-scroll {
  background-color: $near-white;
  border-radius: 26px;
}

.tlf-role-item {
  border-bottom: 1px solid #F2F2F2;
  cursor: pointer;
  @include transition();

  &:hover {
    background-color: #d8d7e0;
  }
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
