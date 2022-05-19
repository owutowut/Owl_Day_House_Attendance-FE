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
        <select v-model="selected" class="cursor-pointer rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Date</option>
          <option v-for="date in work_from_home" :value="date.createdate">{{date.createdate}}</option>
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
             tag: item.tag === 'พนักงาน' ? 'พนักงาน $พนักงาน$' : item.tag === 'ทดลองงาน' ? 'ทดลองงาน $ทดลองงาน$' : 'ฝึกงาน $ฝึกงาน$',
             status: item.status === 'approve' ? 'Approve $approve$' : 'Pending $pending$',
             no_of_days: `${item.no_of_days} Days`
          }
      })">
        <template v-slot:action="data">
          <div class="cursor-pointer flex justify-center items-center space-x-4">
            <NuxtLink :to="`/hr/workfromhome/${data.data.id}`">
              <svg-icon name="Search2" width='24' height='24' class="text-blue"/>
            </NuxtLink>
          </div>
        </template>
      </Table>
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

export default {
  name: "workfromhome",
  layout: 'sidebar_hr',
  components:{
    Table,
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },

    filterData() {
      if (this.search.trim()) {
        return this.work_from_home.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        return this.work_from_home.filter(item => {
          return item.createdate.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.work_from_home
    }
  },
  data() {
    return {
      selected: 'all',
      search: '',
      headers: [{
        title:'Employee',
        key: 'name',
      }, {
        title: 'type',
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
        key: 'action'
      },
      ],
      work_from_home: [
        {
          id: 1,
          name: 'JIRAPHAT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '11 Jan 2020',
          to: '16 Jan 2020',
          no_of_days: 5,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'approve',
          createdate: '7 Jan 2020',
        },
        {
          id: 2,
          name: 'CHAWANNOP JIRAPHAT',
          leavetype: 'ลากิจ',
          from: '5 Oct 2020',
          to: '8 Oct 2020',
          no_of_days: 3,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'pending',
          createdate: '2 Oct 2020',
        },
        {
          id: 3,
          name: 'SARAWUT THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '24 Mar 2020',
          to: '31 Mar 2020',
          no_of_days: 7,
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'pending',
          createdate: '23 Mar 2020',
        },
        {
          id: 4,
          name: 'CHAWANNOP BUNMEE',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '22 Jan 2020',
          no_of_days: 4,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'pending',
          createdate: '16 Jan 2020',
        },
        {
          id: 5,
          name: 'SARAWUT BUNMEE',
          leavetype: 'ลากิจ',
          from: '3 Feb 2020',
          to: '9 Feb 2020',
          no_of_days: 6,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'approve',
          createdate: '1 Feb 2020',
        },
        {
          id: 6,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลากิจ',
          from: '24 Mar 2020',
          to: '31 Mar 2020',
          no_of_days: 7,
          department:'UX/UI Designer',
          tag: 'พนักงาน',
          status: 'approve',
          createdate: '22 Mar 2020',
        },
        {
          id: 7,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '18 Jan 2020',
          to: '21 Jan 2020',
          no_of_days: 3,
          department:'UX/UI Designer',
          tag: 'ทดลองงาน',
          status: 'approve',
          createdate: '15 Jan 2020',
        },
        {
          id: 8,
          name: 'CHAWANNOP THAMMAJAI',
          leavetype: 'ลาป่วย',
          from: '3 Mar 2020',
          to: '5 Mar 2020',
          no_of_days: 2,
          department:'UX/UI Designer',
          tag: 'ฝึกงาน',
          status: 'approve',
          createdate: '2 Mar 2020',
        },
      ],
    }
  },
}
</script>
