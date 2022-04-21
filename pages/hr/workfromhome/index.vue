<template>
  <div>
    <div class="flex justify-between mb-6">
      <span class="text-3xl font-semibold text-blue">Work from Home</span>
      <nuxt-link to="/hr/workfromhome/addform" class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <svg-icon name="add1" width="15" height="15" class="mr-2"/>
        <span class="text-lg font-kanit">Add Form</span>
      </nuxt-link>
    </div>
    <div class="flex justify-end space-x-4 mb-6">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="w-[488px] font-kanit text-lg px-4"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Date</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <Table :icon="icon" :path="path" :search="search" :selected="selected" :sort="sort" :headers="headers" :data="workfromhome.map((item, index) => {
        return {
          index: (index + 1) + pageStart,
          ...item,}
      })"/>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: "workfromhome",
  layout: 'sidebar_hr',
  components:{
    Table,
  },
  methods: {
    onHideModal(event) {
      this.isModal = event
    },
    submit(event) {
      this.isAddForm = false
      setTimeout(() => {
        this.isModal = true
      }, 500)
    },
  },
  data() {
    return {
      sort: {
        field: '',
        sorted:true,
      },
      path:'workfromhome',
      selected: 'all',
      search: '',
      icon:'Search2',
      headers: [{
        key: 'name',
        title:'Employee',
      }, {
        key: 'leavetype',
        title: 'type',
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
      workfromhome: [
        {
          id: 1,
          name: 'JIRAPHAT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '11 Jan 2020',
          to: '16 Jan 2020',
          noofdays: 5,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'Approve',
        },
        {
          id: 2,
          name: 'CHAWANNOP JIRAPHAT',
          leavetype: 'ลากิจ',
          from: '5 Oct 2020',
          to: '8 Oct 2020',
          noofdays: 3,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'pending',
        },
        {
          id: 3,
          name: 'SARAWUT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '24 Mar 2020',
          to: '31 Mar 2020',
          noofdays: 7,
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'pending',
        },
        {
          id: 4,
          name: 'CHAWANNOP BUNMEE',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '22 Jan 2020',
          noofdays: 4,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'pending',
        },
        {
          id: 5,
          name: 'SARAWUT BUNMEE',
          leavetype: 'ลากิจ',
          from: '3 Feb 2020',
          to: '9 Feb 2020',
          noofdays: 6,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'Approve',
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลากิจ',
          from: '24 Mar 2020',
          to: '31 Mar 2020',
          noofdays: 7,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'Approve',
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '21 Jan 2020',
          noofdays: 3,
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'Approve',
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '3 Mar 2020',
          to: '5 Mar 2020',
          noofdays: 2,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'Approve',
        },
      ],
    }
  },
}
</script>
