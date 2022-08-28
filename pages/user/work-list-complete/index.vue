<template>
  <Loading v-if="isLoading"/>

  <div v-else class="pt-8 px-6 space-y-4">
    <p class="text-3xl font-semibold">Work List Complete</p>
    <div class="lg:flex lg:justify-end">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-lg px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input @keyup="fetchData" v-model="search" type="text" placeholder="Search..." class="font-kanit text-lg w-full  focus:outline-none "/>
      </div>
    </div>

    <div class="relative overflow-x-auto rounded-md">
      <Table
        :headers="headers"
        :data="filterData.map((item, index) => {
          return {
            ...item,
            index: (index + 1) + pageStart,
             status: item.status === 'Completed' ? 'Completed $completed$' : item.status === 'Break' ? 'Break $break$' : 'Pending $pending$',
             no_of_days: `${item.no_of_days} Days`,
          }
      })">
        <template v-slot:action="data">
          <div class="cursor-pointer flex justify-center items-center" >
            <NuxtLink :to="`/user/work-list-complete/${data.data.id}`">
              <svg-icon name="Search2" width='24' height='24' class="text-blue"/>
            </NuxtLink>
          </div>
        </template>
      </Table>
    </div>
    <paginate
      class="flex justify-end mt-4 text-sm text-black2 space-x-4"
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
  </div>
</template>

<script>
import Table from "@/components/Table";
import {mapActions} from "vuex";
export default {
  name: "workList_complete",
  layout: 'sidebar',
  components: {
    Table
  },
  data(){
    return{
      isLoading: false,
      perPage: 10,
      page: 1,
      search:'',
      headers: [
        {
          title: 'Project Name',
          key: 'name',
        },
        {
          title: 'Punch In',
          key: 'punchInDate',
          sort: 'punchInDate',
        },
        {
          title: 'Punch Out',
          key: 'punchOutDate',
          sort: 'punchOutDate',
        },
        {
          title: 'No of Days',
          key: 'no_of_days',
          sort: 'no_of_days',
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
      workListCompleted: {},
      workListCompletedData:[]
    }
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.workListCompleted.perPage
    },
    totalPage() {
      return Math.ceil(this.workListCompleted.total / this.workListCompleted.perPage)
    },

    filterData() {
      return this.workListCompletedData
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      getWorkListCompleted: 'user/getWorkListCompleted',
    }),

    onChangePage(i) {
      this.page = i
      this.fetchData()
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
    async fetchData() {
      await this.userProfile()

      const request = {
        id: this.user_profile.id,
        page: this.page,
        search: this.search
      }
      const {data} = await this.getWorkListCompleted(request)
      this.workListCompleted = data.tasks
      this.workListCompletedData = data.tasks.data

      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>
