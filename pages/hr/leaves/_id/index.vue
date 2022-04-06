<template>
<div>
  <div class="flex justify-between mb-4">
    <span class="text-3xl font-semibold text-blue">LEAVE</span>
    <nuxt-link to="/hr/leaves" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
      <span class="text-lg font-kanit">Back</span>
    </nuxt-link>
  </div>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <div class="flex bg-white p-10 rounded-lg text-left font-kanit border border-gray19 space-x-6">
      <div class="self-center">
        <img :src="leave.profile" class="rounded-full" width="126px" height="126px">
      </div>
      <div class="self-center">
        <p class="text-xl text-blue2">{{ leave.name }}</p>
        <p class="text-base text-gray6 mb-2">{{ leave.department }}</p>
        <div>
          <span class="bg-blue rounded-2xl text-white text-center py-1 px-4">{{ leave.tag }}</span>
        </div>
      </div>
    </div>
    <div class="bg-white p-10 rounded-lg text-left font-kanit border border-gray19">
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Date of Join :</p>
        <p class="text-gray7 mb-2">1st Jan 2021</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Phone :</p>
        <p class="text-gray7 mb-2">088-008-0000</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Birthday :</p>
        <p class="text-gray7 mb-2">18 Mar 1999</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Address :</p>
        <p class="text-gray7 mb-2">199/50 one bn kof ,frlp;@:, 10130</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Report to :</p>
        <p class="text-gray7 mb-2">Manee Owan</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-4 col-span-full flex gap-4 text-gray23">
    <div class="bg-white p-4 rounded-lg text-left font-kanit space-y-1">
      <Span class="text-xl text-blue">From</Span>
      <div class="flex border border-gray12 rounded-md bg-gray22 w-full">
        <p class="px-2 py-1">{{leave.from}}</p>
        <svg-icon name="Calendar" width="16" height="16" class="self-center"/>
      </div>
    </div>
    <div class="bg-white p-4 rounded-lg text-left font-kanit space-y-1">
      <Span class="text-xl text-blue">to</Span>
      <p class="border border-gray12 rounded-md bg-gray22 w-full px-2 py-1">{{leave.to}}</p>
    </div>
    <div class="bg-white p-4 rounded-lg text-left font-kanit space-y-1">
      <Span class="text-base text-blue">No of day</Span>
      <p class="border border-gray12 rounded-md bg-gray22 w-full px-2 py-1">{{leave.noofdays}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "leaveview.vue",
  layout: 'sidebar_hr',
  data() {
    return {
      leave: {
        id: this.$route.params,
        profile: 'https://www.img.in.th/images/351eda90b97de7ef50dc6202a7f03819.jpg',
        name: 'SARAWUT BUNMEE',
        leavetype: 'ลาป่วย',
        from: '11 Jan 2020',
        to: '11 Jan 2020',
        noofdays: '1 day',
        department:'UX/UI Designer',
        tag: 'พนักงาน',
        status: 'Approve',

      },
    }
  },
}
</script>

<style scoped>

</style>
