<template>
  <div class="pa-md-10 pa-2">
    <v-card class="pa-6 rounded-lg"
      ><span style="color: #747474;font-size: 1.6rem">جزئیات منو</span>
      <div class="simple-page mt-4">
        <Container @drop="onDrop($event)">
          <Draggable v-for="(item, i) in items" :key="item.id">
            <div class="draggable-item">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item {{ i }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      items: generateItems(5, (i: any) => ({ id: i, data: 'Draggable ' + i })),
    }
  },
  methods: {
    onDrop(dropResult: any) {
      this.items = applyDrag(this.items, dropResult)
    },
  },
})
</script>

<style lang="scss" scoped>
.draggable-item {
  border: 2px solid #dad9d9;
  border-radius: 5px;
  margin-bottom: 2px;
  margin-top: 2px;
  cursor: default;
}
</style>
