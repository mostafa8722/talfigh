<template>
  <div>
    <v-col class='white ma-0'>
      <UsersHeaderTable />
<!--      <UsersBodyTable />-->
    </v-col>
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
