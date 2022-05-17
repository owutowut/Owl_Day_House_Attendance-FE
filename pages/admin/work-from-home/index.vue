<template>
  <div class="ml-6">
    <p class="text-3xl font-semibold mb-12">Work from Home</p>
    <div class="lg:flex bg-white rounded-md p-4 lg:space-x-4">
      <div class="border border-gray5 flex lg:justify-center items-center bg-white rounded-md px-4 py-2 my-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="text-gray14 text-lg font-kanit focus:outline-none"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 my-2 py-2 border border-gray5 text-gray14 w-full lg:w-[354px] text-lg font-kanit focus:outline-none">
          <option value="all" >Date</option>
          <option v-for="date in wfhData" :value="date.createdate">{{date.createdate}}</option>
        </select>
      </div>
      <div>
        <button class="bg-yellow px-10 py-2 mt-2 w-full text-white rounded-lg text-lg font-light flex justify-center items-center">
          <svg-icon name="add1" width="10" height="10" class="mr-2"/>
          <NuxtLink to="/admin/work-from-home/addForm">Add from</NuxtLink>
        </button>
      </div>
    </div>

    <div class="relative overflow-x-auto sm:rounded-lg mt-8">
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
            <svg-icon name="EditSquare" width='24' height='24' class="text-blue"/>
          </div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table";


export default {
  name: "wfh",
  layout: 'sidebar',
  components: {
    Table
  },
  data() {
    return {
      sort: {
        field: '',
        sorted:true,
      },
      selected: 'all',
      search: '',
      path:'work-from-home',
      icon:'EditSquare',
      headers: [
        {
          title: 'Reason',
          key: 'name',
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
      wfhData: [
        {
          id:1,
          name:'ต้องกักตัว',
          from:'11 Jan 2020',
          to:'25 Jan 2020',
          noofdays: '14 day',
          status: 'approve',
          createdate: '11 Jan 2020',
        },
        {
          id:2,
          name:'ต้องเดินทาง...',
          from:'5 Jan 2020',
          to:'8 Jan 2020',
          noofdays: '3 day',
          status: 'pending',
          createdate: '7 Jan 2020',
        }
      ]
    }
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },

    filterData() {
      if (this.search.trim()) {
        return this.wfhData.filter(val => {
          return val.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        return this.wfhData.filter(val => {
          return val.createdate.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.wfhData
    }
  },
}
</script>

<style scoped>

</style>
