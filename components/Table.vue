<template>
  <div class="relative overflow-x-auto  sm:rounded-lg mt-6">
    <table class="w-full">
      <thead class="text-lg text-blue  bg-white">
      <tr>
        <th scope="col" class="px-6 py-4">
          <div class="flex items-center">
            <Span>Employee</Span>
          </div>
        </th>
        <th scope="col" class="" v-for="n in 31" :key ="n">
          <div class="flex items-center justify-center">
            {{ n }}
          </div>
        </th>
      </tr>
      </thead>
      <tbody class="font-kanit text-lg">
      <tr class="bg-white border-t border-gray12">
        <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{attendance.name}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    attendance: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
