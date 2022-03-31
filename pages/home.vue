<template>
  <div class="">
   <div class="font-semibold text-3xl">Hello! CHAWANNOP</div>
    <div class="grid grid-cols-3 mt-16">
      <div class="bg-white shadow p-6 rounded-md  mr-6">
        <p class="text-2xl ">Timesheet</p>
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
      <div class="bg-white shadow py-6 rounded-md  mr-6">
        <p class="text-2xl mb-6 px-5">Yesterday's work list</p>
        <div class=" flex justify-around border-y-[0.4px] border-white2 py-6 px-5">
          <img src="~/assets/images/Loading.png" class="w-[25px] h-[25px]">
          <span class="text-sm mx-4">Lorem ipsum dolor sit amet,consectetur ...</span>
          <button class="bg-black1 w-[75px] flex justify-center items-center rounded-xl " >
            <img src="~/assets/images/Add.png" class="w-[10px] h-[10px]" >
            <span class="text-xs text-white">ADD TASK</span>
          </button>
        </div>
      </div>
      <div class="grid grid-rows-2">
        <div class="bg-white shadow py-6 rounded-md mb-6">
          <p class="text-2xl px-5">Notifications</p>
          <div class="flex justify-start space-x-2 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <img src="~/assets/images/Danger Circle.png" class="w-[20px] h-[20px]">
            <span class="text-[9px] text-black1 ">คุณได้รับการอนุมัติการลากิจในวันที่ 11 Jan 2021 ของคุณเรียบร้อยแล้ว!</span>
          </div>
        </div>
        <div class="bg-white shadow py-6 rounded-md">
          <p class="text-2xl px-5">Holiday of the month</p>
          <div class="flex justify-start space-x-2 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <img src="~/assets/images/Calendar.png" class="w-[16.25px] h-[16.6px]">
            <span class="text-[9px] text-black1 ">วันสงกรานต์</span>
            <span class="text-[9px] text-black1 ">10/04/2022 - 18/04/2022</span>
          </div>
        </div>
      </div>
    </div>

      <div class="flex justify-between mt-[72px]" >
        <span :class="`${punch ? 'text-3xl font-semibold text-black1' : 'text-3xl font-semibold text-blue opacity-50'}`">TODAY LIST</span>
        <div :class="`${punch ? 'flex  justify-center items-center bg-black1 rounded-md px-5 py-3' : 'flex  justify-center items-center bg-blue opacity-50 rounded-md px-5 py-3'}`">
          <img src="~/assets/images/Add.png" class="w-[15px] h-[15px]">
          <button class=" text-white text-sm " @click="update">ADD TASK</button>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="mt-14 col-span-2">
          <p :class="`${punch ? 'text-lg text-black border-b-2 pb-2' : 'text-lg text-blue opacity-50 border-b-2 pb-2'}`">Pending</p>
        </div>
        <div class="row-start-2 mt-7">
          <div :class="`${punch ? 'bg-white shadow p-6 rounded-md  mr-6 h-[402px]' : 'bg-white opacity-50 shadow p-6 rounded-md  mr-[24px] h-[402px]'}`">
            <p class="text-xs font-medium mt-6">Punch In at</p>
            <p class="text-xs text-gray4 mt-4">Mon, 11 January 2022 10:30 AM</p>
            <div class="flex justify-center mt-[40px]">
              <div class="w-[151px] h-[151px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">2.35 hrs</div>
              </div>
            </div>
            <div class="text-white w-full grid grid-cols-2 gap-6 mt-7">
              <button class="rounded-xl px-5 py-3 bg-red3">Break</button>
              <button class="rounded-xl px-5 py-3 bg-black" @click="completed">Completed</button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="mt-[47px] col-span-2">
          <p :class="`${punch ? 'text-lg text-black border-b-2 pb-2' : 'text-lg text-blue opacity-50 border-b-2 pb-2'}`">Completed</p>
        </div>
        <div class="row-start-2 mt-7">
          <div :class="`${punch ? 'bg-white shadow p-6 rounded-md  mr-6 h-[402px]' : 'bg-white opacity-50 shadow p-6 rounded-md  mr-[24px] h-[402px]'}`">
            <p class="text-xs font-medium  mt-6">Punch In - Punch out</p>
            <p class="text-xs text-gray4 mt-4">Mon, 11 January 2022 10:30 AM - 14:00 AM</p>
            <div class="flex justify-center mt-[40px]">
              <div class="w-[151px] h-[151px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">4.10 hrs</div>
              </div>
            </div>
            <div class="text-white w-full grid grid-cols-2 gap-6 mt-7">
              <button class="rounded-xl px-5 py-3 bg-yellow2">
                <NuxtLink to="/edit_project">Edit</NuxtLink>
              </button>
              <button class="rounded-xl px-5 py-3 bg-black">
                <NuxtLink to="/project_complete">VIEW</NuxtLink>
              </button>
            </div>
          </div>
        </div>
        <div class="row-start-2 mt-7">
          <div :class="`${punch ? 'bg-white shadow p-6 rounded-md  mr-6 h-[402px]' : 'bg-white opacity-50 shadow p-6 rounded-md  mr-[24px] h-[402px]'}`">
            <p class="text-xs font-medium  mt-6">Punch In - Punch out</p>
            <p class="text-xs text-gray4 mt-4">Mon, 11 January 2022 10:30 AM - Tur, 12...</p>
            <div class="flex justify-center mt-10">
              <div class="w-[151px] h-[151px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">3.50 hrs</div>
              </div>
            </div>
            <div class="text-white w-full grid grid-cols-2 gap-6 mt-7">
              <button class="rounded-xl px-5 py-3 bg-yellow2">
                <NuxtLink to="/edit_project">Edit</NuxtLink>
              </button>
              <button class="rounded-xl px-5 py-3 bg-black">
                <NuxtLink to="/project_complete">VIEW</NuxtLink>
              </button>
            </div>
          </div>
        </div>
        <AddTask v-if="isAddTask" :isAddTask="isAddTask" @handleHideAddTask="onHideAddTask" />
        <Completed v-if="isCompleted" :isCompleted="isCompleted" @handleHideCompleted="onHideCompleted" />
      </div>
    </div>

</template>

<script>
import AddTask from "@/components/AddTask";
import Completed from "@/components/Completed";

export default {
  name: "home",
  layout: 'sidebar',
  components: {
    AddTask,Completed
  },
  data(){
    return {
      punch: false,
      isAddTask: false,
      isCompleted: false
    }
  },
  methods: {
    onHideAddTask(event) {
      this.isAddTask = event
    },
    update(){
      this.isAddTask = true
    },
    onHideCompleted(event) {
      this.isCompleted = event
    },
    completed(){
      this.isCompleted = true
    }
  }
}
</script>

<style scoped>

</style>
