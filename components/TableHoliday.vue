<template>
  <div>
    <div class="drop-shadow-md">
      <table class="w-full ">
        <thead class="text-base text-blue bg-white">
        <tr>
          <th scope="col" class="">
            <div class="py-4 text-center">
              <Span>Hoilday Name</Span>
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
          <th scope="col">
            <div class="pr-10">
              <Span>Actions</Span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-base text-gray11 whitespace-nowrap" v-for="holiday in holidays" :key="holiday.id">
        <tr class="bg-white border-t border-gray12 text-center">
          <td class="py-4 text-left pl-12">{{ holiday.name }}</td>
          <td class="py-4 ">{{ holiday.from }}</td>
          <td class="py-4 ">{{ holiday.to }}</td>
          <td class="py-4 ">{{ holiday.noofdays }}</td>
          <td>
            <div class="w-full flex justify-center pr-5">
              <div @click="showModalEdit = true" class="cursor-pointer">
                <svg-icon name="Edit_Square" width="18" height="18"/>
              </div>
            </div>
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
    holidays: {},
    sort: {},
  }
}
</script>
