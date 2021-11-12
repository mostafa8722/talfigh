<template>
  <div class='pa-10'>
    <v-row>
      <v-col cols='4'>
        <v-card rounded='lg' class='pa-4'>
          <v-btn block depressed rounded='lg' color='primary'>
            <v-icon size='16'>fas fa-plus</v-icon>
            <span>اضافه کردن نقش</span>
          </v-btn>

          <v-text-field
            class='mt-4'
            append-icon='fas fa-search'
            rounded
            filled
            label='جستجو'
            hide-details
          >

          </v-text-field>
        </v-card>
      </v-col>

      <v-col cols='8' class='pr-10'>
        <v-card rounded='lg' class='pa-4'>
          test
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Index'
})
</script>

<style scoped>

</style>
