<template>
  <div>
    <p class="text-3xl font-semibold mb-12">Work from Home</p>
    <div class="flex bg-white rounded-md p-4 space-x-4">
      <div class="border border-gray5 flex justify-center items-center bg-white rounded-md px-4 py-2 ">
        <img src="~/assets/images/Search.png" class="w-[14px] h-[14px] mr-2 ">
        <input type="text" v-model="search" placeholder="Search.." class="text-gray14"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 border border-gray5 text-gray14 w-[354px]">
          <option value="Date" >Date</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <button class="bg-yellow px-10 py-2 text-white rounded-[8px] text-[18px] font-light flex justify-center items-center">
          <img src="~/assets/images/Add.png" class="w-[15px] h-[15px]" >
          <NuxtLink to="/addFrom">Add from</NuxtLink>
        </button>
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-[32px]">
      <table class="w-full">
        <thead class="text-lg text-blue  bg-white font-medium">
        <tr>
          <th scope="col" class="px-6 py-4">Reason</th>
          <th scope="col" class="px-6 py-4">
            <div class="flex ">
              <img src="~/assets/images/Swap.svg" />
              <Span>From</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>To</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <Span>Actions</Span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap ">ต้องกักตัว</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">14 day</td>
          <td class="px-6 py-4 flex justify-center ">
            <div class="bg-green rounded-[10px] text-white whitespace-nowrap px-4">Approve</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap ">ต้องเดินทาง...</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">3 day</td>
          <td class="px-6 py-4 flex justify-center">
            <div class="bg-yellow rounded-[10px] text-white whitespace-nowrap px-4">pending</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "wfh",
  layout: 'sidebar',
  data() {
    return {
      selected: 'Date',
      search: 'search'
    }
  }
}
</script>

<style scoped>

</style>
