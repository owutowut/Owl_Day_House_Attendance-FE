<template>
  <div>
    <Loading v-if="isLoading" />

    <div v-else>
      <div class="pt-12 sm:mx-4 lg:mx-6 lg:space-y-4 md:space-y-4 sm:space-y-4">
        <div class="w-full pb-2">
          <span class="text-3xl font-semibold text-blue">WORK FROM HOME</span>
        </div>
      <div class="grid grid-cols-4 sm:grid-rows-3 sm:space-x-0 lg:flex bg-white rounded-md p-4 lg:space-x-4">
        <div class="sm:row-start-1 sm:col-span-full sm:px-2 space-x-2 col-span-2 w-full border border-gray5 flex lg:justify-center items-center bg-white rounded-md px-4 py-2 my-2">
            <svg-icon name="Search" width="15" height="15"/>
            <input type="text" @keyup="fetchData" v-model="search" placeholder="Search.." class="w-full text-gray14 text-lg font-kanit focus:outline-none"/>
        </div>
        <div class="sm:row-start-2 sm:col-span-full col-span-1 w-full self-center">
          <div class="relative flex cursor-pointer">
            <input id="custom-input" class="cursor-pointer custom-input w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit focus:outline-none" placeholder="Date"/>
            <svg-icon name="ArrowDown" width="24" height="24" class="absolute right-3 top-3"/>
          </div>
          <date-picker
            color="#252647"
            auto-submit
            @change="fetchData"
            v-model="selected"
            element="custom-input"
            simple
          ></date-picker>
        </div>
        <div class="sm:row-start-3 sm:col-span-full col-span-1 w-full self-center">
          <NuxtLink to="/user/work-from-home/create" class="space-x-2 md:px-2 w-full bg-yellow px-10 py-2 text-white rounded-md text-lg font-kanit flex justify-center items-center">
            <svg-icon name="add1" width="15" height="15"/>
            <p>Add from</p>
          </NuxtLink>
        </div>
      </div>

      <div class="relative overflow-x-auto sm:rounded-lg mt-8">
        <Table
          :headers="headers"
          :data="filterData.map((item, index) => {
            return {
              ...item,
              index: (index + 1) + pageStart,
               status: item.status === 'Approve' ? 'Approve $approve$' : 'Pending $pending$',
               no_of_days: `${item.no_of_days} Days`
            }
        })">
          <template v-slot:action="data">
            <div @click="" class="cursor-pointer flex justify-center items-center">
              <NuxtLink :to="`/user/work-from-home/${data.data.id}`">
                <svg-icon name="EditSquare" width='24' height='24' class="text-blue"/>
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

    </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table";
import {mapActions} from "vuex";
import Modal from '@/components/Modal.vue'

export default {
  name: "wfh",
  layout: 'sidebar',
  components: {
    Table, Modal
  },
  data() {
    return {
      isLoading: true,
      selected: '',
      search: '',
      page: 1,
      show: {
        edit_wfh: false,
      },
      headers: [
        {
          title: 'Reason',
          key: 'reason',
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
          sort: 'no_of_days'
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
      work_from_home: [],
      user_profile: {},
    }
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

  mounted() {
    this.fetchData()
  },

  methods: {
    ...mapActions({
      getWfhData: 'user/getWfhData',
    }),
    async fetchData() {
      await this.userProfile()

      const request = {
        id: this.user_profile.id,
        page: this.page,
        search: this.search,
        selected: this.selected
      }
      const {data} = await this.getWfhData(request)
      this.work_from_home = data.work_from_home

      this.isLoading = false
    },
    async userProfile() {
      const verify = await this.$auth.loggedIn

      try {
        if (!verify) {
          return 'Login required!'
        }
        const user=await this.$axios.get('me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` },
        })
        if (user.data.role !== 'user') {
          return this.$router.push('/')
        }
        this.user_profile = user.data
      } catch (error) {
        return error.message
      }
    },
    onChangePage(i) {
      this.page = i
      this.fetchData()
    },
  }
}
</script>

<style scoped>

</style>
