<template>
  <TLFContainer>
    <v-row>
      <v-col cols="3"
        ><v-autocomplete
          v-for="item in items"
          :key="item.id"
          :label="item.title"
          :items="item.sections"
          item-text="title"
          background-color="#D0D0D0"
          hide-details
          outlined
        >
        </v-autocomplete>
        <v-expansion-panels class="mt-16" flat>
          <v-expansion-panel class="mb-2">
            <v-expansion-panel-header style="background-color: #D0D0D0"> لینک اختصاصی </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col class="mt-4 pb-0" cols="12">
                  <span style="color: #747474">عنوان</span>
                  <v-text-field background-color="white" outlined dense></v-text-field>
                </v-col>
                <v-col class="mb-4 py-0" cols="12">
                  <span style="color: #747474">لینک خارجی</span>
                  <v-text-field background-color="white" outlined dense></v-text-field>
                </v-col>
              </v-row>
              <div class="float-left">
                <v-btn color="primary" class="px-10" rounded> اضافه کردن به منو </v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="9">
        <v-card>
          <v-card-title class="card-title pa-10">نام منو</v-card-title>
          <v-card-text>
            <Container
              orientation="horizontal"
              :drop-placeholder="upperDropPlaceholderOptions"
            >
              <Draggable v-for="column in scene.children" :key="column.id">
                <div
                  class="card-container"
                  :style="{
                    width: $vuetify.breakpoint.xl
                      ? '400px'
                      : $vuetify.breakpoint.sm || $vuetify.breakpoint.xs
                      ? '90px'
                      : '290px'
                  }"
                >
                  <div class="card-column-header">
                    <span>زیر دسته سطح </span>{{ column.level + 1 }}
                  </div>
                  <Container
                    group-name="col"
                    :get-child-payload="getCardPayload(column.id)"
                    drag-class="card-ghost"
                    drop-class="card-ghost-drop"
                    :drop-placeholder="dropPlaceholderOptions"
                    @drop="(e) => onCardDrop(column.id, e)"
                  >
                    <Draggable v-for="card in column.children" :key="card.id">
                      <v-row
                        class="card d-flex align-center justify-space-around"
                        :style="card.style"
                      >
                        <v-col cols="5">
                          <div>{{ card.data }}</div>
                        </v-col>
                        <v-col class="py-0 ml-2 d-none d-md-block" cols="4">
                          <div class="d-flex flex-row">
                            <v-btn fab x-small color="error" elevation="0">
                              <v-icon>fas fa-trash-alt</v-icon>
                            </v-btn>
                            <v-btn
                              fab
                              x-small
                              color="warning"
                              class="mr-2"
                              elevation="0"
                            >
                              <v-icon>fas fa-edit</v-icon>
                            </v-btn>
                            <v-btn
                              color="grey darken-1"
                              text
                              fab
                              class="mr-2"
                              x-small
                              elevation="0"
                            >
                              <v-icon>fas fa-plus</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </Draggable>
                  </Container>
                </div>
              </Draggable>
            </Container>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
  </TLFContainer>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '../utils/helpers'
import TLFContainer from '~/components/utilities/TLF-Container.vue'

const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(3, (i) => ({
    id: `column${i}`,
    type: 'container',
    name: 'hi',

    level: i,
    props: {
      orientation: 'vertical'
    },
    children: generateItems(6, (j) => ({
      type: 'draggable',
      id: `${i}${j}`,
      style: {
        backgroundColor: i === 1 ? '#C1FFD3' : i === 2 ? '#DFEAFF' : '#f4f4f4'
      },
      data: 'چوب'
    }))
  }))
}
export default {
  name: 'Cards',
  components: { Container, Draggable, TLFContainer },
  data() {
    return {
      scene,
      items: [
        {
          id: 1,
          title: 'صفحه‌ها',
          sections: [
            { title: 'صفحه اصلی' },
            { title: 'درباره ما' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' }
          ]
        },
        {
          id: 2,
          title: 'دسته‌ها',
          sections: [
            { title: 'صفحه اصلی' },
            { title: 'درباره ما' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' }
          ]
        },
        {
          id: 3,
          title: 'بلاگ',
          sections: [
            { title: 'صفحه اصلی' },
            { title: 'درباره ما' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' }
          ]
        },
        {
          id: 4,
          title: 'محصولات',
          sections: [
            { title: 'صفحه اصلی' },
            { title: 'درباره ما' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' },
            { title: 'مدیر بازرسی' },
            { title: 'پشتیبان' }
          ]
        }
      ],
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      }
    }
  },
  methods: {
    onCardDrop(columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter((p) => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    getCardPayload(columnId) {
      return (index) => {
        return this.scene.children.filter((p) => p.id === columnId)[0].children[
          index
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title {
  color: #747474;
  font-size: 1.6rem;
}
.main-card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
}
.draggable-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  background-color: #fff;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 2px;
  margin-top: 2px;
  cursor: default;
  user-select: none;
}

.draggable-item-horizontal {
  height: 300px;
  padding: 10px;
  line-height: 100px;
  text-align: center;
  width: 200px;
  display: block;
  background-color: #fff;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-right: 4px;
  cursor: default;
}

.dragging {
  background-color: yellow;
}

.card-container {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.card {
  margin: 5px;
  background-color: #f4f4f4;
  border: 2px solid #dad9d9;
  border-radius: 4px;
}

.card-column-header {
  font-weight: 300;
  color: #bbbbbb;
  margin-right: 5px;
}

.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}

.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}

.drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  border: 1px dashed #abc;
  margin: 5px;
}

.cards-drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  border: 1px dashed #abc;
  margin: 5px 45px 5px 5px;
}
</style>
