<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else class="ml-6">
      <p class="text-4xl font-semibold mb-8">Change Password</p>
      <div class="bg-white rounded-md shadow p-6">
        <p class="mb-4 text-blue text-2xl">Account Data</p>
        <div class="flex mb-6">
          <p class="font-light text-blue2 text-lg">Email :</p>
          <p class="text-gray7 ml-2 font-light text-lg">chwannop@owndayshouse.com</p>
        </div>
        <input class="border border-gray9 rounded-md px-3 py-2 w-full mb-4 font-light text-sm"
               placeholder="Current Password"/>
        <input class="border border-gray9 rounded-md px-3 py-2 w-full mb-4 font-light text-sm" placeholder="New Password"/>
        <input class="border border-gray9 rounded-md px-3 py-2 w-full font-light text-sm" placeholder="Confirm New Password"/>
        <div class="flex justify-end">
          <button class="bg-blue text-white rounded-lg text-sm px-8 py-2 mt-4 text-sm" @click="update">Update
          </button>
        </div>
      </div>

      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";

export default {
  name: "change_password",
  layout: 'sidebar',
  components: {
    Modal,Loading
  },
  data() {
    return {
      isModal: false,
      isLoading: false
    }
  },

  methods: {
    onHideModal(event) {
      this.isModal = event
    },
    update(){
      this.isLoading = true
      this.isModal = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
