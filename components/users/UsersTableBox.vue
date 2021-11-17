<template>
  <div style='padding-bottom: 250px' class='white ma-0'>
    <div class='d-flex flex-column'>
      <UsersHeaderTable />
      <v-divider class='mt-7'></v-divider>
      <UsersBodyTable />
    </div>
  </div>
</template>

<script>
import UsersHeaderTable from '~/components/users/UsersHeaderTable'
import UsersBodyTable from '~/components/users/UsersBodyTable'
export default {
  name: 'UsersTableBox',
  components: { UsersBodyTable, UsersHeaderTable }
}
</script>

<style scoped>

</style>
