<template>
  <div>
    <div class="flex justify-between">
      <span class="text-3xl font-semibold">Employee</span>
      <button
        class="bg-yellow px-8 md:px-10 md:py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <svg-icon name="add1" width="10" height="10" class="mr-2"/>
        <span class="text-lg font-kanit">
          <NuxtLink to="/hr/addEmployee">Add employee</NuxtLink>
        </span>
      </button>
    </div>
    <div class="lg:flex justify-end lg:space-x-4 mt-16">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg my-2 px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search to Name.." class="font-kanit text-lg w-full lg:w-[420px]"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-lg px-4 py-2  text-gray14 font-kanit my-2 text-lg lg:w-[236px] w-full">
          <option disabled value="Position">Position</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div>
        <select class="rounded-lg px-4 py-2 mt-2 text-gray14 font-kanit text-lg lg:w-[152px] w-full">
          <option value="Status">Status</option>
          <option>พนักงาน</option>
          <option>ทดลองงาน</option>
          <option>ฝึกงาน</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <EmployeeCard v-for="Employee in selected === '' ? filterEmployees : filterPosition" :key="Employee.id" :card="Employee"/>
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
      search: '',
      selected:'',
      Employees: [
        {
          id: 1,
          name: 'game01',
          department: 'B',
          tag: 'พนักงาน',
          profile: 'images/employee1.png'
        },
        {
          id: 2,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'C',
          tag: 'พนักงาน',
          profile: 'images/employee2.png'
        },
        {
          id: 3,
          name: 'jajajaj',
          department: 'UX/UI Designer',
          tag: 'พนักงาน',
          profile: 'images/employee3.png'
        },
        {
          id: 4,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน',
          profile: 'images/employee4.png'
        },
        {
          id: 5,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน',
          profile: 'images/employee5.png'
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน',
          profile: 'images/employee6.png'
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ทดลองงาน',
          profile: 'images/Group894.png'
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน',
          profile: 'images/employee8.png'
        },
        {
          id: 9,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน',
          profile: 'images/Ellipse4.png'
        },
        {
          id: 10,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'พนักงาน',
          profile: 'images/employee10.png'
        },
        {
          id: 11,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน',
          profile: 'images/employee11.png'
        },
        {
          id: 12,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'UX/UI Designer',
          tag: 'ฝึกงาน',
          profile: 'images/employee12.png'
        }
      ]
    }
  },
  computed: {
    filterEmployees() {
      return this.Employees.filter(val => {
        return val.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
     filterPosition(){
       return this.Employees.filter(val => {
         return val.department.toLowerCase().includes(this.selected.toLowerCase())
       })
     },
  }
}
</script>

<style scoped>

</style>
