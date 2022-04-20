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
      <Table :icon="icon" :path="path" :search="search" :selected="selected" :sort="sort" :headers="headers" :data="leaves.map((item, index) => {
        return {
          index: (index + 1) + pageStart,
          ...item,}
      })"/>
      <AddLeave v-if="isAddLeave" :isAddLeave="isAddLeave" @handleHidAddLeave="onHideAddLeave" @submit="submit"/>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>

<!--    <client-only>-->
<!--      <div class="flex justify-end">-->
<!--        <Paginate-->
<!--          :pageCount="totalPage"-->
<!--          :page-range="3"-->
<!--          :margin-pages="1"-->
<!--          :clickHandler="onChangePage"-->
<!--          :containerClass="'pagination'"-->
<!--          :prev-text="'<'"-->
<!--          :next-text="'>'"-->
<!--          :page-class="'page-item'"-->
<!--          :page-link-class="'page-link'"-->
<!--          :prev-class="'page-item'"-->
<!--          :prev-link-class="'page-link'"-->
<!--          :next-class="'page-item'"-->
<!--          :next-link-class="'page-link'"-->
<!--        >-->
<!--        </Paginate>-->
<!--      </div>-->
<!--    </client-only>-->

  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: "leaves",
  layout: 'sidebar_hr',
  components:{
    Table,
  },
  // computed: {
  //   pageStart() {
  //     return (this.currentPage - 1) * this.leaves.perPage
  //   },
  //   totalPage() {
  //     return Math.ceil(this.leaves.total / this.leaves.perPage)
  //   },
  // },
  methods: {
    // onChangePage(i) {
    //   this.currentPage = i
    // },
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
      // currentPage: 1,
      // perPage: 10,
      sort: {
        field: '',
        sorted:true,
      },
      isAddLeave: false,
      isModal: false,
      selected: 'all',
      path:'leaves',
      icon:'Search2',
      search: '',
      headers: [{
        key: 'name',
        title:'Employee',
      }, {
        key: 'leavetype',
        title: 'LeaveType',
        sort: true,
      }, {
        key: 'from',
        title: 'From',
        sort: true,
      }, {
        key: 'to',
        title: 'To',
        sort: true,
      }, {
        key: 'noofdays',
        title: 'No of Days',
        sort: true,
      }, {
        key: 'tag',
        title: 'Tag',
        sort: true,
      }, {
        key: 'status',
        title: 'Status',
        sort: true,
      }, {
        title: 'Actions',
      },
      ],
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
          from: '5 Oct 2020',
          to: '6 Oct 2020',
          noofdays: '2 day',
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
          to: '21 Jan 2020',
          noofdays: '3 day',
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
