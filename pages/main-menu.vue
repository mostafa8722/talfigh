<template>
  <div class="pa-md-10 pa-2">
    <div class="mb-4" style="color: #fff; font-size: 1.6rem">منو وبسایت</div>
    <v-card style="background-color: #e3e3e3" class="pa-8 rounded-lg mb-6">
      <v-row class="mb-2">
        <v-col cols="12" lg="4" md="4">
          <span style="color: #747474">عنوان</span>
          <v-text-field background-color="white" rounded></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" md="4">
          <span style="color: #747474">لینک خارجی</span>
          <v-text-field background-color="white" rounded></v-text-field>
        </v-col>
        <v-col class="d-flex justify-center" cols="12" lg="4" md="4">
          <v-btn class="px-10 mt-9 rounded-xl" color="primary">
            <v-icon size="10">fas fa-plus</v-icon>&nbsp; اضافه کردن منو به لیست
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="pa-6 rounded-lg">
      <span style="color: #747474; font-size: 1.2rem">ترتیب منو</span>
      <div class="simple-page mt-4">
        <Container @drop="onDrop($event)">
          <Draggable v-for="item in items" :key="item.id">
            <div class="draggable-item">
              <v-expansion-panels flat>
                <v-expansion-panel class="mb-2">
                  <v-expansion-panel-header>
                    <span class="expansion-header-title">
                      <v-icon color="#D9D9D9" class="ml-4">
                        fa-align-justify</v-icon
                      >
                      {{ item.data }}
                    </span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col class="mt-4" cols="12">
                        <span style="color: #747474">عنوان</span>
                        <v-text-field background-color="white" rounded></v-text-field>
                      </v-col>
                      <v-col class="mb-4" cols="12" lg="7" md="7">
                        <span style="color: #747474">لینک خارجی</span>
                        <v-text-field background-color="white" rounded></v-text-field>
                      </v-col>
                    </v-row>
                    <div class="expansion-panel-btn">
                      <v-btn color="primary" class="px-10 rounded-0">
                        ذخیره
                      </v-btn>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </Draggable>
        </Container>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { applyDrag, generateItems } from '../utils/helpers'
export default Vue.extend({
  name: 'MainMenu',
  data() {
    return {
      items: generateItems(5, (i: any) => ({ id: i, data: 'منوی اصلی ' + i })),
    }
  },
  head: {
    title: "منو ناوبری"
  },
  methods: {
    onDrop(dropResult: any) {
      this.items = applyDrag(this.items, dropResult)
    },
  },
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .v-expansion-panels {
  width: 100% !important;
}
}
.draggable-item {
  border-radius: 5px;
  margin-bottom: 2px;
  margin-top: 2px;
  cursor: default;
}
.expansion-header-title {
  color: #747474;
  font-size: 12px;
  font-weight: 500;
}
.v-expansion-panels {
  width: 40%;
}
.v-expansion-panel-header {
  background-color: #f5f5f5;
  border: 2px solid #dad9d9;
  border-radius: 5px;
}
.v-expansion-panel-content {
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.expansion-panel-btn {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
