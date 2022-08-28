<template>
  <Loading v-if="isLoading"/>

  <div v-else class="mx-6 my-10 space-y-6">
    <div class="flex justify-between items-center">
      <span class="text-3xl font-semibold">Project Complete</span>
      <div>
        <nuxt-link to="/user/work-list-yesterday" class="bg-blue px-10 py-2 text-white rounded-md text-sm">Back</nuxt-link>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-2 font-medium">Punch In</p>
        <p class="text-gray4 text-sm">{{ taskCompleted.weekday }}, {{ taskCompleted.punchInDate }} {{ taskCompleted.punchIn }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-2 font-medium">Punch Out</p>
        <p class="text-gray4 text-sm">{{ taskCompleted.punchOutFull}}</p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-2 font-medium">Break Time</p>
        <p class="text-gray4 text-sm">11.45 AM - 13.00 AM </p>
      </div>
      <div class="grid grid-cols-2 bg-white p-4 rounded-lg ">
        <div class="border-r-2 border-gray13 text-center">
          <div class="text-sm mb-3 font-medium">Time to Work </div>
          <div class="text-sm text-gray4">{{ taskCompleted.timeRecord }} hrs</div>
        </div>
        <div class="text-center">
          <div class="text-sm mb-3 font-medium">Time to Break</div>
          <div class="text-sm text-gray4">1.15 hrs</div>
        </div>
      </div>
    </div>
    <div class="bg-white shadow p-6 rounded-md mt-6 ">
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Project Name</span>
        </div>
        <div class="col-span-10">
          <input v-model="taskCompleted.name" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Details</span>
        </div>
        <div class="col-span-10">
          <textarea v-model="taskCompleted.details" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Proceeding</span>
        </div>
        <div class="col-span-10">
          <textarea v-model="taskCompleted.proceeding" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "view_project",
  layout: 'sidebar',
  data() {
    return {
      taskCompleted: [],
      isLoading: false,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      getTaskByID: 'user/getTaskByID',
    }),
    async fetchData() {
      const {data} = await this.getTaskByID(this.$route.params.id)
      this.taskCompleted = data.data
      console.log(this.taskCompleted)

      this.isLoading = false
    },
  }
}
</script>

<style scoped>

</style>
