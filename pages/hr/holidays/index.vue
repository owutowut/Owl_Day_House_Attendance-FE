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
      <Table :icon="icon" :path="path" :search="search" :selected="selected" :sort="sort" :headers="headers" :data="holidays.map((item, index) => {
        return {
          index: (index + 1) + pageStart,
          ...item,}
      })"/>
    </div>

    <div>
      <ModalHR :data="holidays" :show="show"/>
    </div>

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
  data() {
    return {
      sort: {
        field: '',
        sorted:true,
      },
      show:{
        addform: false,
        delete: false,
        edit: false,
      },
      selected: 'all',
      search: '',
      path:'holidays',
      icon:'Edit_Square',
      headers: [
      {
        key: 'name',
        title:'Holiday Name',
      },
      {
        key: 'from',
        title: 'From',
        sort: true,
      },
      {
        key: 'to',
        title: 'To',
        sort: true,
      },
      {
        key: 'noofdays',
        title: 'No of Days',
        sort: true,
      },
      {
        title: 'Actions',
      }
      ],
      holidays: [
        {
          id: 1,
          name: 'สงกรานต์',
          from: '10 April 2020',
          to: '17 April 2020',
          noofdays: 7,
          createdate: '9 April 2020',
        },
        {
          id: 2,
          name: 'วันจักรี',
          from: '6 April 2020',
          to: '7 April 2020',
          noofdays: 1,
          createdate: '28 March 2020',
        },
        {
          id: 3,
          name: 'วันภาพยนตร์แห่งชาติ',
          from: '4 April 2020',
          to: '5 April 2020',
          noofdays: 1,
          createdate: '1 April 2020',
        },
      ],
    }
  },
}
</script>
