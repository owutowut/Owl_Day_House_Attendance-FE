<template>
  <Loading v-if="isLoading"/>

  <div v-else class="pt-8 px-6">
    <div>
       <div class="mb-14">
         <div class="sm:pb-2 sm:text-center lg:flex lg:justify-between lg:items-center lg:space-y-4 md:space-y-4 sm:space-y-4">
           <span class="text-3xl font-semibold text-blue">Hello! {{user_profile.first_name}} {{user_profile.last_name}}</span>
         </div>
         <div class="grid md:grid-cols-1 lg:grid-cols-3 mt-4 gap-6">
           <div class="bg-white shadow p-6 rounded-md h-[427px]">
             <p class="text-2xl font-medium">Timesheet</p>
             <p class="text-xs font-medium  mt-6">Punch In at</p>
             <p class="text-xs text-gray4 mt-4">Mon, 11 January 2022 10:30 AM</p>
             <div class="flex justify-center mt-[40px]">
               <div class="w-[151px] h-[151px] bg-gray5 rounded-full flex justify-center items-center">
                 <div class="text-lg text-black2 font-medium">2.35 hrs</div>
               </div>
             </div>
             <div class="text-white w-full grid grid-cols-2 gap-6 mt-7">
               <button class="rounded-xl px-5 py-3 bg-green" @click="punch = true">Punch In</button>
               <button class="rounded-xl px-5 py-3 bg-red2" @click="punch = false">Punch Out</button>
             </div>
           </div>
           <div class="bg-white shadow py-6 rounded-md w-full h-[427px]">
             <p class="text-2xl font-medium mb-6 px-5">Yesterday's work list</p>
             <div class="flex justify-between items-center border-y-[0.4px] border-white2 py-6 px-5">
               <div class="flex items-center space-x-4">
                 <svg-icon name="Loading" width="25" height="25"/>
                 <span class="text-sm font-light">Lorem ipsum dolor sit amet,consectetur ...</span>
               </div>
               <button class="bg-black1 flex justify-center items-center rounded-full px-2 py-1">
                 <svg-icon name="Add" width="10" height="10"/>
                 <span class="text-xs text-white ml-1">ADD TASK</span>
               </button>
             </div>
           </div>
           <div class="grid grid-rows-2 gap-6">
             <div class="h-[200px] w-[364px] bg-white shadow rounded-md">
               <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
                <p class="text-2xl font-medium px-4 py-3">Notifications</p>
               </div>
               <div class="w-full h-[145px] overflow-x-hidden overflow-y-scroll">
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
             <div class="h-[200px] w-[364px] bg-white shadow rounded-md">
               <div class="border-b-[0.4px] border-gray3 bg-white w-full rounded-t-md">
                 <p class="text-2xl font-medium px-4 py-3">Holiday of the month</p>
               </div>
               <div class="w-full h-[145px] overflow-x-hidden overflow-y-scroll">
                   <div v-for="holiday in homeData">
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
         </div>
       </div>

       <div class="row-span-1">
         <div :class="`${!punch ? 'opacity-50' : ''}`">
           <div class="flex justify-between">
             <span :class="`text-3xl font-semibold text-blue`">TODAY LIST</span>
             <div
               :class="`flex justify-center items-center bg-black1 rounded-lg px-5 py-3 space-x-2`">
               <svg-icon name="Add" width="15" height="15"/>
               <button class=" text-white text-sm " @click="update">ADD TASK</button>
             </div>
           </div>

           <!--      Pending-->
           <div>
             <div class="mb-6">
               <p :class="`text-lg text-black border-b-2 w-1/2 pb-2`">
                 Pending</p>
             </div>
             <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div
                 :class="`${punch ? 'bg-white shadow p-6 rounded-md' : 'bg-white opacity-50 shadow p-6 rounded-md'}`"
               >
                 <p class="text-sm font-medium mb-2">Punch In at</p>
                 <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022 10:30 AM</p>
                 <div class="flex justify-center mt-10">
                   <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                     <div class="text-lg text-black2 font-medium">2.35 hrs</div>
                   </div>
                 </div>
                 <div class="text-white flex items-center space-x-4 mt-7">
                   <button class="rounded-2xl px-5 py-3 bg-red3 w-full">Break</button>
                   <button class="rounded-2xl px-5 py-3 bg-black w-full" @click="completed">Completed</button>
                 </div>
               </div>
             </div>
           </div>
           <!--      Pending-->

           <div>
             <div class="mb-6">
               <p :class="`text-lg text-black border-b-2 w-1/2 pb-2`">Completed</p>
             </div>
           </div>
           <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div
               :class="`${punch ? 'bg-white shadow p-6 rounded-md' : 'bg-white opacity-50 shadow p-6 rounded-md'}`"
               v-for="item in completed_data" :key="item.id"
             >
               <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
               <p class="text-xs text-gray4 mb-8">{{item.day}}</p>
               <div class="flex justify-center mt-[40px]">
                 <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                   <div class="text-lg text-black2 font-medium">{{item.time}}</div>
                 </div>
               </div>
               <div class="text-white text-center flex items-center space-x-4 mt-7">
                 <NuxtLink :to="`/admin/home/${item.id}/edit`" class="rounded-2xl px-5 py-3 bg-yellow2 w-full">Edit</NuxtLink>
                 <NuxtLink :to="`/admin/home/${item.id}`" class="rounded-2xl px-5 py-3 bg-black w-full">View</NuxtLink>
               </div>
             </div>
           </div>
           <AddTask v-if="isAddTask" :isAddTask="isAddTask" @handleHideAddTask="onHideAddTask"/>
           <Completed v-if="isCompleted" :isCompleted="isCompleted" @handleHideCompleted="onHideCompleted"/>
         </div>
       </div>
    </div>
</template>

<script>
import AddTask from "@/components/AddTask";
import Completed from "@/components/Completed";
import {mapActions} from "vuex";

export default {
  name: "home",
  layout: 'sidebar',
  components: {
    AddTask, Completed
  },
  data() {
    return {
      punch: false,
      isAddTask: false,
      isCompleted: false,
      homeData: {},
      isLoading: true,
      user_profile: {},
      notificationsData: {},
      completed_data: [
        {
          id:1,
          day:'Mon, 11 January 2022 10:30 AM - 14:00 AM',
          time:"4.10 hrs",
        },
        {
          id:2,
          day:'Mon, 11 January 2022  10.30 AM - Tur, 12 ...',
          time:"3.50 hrs",
        }
      ]
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    ...mapActions({
      getHome: 'user/getHome',
      notifications: 'user/notifications'
    }),

    async asyncData() {
      await this.profile()

      const {data} = await this.getHome()
      this.homeData = data.data

      const notificationsData = await this.notifications(this.user_profile.id)
      this.notificationsData = notificationsData.data.data

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

    onHideAddTask(event) {
      this.isAddTask = event
    },
    update() {
      this.isAddTask = true
    },
    onHideCompleted(event) {
      this.isCompleted = event
    },
    completed() {
      this.isCompleted = true
    }
  }
}
</script>

<style scoped>

</style>
