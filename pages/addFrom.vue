<template>
  <div>
    <div class="flex justify-between ">
      <span class="text-3xl font-semibold mb-12">Work from Home</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <NuxtLink to="/wfh">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-white shadow p-6 rounded-md">
        <p class="mb-3 text-lg">From</p>
        <div class="relative w-full mb-4">
          <input class="custom-input-date-from w-full border border-gray12 rounded-lg h-10 pl-3 pr-8" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="date_from"
            custom-input=".custom-input-date-from"
            color="#252647"
          />
        </div>
      </div>
      <div class="bg-white shadow p-6 rounded-md">
        <p class="mb-3 text-lg">to</p>
        <div class="relative w-full mb-4">
          <input class="custom-input w-full border border-gray12 rounded-lg h-10 pl-3 pr-8" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="date_to"
            custom-input=".custom-input"
            color="#252647"/>
        </div>
      </div>
      <div class="bg-white shadow p-6 rounded-md">
        <p class="mb-3 text-lg">No of day</p>
        <input v-model="message" placeholder="5 day" class="w-full pl-2 bg-gary15 rounded-md h-10"/>
      </div>
      <div class="grid grid-cols-2 bg-white shadow p-6 rounded-md">
        <div class="border-r border-gray13 text-center text-sm">
          <p class="mb-4">Punch In</p>
          <input type="text" class="custom-punchIn w-40 pl-2 rounded-md h-10 border border-gray12" placeholder="10:00 AM"/>
          <date-picker
            type="time"
            v-model="time"
            custom-input=".custom-punchIn"
            color="#252647"
          />
        </div>
        <div class="text-center text-sm">
          <p class="mb-4">Punch Out</p>
          <input type="text" class="custom-punchOut w-40 pl-2 rounded-md h-10 border border-gray12" placeholder="17:00 PM"/>
          <date-picker
            type="time"
            v-model="time"
            custom-input=".custom-punchOut"
            color="#252647"
          />
        </div>
      </div>
    </div>

    <div class="bg-white shadow p-6 rounded-md mt-6 ">
      <div class="w-full mt-4 flex space-x-6">
        <span class="mb-4 text-xl">Reason</span>
        <input v-model="message" class="w-full border border-gray12 rounded-md h-10 "/>
      </div>
      <div class="w-full mt-4 mb-10 flex space-x-6">
        <span class="mb-4 text-xl">Details</span>
        <textarea v-model="message" class="w-full h-40 border border-gray12 rounded-md "/>
      </div>
      <div class="flex justify-end">
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm" @click="update">Submit</button>
      </div>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "addFrom",
  layout: 'sidebar',
  components: {
    Modal
  },
  data() {
    return {
      isModal: false
    }
  },

  methods: {
    onHideModal(event) {
      this.isModal = event
    },
    update(){
      this.isModal = true
    }
  }
}
</script>

<style scoped>

</style>
