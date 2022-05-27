<template>
  <div>
    <div class="font-semibold text-3xl">Hello! HR</div>
    <div class="grid md:grid-cols-1 lg:grid-cols-3 mt-16 gap-6">
      <div>
        <div class="bg-white p-6 rounded-lg">
          <p class="text-2xl font-medium mb-6 px-5">Employee</p>
          <div class="grid grid-cols-2">
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">พนักงานทั้งหมด</p>
              <p class="text-black text-lg">15</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">พนักงาน</p>
              <p class="text-black text-lg">8</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">ทดลองงาน</p>
              <p class="text-black text-lg">4</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">ฝึกงาน</p>
              <p class="text-black text-lg">3</p>
            </div>
          </div>
        </div>
        <div class="bg-white mt-4 py-6 px-4 rounded-lg grid grid-cols-2 ">
          <div class="flex items-center  justify-center">
            <svg-icon name="Man" width="65" height="65"/>
            <span class="text-lg font-medium">60%</span>
          </div>
          <div class="flex items-center justify-center ">
            <svg-icon name="Female" width="65" height="65"/>
            <span class="text-lg font-medium">40%</span>
          </div>
        </div>
      </div>
      <div class="bg-white py-6 rounded-lg">
        <p class="text-2xl font-medium mb-6 px-5">Employee Availability</p>
        <div class="grid grid-cols-2">
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Work" width="40" height="40"/>
              <p class="text-sm font-medium mt-4">Attendance</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">10</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Time Circle" width="40" height="40"/>
              <p class="text-sm font-medium mt-4">Late Coming</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">3</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Close Square" width="40" height="40"/>
              <p class="text-sm font-medium mt-4">Leave</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">1</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Home" width="40" height="40"/>
              <p class="text-sm font-medium mt-4">Work from Home</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">1</p>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2">
        <div class="bg-white py-6 rounded-md mb-6">
          <p class="text-2xl font-medium px-5">Notifications</p>
          <div class="flex justify-start space-x-2 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="DangerCircle" width="20" height="20"/>
            <span class="text-xs text-black1 font-kanit">คุณได้รับการอนุมัติการลากิจในวันที่ 11 Jan 2021 ของคุณเรียบร้อยแล้ว!</span>
          </div>
        </div>
        <div class="bg-white py-6 rounded-lg">
          <p class="text-2xl font-medium px-5">Holiday of the month</p>
          <div class="flex items-center space-x-6 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="Calendar-yellow" width='20' height="20"/>
            <span class="text-xs text-black1 font-kanit">วันสงกรานต์</span>
            <span class="text-xs text-black1 font-kanit">10/04/2022 - 18/04/2022</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-24">
      <span class="text-3xl font-semibold">Attendance Today</span>
      <button class="bg-blue px-6 md:px-10 md:py-2 text-white rounded-lg text-lg">
        <NuxtLink to="/hr/home/view_all">View all</NuxtLink>
      </button>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">พนักงาน</p>
        <p class="text-gray4 text-lg">3</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ทดลองงาน</p>
        <p class="text-gray4 text-lg">2</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ฝึกงาน</p>
        <p class="text-gray4 text-lg">5</p>
      </div>
      <div class="grid grid-cols-2 bg-white  p-4 rounded-lg font-kanit">
        <div class="border-r border-gray13 text-center">
          <div class="text-sm mb-3">เข้างาน</div>
          <div class="text-gray4 text-lg">10</div>
        </div>
        <div class="text-center ">
          <div class="text-sm mb-3">ลา</div>
          <div class="text-gray4 text-lg">3</div>
        </div>
      </div>
    </div>
    <div class="lg:flex justify-end lg:space-x-4 mt-6">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2 my-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search to Name.."
               class="font-kanit text-lg w-full lg:w-[656px] focus:outline-none "/>
      </div>
      <div>
        <select v-model="selected" placeholder="Position"
                class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-64 focus:outline-none">
          <option value="all">Position</option>
          <option value="พนักงาน">พนักงาน</option>
          <option value="ทดลองงาน">ทดลองงาน</option>
          <option value="ฝึกงาน">ฝึกงาน</option>
        </select>
      </div>
      <div>
        <select v-model="select_status" placeholder="Status"
                class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-56 focus:outline-none">
          <option value="all">Status</option>
          <option value="PunchIn">Punch In</option>
          <option value="PunchOut">Punch Out</option>
          <option value="Leaves">Leaves</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg mt-6">
      <Table
        :headers="headers"
        :data="filterData.map((item, index) => {
          return {
            ...item,
            index: (index + 1) + pageStart,
            tag: item.tag === 'พนักงาน' ? 'พนักงาน $พนักงาน$' : item.tag === 'ทดลองงาน' ? 'ทดลองงาน $ทดลองงาน$' : 'ฝึกงาน $ฝึกงาน$',
            status: item.status === 'punchIn' ? 'Punch In $punchIn$' : 'Leaves $leaves$',
            noofdays: `${item.noofdays} Days`
          }
      })">
        <template v-slot:action="data">
          <div class="cursor-pointer flex justify-center items-center">
            <NuxtLink :to="`/hr/home/${data.data.id}`">
              <svg-icon name="Search2" width='24' height='24' class="text-blue"/>
            </NuxtLink>
          </div>
        </template>
      </Table>
    </div>
    <client-only>
      <paginate
        class="flex justify-end mt-10 text-sm text-black2 space-x-4"
        v-model="page"
        :page-count="10"
        :page-range="3"
        :margin-pages="1"
        :click-handler="onChangePage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate>
    </client-only>
  </div>
