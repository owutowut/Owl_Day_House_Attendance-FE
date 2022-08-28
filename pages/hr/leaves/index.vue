<template>
    <Loading v-if="isLoading"/>

    <div v-else class="lg:mx-2 lg:space-y-2 md:space-y-4 sm:space-y-4">

      <div class="sm:pb-2 sm:text-center lg:flex lg:justify-between lg:items-center lg:space-y-6 md:space-y-6 sm:space-y-6">
        <span class="text-3xl font-semibold text-blue">LEAVES</span>
        <div class="lg:pb-5 lg:w-48 md:w-full sm:w-full">
          <button @click="show.add_leave=true"
                  class="w-full bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
            <svg-icon name="add1" width="15" height="15" class="mr-2"/>
            <span class="text-lg font-kanit">Add Leave</span>
          </button>
        </div>
      </div>

      <div class="sm:space-y-2 sm:w-full grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div class="bg-white p-4 lg:pt-5 mt-2 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue">ลาป่วย</p>
          <p class="leaves_result">{{ total_leaves.sick_leaves_total }}</p>
        </div>
        <div class="bg-white p-4 lg:pt-5 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue">ลากิจ</p>
          <p class="leaves_result">{{ total_leaves.business_leaves_total }}</p>
        </div>
        <div class="bg-white p-4 lg:pt-5 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue">การลาทั้งหมด</p>
          <p class="leaves_result">{{ total_leaves.all_leaves_total }}</p>
        </div>
        <div class="lg:p2 bg-white p-4 lg:pt-5 rounded-lg text-center font-kanit border border-gray19">
          <div class="grid grid-cols-2 divide-x justify-center divide-gray13 text-xs text-blue">
            <div class="mt-1">
              <p>ลาทั้งหมด</p>
              <p class="leaves_result">{{ total_leaves.all_leaves_total }}</p>
            </div>
            <div class="mt-1">
              <p>ลาของเดือนนี้</p>
              <p class="leaves_result">{{ total_leaves.all_leaves_month_total }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:pt-2 lg:flex lg:justify-end lg:space-x-4">
        <div class="lg:w-80 md:w-full sm:w-full search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2 mb-4">
          <svg-icon name="Search" width="15" height="15"/>
          <input type="text" v-model="search" @keyup="leavesData" placeholder="Search.."
                 class="lg:w-96 md:w-full sm:w-full font-kanit text-lg px-4 focus:outline-none"/>
        </div>
        <div>
          <select v-model="selected" @change="leavesData" class="no-outline cursor-pointer rounded-md px-4 py-2 w-full lg:w-80 text-gray14 font-kanit text-lg">
            <option value="">Leave type</option>
            <option value="ลาป่วย">ลาป่วย</option>
            <option value="ลากิจ">ลากิจ</option>
          </select>
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
             no_of_days: `${item.no_of_days} Days`,
          }
      })">
          <template v-slot:action="data">
            <div class="cursor-pointer flex justify-center items-center">
              <NuxtLink :to="`/hr/leaves/${data.data.id}`">
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
        :page-class="'page-item'" list="" name="">
      </paginate>
    </client-only>

    <ModalHR :show="show"/>

  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import ModalHR from '@/components/ModalHR.vue'
import {mapActions} from "vuex";

export default {
  name: "leaves",
  layout: 'sidebar_hr',
  components:{
    Table,ModalHR
  },
  data() {
    return {
      show:{
        add_leave: false,
        success: false,
      },
      isLoading: true,
      selected: '',
      search: '',
      perPage: 10,
      page: 1,
      headers: [{
        title:'Employee',
        key: 'name',
      }, {
        title: 'LeaveType',
        key: 'leave_type',
        sort: 'leave_type',
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
      leaves: [],
      total_leaves: [],
    }
  },

  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.leaves.perPage
    },
    totalPage() {
      return Math.ceil(this.leaves.total / this.leaves.perPage)
    },

    filterData() {
      return this.leaves.data
    },
  },

  mounted() {
    this.leavesData()
  },

  methods: {
    ...mapActions({
      getLeave: 'hr/getLeave'
    }),

    async leavesData() {
      const request = {
        page: this.page,
        search: this.search,
        selected: this.selected
      }
      const {data} = await this.getLeave(request)

      this.leaves = data.leaves
      this.total_leaves = data

      this.isLoading = false
    },

    onChangePage(i) {
      this.page = i
      this.leavesData()
      }
    }
}
</script>

<style scoped>
.no-outline:focus {
  outline: none;
}

.leaves_result {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #707070;
}
</style>
