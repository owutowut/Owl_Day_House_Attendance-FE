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
        <input v-model="search" type="text" placeholder="Search to Name.." class="font-kanit text-lg w-96"/>
      </div>
      <div>
        <select
          v-model="month"
          @change="onChange"
          class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-72 border border-white3"
        >
          <option>Select Month</option>
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
        <select
          v-model="year"
          @change="onChange"
          class="
          rounded-lg
          px-4
          py-2
          text-gray14
          font-kanit
          text-lg
          w-64
          border border-white3
        "
        >
          <option>Select Year</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
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
          <th scope="col" class="" v-for="n in 31" :key ="n">
            <div class="flex items-center justify-center">
              {{ n }}
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12"  v-for="employee in employeeData" :key="employee.id">
        <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{employee.name}}</td>
          <td v-for="n in 31" :key ="n">
            <div v-if="employee.status=='active'" >
              <svg-icon name="check" width="20" height="20" />
            </div>
            <div v-if="employee.status=='weekend'">
              <svg-icon name="cross_red" width="20" height="20" />
            </div>
            <div v-if="employee.status=='wait'">
              <svg-icon name="cross_yellow" width="20" height="20" />
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <paginate
        class="flex justify-end mt-10 text-xl text-black2"
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

export default {
  name: "index",
  layout: 'sidebar_hr',
  data(){
    return {
      currentPage: 1,
      perPage: 10,
      employeeData: [
        {
          id:1,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:2,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:3,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:4,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:5,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:6,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:7,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        },
        {
          id:8,
          name:'CHAWANNOP THAMMAJAI',
          status: 'active'
        }
      ]
    }
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.data.perPage
    }
  },
  methods: {
    onChangePage(i) {
      this.currentPage = i
    }
  },

}
</script>

<style scoped>

</style>
