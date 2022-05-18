<template>
  <div>

    <div class="flex justify-between mb-6">
      <span class="text-3xl font-semibold text-blue">Hoilday of the month</span>
      <button  @click="show.addform=true" class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <svg-icon name="add1" width="15" height="15" class="mr-2"/>
        <span class="text-lg font-kanit">Add Form</span>
      </button>
    </div>

    <div class="flex justify-end space-x-4 mb-6">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="w-[488px] font-kanit text-lg px-4"/>
      </div>
      <div>
        <select v-model="selected" class="cursor-pointer rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Date</option>
          <option v-for="date in holidays" :value="date.createdate">{{date.createdate}}</option>
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
            noofdays: `${item.noofdays} Days`
          }
      })">
        <template v-slot:action="data">
          <div @click="show.edit=true" class="cursor-pointer flex justify-center items-center">
            <svg-icon name="Edit_Square" width='24' height='24' class="text-blue"/>
          </div>
          <div @click="show.delete=true" class="cursor-pointer flex justify-center items-center">
            <svg-icon name="trashsolid" width='24' height='24' class="text-blue"/>
          </div>
        </template>
      </Table>
    </div>

    <div>
      <ModalHR :data="holidays" :show="show"/>
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
  name: "holiday",
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
        return this.holidays.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      if (this.selected !== "all") {
        return this.holidays.filter(item => {
          return item.createdate.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.holidays
    }
  },
  data() {
    return {
      show:{
        addform: false,
        delete: false,
        edit: false,
        success: false,
      },
      selected: 'all',
      search: '',
      headers: [
      {
        title:'Holiday Name',
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
        key: 'no_of_days',
        sort: 'no_of_days',
      },
      {
        title: 'Actions',
        key: 'action',
      }
      ],
      holidays: [
        {
          id: 1,
          name: 'สงกรานต์',
          from: '10 April 2020',
          to: '17 April 2020',
          no_of_days: 7,
          createdate: '9 April 2020',
        },
        {
          id: 2,
          name: 'วันจักรี',
          from: '6 April 2020',
          to: '7 April 2020',
          no_of_days: 1,
          createdate: '28 March 2020',
        },
        {
          id: 3,
          name: 'วันภาพยนตร์แห่งชาติ',
          from: '4 April 2020',
          to: '5 April 2020',
          no_of_days: 1,
          createdate: '1 April 2020',
        },
      ],
    }
  },
}
</script>
