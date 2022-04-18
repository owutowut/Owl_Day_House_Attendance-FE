<template>
  <div class="mx-4">
    <div class="flex justify-between mb-8" >
      <span class="text-3xl font-semibold">LEAVES</span>
      <button class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center"
      @click="AddLeave">
        <svg-icon name="add1" width="10" height="10" class="mr-2"/>
        <span class="text-lg font-kanit">Add Leave</span>
      </button>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ลาป่วย</p>
        <p class="text-gray4 text-lg">3</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ลากิจ</p>
        <p class="text-gray4 text-lg">2</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">การลาทั้งหมด</p>
        <p class="text-gray4 text-lg">5</p>
      </div>
      <div class="grid grid-cols-2 bg-white  p-4 rounded-lg font-kanit">
        <div class="border-r border-gray13 text-center">
          <div class="text-sm mb-3">ลาทั้งหมด</div>
          <div class="text-gray4 text-lg">5</div>
        </div>
        <div class="text-center ">
          <div class="text-sm mb-3">ลาของเดือนนี้</div>
          <div class="text-gray4 text-lg">3</div>
        </div>
      </div>
    </div>
    <div class="lg:flex lg:justify-end space-x-4 mb-6">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="lg:w-[488px] font-kanit text-lg"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 mt-4 lg:w-[354px] text-gray14 font-kanit text-lg">
          <option value="Leave type" >Leave type</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto  sm:rounded-lg ">
      <table class="lg:w-full">
        <thead class="text-lg text-blue  bg-white">
        <tr>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Leave Type</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>From</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>To</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
              <Span>Actions</Span>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12 " v-for="leave in leaveData" :key="leave.id">
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">{{leave.name}}</td>
          <td class="px-8 py-4 text-gray11 whitespace-nowrap">{{leave.from}}</td>
          <td class="px-8 py-4 text-gray11 whitespace-nowrap">{{leave.to}}</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">{{leave.no_of_day}}</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-yellow rounded-2xl text-white  whitespace-nowrap px-4 " v-if="leave.status=='pending'">pending</div>
            <div class="bg-green rounded-2xl text-white  whitespace-nowrap px-4 " v-if="leave.status=='Approve'">Approve</div>
          </td>
          <td >
            <svg-icon name="Edit_Square" width="25" height="25" class="ml-24 whitespace-nowrap"/>
          </td>
        </tr>
        </tbody>
      </table>

      <AddLeave v-if="isAddLeave" :isAddLeave="isAddLeave" @handleHidAddLeave="onHideAddLeave" @submit="submit"/>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import AddLeave from "@/components/AddLeave";
import Modal from "@/components/Modal";

export default {
  name: "leaves",
  layout: 'sidebar',
  components: {
    AddLeave,Modal
  },
  data() {
    return {
      selected: 'Leave type',
      isAddLeave: false,
      isModal: false,
      search: '',
      leaveData: [
        {
          id:1,
          name:'ลาป่วย',
          from:'11 Jan 2020',
          to:'11 Jan 2020',
          no_of_day: '1 day',
          status: 'Approve'
        },
        {
          id:2,
          name:'ลากิจ',
          from:'5 Jan 2020',
          to:'5 Jan 2020',
          no_of_day: '1 day',
          status: 'pending'
        },
        {
          id:3,
          name:'ลาป่วย',
          from:'24 Mar 2020',
          to:'24 Mar 2020',
          no_of_day: '1 day',
          status: 'pending'
        },
        {
          id:4,
          name:'ลาป่วย',
          from:'18 Mar 2020',
          to:'18 Mar 2020',
          no_of_day: '1 day',
          status: 'pending'
        },
        {
          id: 5,
          name: 'ลากิจ',
          from: '3 Mar 2020',
          to: '3 Mar 2020',
          no_of_day: '1 day',
          status: 'Approve'
        }
      ]
    }
  },
  methods: {
    onHideAddLeave(event) {
      this.isAddLeave = event
    },
    AddLeave() {
      this.isAddLeave = true
    },
    onHideModal(event) {
      this.isModal = event
    },
    submit(event){
      this.isAddLeave = false
      setTimeout(()=>{
        this.isModal = true
      },500)
    }
  }
}
</script>

<style scoped>

</style>
