<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else>

      <div class="flex justify-between mb-6">
        <span class="text-3xl font-semibold text-blue">Hoilday of the month</span>
        <button @click="show.add_form=true"
                class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
          <svg-icon name="add1" width="15" height="15" class="mr-2"/>
          <span class="text-lg font-kanit">Add Form</span>
        </button>
      </div>

      <div class="lg:flex justify-end lg:space-x-4 mb-6">
        <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2 mb-4">
          <svg-icon name="Search" width="15" height="15" class="mr-2"/>
          <input @keyup="asyncData" type="text" v-model="search" placeholder="Search.."
                 class="w-[488px] font-kanit text-lg px-4 focus:outline-none"/>
        </div>
        <div>
          <div class="relative">
            <input class="custom-input w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit" placeholder="18/03/1999"/>
            <svg-icon name="CalendarBlack" width="24" height="24" class="absolute right-3 top-3 "/>
            <date-picker
              v-model="selected"
              custom-input=".custom-input"
            />
          </div>
<!--          <select v-model="selected"-->
<!--                  class="cursor-pointer rounded-md px-4 py-2 w-full lg:w-[320px] text-gray14 font-kanit text-lg focus:outline-none">-->
<!--            <option value="all">Date</option>-->
<!--            <option v-for="date in holidays" :value="date.created_at">{{ date.created_at }}</option>-->
<!--          </select>-->
        </div>
      </div>

      <div class="relative overflow-x-auto sm:rounded-lg">
        <Table
          :headers="headers"
          :data="filterData.map((item, index) => {
          return {
            ...item
          }
        })">
          <template v-slot:action="data">
            <div @click="show.edit=true" class="cursor-pointer flex justify-center items-center">
              <svg-icon name="Edit_Square" width='24' height='24' class="text-blue" @click="findID(data);holiday_getID()"/>
            </div>
            <div @click="show.delete=true" class="cursor-pointer flex justify-center items-center">
              <svg-icon name="trashsolid" width='24' height='24' class="text-blue"/>
            </div>
          </template>
        </Table>
      </div>

      <div>
        <ModalHR :holiday_by_id="holiday_by_id" :show="show""/>
      </div>

      <paginate
        class="flex justify-end text-sm my-4 mr-2 text-black2 space-x-4"
        v-model="page"
        :page-count="totalPage"
        :page-range="3"
        :margin-pages="1"
        :click-handler="onChangePage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import ModalHR from '@/components/ModalHR.vue'

export default {
  name: "holiday",
  layout: 'sidebar_hr',
  components: {
    Table, ModalHR
  },

  data() {
    return {
      isLoading: true,
      show: {
        add_form: false,
        delete: false,
        edit: false,
        success: false,
      },
      selected: 'all',
      search: '',
      perPage: 10,
      page: 1,
      headers: [
        {
          title: 'Holiday Name',
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
      holidays: [],
      holiday_by_id: {},
    }
  },

  mounted() {
    this.asyncData()
    this.holiday_getID()
  },

  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.holidays.perPage
    },
    totalPage() {
      return Math.ceil(this.holidays.total / this.holidays.perPage)
    },

    filterData() {
      if (this.selected !== "all") {
        return this.holidays.data.filter(item => {
          return item.created_at.toLowerCase().includes(this.selected.toLowerCase())
        })
      }
      return this.holidays.data
    },

  },

  methods: {
    findID(data) {
      return this.data_id = data.data.id
    },
    async asyncData() {
      let {data} = await this.$axios.get(`holiday/?page=${this.page}&search=${this.search}`)
      this.holidays = data.data

      this.isLoading = false
    },
    async holiday_getID() {
      let {data} = await this.$axios.get(`holiday/${this.data_id}`)
      this.holiday_by_id = data.data
    },
    onChangePage(page) {
      console.log(page)
      this.asyncData()
    }
  },
}
</script>
