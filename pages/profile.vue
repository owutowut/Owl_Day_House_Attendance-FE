<template>
  <div>
    <p class="text-4xl font-semibold mb-[32px]">Profile</p>
    <div class="grid grid-cols-2 gap-6">
      <div class="bg-white shadow  rounded-md flex justify-start items-center pl-[48px]">
        <img src="~/assets/images/Group 894.png" class="h-[126px] w-[126px]">
        <div class="flex flex-col justify-center pl-[24px]">
          <p class="text-blue2">CHAWANNOP THAMMAJAI</p>
          <p class="text-xs text-gray6">UX/UI Designer</p>
          <div class="bg-blue rounded-[15px] text-white text-[10px] w-14 mt-2 flex justify-center">พนักงาน</div>
        </div>
      </div>
      <div class="bg-white shadow p-6 rounded-md grid lg:grid-cols-5 grid-cols-2">
       <div>
         <p class="text-blue2">Date of Join:</p>
         <p class="text-blue2">Phone :</p>
         <p class="text-blue2">Birthday :</p>
         <p class="text-blue2">Address :</p>
         <p class="text-blue2">Report to :</p>
       </div>
        <div class="lg:col-span-2">
          <p class="text-gray7 ">1st Jan 2021</p>
          <p class="text-gray7">088-008-0000</p>
          <p class="text-gray7">18 Mar 1999</p>
          <p class="text-gray7">199/50 one bn kof ,frlp;@:, 10130</p>
          <p class="text-gray7">Manee Owan</p>
        </div>
     </div>
      <div class="bg-white shadow p-6 rounded-md col-end-3">
        <p class="mb-[16px] text-blue2">Account Data</p>
        <div class="flex mb-[16px]">
          <p class="font-light text-blue2">Email :</p> <p class="text-gray7 ml-4 font-light">chwannop@owndayshouse.com</p>
        </div>
        <button class="bg-blue rounded-lg text-white text-xs px-3 py-2">
          <NuxtLink to="/change_password">Change Password</NuxtLink>
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
