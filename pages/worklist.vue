<template>
  <div>
      <div class="mb-12">
        <span class="text-3xl font-semibold mr-6">Yesterday’s work list</span>
        <span class="text-lg font-medium bg-blue py-1 px-5 text-white rounded-lg">11/01/65</span>
      </div>
    <div >
      <div class="flex justify-between  border border-white1 bg-white1 rounded-lg px-6 py-4 mb-4" v-for="i in 3">
        <img src="~/assets/images/check-circle-solid 2.svg" class="w-[25px] h-[25px]">
        <p class="font-light text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="bg-blue px-11 py-1 text-white rounded-lg text-xs font-light">
          <NuxtLink to="/view_project">VIEW</NuxtLink>
        </button>
      </div>
      <div class="flex justify-between border border-white1 bg-white1 rounded-lg px-6 py-4" >
        <img src="~/assets/images/Loading.png" class="w-[25px] h-[25px]">
        <p class="font-light text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="bg-blue px-5 py-1 text-white rounded-lg text-xs font-light">ADD TO TASKS </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "worklist",
  layout: 'sidebar',
}
</script>

<style scoped>

</style>
