<template>
  <Loading v-if="isLoading"/>

  <div v-else class="pt-8 px-6">
    <div class="mb-10">
      <div class="sm:pb-2 sm:text-center lg:flex lg:justify-between lg:items-center lg:space-y-4 md:space-y-4 sm:space-y-4">
        <span class="text-3xl font-semibold text-blue">Hello! {{user_profile.first_name}} {{user_profile.last_name}}</span>
      </div>
      <div class="text-blue grid md:grid-cols-1 lg:grid-cols-3 mt-4 gap-6">
        <div class="bg-white shadow p-6 rounded-md w-full space-y-4 h-[402px]">
          <p class="text-2xl font-medium">Timesheet</p>
          <p class="text-xs font-medium">Punch In at</p>
          <div>
            <p v-if="!isPunchIn" class="text-xs text-gray4">Pending. . .</p>
            <p v-else class="text-xs text-gray4">{{ punchInData.weekday }}, {{ punchInData.date }} {{ punchInData.punchIn }}</p>
          </div>
          <div class="flex justify-center pt-2 pb-4">
            <div class="w-[151px] h-[151px] bg-gray5 rounded-full flex justify-center items-center">
              <div v-if="!isPunchIn" class="text-lg font-medium">0.00 hrs</div>
              <div v-else class="text-lg font-medium">{{ punchInData.timeRecord }} hrs</div>
             </div>
          </div>
          <div class="text-white w-full grid grid-cols-2 gap-6">
            <button v-if="!isPunchIn" class="rounded-2xl px-4 py-2 bg-green" @click="punchIn">Punch In</button>
            <button v-else disabled class="rounded-2xl px-4 py-2 bg-gray14">Punch In</button>
            <button v-if="!isPunchIn" disabled class="rounded-2xl px-4 py-2 bg-gray14" >Punch Out</button>
            <button v-else class="rounded-2xl px-4 py-2 bg-red2" @click="punchOut">Punch Out</button>
          </div>
         </div>
         <div class="text-blue bg-white shadow rounded-md w-full h-[402px] overflow-y-scroll overflow-x-hidden">
           <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
             <p class="text-2xl font-medium px-4 py-6">Yesterday's work list</p>
           </div>
           <div>
             <div v-for="task in yesterdayTaskData">
               <div class="border-b-[0.4px] border-gray3 w-full space-x-6 py-5 px-3">
                 <div class="mx-3 w-full flex">
                   <div class="w-full flex justify-start space-x-4 overflow-x-hidden">
                     <svg-icon name="Loading" width="25" height="25" class="self-center"/>
                     <span class="self-center text-base font-kanit whitespace-nowrap">{{ task.name }}</span>
                   </div>
                   <div class="w-full flex justify-end pr-5">
                     <button v-if="task.proceeding!=='Pending...'" @click="addYesterdayTask(task.id);isAddToTask=true" class="space-x-1 bg-blue flex justify-center items-center rounded-full px-4 py-2">
                       <svg-icon name="Add" width="10" height="10"/>
                       <span class="text-xs text-white">ADD TASK</span>
                     </button>
                     <button v-else disabled class="space-x-1 bg-gray14 flex justify-center items-center rounded-full px-4 py-2">
                       <svg-icon name="Add" width="10" height="10"/>
                       <span class="text-xs text-white">ADD TASK</span>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="grid grid-rows-2 gap-6">
           <div class="text-blue w-full h-[189px] overflow-y-scroll overflow-x-hidden bg-white shadow rounded-md">
             <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
              <p class="text-2xl font-medium px-4 py-4">Notifications</p>
             </div>
             <div>
               <div v-for="notification in notificationsData">
                 <div class="border-b-[0.4px] border-gray3 flex justify-start space-x-2 py-3 px-3">
                   <div class="self-center">
                     <svg-icon name="DangerCircle" width='20' height="20"/>
                   </div>
                   <span class="self-center text-xs font-kanit">{{ notification.notification }}</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="text-blue w-full h-[189px] overflow-y-scroll overflow-x-hidden bg-white shadow rounded-md">
             <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
               <p class="text-2xl font-medium px-4 py-4">Holiday of the month</p>
             </div>
             <div>
                 <div v-for="holiday in holidayData">
                   <div class="border-b-[0.4px] border-gray3 flex justify-start space-x-2 py-3 px-3">
                     <svg-icon name="Calendar-yellow" width='20' height="20" class="self-center"/>
                     <span class="self-center text-xs text-black1 font-kanit">{{ holiday.name }}</span>
                     <span class="self-center text-xs text-black1 font-kanit">{{ holiday.from }} - {{ holiday.to }}</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

      <div v-if="isPunchIn">
         <div class="row-span-1">
             <div class="flex justify-between mb-4">
               <span class="text-3xl font-semibold text-blue">TODAY LIST</span>
               <div class="flex justify-center items-center bg-black1 rounded-lg px-5 py-3 space-x-2">
                 <svg-icon name="Add" width="15" height="15"/>
                 <button class=" text-white text-sm " @click="show.add_task=true">ADD TASK</button>
               </div>
             </div>

             <!--      Pending-->
             <div>
               <div class="mb-6">
                 <p class="text-lg text-black border-b-2 w-1/2 pb-2">Pending</p>
               </div>
               <div class="flex space-x-6 pb-4 w-full overflow-x-auto">
                 <div v-for="todayTask in taskPendingStatus" class="bg-white rounded-lg w-[280px] p-6">
                   <p class="text-sm font-medium mb-2">Punch In at</p>
                   <p class="text-xs text-gray4 mb-8">{{ todayTask.weekday }}, {{ todayTask.punchInDate }} {{ todayTask.punchIn }}</p>
                   <div class="flex justify-center mt-10">
                     <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                       <div class="text-lg text-black2 font-medium">{{ todayTask.timeRecord }} hrs</div>
                     </div>
                   </div>
                   <div class="text-white text-center flex items-center space-x-4 mt-7">
                     <button class="w-[105px] rounded-2xl py-3 bg-red3 w-full" @click="taskBreak(todayTask.id)">Break</button>
                     <button class="w-[105px] rounded-2xl py-3 bg-blue w-full" @click="taskCompleted(todayTask.id)">Completed</button>
                   </div>
                </div>
               </div>
             </div>
             <!--      Pending-->

             <div>
               <div class="mb-6">
                 <p class="text-lg text-black border-b-2 w-1/2 pb-2">Completed</p>
               </div>
             </div>
              <div class="flex space-x-6 mb-6 pb-4 w-full overflow-x-auto">
                <div v-for="todayTask in taskCompletedStatus" class="bg-white rounded-lg w-[280px] p-6">
                   <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
                   <p class="text-xs text-gray4 mb-8">{{ todayTask.weekday }}, {{ todayTask.punchInDate }} {{ todayTask.punchIn }} - {{ todayTask.punchOutTime }}</p>
                   <div class="flex justify-center mt-10">
                     <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                       <div class="text-lg text-black2 font-medium">{{ todayTask.timeRecord }} hrs</div>
                     </div>
                   </div>
                   <div class="text-white text-center flex items-center space-x-4 mt-7">
                     <a :href="`/user/home/${todayTask.id}/edit`" class="w-[105px] rounded-2xl py-3 bg-yellow2 w-full">Edit</a>
                     <a :href="`/user/home/${todayTask.id}`" class="w-[105px] rounded-2xl py-3 bg-black w-full">View</a>
                   </div>
                </div>
             </div>
         </div>
      </div>

    <div>
      <Modal :show="show" :task_by_id="task_by_id"/>
    </div>

  </div>

