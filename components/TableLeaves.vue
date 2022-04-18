<template>
  <div>
    <div class="drop-shadow-md">
      <table class="w-full ">
        <thead class="text-base text-blue bg-white">
        <tr>
          <th scope="col" class="">
            <div class="py-4 text-left pl-12">
              <Span>Employee</Span>
            </div>
          </th>
          <th @click="sort.field='type'; sort.sorted = !sort.sorted" scope="col">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">Leave Type</button>
            </div>
          </th>
          <th @click="sort.field='from'; sort.sorted = !sort.sorted" scope="col" class="">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">From</button>
            </div>
          </th>
          <th @click="sort.field='to'; sort.sorted = !sort.sorted" scope="col" class="">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">To</button>
            </div>
          </th>
          <th @click="sort.field='noofdays'; sort.sorted = !sort.sorted" scope="col" class="">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">No of Days</button>
            </div>
          </th>
          <th @click="sort.field='tag'; sort.sorted = !sort.sorted" scope="col" class="">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">Tag</button>
            </div>
          </th>
          <th @click="sort.field='status'; sort.sorted = !sort.sorted" scope="col" class="">
            <div class="flex justify-center space-x-2 cursor-pointer">
              <svg-icon name="Swap" width="15.82px" height="16.33px" class="mt-1"/>
              <button class="text-blue font-semibold">Status</button>
            </div>
          </th>
          <th scope="col">
            <div class="pr-8">
              <Span>Actions</Span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-base text-gray11 whitespace-nowrap" v-for="employee in employees" :key="employee.id">
        <tr class="bg-white border-t border-gray12 text-center">
          <td class="py-4 text-left pl-12">{{ employee.name }}</td>
          <td class="py-4 ">{{ employee.leavetype }}</td>
          <td class="py-4 ">{{ employee.from }}</td>
          <td class="py-4 ">{{ employee.to }}</td>
          <td class="py-4 ">{{ employee.noofdays }}</td>
          <td class="pr-1">
            <div v-if="employee.tag=='พนักงาน'" class="px-1 bg-blue rounded-xl text-white text-center">{{ employee.tag }}</div>
            <div v-else-if="employee.tag=='ทดลองงาน'" class="px-1 bg-yellow rounded-xl text-white text-center">{{ employee.tag }}
            </div>
            <div v-else class="bg-purple1 rounded-xl text-white text-center">{{ employee.tag }}</div>
          </td>
          <td class="pl-1">
            <div v-if="employee.status=='Approve'" class="px-2 bg-green rounded-xl text-white text-center">{{ employee.status }}
            </div>
            <div v-else class="px-2 bg-yellow rounded-xl text-white text-center">{{ employee.status }}</div>
          </td>
          <td>
            <a :href="`/hr/leaves/${employee.id}`">
              <svg-icon name="Search" width="18.76px" height="19.22px" class="ml-8"/>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
<!--    <div>-->
<!--      <paginate-->
<!--        :page-count="20"-->
<!--        :click-handler="functionName"-->
<!--        :prev-text="'Prev'"-->
<!--        :next-text="'Next'"-->
<!--        :container-class="'className'">-->
<!--      </paginate>-->
<!--    </div>-->
  </div>
</template>

<script>
// import Paginate from 'vuejs-paginate'

export default {
  // components: {
  //   Paginate,
  // },
  props: {
    employees: {},
    sort: {},
  },
}
</script>
