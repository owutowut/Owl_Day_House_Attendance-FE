<template>
  <div>
    <p class="text-4xl font-semibold mb-8">Profile</p>
    <div class="grid grid-cols-2 gap-6">
      <div class="bg-white shadow  rounded-md flex justify-start items-center pl-14">
        <img src="~/assets/images/Group 894.png" class="h-[126px] w-[126px]">
        <div class="flex flex-col justify-center pl-8">
          <p class="text-blue2">CHAWANNOP THAMMAJAI</p>
          <p class="text-xs text-gray6">UX/UI Designer</p>
          <div class="bg-blue rounded-xl text-white text-xs w-1/3 mt-2 py-1 font-kanit flex justify-center">
            <p>พนักงาน</p>
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
      <div class="bg-white shadow p-6 rounded-md col-end-3">
        <p class="mb-6 text-blue2">Account Data</p>
        <div class="flex mb-6">
          <p class="font-light text-blue2">Email :</p> <p class="text-gray7 ml-4 font-light">chwannop@owndayshouse.com</p>
        </div>
        <button class="bg-blue rounded-lg text-white text-xs px-3 py-2">
          <NuxtLink to="/change-password">Change Password</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
