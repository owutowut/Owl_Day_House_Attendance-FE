<template>
  <div class="ml-6">
    <p class="text-3xl font-semibold mb-8">work list Complete</p>
    <div class="lg:flex lg:justify-end">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-lg my-8 px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input v-model="search" type="text" placeholder="Search to Name.." class="font-kanit text-lg w-full  focus:outline-none "/>
      </div>
    </div>

    <div class="relative overflow-x-auto rounded-md">
      <Table
        :headers="headers"
        :data="filterData.map((item, index) => {
          return {
            ...item,
            index: (index + 1) + pageStart,
             status: item.status === 'complete' ? 'Complete $complete$' : item.status === 'break' ? 'Break $break$' : 'Pending $pending$',
             noofdays: `${item.noofdays} Days`
          }
      })">
        <template v-slot:action="data">
          <div class="cursor-pointer flex justify-center items-center" >
            <NuxtLink :to="`/admin/work-list-complete/${data.data.id}`">
              <svg-icon name="Search2" width='24' height='24' class="text-blue"/>
            </NuxtLink>
          </div>
        </template>
      </Table>
    </div>
    <paginate
      class="flex justify-end mt-4 text-sm text-black2 space-x-4"
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
import Table from "@/components/Table";
export default {
  name: "workList_complete",
  layout: 'sidebar',
  components: {
    Table
  },
  data(){
    return{
      sort: {
        field: '',
        sorted: true,
      },
      search:'',
      path:'work-list-project',
      icon:'Search',
      headers: [
        {
          title: 'Project Name',
          key: 'name',
        },
        {
          title: 'Punch In',
          key: 'punchIn',
          sort: 'punchIn',
        },
        {
          title: 'Punch Out',
          key: 'punchOut',
          sort: 'punchOut',
        },
        {
          title: 'No of Days',
          key: 'noofdays',
          sort: 'noofdays',
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
      workListData: [
        {
          id:1,
          name:'AAA',
          punchIn:'11 Jan 2020',
          punchOut:'11 Jan 2020',
          noofdays: 1 ,
          status: 'pending'
        },
        {
          id:2,
          name:'Lorem ipsum dolor sit',
          punchIn:'5 Jan 2020',
          punchOut:'5 Jan 2020',
          noofdays: 1,
          status: 'break'
        },
        {
          id:3,
          name:'Lorem ipsum dolor sit',
          punchIn:'24 Mar 2020',
          punchOut:'24 Mar 2020',
          noofdays: 3,
          status: 'complete'
        },
        {
          id:4,
          name:'Lorem ipsum dolor sit',
          punchIn:'18 Mar 2020',
          punchOut:'18 Mar 2020',
          noofdays: 1,
          status: 'complete'
        },
        {
          id:5,
          name:'Lorem ipsum dolor sit',
          punchIn:'3 Mar 2020',
          punchOut:'3 Mar 2020',
          noofdays: 2,
          status: 'complete'
        },
        {
          id:6,
          name:'Lorem ipsum dolor sit',
          punchIn:'24 Mar 2020',
          punchOut:'24 Mar 2020',
          noofdays: 2,
          status: 'complete'
        },
        {
          id:7,
          name:'Lorem ipsum dolor sit',
          punchIn:'18 Jan 2020',
          punchOut:'18 Jan 2020',
          noofdays: 1,
          status: 'complete'
        },
        {
          id:8,
          name:'Lorem ipsum dolor sit',
          punchIn:'3 Mar 2020',
          punchOut:'3 Mar 2020',
          noofdays: 1,
          status: 'complete'
        },
      ]
    }
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.perPage
    },

    filterData() {
      if (this.search.trim()) {
        return this.workListData.filter(val => {
          return val.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return this.workListData
    }
  },
}
</script>

<style scoped>

</style>
