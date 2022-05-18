<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="text-3xl font-semibold text-blue">LEAVES</span>
      <button class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center"
              @click="show.addleave=true">
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
        <div class="grid grid-cols-2 divide-x justify-center divide-gray13 text-xs text-blue">
          <div class="mt-1.5">
            <p>ลาทั้งหมด</p>
            <p class="leavesresult">5</p>
          </div>
          <div class="mt-1.5">
            <p>ลาของเดือนนี้</p>
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
        <select v-model="selected" class="cursor-pointer rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Leave type</option>
          <option value="ลาป่วย">ลาป่วย</option>
          <option value="ลากิจ">ลากิจ</option>
        </select>
      </div>
    </div>

    <div class="relative overflow-x-auto sm:rounded-lg">
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
            <div class="cursor-pointer flex justify-center items-center">
                <svg-icon name="Search" width='24' height='24' class="text-blue"/>
            </div>
        </template>
      </Table>
    </div>

    <div>
      <ModalHR :show="show"/>
    </div>

    <paginate
      class="flex justify-end text-sm my-4 mr-2 text-black2 space-x-4"
      v-model="page"
      :page-count="10"
      :page-range="3"
      :margin-pages="1"
      :click-handler="onChangePage"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>

  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import ModalHR from '@/components/ModalHR.vue'

export default {
  name: "leaves",
  layout: 'sidebar_hr',
  components:{
    Table,ModalHR
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },

    filterData() {
      if (this.search.trim()) {
        return this.leaves.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        return this.leaves.filter(item => {
          return item.leavetype.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.leaves
    }
  },
  data() {
    return {
      show:{
        addleave: false,
        success: false,
      },
      selected: 'all',
      search: '',
      headers: [{
        title:'Employee',
        key: 'name',
      }, {
        title: 'LeaveType',
        key: 'leavetype',
        sort: 'leavetype',
      }, {
        title: 'From',
        key: 'from',
        sort: 'from',
      }, {
        title: 'To',
        key: 'to',
        sort: 'to',
      }, {
        title: 'No of Days',
        key: 'no_of_days',
        sort: 'no_of_days',
      }, {
        title: 'Tag',
        key: 'tag',
        sort: 'tag',
      }, {
        title: 'Status',
        key: 'status',
        sort: 'status',
      }, {
        title: 'Actions',
        key: 'action',
      },
      ],
      leaves: [
        {
          id: 1,
          name: 'JIRAPHAT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '11 Jan 2020',
          to: '11 Jan 2020',
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'approve',
        },
        {
          id: 2,
          name: 'CHAWANNOP JIRAPHAT',
          leavetype: 'ลาป่วย',
          from: '5 Oct 2020',
          to: '6 Oct 2020',
          no_of_days: '2 day',
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
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'pending',
        },
        {
          id: 4,
          name: 'CHAWANNOP BUNMEE',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '21 Jan 2020',
          no_of_days: '3 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'pending',
        },
        {
          id: 5,
          name: 'SARAWUT BUNMEE',
          leavetype: 'ลากิจ',
          from: '3 Feb 2020',
          to: '3 Feb 2020',
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'approve',
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลากิจ',
          from: '24 Mar 2020',
          to: '24 Mar 2020',
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'approve',
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '18 Jan 2020',
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'approve',
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '3 Mar 2020',
          to: '3 Mar 2020',
          no_of_days: '1 day',
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'approve',
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
