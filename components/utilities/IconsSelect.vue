<template>
  <div style='row-gap: 0.5rem' class='d-flex flex-column'>
    <span class='label' style='color: #009d4c'>
      انتخاب آیکون
      {{ title }}
      </span>
    <div
      class='icon__container__box d-flex flex-wrap'
      style='column-gap: 0.5rem; row-gap: 0.5rem'>
      <div @click="$emit('changeIcon', icon)"
           v-for='(icon, index) in icons' :key='index' class='icon__box'>
        <v-icon :data-icon='icon' class='icon'>{{ icon }}</v-icon>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IconsSelect',
  props: {
    title: {
      type: String,
      required: true,
      default: 'نکته'
    },
  },
  model: {
    event: 'changeIcon'
  },
  data() {
    return {
      iconSelected: '',
      icons: [
        'fas fa-user',
        'fas fa-retweet',
        'fas fa-money-bill',
        'fas fa-ellipsis-h',
        'fas fa-shopping-basket',
        'fas fa-chart-line',
        'fas fa-scroll',
        'fas fa-plus-square',
        'fas fa-trash-alt'
      ]
    }
  },
  methods: {
    showIcons(event) {
      const containerIcons = document.querySelector('.icon__container__box')
      containerIcons.classList.remove('d-none')
      containerIcons.classList.add('d-flex')
    },
    // hideIcons(event){
    //   const containerIcons = document.querySelector('.icon__container__box')
    //   containerIcons.classList.add('d-none')
    //   containerIcons.classList.remove('d-flex')
    // }
  },
  mounted() {
    const icons = document.querySelectorAll('.icon__box')
    icons.forEach((item) => {
      item.addEventListener('click', (event) => {
        icons.forEach((object)=>{
          object.classList.remove('selected')
        })
        event.currentTarget.classList.toggle('selected')
        this.iconSelected = event.currentTarget.querySelector('.icon').dataset.icon
        // this.$emit('changeIcon', this.iconSelected)
      })
    })
  }
}
</script>

<style scoped lang='scss'>
.icon__box {
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #F2994A;
  }
}

.icon__box.selected {
  border: 2px solid #F2994A
}

.icon__select__btn{
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #F2994A;
  transition: background-color 0.5s ease-in-out;
  &:hover{
    background-color: #f3f0f0;
  }
}
</style>
