<template>
  <div>
    <p class="text-3xl font-semibold mb-12">Work from Home</p>
    <div class="flex bg-white rounded-md p-4 space-x-4">
      <div class="border border-gray5 flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="text-gray14 text-lg font-kanit"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 border border-gray5 text-gray14 w-[354px] text-lg font-kanit">
          <option value="Date" >Date</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <button class="bg-yellow px-10 py-2 text-white rounded-lg text-lg font-light flex justify-center items-center">
          <svg-icon name="add1" width="10" height="10" class="mr-2"/>
          <NuxtLink to="/addFrom">Add from</NuxtLink>
        </button>
      </div>
    </div>

    <div class="relative  sm:rounded-lg mt-8">
      <table class="w-full ">
        <thead class="text-lg text-blue text-left bg-white">
        <tr>
          <th scope="col" class="px-6 py-4">Reason</th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>From</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>To</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <Span>Actions</Span>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">ต้องกักตัว</td>
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">14 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white whitespace-nowrap px-4 ">Approve</div>
          </td>
          <td >
            <svg-icon name="EditSquare" width="25" height="25" class="ml-10 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap ">ต้องเดินทาง...</td>
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">3 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-yellow rounded-2xl text-white whitespace-nowrap px-4">pending</div>
          </td>
          <td >
            <svg-icon name="EditSquare" width="25" height="25" class="ml-10 whitespace-nowrap"/>
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
      search: 'Search..'
    }
  }
}
</script>

<style scoped>

</style>
