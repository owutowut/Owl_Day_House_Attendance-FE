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
      <div class="search-wrapper flex justify-center items-center bg-white rounded-lg my-2 px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search to Name.." class="font-kanit text-lg w-full lg:w-[420px] focus:outline-none "/>
      </div>
      <div>
        <select v-model="selected" placeholder="Position"  class="rounded-lg px-4 py-2 text-gray14 font-kanit my-2 text-lg lg:w-[236px] w-full focus:outline-none">
          <option disabled value="">Position</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
          <option value="Tester">Tester</option>
          <option value="Dev">Dev</option>
        </select>
      </div>
      <div>
        <select v-model="selected_status" placeholder="Status"  class="rounded-lg px-4 py-2 mt-2 text-gray14 font-kanit text-lg lg:w-[152px] w-full focus:outline-none">
          <option disabled value="">Status</option>
          <option value="พนักงาน">พนักงาน</option>
          <option value="ทดลองงาน">ทดลองงาน</option>
          <option value="ฝึกงาน">ฝึกงาน</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <EmployeeCard v-for="Employee in filterData" :key="Employee.id" :card="Employee"/>
    </div>
  </div>
</template>
<script>

import EmployeeCard from "@/components/EmployeeCard";
import search from "@/components/Search";

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
      selected_status:'',
      filterData: '',
      Employees: [
        {
          id: 1,
          name: 'kono',
          department: 'Tester',
          tag: 'พนักงาน',
          profile: 'images/employee1.png'
        },
        {
          id: 2,
          name: 'CHAWANNOP THAMMAJAI',
          department: 'Dev',
          tag: 'พนักงาน',
          profile: 'images/employee2.png'
        },
        {
          id: 3,
          name: 'bajajaj',
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
  watch: {
    search: function (val) {
      this.filterEmployee(val)
    },
    selected: function (val){
      this.filterPosition(val)
    },
    selected_status: function (val){
      this.filterStatus(val)
    }
  },
  methods: {
    filterEmployee(search) {
      if(search){
        this.filterData = this.Employees.filter(val => {
          return val.name.toLowerCase().includes(search.toLowerCase())
        })
      }else {
        this.filterData = this.Employees
      }
    },
    filterPosition(selected) {
      if(selected){
        this.filterData = this.Employees.filter(val => {
          return val.department.toLowerCase().includes(selected.toLowerCase())
        })
      }else {
        this.filterData = this.Employees
      }
    },
    filterStatus(selected_status) {
      if(selected_status){
        this.filterData = this.Employees.filter(val => {
          return val.tag.toLowerCase().includes(selected_status.toLowerCase())
        })
      }else {
        this.filterData = this.Employees
      }
    }
  },
  mounted() {
    this.filterData = this.Employees
  }
}
</script>

<style scoped>

</style>
