<template>
  <Loading v-if="isLoading"/>

  <div v-else class="mx-6 my-10">
    <div class="mb-6 space-x-6 flex">
      <span class="text-3xl font-semibold">Yesterday’s Work List</span>
      <div class="self-center">
        <span v-if="isHoliday===false" class="text-lg font-medium bg-blue py-1 px-4 text-white rounded-lg"> {{yesterdayDate}} </span>
        <span v-else class="text-lg font-medium bg-red1 py-1 px-4 text-white rounded-lg"> วันหยุด </span>
      </div>
    </div>
    <div class="space-y-4">
      <div class="flex border border-white1 bg-white1 rounded-lg px-6 py-4" v-for="(item, index) in work_list_data" :key="item.id">
        <div class="w-full space-x-8 flex justify-start">
          <img v-if="item.status === 'Completed'" src="~/assets/images/check-circle-solid2.svg" class="w-[25px] h-[25px]" alt="">
          <img v-else src="~/assets/images/Loading.png" class="w-[25px] h-[25px]" alt="">
          <p class="font-light text-lg ">{{item.details}}</p>
        </div>
        <div class="flex justify-end">
          <NuxtLink v-if="item.status === 'Completed'" :to="`/user/work-list-yesterday/${item.id}`" class="w-[110px] text-center bg-blue rounded-lg py-2 text-white text-xs font-light">VIEW</NuxtLink>
          <div v-else>
            <div v-if="item.proceeding!=='Pending...'">
              <button @click="addYesterdayTask(item.id)" class="whitespace-nowrap bg-blue w-[110px] py-2 text-white rounded-lg text-xs font-light">ADD TO TASKS </button>
            </div>
            <div v-else>
              <button disabled class="whitespace-nowrap bg-gray14 w-[110px] py-2 text-white rounded-lg text-xs font-light">ADD TO TASKS </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions} from "vuex";

export default {
  name: "index",
  layout: 'sidebar',
  data(){
    return{
      work_list_data: {},
      user_profile:{},
      isLoading: true,
      yesterdayDate:'',
      todayDate:'',
      holidays: '',
      isHoliday: false,
      taskPendingStatus: [],
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    ...mapActions({
      yesterdayWorkList: 'user/yesterdayWorkList',
      getUserHoliday: 'user/getUserHoliday',
      getTaskByID: 'user/getTaskByID',
      addToTask: 'user/addToTask',
      todayTaskPending: 'user/todayTaskPending',
    }),

    getYesterdayDate() {
      const today = new Date()
      const yesterday = new Date()
      yesterday.setDate(today.getDate() - 1)

      this.todayDate = today.toLocaleDateString()
      this.yesterdayDate = yesterday.toLocaleDateString()
    },

    checkHoliday() {
      this.holidays.forEach((item) => {
        const getHolidaysDate = new Date(item.from)
        const checkHolidays = getHolidaysDate.toLocaleDateString()
        if (this.yesterdayDate===checkHolidays) {
          return this.isHoliday=true
        }
      })
    },
    async addYesterdayTask(id) {
      const {data} = await this.getTaskByID(id)
      const oldTask = data
      oldTask.data.punchInDate = this.todayDate
      await this.addToTask(oldTask)

      await this.$router.go(0)
    },

    async asyncData() {
      await this.profile()

      await this.getYesterdayDate()

      const getHoliday = await this.getUserHoliday()
      this.holidays = getHoliday.data.data

      await this.checkHoliday()

      if (this.isHoliday===false) {
        const requestTodayTask = {
          id: this.user_profile.id,
          today: this.todayDate,
        }
        const todayTaskPending = await this.todayTaskPending(requestTodayTask)
        this.taskPendingStatus = todayTaskPending.data.data

        const data = {
          id: this.user_profile.id,
          yesterday: this.yesterdayDate,
        }
        const taskData = await this.yesterdayWorkList(data)
        this.work_list_data = taskData.data.data
      }

      this.isLoading = false
    },

    async profile() {
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
  }
}
</script>

<style scoped>

</style>