</template>

<script>
import Modal from "@/components/Modal";
import {mapActions} from "vuex";

export default {
  name: "home",
  layout: 'sidebar',
  components: {
    Modal,
  },
  data() {
    return {
      isPunchIn: false,
      show: {
        add_task: false,
        completed_task: false,
      },
      holidayData: {},
      isLoading: true,
      task_by_id: {},
      user_profile: {},
      punchInData: {},
      notificationsData: {},
      yesterdayTaskData: [],
      taskPendingStatus: [],
      taskCompletedStatus: {},
      yesterdayDate:'',
      todayDate:'',
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    ...mapActions({
      getUserHoliday: 'user/getUserHoliday',
      notifications: 'user/notifications',
      yesterdayTasks: 'user/yesterdayTasks',
      todayTaskPending: 'user/todayTaskPending',
      todayTaskCompleted: 'user/todayTaskCompleted',
      getTaskByID: 'user/getTaskByID',
      taskUpdate: 'user/taskUpdate',
      attendancePunchIn: 'user/attendancePunchIn',
      attendancePunchOut: 'user/attendancePunchOut',
      userAttendance: 'user/userAttendance',
      addToTask: 'user/addToTask',
    }),

    getDate() {
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      this.todayDate = today.toLocaleDateString()
      this.yesterdayDate = yesterday.toLocaleDateString()
    },

    async getTimeRecord() {
      await this.taskPendingStatus.forEach((item) => {
        const now = new Date()
        const currentTime = now.getTime()
        const from = new Date(item.created_at)
        const timeRecord = from.getTime()
        const result = Math.abs(currentTime-timeRecord)/36e5
        const oldTimeRecord = item.timeRecord

        item.timeRecord = parseFloat(result+oldTimeRecord).toFixed(2)

        const data = {
          id: item.id,
          timeRecord: item.timeRecord
        }
        this.taskUpdate(data)

        return this.taskPendingStatus
      })
    },

    async asyncData() {
      await this.getDate()
      await this.profile()

      const notificationsData = await this.notifications(this.user_profile.id)
      this.notificationsData = notificationsData.data.data

      const {data} = await this.getUserHoliday()
      this.holidayData = data.data

      const userAttendanceData = await this.userAttendance(this.user_profile.id)
      this.punchInData = userAttendanceData.data.data

      if (this.punchInData.status==='Punch In') {
        this.isPunchIn = true

        const request = {
          id: this.user_profile.id,
          yesterday: this.yesterdayDate,
        }
        const yesterdayTask = await this.yesterdayTasks(request)
        this.yesterdayTaskData = yesterdayTask.data.data
      }

      const requestTodayTask = {
        id: this.user_profile.id,
        today: this.todayDate,
      }
      const todayTaskPending = await this.todayTaskPending(requestTodayTask)
      this.taskPendingStatus = todayTaskPending.data.data
      await this.getTimeRecord()

      const todayTaskCompleted = await this.todayTaskCompleted(requestTodayTask)
      this.taskCompletedStatus = todayTaskCompleted.data.data

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

    async punchIn() {
      const request = {
        user_id: this.user_profile.id,
        name: `${this.user_profile.first_name} ${this.user_profile.last_name}`,
        tag: this.user_profile.tag,
        status: 'Punch In'
      }
      await this.attendancePunchIn(request)
        .then(response => {
          if (response) {
            this.$router.go(0)
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    async punchOut() {
      const request = {
        id: this.punchInData.id,
        status: 'Leaves'
      }
      await this.attendancePunchOut(request)
        .then(response => {
          if (response) {
            this.$router.go(0)
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },

    async taskBreak(id) {
      const request = {
        id: id,
        status: 'Break',
      }
      await this.taskUpdate(request)
        .then(response => {
          if (response) {
            this.$router.go(0)
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    async taskCompleted(id) {
      const {data} = await this.getTaskByID(id)
      this.task_by_id = data.data

      this.show.completed_task = true
    },

    async addYesterdayTask(id) {
      const {data} = await this.getTaskByID(id)
      const oldTask = data
      oldTask.data.punchInDate = this.todayDate
      await this.addToTask(oldTask)

      await this.$router.go(0)
    }
  }
}
</script>
