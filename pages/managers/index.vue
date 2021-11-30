<template>
  <div>
    <TLFContainer>
      <managers-component></managers-component>
    </TLFContainer>
    <ManagersTableBox class='mb-10 d-none d-md-block' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ManagersComponent from '~/components/managers/ManagersComponent.vue'
import TLFContainer from '~/components/utilities/TLF-Container.vue'
import ManagersTableBox from '~/components/managers/ManagersTableBox.vue'

export default Vue.extend({
  components: { ManagersTableBox, TLFContainer, ManagersComponent },
  data() {
    return {
    }
  },
  head: {
    title: "مدیرها"
  },
})
</script>

<style scoped lang='scss'>
#list-title {
  font-weight: 500;
  font-size: 26px;
  line-height: 37px;
  /* identical to box height */
  color: #FFFFFF;
}

@media screen and (max-width: 800px) {
  .image {
    margin-right: 5% !important;
  }
}

.box {
  outline: 2px solid #efefef;
  background-color: #9f9f9f;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
}

.label {
  font-size: 0.9rem;
  color: #fff;
}

.button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 204px;
}

.image {
  width: 101px;
  height: 70px;
  margin-right: 10%;
  border-radius: 80px;
}

.add {
  &:hover {
    cursor: pointer;
  }
}

.v-data-footer {
  border: none !important;
}
</style>
