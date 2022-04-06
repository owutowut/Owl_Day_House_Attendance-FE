<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="text-3xl font-semibold text-blue">LEAVES</span>
      <button class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center"
              @click="AddLeave">
        <svg-icon name="add1" width="15" height="15" class="mr-2"/>
        <span class="text-lg font-kanit">Add Leave</span>
      </button>
    </div>
    <div class="grid grid-cols-4 gap-1.5 mb-4">
      <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
        <p class="text-xs text-blue mb-2">ลาป่วย</p>
        <p class="leavesresult">3</p>
      </div>
      <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
        <p class="text-xs text-blue mb-2">ลากิจ</p>
        <p class="leavesresult">2</p>
      </div>
      <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
        <p class="text-xs text-blue mb-2">การลาทั้งหมด</p>
        <p class="leavesresult">5</p>
      </div>
      <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
        <div class="grid grid-cols-2 divide-x justify-center divide-gray13">
          <div>
            <p class="text-xs text-blue mb-2">ลาทั้งหมด</p>
            <p class="leavesresult">5</p>
          </div>
          <div>
            <p class="text-xs text-blue mb-2">ลาของเดือนนี้</p>
            <p class="leavesresult">3</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end space-x-4 mb-6">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="w-[488px] font-kanit text-lg px-4"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Leave type</option>
          <option value="ลาป่วย">ลาป่วย</option>
          <option value="ลากิจ">ลากิจ</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <TableLeaves :employees="filtered"/>

      <AddLeave v-if="isAddLeave" :isAddLeave="isAddLeave" @handleHidAddLeave="onHideAddLeave" @submit="submit"/>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import TableLeaves from '@/components/TableLeaves.vue'

export default {
  name: "leaves",
  layout: 'sidebar_hr',
  components:{
    TableLeaves,
  },
  computed: {
    filtered: function () {
      if (this.search !== "") {
        return this.leaves.filter(item => {
          return item.name.toLowerCase().includes(this.search) ||  item.leavetype.toLowerCase().includes(this.selected)
        })
      }
      if (this.selected !== "all") {
        return this.leaves.filter(item => {
          return  item.leavetype.toLowerCase().includes(this.selected)
        })
      }
      return this.leaves
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
  data() {
    return {
      isAddLeave: false,
      isModal: false,
      selected: 'all',
      search: '',
      leaves: [
        {
          id: 1,
          name: 'JIRAPHAT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '11 Jan 2020',
          to: '11 Jan 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'Approve',
        },
        {
          id: 2,
          name: 'CHAWANNOP JIRAPHAT',
          leavetype: 'ลาป่วย',
          from: '5 Jan 2020',
          to: '5 Jan 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'pending',
        },
        {
          id: 3,
          name: 'SARAWUT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '24 Mar 2020',
          to: '24 Mar 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'pending',
        },
        {
          id: 4,
          name: 'CHAWANNOP BUNMEE',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '18 Jan 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'pending',
        },
        {
          id: 5,
          name: 'SARAWUT BUNMEE',
          leavetype: 'ลากิจ',
          from: '3 Mar 2020',
          to: '3 Mar 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'Approve',
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลากิจ',
          from: '24 Mar 2020',
          to: '24 Mar 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'Approve',
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '18 Jan 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'Approve',
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '3 Mar 2020',
          to: '3 Mar 2020',
          noofdays: '1 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'Approve',
        },
      ],
    }
  },
}
</script>

<style scoped>
.leavesresult {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #707070;
}
</style>
