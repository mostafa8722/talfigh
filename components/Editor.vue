<template>
  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      @input='changeContent'
      :card-props="{ height: 200 }"
      v-model="content"
      :extensions="extensions"/>

    <template #placeholder>
      Loading...
    </template>
  </ClientOnly>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'

export default {
  name: 'Editor',
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  props: {
    value: {
      required: false
    }
  },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: ''
  }),
  methods: {
    changeContent(){
      this.$emit('content', this.content)
    }
  },
  watch: {
    value(val){
      this.content = val
    }
  },
  mounted() {
    this.content = this.$props.value
  }
}
</script>
