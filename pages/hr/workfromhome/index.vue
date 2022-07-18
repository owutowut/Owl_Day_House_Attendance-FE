<template>
  <div>
    <Loading v-if="isLoading"/>

    <div v-else class="lg:mx-2 lg:space-y-2 md:space-y-4 sm:space-y-4">

      <div class="text-center space-y-6 items-center lg:flex lg:justify-between sm:pb-2">
        <span class="text-3xl font-semibold text-blue">Work from Home</span>
        <div class="lg:pb-5 lg:w-48 md:w-full sm:w-full">
          <nuxt-link to="/hr/workfromhome/addform" class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
            <svg-icon name="add1" width="15" height="15" class="mr-2"/>
            <span class="text-lg font-kanit">Add Form</span>
          </nuxt-link>
        </div>
      </div>

      <div class="lg:flex justify-end lg:space-x-4 mb-6">
        <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2 mb-4">
          <svg-icon name="Search" width="15" height="15" class="mr-2"/>
          <input type="text" @keyup="fetchData" v-model="search" placeholder="Search.." class="w-full lg:w-[488px] font-kanit text-lg px-4 focus:outline-none"/>
        </div>
        <div>
          <div class="relative">
            <input id="custom-input" class="cursor-pointer custom-input w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit focus:outline-none" placeholder="Date"/>
            <svg-icon name="ArrowDown" width="24" height="24" class="absolute right-3 top-3 "/>
            <date-picker
              color="#252647"
              auto-submit
              @change="fetchData"
              v-model="selected"
              element="custom-input"
              simple
            ></date-picker>
          </div>
        </div>
      </div>

      <div class="sm:pt-4 overflow-x-auto rounded-lg">
        <Table
          :headers="headers"
          :data="filterData.map((item, index) => {
          return {
            ...item,
            index: (index + 1) + pageStart,
            tag: item.tag === 'พนักงาน' ? 'พนักงาน $พนักงาน$' : item.tag === 'ทดลองงาน' ? 'ทดลองงาน $ทดลองงาน$' : 'ฝึกงาน $ฝึกงาน$',
            status: item.status === 'Approve' ? 'Approve $approve$' : 'Pending $pending$',
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
          :page-class="'page-item'">
        </paginate>
      </client-only>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import {mapActions} from "vuex";

export default {
  name: "workfromhome",
  layout: 'sidebar_hr',
  components:{
    Table,
  },
  data() {
    return {
      isLoading: true,
      selected: '',
      search: '',
      page: 1,
      headers: [{
        title:'Employee',
        key: 'name',
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
      work_from_home: [],
    }
  },

  mounted() {
    this.fetchData()
  },

  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.work_from_home.perPage
    },
    totalPage() {
      return Math.ceil(this.work_from_home.total / this.work_from_home.perPage)
    },
    filterData() {
      return this.work_from_home.data
    },
  },

  methods: {
    ...mapActions({
      getWfhData: 'hr/getWfhData'
    }),

    async fetchData() {
      const request = {
        page: this.page,
        search: this.search,
        selected: this.selected
      }
      const {data} = await this.getWfhData(request)
      this.work_from_home = data.work_from_home

      this.isLoading = false
    },
    onChangePage(i) {
      this.page = i
      this.fetchData()
    },
  }
}
</script>