</template>

<script>

import Table from "@/components/Table";

export default {
  name: "home",
  layout: 'sidebar_hr',
  components: {
    Table
  },
  data() {
    return {
      sort: {
        field: '',
        sorted: true,
      },
      page: 10,
      search: '',
      selected: 'all',
      select_status: 'all',
      icon: 'Search',
      headers: [
        {
          title: 'Employee',
          key: 'name',
        },
        {
          title: 'Punch In',
          key: 'punchIn',
          sort: 'punchIn',
        },
        {
          title: 'Punch Out',
          key: 'punchOut',
          sort: 'punchOut',
        },
        {
          title: 'Tag',
          key: 'tag',
          sort: 'tag',
        },
        {
          title: 'Status',
          key: 'status',
          sort: 'status',
        },
        {
          title: 'Actions',
          key: 'action',
        }
      ],
      mockData: [
        {
          id: 1,
          name: 'bjaja',
          punchIn: '10.30 AM',
          punchOut: '--.-- AM',
          tag: 'พนักงาน',
          status: 'punchIn'
        },
        {
          id: 2,
          name: 'monomo',
          punchIn: '10.30 AM',
          punchOut: '--.-- AM',
          tag: 'พนักงาน',
          status: 'punchIn'
        },
        {
          id: 3,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '10.32 AM',
          punchOut: '--.-- AM',
          tag: 'ทดลองงาน',
          status: 'punchIn'
        },
        {
          id: 4,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '10.25 AM',
          punchOut: '10.00 AM',
          tag: 'ฝึกงาน',
          status: 'punchIn'
        },
        {
          id: 5,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '10.36 AM',
          punchOut: '--.-- AM',
          tag: 'ฝึกงาน',
          status: 'punchIn'
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '--.-- AM',
          punchOut: '--.-- AM',
          tag: 'พนักงาน',
          status: 'leaves'
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '--.-- AM',
          punchOut: '--.-- AM',
          tag: 'ทดลองงาน',
          status: 'leaves'
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          punchIn: '--.-- AM',
          punchOut: '--.-- AM',
          tag: 'ฝึกงาน',
          status: 'leaves'
        },
      ]
    }
  },
  methods:{
    onChangePage(){

    }
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },
    filterData() {
      let result = this.mockData

      if (this.search.trim()) {
        result = result.filter(val => {
          return val.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        result = result.filter(val => {
          return val.tag.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      if (this.select_status !== "all") {
        result = result.filter(val => {
          return val.status.toLowerCase().includes(this.select_status.toLowerCase())
        })
      }

      return result
    },
  },
}
</script>

<style scoped>

</style>
