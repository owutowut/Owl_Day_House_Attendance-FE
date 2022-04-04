<template>
  <div>
    <div class="flex justify-between ">
      <span class="text-3xl font-semibold">Attendance of month</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <NuxtLink to="/hr/home">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="bg-white py-6 rounded-lg flex justify-start space-x-4 pl-8 mt-8">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2 border border-white3">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" placeholder="Search to Name.." class="font-kanit text-lg w-96"/>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-72 border border-white3">
          <option value="SelectMonth" >Select Month</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-64 border border-white3">
          <option value="SelectYear" >Select Year</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <button class="bg-blue px-14 py-3 mr-6 text-white rounded-md">Search</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'sidebar_hr'
}
</script>

<style scoped>

</style>
