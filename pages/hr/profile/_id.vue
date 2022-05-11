<template>
  <div>
    <div class="flex justify-between mb-8">
      <span class="text-3xl font-semibold">Profile</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <NuxtLink to="/hr/home">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="bg-white shadow  rounded-md flex justify-start items-center pl-14 py-8">
        <img src="~/assets/images/Group894.png" class="h-32 w-32">
        <div class="flex flex-col justify-center pl-8">
          <p class="text-blue2">CHAWANNOP THAMMAJAI</p>
          <p class="text-xs text-gray6">UX/UI Designer</p>
          <div class="bg-blue rounded-xl text-white text-xs w-1/3 mt-2 py-1 px-10 font-kanit flex justify-center">
            พนักงาน
          </div>
        </div>
      </div>
      <div class="bg-white shadow p-6 rounded-md grid lg:grid-cols-5 grid-cols-2">
        <div class="text-blue2 ">
          <p class="py-2">Date of Join:</p>
          <p class="py-2">Phone :</p>
          <p class="py-2">Birthday :</p>
          <p class="py-2">Address :</p>
          <p class="py-2">Report to :</p>
        </div>
        <div class="lg:col-span-2 text-gray7">
          <p class="py-2">1st Jan 2021</p>
          <p class="py-2">088-008-0000</p>
          <p class="py-2">18 Mar 1999</p>
          <p class="py-2">199/50 one bn kof ,frlp;@:, 10130</p>
          <p class="py-2">Manee Owan</p>
        </div>
      </div>
    </div>
    <div>
      <p class="text-3xl font-semibold text-blue mt-12">TODAY LIST</p>
      <div>
        <div class="mt-14 mb-6">
          <p class="text-lg text-black border-b-2 w-1/2 pb-2">Pending</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white shadow p-6 rounded-md">
            <p class="text-sm font-medium mb-2">Punch In at</p>
            <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022 10:30 AM</p>
            <div class="flex justify-center mt-10">
              <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">2.35 hrs</div>
              </div>
            </div>
            <div class="text-white flex items-center space-x-4 mt-7">
              <button class="rounded-2xl px-5 py-3 bg-red3 w-full">Break</button>
              <button class="rounded-2xl px-5 py-3 bg-black w-full">Completed</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-14 mb-6">
          <p class="text-lg text-black border-b-2 w-1/2 pb-2">Completed</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white shadow p-6 rounded-md">
            <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
            <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022 10:30 AM - 14:00 AM</p>
            <div class="flex justify-center mt-[40px]">
              <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">4.10 hrs</div>
              </div>
            </div>
            <div class="text-white flex items-center space-x-4 mt-7">
              <button class="rounded-2xl px-5 py-3 bg-yellow2 w-full">Edit</button>
              <button class="rounded-2xl px-5 py-3 bg-black w-full">
                <nuxt-link to="/hr/project-complete">View</nuxt-link>
              </button>
            </div>
          </div>
          <div class="bg-white shadow p-6 rounded-md">
            <p class="text-sm font-medium mb-2">Punch In - Punch out</p>
            <p class="text-xs text-gray4 mb-8">Mon, 11 January 2022  10.30 AM - Tur, 12 ... </p>
            <div class="flex justify-center mt-[40px]">
              <div class="w-[124px] h-[124px] bg-gray5 rounded-full flex justify-center items-center">
                <div class="text-lg text-black2 font-medium">3.50 hrs</div>
              </div>
            </div>
            <div class="text-white flex items-center space-x-4 mt-7">
              <button class="rounded-2xl px-5 py-3 bg-yellow2 w-full">Edit</button>
              <button class="rounded-2xl px-5 py-3 bg-black w-full">
                <nuxt-link to="/hr/project-complete">View</nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: 'sidebar_hr'
}
</script>

<style scoped>

</style>
