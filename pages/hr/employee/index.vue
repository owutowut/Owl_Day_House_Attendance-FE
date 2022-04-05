<template>
  <div>
    <div class="flex justify-between" >
      <span class="text-3xl font-semibold">Employee</span>
      <button class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <svg-icon name="add1" width="10" height="10" class="mr-2"/>
        <span class="text-lg font-kanit">
          <NuxtLink to="/hr/addEmployee">Add employee</NuxtLink>
        </span>
        </button>
    </div>
    <div class="flex justify-end space-x-4 mt-16">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" placeholder="Search to Name.." class="font-kanit text-lg w-[704px]"/>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-[236px]">
          <option value="Position" >Position</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-[152px]">
          <option value="Status" >Status</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <EmployeeCard v-for="Employee in Employees" :key="Employee.id" :card="Employee" />
    </div>
  </div>
</template>

<script>

import EmployeeCard from "@/components/EmployeeCard";

export default {
  name: "index",
  layout: 'sidebar_hr',
  components: {
    EmployeeCard
  },
  data() {
    return {
      isEdit: false,
      Employees: [
        {
        id:1,
        name: 'CHAWANNOP THAMMAJAI',
        department: 'UX/UI Designer',
        tag: 'พนักงาน'
        },
        {
          id:2,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน'
        },
        {
          id:3,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน'
        },
        {
          id:4,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน'
        },
        {
          id:5,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน'
        },
        {
          id:6,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน'
        },
        {
          id:7,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน'
        },
        {
          id:8,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน'
        },
        {
          id:9,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน'
        },
        {
          id:10,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน'
        },
        {
          id:11,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน'
        },
        {
          id:12,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
