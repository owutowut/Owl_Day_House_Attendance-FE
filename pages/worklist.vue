<template>
  <div>
      <div class="mb-12">
        <span class="text-3xl font-semibold mr-[24px]">Yesterday’s work list</span>
        <span class="text-lg font-medium bg-blue  px-5 text-white rounded-md">11/01/65</span>
      </div>
    <div >
      <div class="flex justify-between  border border-white1 bg-white1 rounded-[8px] px-[16px] py-[12px] mb-[10px]" v-for="i in 3">
        <img src="~/assets/images/check-circle-solid 2.svg" class="w-[25px] h-[25px]">
        <p class="font-light text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="bg-blue px-5 py-1 text-white rounded-[8px] text-[12px] font-light">VIEW</button>
      </div>
      <div class="flex justify-between border border-white1 bg-white1 rounded-[8px] px-[16px] py-[12px]" >
        <img src="~/assets/images/Loading.png" class="w-[25px] h-[25px]">
        <p class="font-light text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="bg-blue px-5 py-1 text-white rounded-[8px] text-[12px] font-light">ADD TO TASKS </button>
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
