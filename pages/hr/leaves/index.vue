<template>
  <div>
    <Loading v-if="isLoading"/>

    <div v-else>
      <div class="flex justify-between mb-2">
        <span class="text-3xl font-semibold text-blue">LEAVES</span>
        <button class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center"
                @click="show.add_leave=true">
          <svg-icon name="add1" width="15" height="15" class="mr-2"/>
          <span class="text-lg font-kanit">Add Leave</span>
        </button>
      </div>
      <div class="grid grid-cols-4 gap-1.5 mb-4">
        <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue mb-2">ลาป่วย</p>
          <p class="leaves_result">{{ total_leaves.sick_leaves_total }}</p>
        </div>
        <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue mb-2">ลากิจ</p>
          <p class="leaves_result">{{ total_leaves.business_leaves_total }}</p>
        </div>
        <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
          <p class="text-xs text-blue mb-2">การลาทั้งหมด</p>
          <p class="leaves_result">{{ total_leaves.all_leaves_total }}</p>
        </div>
        <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
          <div class="grid grid-cols-2 divide-x justify-center divide-gray13 text-xs text-blue">
            <div class="mt-1.5">
              <p>ลาทั้งหมด</p>
              <p class="leaves_result">{{ total_leaves.all_leaves_total }}</p>
            </div>
            <div class="mt-1.5">
              <p>ลาของเดือนนี้</p>
              <p class="leaves_result">{{ total_leaves.all_leaves_month_total }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end space-x-4 mb-6">
        <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2">
          <svg-icon name="Search" width="15" height="15" class="mr-2"/>
          <input type="text" v-model="search" @keyup="leavesData" placeholder="Search.." class="no-outline w-[488px] font-kanit text-lg px-4"/>
        </div>
        <div>
          <select v-model="selected" @change="leavesData" class="no-outline cursor-pointer rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
            <option value="all">Leave type</option>
            <option value="ลาป่วย">ลาป่วย</option>
            <option value="ลากิจ">ลากิจ</option>
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
            <div class="cursor-pointer flex justify-center items-center">
              <NuxtLink :to="`/hr/leaves/${data.data.id}`">
                <svg-icon name="Search2" width='24' height='24' class="text-blue"/>
              </NuxtLink>
            </div>
          </template>
        </Table>
      </div>
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

    <div>
      <ModalHR :show="show"/>
    </div>

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
      selected: 'all',
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
      const req = {
        params: {
          page: this.page,
          search: this.search,
          selected: this.selected
        }
      }
      const {data} = await this.getLeave(req)

      this.leaves = data.data
      this.total_leaves = data

      this.isLoading = false
    },

    onChangePage() {
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
