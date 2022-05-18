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
    <div class="bg-white py-6 rounded-lg lg:flex justify-start lg:space-x-4 p-8 mt-8">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2 my-2 border border-white3">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search to Name.." class="font-kanit text-lg w-full lg:w-96 focus:outline-none"/>
      </div>
      <div>
        <select v-model="month" placeholder="Select Month" class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-72 border border-white3 focus:outline-none">
          <option disabled value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div>
        <select v-model="year" placeholder="Select year" class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-64 border border-white3 focus:outline-none ">
          <option disabled value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020 ">2020</option>
        </select>
      </div>
      <div>
        <button class="bg-blue w-full px-14 py-3 mr-6 my-2 text-white rounded-md" @click="onSearch">Search</button>
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
          <th scope="col" class="" v-for="(n, index) in 31" :key="index">
            <div class="flex">
              {{ n }}
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12" v-for="employee in filterData" :key="employee.id">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{ employee.name }}</td>
          <td v-for="n in employee.dates" :key="n">
            <div v-if="n.status==='present'">
              <svg-icon name="check" width="20" height="20"/>
            </div>
            <div v-if="n.status==='absent'">
              <svg-icon name="cross_red" width="20" height="20"/>
            </div>
            <div v-if="n.status==='late'">
              <svg-icon name="cross_yellow" width="20" height="20"/>
            </div>
            <div v-if="n.status==='wfh'">
              <svg-icon name="wfh" width="20" height="20"/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <paginate
        class="flex justify-end mt-10 text-sm text-black2 space-x-4"
        :pageCount="10"
        :page-range="3"
        :margin-pages="1"
        :clickHandler="onChangePage"
        :prev-text="'<'"
        :next-text="'>'"
        :containerClass="'pagination'"
        :page-class="'page-item'">
      </paginate>
    </div>
  </div>
</template>

<script>

import employee from "@/pages/hr/employee";

export default {
  name: "index",
  layout: 'sidebar_hr',
  data() {
    return {
      search:'',
      month:'',
      year:'',
      filterData:'',
      currentPage: 1,
      perPage: 10,
      employeeData: [
        {
          id: 1,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'absent',
          dates: [],
          months:'3',
          years:'2022'
        },
        {
          id: 2,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'present',
          dates: [],
          months:'1',
          years:'2022'
        },
        {
          id: 3,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'present',
          dates: [],
          months:'2',
          years:'2022'
        },
        {
          id: 4,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'present',
          dates: [],
          months:'1',
          years:'2021'
        },
        {
          id: 5,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'present',
          dates: [],
          months:'1',
          years:'2020'
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          status: 'present',
          dates: [],
          months:'2',
          years:'2022'
        },
        {
          id: 7,
          name: 'BBB',
          status: 'present',
          dates: [],
          months:'3',
          years:'2022'
        },
        {
          id: 8,
          name: 'AAA',
          status: 'present',
          dates: [],
          months:'2',
          years:'2022'
        }
      ]
    }
  },
  methods: {
    onChangePage(i) {
      this.currentPage = i
    },
    onSearch(){
      let result = this.employeeData

      if (this.search.trim()) {
        result = result.filter(val => {
          return val.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.month !== "all") {
        result = result.filter(val => {
          return val.months.toLowerCase().includes(this.month.toLowerCase())
        })
      }
      if (this.year !== "all") {
        result = result.filter(val => {
          return val.years.toLowerCase().includes(this.year.toLowerCase())
        })
      }

      this.filterData = result
    }
  },
  mounted() {
    this.employeeData = this.employeeData.map((employee)=>{
      const date = []
      for (let n = 0; n < 31; n++){
        if (n%7<5){
          date.push({
            day: n,
            status: "present"  // "absent" // "late"
          })
        }else {
          date.push({
            day: n,
            status: "absent"
          })
        }
      }
      return {
        ...employee,
        dates: date
      }
    })
    console.log(this.employeeData)

    this.filterData = this.employeeData
  }
}
</script>

<style scoped>

</style>
