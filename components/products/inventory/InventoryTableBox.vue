<template>
  <div class='white ma-0 container__table rounded-lg'>
    <div class='d-flex flex-column'>
      <ProductsHeaderTable />
      <v-divider class='mt-7'></v-divider>
      <ProductsBodyTable />
    </div>
  </div>
</template>

<script>
import UsersHeaderTable from '~/components/users/UsersHeaderTable'
import UsersBodyTable from '~/components/users/UsersBodyTable'
import ProductsHeaderTable from './InventoryHeaderTable'
import ProductsBodyTable from './InventoryBodyTable'

export default {
  name: 'InventoryTableBox',
  components: { ProductsBodyTable, ProductsHeaderTable, UsersBodyTable, UsersHeaderTable },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>

.container__table {
  height: auto;
  //@media screen and (max-width: 600px) {
  //  width: 1200px;
  //}

}
</style>
