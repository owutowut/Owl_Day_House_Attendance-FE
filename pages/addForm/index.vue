<template>
  <div>
    <div class="flex justify-between ">
      <span class="text-3xl font-semibold mb-12">Work from Home</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <NuxtLink to="/work-from-home">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mb-8">
      <div class="bg-white  p-6 rounded-lg">
        <p class="mb-4 text-lg font-medium">From</p>
        <div class="relative w-full mb-4">
          <input class="custom-input-date-from w-full border border-gray12 rounded-lg h-10 pl-3 pr-8 font-kanit" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="date_from"
            custom-input=".custom-input-date-from"
            color="#252647"
          />
        </div>
      </div>
      <div class="bg-white  p-6 rounded-lg">
        <p class="mb-4 text-lg font-medium">to</p>
        <div class="relative w-full mb-4">
          <input class="custom-input w-full border border-gray12 rounded-lg h-10 pl-3 pr-8 font-kanit" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="date_to"
            custom-input=".custom-input"
            color="#252647"/>
        </div>
      </div>
      <div class="bg-white  p-6 rounded-lg">
        <p class="mb-4 text-lg font-medium">No of day</p>
        <input v-model="message" placeholder="5 day" class="w-full pl-2 bg-gary15 rounded-md h-10"/>
      </div>
      <div class="grid grid-cols-2 items-center bg-white  p-4 rounded-lg">
        <div class="border-r-2 border-gray13 text-center ">
          <p class="mb-4 text-sm font-medium">Punch In</p>
          <input type="text" class="custom-punchIn  pl-2 rounded-md py-2 border border-gray12 text-xs" placeholder="10:00 AM"/>
          <date-picker
            type="time"
            v-model="time"
            custom-input=".custom-punchIn"
            color="#252647"
          />
        </div>
        <div class="text-center ">
          <p class="mb-4 text-sm font-medium">Punch Out</p>
          <input type="text" class="custom-punchOut  pl-2 rounded-md py-2 border border-gray12 text-xs" placeholder="17:00 PM"/>
          <date-picker
            type="time"
            v-model="time"
            custom-input=".custom-punchOut"
            color="#252647"
          />
        </div>
      </div>
    </div>

    <div class="bg-white  p-6 rounded-md mt-6 ">
      <div class="grid grid-cols-12 gap-4 mb-8">
          <div class="col-span-2">
            <span class="mb-4 text-xl text-black3 font-medium">Reason</span>
          </div>
          <div class="col-span-10">
            <input placeholder="Lorem ipsum dolor sit" class="w-full border border-gray12 rounded-lg text-gray8 py-2 px-4"/>
          </div>
      </div>
        <div class="grid grid-cols-12 gap-4 mb-8">
          <div class="col-span-2">
            <span class="mb-4 text-xl text-black3 font-medium">Details</span>
          </div>
          <div class="col-span-10">
            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tincidunt sed tortor, dapibus nulla. Nisi leo sem pellentesque et ut arcu dignissim adipiscing arcu. Suscipit proin aliquam morbi pellentesque euismod."
                      rows="8" class="w-full  border border-gray12 rounded-lg text-gray8 py-2 px-4"/>
          </div>
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
      isModal: false,
      form: {
        reason: 'Lorem ipsum dolor sit',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tincidunt sed tortor, dapibus nulla. Nisi leo sem pellentesque et ut arcu dignissim adipiscing arcu. Suscipit proin aliquam morbi pellentesque euismod.'
      }
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
