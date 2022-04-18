<template>
  <div class="mx-4">
    <p class="text-3xl font-semibold mb-8">work list Complete</p>
    <div class="flex justify-end">
      <div class="flex justify-end items-center bg-white rounded-md px-4 mb-6 text-lg">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input class="rounded-md py-2"  placeholder="Search.." />
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="lg:w-full  text-left">
        <thead class="text-lg text-blue font-kanit bg-white font-medium">
        <tr>
          <th scope="col" class="px-6 py-4">Project Name</th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Punch In</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Punch Out</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Status</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Actions</Span>
            </div>
            </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg" v-for="worklist in worklistData" :key="worklist.id">
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">{{worklist.name}}</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">{{ worklist.punch_in }}</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">{{ worklist.punch_out }}</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">{{worklist.no_of_day}}</td>
          <td class="flex mt-4  w-8">
            <div class="bg-yellow rounded-2xl text-white text-center px-8" v-if="worklist.status=='Pending'">{{worklist.status}}</div>
            <div class="bg-red4 rounded-2xl text-white text-center px-10" v-if="worklist.status=='Break'">{{worklist.status}}</div>
            <div class="bg-green rounded-2xl text-white text-center px-6" v-if="worklist.status=='Complete'">{{worklist.status}}</div>
          </td>
          <td >
            <button >
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-10">
      <img src="~/assets/images/Group 204.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "worklist_complete",
  layout: 'sidebar',
  data(){
    return{
      worklistData: [
        {
          id:1,
          name:'Lorem ipsum dolor sit',
          punch_in:'11 Jan 2020',
          punch_out:'11 Jan 2020',
          no_of_day: '1 day',
          status: 'Pending'
        },
        {
          id:2,
          name:'Lorem ipsum dolor sit',
          punch_in:'5 Jan 2020',
          punch_out:'5 Jan 2020',
          no_of_day: '1 day',
          status: 'Break'
        },
        {
          id:3,
          name:'Lorem ipsum dolor sit',
          punch_in:'24 Mar 2020',
          punch_out:'24 Mar 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
        {
          id:4,
          name:'Lorem ipsum dolor sit',
          punch_in:'18 Mar 2020',
          punch_out:'18 Mar 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
        {
          id:5,
          name:'Lorem ipsum dolor sit',
          punch_in:'3 Mar 2020',
          punch_out:'3 Mar 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
        {
          id:6,
          name:'Lorem ipsum dolor sit',
          punch_in:'24 Mar 2020',
          punch_out:'24 Mar 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
        {
          id:7,
          name:'Lorem ipsum dolor sit',
          punch_in:'18 Jan 2020',
          punch_out:'18 Jan 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
        {
          id:8,
          name:'Lorem ipsum dolor sit',
          punch_in:'3 Mar 2020',
          punch_out:'3 Mar 2020',
          no_of_day: '1 day',
          status: 'Complete'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
