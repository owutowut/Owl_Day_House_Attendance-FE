<template>
  <div class="mx-4">
    <div class="font-semibold text-3xl">Hello! CHAWANNOP</div>
    <div class="grid md:grid-cols-1 lg:grid-cols-3 mt-16 gap-6">
      <div class="bg-white shadow p-6 rounded-md  ">
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
      <div class="bg-white shadow py-6 rounded-md  mr-6">
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
      <div class="grid grid-rows-2">
        <div class="bg-white shadow py-6 rounded-md mb-6">
          <p class="text-2xl font-medium px-5">Notifications</p>
          <div class="flex justify-start space-x-2 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="DangerCircle" width="20" height="20"/>
            <span class="text-xs text-black1 font-kanit">คุณได้รับการอนุมัติการลากิจในวันที่ 11 Jan 2021 ของคุณเรียบร้อยแล้ว!</span>
          </div>
        </div>
        <div class="bg-white shadow py-6 rounded-md">
          <p class="text-2xl font-medium px-5">Holiday of the month</p>
          <div class="flex items-center space-x-6 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="Calendar-yellow" width='20' height="20"/>
            <span class="text-xs text-black1 font-kanit">วันสงกรานต์</span>
            <span class="text-xs text-black1 font-kanit">10/04/2022 - 18/04/2022</span>
          </div>
        </div>
      </div>
    </div>

    <div :class="`${!punch ? 'opacity-50' : ''}`">
      <div class="flex justify-between mt-24">
        <span :class="`text-3xl font-semibold text-blue`">TODAY LIST</span>
        <div
          :class="`flex justify-center items-center bg-black1 rounded-lg px-5 py-3 space-x-2`">
          <svg-icon name="Add" width="15" height="15"/>
          <button class=" text-white text-sm " @click="update">ADD TASK</button>
        </div>
      </div>

      <!--      Pending-->
      <div>
        <div class="mt-14 mb-6">
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
        <div class="mt-14 mb-6">
          <p :class="`text-lg text-black border-b-2 w-1/2 pb-2`">Completed</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          :class="`${punch ? 'bg-white shadow p-6 rounded-md' : 'bg-white opacity-50 shadow p-6 rounded-md'}`"
        >
          <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
          <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022 10:30 AM - 14:00 AM</p>
          <div class="flex justify-center mt-[40px]">
            <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
              <div class="text-lg text-black2 font-medium">4.10 hrs</div>
            </div>
          </div>
          <div class="text-white flex items-center space-x-4 mt-7">
            <button class="rounded-2xl px-5 py-3 bg-yellow2 w-full">
              <NuxtLink to="/edit-project">Edit</NuxtLink>
            </button>
            <button class="rounded-2xl px-5 py-3 bg-black w-full">
              <NuxtLink to="/view-project">View</NuxtLink>
            </button>
          </div>
        </div>
        <div
          :class="`${punch ? 'bg-white shadow p-6 rounded-md' : 'bg-white opacity-50 shadow p-6 rounded-md'}`"
        >
          <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
          <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022  10.30 AM - Tur, 12 ... </p>
          <div class="flex justify-center mt-[40px]">
            <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
              <div class="text-lg text-black2 font-medium">3.50 hrs</div>
            </div>
          </div>
          <div class="text-white flex items-center space-x-4 mt-7">
            <button class="rounded-2xl px-5 py-3 bg-yellow2 w-full">
              <NuxtLink to="/edit-project">Edit</NuxtLink>
            </button>
            <button class="rounded-2xl px-5 py-3 bg-black w-full">
              <NuxtLink to="/view-project">View</NuxtLink>
            </button>
          </div>
        </div>
      </div>
        <AddTask v-if="isAddTask" :isAddTask="isAddTask" @handleHideAddTask="onHideAddTask"/>
        <Completed v-if="isCompleted" :isCompleted="isCompleted" @handleHideCompleted="onHideCompleted"/>
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
    AddTask, Completed
  },
  data() {
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
