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
    <div class="relative overflow-x-auto  sm:rounded-lg mt-6">
      <table class="w-full">
        <thead class="text-lg text-blue  bg-white">
        <tr>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <Span>Employee</Span>
            </div>
          </th>

        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12"  v-for="employee in employeeData" :key="employee.id">
        <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{employee.name}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-6 flex justify-end">
      <img src="~/assets/images/Group 204.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'sidebar_hr',
  data(){
    return {
      employeeData: [
        {
          id:1,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:2,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:3,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:4,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:5,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:6,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:7,
          name:'CHAWANNOP THAMMAJAI'
        },
        {
          id:8,
          name:'CHAWANNOP THAMMAJAI'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
