<template>
  <div class="ml-6">
      <div class="mb-12">
        <span class="text-3xl font-semibold mr-6">Yesterday’s work list</span>
        <span class="text-lg font-medium bg-blue py-1 px-5 text-white rounded-lg">11/01/65</span>
      </div>
    <div >
      <div class="flex justify-between  border border-white1 bg-white1 rounded-lg px-6 py-4 mb-4" v-for="item in work_list_data" :key="item.id">
        <img v-if="item.status === 'success'" src="~/assets/images/check-circle-solid2.svg" class="w-[25px] h-[25px]">
        <img v-else src="~/assets/images/Loading.png" class="w-[25px] h-[25px]">
        <p class="font-light text-lg ">{{item.detail}}</p>
        <NuxtLink v-if="item.status === 'success'" :to="`/admin/work-list-yesterday/${item.id}`" class="bg-blue px-6 lg:px-11 lg:py-1 text-white rounded-lg text-xs font-light flex items-center">VIEW</NuxtLink>
        <button v-else class="bg-blue px-5 py-1 text-white rounded-lg text-xs font-light">ADD TO TASKS </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "index",
  layout: 'sidebar',
  data(){
    return{
      work_list_data: [
        {
          id:1,
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'success'
        },
        {
          id:2,
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'success'
        },
        {
          id:3,
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'success'
        },
        {
          id:4,
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'unsuccess'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
