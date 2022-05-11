<template>
  <div class="ml-6">
    <div class="flex justify-between mb-8">
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
    <div class="lg:flex lg:justify-end lg:space-x-4 mb-6">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-lg my-2 px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search.."
               class="font-kanit text-lg w-full lg:w-[420px] focus:outline-none "/>
      </div>
      <div>
        <select v-model="selected"
                class="rounded-lg px-4 py-2 text-gray14 font-kanit my-2 text-lg lg:w-[236px] w-full focus:outline-none">
          <option value="all">Leave type</option>
          <option value="ลาป่วย">ลาป่วย</option>
          <option value="ลากิจ">ลากิจ</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto  sm:rounded-lg ">
      <Table
        :headers="headers"
        :data="filterData.map((item, index) => {
          return {
            ...item,
            index: (index + 1) + pageStart,
             status: item.status === 'approve' ? 'Approve $approve$' : 'Pending $pending$',
             noofdays: `${item.noofdays} Days`
          }
      })">
        <template v-slot:action="data">
          <div class="cursor-pointer flex justify-center items-center" @click="isAddLeave = true">
            <svg-icon name="EditSquare" width='24' height='24' class="text-blue"/>
          </div>
        </template>
      </Table>
      <AddLeave v-if="isAddLeave" :isAddLeave="isAddLeave" @handleHidAddLeave="onHideAddLeave" @submit="submit"/>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import AddLeave from "@/components/AddLeave";
import Modal from "@/components/Modal";
import Table from "@/components/Table";

export default {
  name: "leaves",
  layout: 'sidebar',
  components: {
    AddLeave, Modal, Table
  },
  data() {
    return {
      sort: {
        field: '',
        sorted: true,
      },
      selected: 'all',
      isAddLeave: false,
      isModal: false,
      search: '',
      path: 'leave',
      icon: 'EditSquare',
      headers: [
        {
          title: 'LeaveType',
          key: 'name',
          sort: 'name',
        },
        {
          title: 'From',
          key: 'from',
          sort: 'from',
        },
        {
          title: 'To',
          key: 'to',
          sort: 'to',
        },
        {
          title: 'No of Days',
          key: 'noofdays',
          sort: 'noofdays'
        },
        {
          title: 'Status',
          key: 'status',
          sort: 'status',
        },
        {
          title: 'Actions',
          key: 'action',
        }
      ],
      leaveData: [
        {
          id: 1,
          name: 'ลาป่วย',
          from: '11 Jan 2020',
          to: '11 Jan 2020',
          noofdays: 1,
          status: 'approve'
        },
        {
          id: 2,
          name: 'ลากิจ',
          from: '5 Jan 2020',
          to: '5 Jan 2020',
          noofdays: 2,
          status: 'pending'
        },
        {
          id: 3,
          name: 'ลาป่วย',
          from: '24 Mar 2020',
          to: '24 Mar 2020',
          noofdays: 1,
          status: 'pending'
        },
        {
          id: 4,
          name: 'ลาป่วย',
          from: '18 Mar 2020',
          to: '18 Mar 2020',
          noofdays: 3,
          status: 'pending'
        },
        {
          id: 5,
          name: 'ลากิจ',
          from: '3 Mar 2020',
          to: '3 Mar 2020',
          noofdays: 1,
          status: 'approve'
        }
      ],
      currentPage: 1,
      perPage: 5,
    }
  },

  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },

    filterData() {
      if (this.search.trim()) {
        return this.leaveData.filter(val => {
          return val.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        return this.leaveData.filter(val => {
          return val.name.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.leaveData
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
    submit(event) {
      this.isAddLeave = false
      setTimeout(() => {
        this.isModal = true
      }, 500)
    },
  },
}
</script>

<style scoped>

</style>
