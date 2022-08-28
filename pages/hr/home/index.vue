<template>
  <Loading v-if="isLoading"/>

  <div v-else class="mb-12">
    <div class="space-y-6">
      <span class="text-3xl font-semibold text-blue">Hello! {{user_profile.first_name}} {{user_profile.last_name}}</span>
      <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <div class="bg-white p-6 rounded-lg">
            <p class="text-2xl font-medium mb-6 px-5">Employee</p>
            <div class="grid grid-cols-2">
              <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
                <p class="text-xs text-black mb-4">พนักงานทั้งหมด</p>
                <p class="text-black text-lg">{{ home_data.all_employee_total }}</p>
              </div>
              <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
                <p class="text-xs text-black mb-4">พนักงาน</p>
                <p class="text-black text-lg">{{ home_data.tag_employee_total }}</p>
              </div>
              <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
                <p class="text-xs text-black mb-4">ทดลองงาน</p>
                <p class="text-black text-lg">{{ home_data.tag_probation_total }}</p>
              </div>
              <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
                <p class="text-xs text-black mb-4">ฝึกงาน</p>
                <p class="text-black text-lg">{{ home_data.tag_internship_total }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white mt-4 py-8 px-4 rounded-lg grid grid-cols-2 ">
            <div class="flex items-center  justify-center">
              <svg-icon name="Man" width="65" height="65"/>
              <span class="text-lg font-medium">{{ gender_percentage.gender_male_percentage }} %</span>
            </div>
            <div class="flex items-center justify-center ">
              <svg-icon name="Female" width="65" height="65"/>
              <span class="text-lg font-medium">{{ gender_percentage.gender_female_percentage }} %</span>
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
              <p class="text-lg text-gray20 text-center mt-6">{{ home_data.attendance_total }}</p>
            </div>
            <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
              <div>
                <svg-icon name="Time Circle" width="40" height="40"/>
                <p class="text-sm font-medium mt-4">Late Coming</p>
              </div>
              <p class="text-lg text-gray20 text-center mt-6">{{ home_data.attendance_late_total }}</p>
            </div>
            <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
              <div>
                <svg-icon name="Close Square" width="40" height="40"/>
                <p class="text-sm font-medium mt-4">Leave</p>
              </div>
              <p class="text-lg text-gray20 text-center mt-6">{{ home_data.leaves_total }}</p>
            </div>
            <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
              <div>
                <svg-icon name="Home" width="40" height="40"/>
                <p class="text-sm font-medium mt-4">Work from Home</p>
              </div>
              <p class="text-lg text-gray20 text-center mt-6">{{ home_data.work_from_home_total }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-2 gap-4">
          <div class="h-[240px] w-full overflow-y-hidden bg-white shadow rounded-md">
            <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
              <p class="text-2xl font-medium px-4 py-3">Notifications</p>
            </div>
            <div class="w-full h-full overflow-x-hidden overflow-y-scroll">
              <div v-for="notification in notificationsData">
                <div class="border-b-[0.4px] border-gray3 flex justify-start space-x-2 py-2 px-3">
                  <div class="self-center">
                    <svg-icon name="DangerCircle" width='20' height="20"/>
                  </div>
                  <span class="self-center text-xs text-black1 font-kanit">{{ notification.notification }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="h-[240px] w-full overflow-y-hidden bg-white shadow rounded-md">
            <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
              <p class="text-2xl font-medium px-4 py-3">Holiday of the month</p>
            </div>
            <div class="w-full h-full overflow-x-hidden overflow-y-scroll">
              <div v-for="holiday in holidays">
                <div class="border-b-[0.4px] border-gray3 flex justify-start space-x-2 py-2 px-3">
                  <svg-icon name="Calendar-yellow" width='20' height="20" class="self-center"/>
                  <span class="self-center text-xs text-black1 font-kanit">{{ holiday.name }}</span>
                  <span class="self-center text-xs text-black1 font-kanit">{{ holiday.from }} - {{ holiday.to }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex md:justify-between pt-4">
        <span class="text-3xl font-semibold text-blue">Attendance Today</span>
        <button class="bg-blue w-full h-10 mt-4 md:mt-0 md:w-44 lg:w-44 text-white rounded-lg text-lg">
          <NuxtLink to="/hr/home/view_all">View all</NuxtLink>
        </button>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div class="bg-white  p-4 rounded-md text-center font-kanit">
          <p class="text-lg mb-4">พนักงาน</p>
          <p class="text-gray4 text-lg">{{ home_data.tag_employee_total }}</p>
        </div>
        <div class="bg-white  p-4 rounded-md text-center font-kanit">
          <p class="text-lg mb-4">ทดลองงาน</p>
          <p class="text-gray4 text-lg">{{ home_data.tag_probation_total }}</p>
        </div>
        <div class="bg-white  p-4 rounded-md text-center font-kanit">
          <p class="text-lg mb-4">ฝึกงาน</p>
          <p class="text-gray4 text-lg">{{ home_data.tag_internship_total }}</p>
        </div>
        <div class="grid grid-cols-2 bg-white  p-4 rounded-lg font-kanit">
          <div class="border-r border-gray13 text-center">
            <div class="text-sm mb-3">เข้างาน</div>
            <div class="text-gray4 text-lg">{{ home_data.attendance_total }}</div>
          </div>
          <div class="text-center ">
            <div class="text-sm mb-3">ลา</div>
            <div class="text-gray4 text-lg">{{ home_data.leaves_total }}</div>
          </div>
        </div>
      </div>
      <div class="lg:flex justify-end lg:space-x-4 mt-6">
        <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2 my-2">
          <svg-icon name="Search" width="15" height="15" class="mr-2"/>
          <input @keyup="homeData" v-model="search" type="text" placeholder="Search. . ."
                 class="font-kanit text-lg w-full lg:w-[656px] focus:outline-none "/>
        </div>
        <div>
          <select @change="homeData" v-model="selected" placeholder="Position"
                  class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-64 focus:outline-none">
            <option value="">Position</option>
            <option value="พนักงาน">พนักงาน</option>
            <option value="ทดลองงาน">ทดลองงาน</option>
            <option value="ฝึกงาน">ฝึกงาน</option>
          </select>
        </div>
        <div>
          <select @change="homeData" v-model="selected_status" placeholder="Status"
                  class="rounded-lg px-4 py-2 my-2 text-gray14 font-kanit text-lg w-full lg:w-56 focus:outline-none">
            <option value="">Status</option>
            <option value="Punch In">Punch In</option>
            <option value="Leaves">Leaves</option>
          </select>
        </div>
      </div>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <Table
          :headers="headers"
          :data="filterData.map((item, index) => {
            return {
              ...item,
              index: (index + 1) + pageStart,
              tag: item.tag === 'พนักงาน' ? 'พนักงาน $พนักงาน$' : item.tag === 'ทดลองงาน' ? 'ทดลองงาน $ทดลองงาน$' : 'ฝึกงาน $ฝึกงาน$',
              status: item.status === 'Punch In' ? 'Punch In $punchIn$' : 'Leaves $leaves$',
              no_of_days: `${item.no_of_days} Days`,
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
          class="flex justify-end text-sm mr-2 text-black2 space-x-4"
          v-model="page"
          :page-count="totalPage"
          :page-range="3"
          :margin-pages="1"
          :click-handler="onChangePage"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          :page-class="'page-item'" list="" name="">
        </paginate>
      </client-only>
    </div>
  </div>
</template>

<script>

import Table from "@/components/Table";
import {mapActions} from "vuex";

export default {
  name: "home",
  layout: 'sidebar_hr',
  components: {
    Table
  },
  data() {
    return {
      perPage: 10,
      page: 1,
      search: '',
      selected: '',
      selected_status: '',
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
      attendanceData: [],
      home_data: [],
      gender_percentage: [],
      notificationsData: {},
      holidays: {},
      user_profile: {},
      isLoading: true,
    }
  },
  mounted() {
    this.homeData()
  },
  methods:{
    ...mapActions({
      getHome: 'hr/getHome',
      getNotifications: 'hr/getNotifications',
      getAttendance: 'hr/getAttendance'
    }),

    onChangePage(i) {
      this.page = i
      this.homeData()
    },
    async userProfile() {
      const verify = await this.$auth.loggedIn

      try {
        if (!verify) {
          return 'Login required!'
        }
        const user=await this.$axios.get('me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` },
        })
        this.user_profile = user.data
        this.isLoading = false
      } catch (error) {
        return error.message
      }
    },

    async homeData () {
      const request = {
        page: this.page,
        search: this.search,
        selected: this.selected,
        selected_status: this.selected_status,
      }
      const {data} = await this.getAttendance(request)
      this.attendanceData = data.data

      const homeData = await this.getHome()
      this.home_data = homeData.data
      this.holidays = homeData.data.holidays

      await this.userProfile()

      const notificationsData = await this.getNotifications(this.user_profile.id)
      this.notificationsData = notificationsData.data.data

      const gender_male_percentage = Math.ceil((this.home_data.gender_male_total*100)/this.home_data.all_employee_total)
      const gender_female_percentage = Math.ceil((this.home_data.gender_female_total*100)/this.home_data.all_employee_total)
      this.gender_percentage = {gender_male_percentage,gender_female_percentage}

      this.isLoading = false
    },
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.attendanceData.perPage
    },
    totalPage() {
      return Math.ceil(this.attendanceData.total / this.attendanceData.perPage)
    },
    filterData() {
      return this.attendanceData.data
    },
  },
}
</script>
