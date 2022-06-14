<template>
  <div>
    <Loading v-if="isLoading" />

    <div v-else class="mt-20">
      <div class="flex justify-between">
        <span class="text-3xl font-semibold">Employee</span>
        <button
          class="bg-yellow px-8 md:px-10 md:py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
          <svg-icon name="add1" width="10" height="10" class="mr-2"/>
          <span class="text-lg font-kanit">
          <NuxtLink to="/hr/employee/addEmployee">Add employee</NuxtLink>
        </span>
        </button>
      </div>
      <div class="lg:flex justify-end lg:space-x-4 mt-16">
        <div class="search-wrapper flex justify-center items-center bg-white rounded-lg my-2 px-4 py-2">
          <svg-icon name="Search" width="15" height="15" class="mr-2"/>
          <input v-model="search" @keyup="userData" type="text" placeholder="Search..."
                 class="font-kanit text-lg w-full lg:w-[420px] focus:outline-none "/>
        </div>
        <div>
          <select v-model="position" @change="userData" placeholder="Position"
                  class="rounded-lg px-4 py-2 text-gray14 font-kanit my-2 text-lg lg:w-[236px] w-full focus:outline-none">
            <option value="">Position</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Tester">Tester</option>
            <option value="Dev">Dev</option>
          </select>
        </div>
        <div>
          <select v-model="tag" @change="userData" placeholder="Status"
                  class="rounded-lg px-4 py-2 mt-2 text-gray14 font-kanit text-lg lg:w-[152px] w-full focus:outline-none">
            <option value="">Status</option>
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
  </div>
</template>
<script>

import EmployeeCard from "@/components/EmployeeCard";
import Loading from "@/components/Loading";
import {mapActions} from "vuex";

export default {
  name: "index",
  layout: 'sidebar_hr',
  components: {
    EmployeeCard,
    Loading
  },
  data() {
    return {
      isLoading: true,
      isEdit: false,
      search: '',
      position: '',
      tag: '',
      Employees: []
    }
  },
  computed: {
    filterData() {
      return this.Employees
    }
  },
  mounted() {
    this.userData()
  },
  methods: {
    ...mapActions({
      getEmployee: 'hr/getEmployee'
    }),
    async userData() {
      try {
        const request = {
          search: this.search,
          position: this.position,
          tag: this.tag
        }
        const {data} = await this.getEmployee(request)
        if (data) {
          this.Employees = data.user
          console.log(data.user)
        }
        this.isLoading = false
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
