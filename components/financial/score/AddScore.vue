<template>
  <v-container fluid>
    <v-form ref="submit">
    <v-card class='d-flex wrapper-card' height='132px'>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto'>عنوان نمایشی</div>
        <div class='my-auto'>
          <v-text-field v-model='score.title' class='txt-input required'
                  dense filled label='عنوان نمایشی' 
                  :rules="[rules.required]"
          outlined></v-text-field>
        </div>
      </div>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto mr-10'>مبلغ محصول</div>
        <div class='my-auto'>
          <v-text-field 
           v-on:keypress="isNumber($event)"
          :rules="[rules.required]"
          v-model='score.price' class='txt-input mr-10 required' dense filled label='مبلغ محصول' outlined
                        rounded></v-text-field>
        </div>
      </div>
      <div class=' d-flex flex-column'>
        <div class='txt-label mb-auto mr-10'>امتیاز واقعی</div>
        <div class='my-auto'>
          <v-text-field 
           v-on:keypress="isNumber($event)"
          :rules="[rules.required]"
          v-model='score.rate' class='txt-input mr-10 required' dense filled label='امتیاز واقعی' outlined
                        rounded></v-text-field>
        </div>
      </div>
      <v-btn v-if='!edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
             @click='addScore'>
        اضافه به لیست 
        {{success}}
      </v-btn>
      <v-btn v-if='edit' class='mr-auto my-auto ' color='primary' depressed height='41px' rounded width='138px'
             @click='updateItem'>
        ویرایش
      </v-btn>
      

    </v-card>
    </v-form>

  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'AddCard',
  props: { edit: { type: Boolean, default: false } },
  data() {
    return {
      success:"no",
      score:{
        title: '',
        price: 0,
        rate_number: 0
      },
      rules: {
        required: (value: any) => !!value || 'اجباری',
      }
    }
  },

  methods: {
    isNumber(e: any) 
    {
      let char = String.fromCharCode(e.keyCode) // Get the character
      if (/^[0-9]+$/.test(char)) return true
      // Match with regex
      else e.preventDefault() // If not match, don't add to input text
    },
    addScore() 
    {
       if ((this.$refs.submit as Vue & { validate: () => boolean}).validate()) 
       {
            this.$store.dispatch('scores/scores/setScore',this.score)
       }
    }
    // updateItem() {
    //   this.$store.dispatch('finance/scores/setScore', this.$data.item)
    // }
  },
  computed:{
    ...mapState(['score_success'])
  },
  watch: {
      score_success(newValue,oldValue)
      {
          if(newValue)
          {
              this.success="ok"
          }
      }
  },
})
</script>

<style lang='scss' scoped>
.txt-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}

.wrapper-card {
  padding: 11px 65px;
  box-shadow: 0 28px 30px -16px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
}

.txt-input {
  border: 2px solid #FBFBFB;
  box-sizing: border-box;
  border-radius: 10px

}
</style>
