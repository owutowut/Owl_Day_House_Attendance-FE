<template>
  <Loading v-if="isLoading"/>

  <div v-else class="lg:mx-4 lg:space-y-2 md:space-y-4 sm:space-y-4">

    <div class="text-center space-y-6 items-center lg:flex lg:justify-between sm:pb-2">
      <span class="text-3xl font-semibold text-blue">Hoilday of the month</span>
      <div class="lg:pb-5 lg:w-48 md:w-full sm:w-full">
        <button @click="show.add_form=true"
                class="w-full bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
          <svg-icon name="add1" width="15" height="15" class="mr-2"/>
          <span class="text-lg font-kanit">Add Form</span>
        </button>
      </div>
    </div>

    <div class="lg:flex lg:justify-end lg:space-x-4">
      <div class="lg:w-96 md:w-full sm:w-full search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2 mb-4">
        <svg-icon name="Search" width="15" height="15"/>
        <input type="text" v-model="search" @keyup="asyncData" placeholder="Search..."
               class="lg:w-96 md:w-full sm:w-full font-kanit text-lg px-4 focus:outline-none"/>
      </div>
      <div>
        <input id="custom-input" class="cursor-pointer w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit focus:outline-none" placeholder="Date"/>
        <date-picker
          color="#252647"
          auto-submit
          @change="asyncData"
          v-model="selected"
          element="custom-input"
          simple
        >
        </date-picker>
      </div>
    </div>

    <div class="sm:pt-4 overflow-x-auto rounded-lg">
      <Table
        :headers="headers"
        :data="filterData.map((item, index) => {
        return {
          ...item,
          index: (index + 1) + pageStart,
          no_of_days: `${item.no_of_days} Days`
        }
      })">
        <template v-slot:action="data">
          <div @click="editHoliday(data.data.id)" class="cursor-pointer flex justify-center items-center">
            <svg-icon name="Edit_Square" width='24' height='24' class="text-blue"/>
          </div>
          <div @click="handleModalDelete(data.data)" class="cursor-pointer flex justify-center items-center">
            <svg-icon name="trashsolid" width='24' height='24' class="text-blue"/>
          </div>
        </template>
      </Table>
    </div>

    <client-only>
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
        :page-class="'page-item'" list="" name="">
      </paginate>
    </client-only>

    <ModalHR :holiday_by_id="holiday_by_id" :show="show"/>

  </div>
</template>

<script>

import Table from '@/components/Table.vue'
import ModalHR from '@/components/ModalHR.vue'
import {mapActions} from 'vuex'

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
        edit: false,
      },
      selected: '',
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
  },

  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.holidays.perPage
    },
    totalPage() {
      return Math.ceil(this.holidays.total / this.holidays.perPage)
    },
    filterData() {
      return this.holidays.data
    },
  },

  methods: {
    ...mapActions({
      getHoliday: 'hr/getHoliday',
      deleteHoliday: 'hr/deleteHoliday',
      getHolidayByID: 'hr/getHolidayByID'
    }),

    async editHoliday(id) {
      this.show.edit = true
      const {data}  = await this.getHolidayByID(id)
      this.holiday_by_id = data.data
    },

    async asyncData() {
      const request = {
        page: this.page,
        search: this.search,
        selected: this.selected
      }
      const {data} = await this.getHoliday(request)
      this.holidays = data.data

      this.isLoading = false
    },

    onChangePage(i) {
      this.page = i
      this.asyncData()
    },

    async handleModalDelete(data) {
      this.$swal({
        title: `<p class="text-2xl">Delete Holiday <br> <div class="text-lg font-light">Are you sure to permanently delete this ?</div> </p>`,
        imageUrl: `${require('~/assets/sprite/svg/trash-alt-solid.svg')}`,
        imageWidth: 60,
        imageHeight: 69,
        showCancelButton: true,
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await this.deleteHoliday(data.id)
          if (res) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 2500
            }).then(
              this.asyncData(this.page=1)
            )
          }
        }
      })
    },
  }
}
</script>
