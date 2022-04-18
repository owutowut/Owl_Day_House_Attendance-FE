<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white shadow p-6 rounded-md md:w-1/2 lg:w-1/3"
         v-if="isCompleted">
      <div class="flex justify-end cursor-pointer" @click="hideCompleted">
        <svg-icon name="cross" width="20" height="20"/>
      </div>
      <div>
        <p class="font-medium text-3xl text-blue text-center mb-4">Completed</p>
        <div class="w-full mt-4">
          <p class="mb-4 text-xl font-medium">Project Name</p>
          <input v-model="projaect_name" class="w-full border border-gray12 rounded-lg text-gray12 h-10  py-2 px-4" disabled/>
        </div>
        <div class="w-full mt-4 mb-10">
          <p class="mb-4 text-xl font-medium">Details</p>
          <textarea v-model="details" class="w-full h-40 border border-gray12 rounded-lg text-gray12  py-2 px-4" disabled/>
        </div>
        <div class="w-full mt-4 mb-10">
          <p class="mb-4 text-xl font-medium">Proceeding</p>
          <textarea v-model="proceeding" class="w-full h-40 border border-gray12 rounded-lg text-gray12 " />
        </div>
        <div class="flex justify-center">
          <button class="bg-blue rounded-lg py-2 px-8 text-white" @click="hideCompleted">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Completed",
  props: ['isCompleted'],
  data(){
    return {
      projaect_name: 'Lorem ipsum dolor sit',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tincidunt sed tortor, dapibus nulla. Nisi leo sem pellentesque et ut arcu dignissim adipiscing arcu. Suscipit proin aliquam morbi pellentesque euismod.',
      proceeding: ''
    }
  },
  methods: {
    hideCompleted() {
      this.$emit('handleHideCompleted', false)
    }
  }
}
</script>

<style scoped>

</style>
