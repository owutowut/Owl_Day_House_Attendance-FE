<template>
  <div>
    <div class="flex justify-between mb-[24px]" >
      <span class="text-3xl font-semibold">LEAVES</span>
      <button class="bg-yellow px-10 py-2 text-white rounded-[8px] text-[18px] font-light flex justify-center items-center"
      @click="AddLeave">
        <img src="~/assets/images/Add.png" class="w-[15px] h-[15px]" >
        <span class="text-[18px]">Add Leave</span>
      </button>
    </div>
    <div class="grid grid-cols-4 gap-[24px] mb-[34px]">
      <div class="bg-white shadow p-6 rounded-md text-center">
        <p class="text-[18px] ">ลาป่วย</p>
        <p class="text-gray4">3</p>
      </div>
      <div class="bg-white shadow p-6 rounded-md text-center">
        <p class="text-[18px]">ลากิจ</p>
        <p class="text-gray4">2</p>
      </div>
      <div class="bg-white shadow p-6 rounded-md text-center">
        <p class="text-[18px]">การลาทั้งหมด</p>
        <p class="text-gray4">5</p>
      </div>
      <div class="grid grid-cols-2 bg-white shadow p-6 rounded-md ">
        <div class="border-r border-gray13 text-center">
          <span class="text-[14px] ">ลาทั้งหมด</span>
          <p class="text-gray4">5</p>
        </div>
        <div class="text-center ">
          <span class="text-[14px] ">ลาของเดือนนี้</span>
          <p class="text-gray4">3</p>
        </div>
      </div>
    </div>
    <div class="flex justify-end space-x-4 mb-[24px]">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-md px-4 py-2">
        <img src="~/assets/images/Search.png" class="w-[14px] h-[14px] mr-2 ">
        <input type="text" v-model="search" placeholder="Search.." class="w-[488px]"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 w-[354px] text-gray14">
          <option value="Leave type" >Leave type</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>

    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table class="w-full  ">
        <thead class="text-lg text-blue  bg-white font-medium">
        <tr>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>Leave Type</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex ">
              <img src="~/assets/images/Swap.svg" />
              <Span>From</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>To</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex">
              <img src="~/assets/images/Swap.svg" />
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
              <Span>Actions</Span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap text-center">ลาป่วย</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">1 day</td>
          <td class="px-6 py-4 flex justify-center">
            <div class="bg-green rounded-[10px] text-white  whitespace-nowrap px-4 ">Approve</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap text-center">ลากิจ</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="px-6 py-4 flex justify-center">
            <div class="bg-yellow rounded-[10px] text-white  whitespace-nowrap px-4">pending</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap text-center">ลาป่วย</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="px-6 py-4 flex justify-center">
            <div class="bg-yellow rounded-[10px] text-white flex whitespace-nowrap px-4">pending</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap text-center">ลาป่วย</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="px-6 py-4  flex justify-center">
            <div class="bg-yellow rounded-[10px] text-white whitespace-nowrap px-4">pending</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap text-center">ลากิจ</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="px-6 py-4 flex justify-center">
            <div class="bg-green rounded-[10px] text-white whitespace-nowrap px-4">Approve</div>
          </td>
          <td >
            <img src="~/assets/images/Edit Square.svg" class="ml-14 whitespace-nowrap"/>
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
    AddLeave
  },
  data() {
    return {
      selected: 'Leave type',
      isAddLeave: false,
      isModal: false
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
