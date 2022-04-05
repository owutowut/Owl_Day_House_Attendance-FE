<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white  p-6 rounded-md w-1/3"
         v-if="isDelete">
      <div class="flex flex-col justify-center items-center my-8">
        <svg-icon name="trash-alt-solid" class="w-20 h-20 mb-6"/>
        <p class="text-xl font-semibold">Delete Profile</p>
        <p class="text-xs font-light mt-2">Are you sure to permanently delete this Profile ?</p>
      </div>
      <div class="flex items-center space-x-4 mt-6">
        <button class="rounded-lg px-4 py-2 w-full border">No, Keep it</button>
        <button class="rounded-lg px-4 py-2 bg-green  text-white w-full">yes, Delete it</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delete",
  props: ['isDelete']
}
</script>

<style scoped>

</style>
