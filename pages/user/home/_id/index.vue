<template>
  <Loading v-if="isLoading"/>

  <div v-else>
    <div class="pt-8 px-6 space-y-4">
      <div class="flex justify-between items-center pb-2">
        <div>
          <span class="text-blue text-3xl font-semibold">Project Complete</span>
        </div>
        <div>
          <a href="/user/home" class="bg-blue px-10 py-2 text-white rounded-md text-sm">Back</a>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-2">
        <div class="bg-white p-4 rounded-lg">
          <p class="text-blue text-lg mb-2 font-medium">Punch In</p>
          <p class="text-gray4">{{ taskData.weekday }}, {{ taskData.date }} {{ taskData.punchIn }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <p class="text-blue text-lg mb-2 font-medium">Punch Out</p>
          <p class="text-gray4">{{ taskData.punchOutFull }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <p class="text-blue text-lg mb-2 font-medium">Break Time</p>
          <p class="text-gray4">11.45 AM - 13.00 AM </p>
        </div>
        <div class="grid grid-cols-2 bg-white p-4 rounded-lg ">
          <div class="border-r-2 border-gray13 text-center">
            <div class="text-blue text-sm mb-3 font-medium">Time to Work </div>
            <div class="text-sm text-gray4">{{ taskData.timeRecord }} hrs</div>
          </div>
          <div class="text-center">
            <div class="text-blue text-sm mb-3 font-medium">Time to Break</div>
            <div class="text-sm text-gray4">1.15 hrs</div>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <div class="bg-white shadow p-6 rounded-md space-y-4 pb-8">
          <div class="grid lg:grid-cols-12">
            <div class="col-span-2">
              <span class="mb-4 text-xl text-black3 font-medium">Project Name</span>
            </div>
            <div class="col-span-10">
              <input v-model="taskData.name" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
            </div>
          </div>
          <div class="grid lg:grid-cols-12">
            <div class="col-span-2">
              <span class="mb-4 text-xl text-black3 font-medium">Details</span>
            </div>
            <div class="col-span-10">
              <textarea v-model="taskData.details" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
            </div>
          </div>
          <div class="grid lg:grid-cols-12">
            <div class="col-span-2">
              <span class="mb-4 text-xl text-black3 font-medium">Proceeding</span>
            </div>
            <div class="col-span-10">
              <textarea v-model="taskData.proceeding" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "project_complete",
  layout: 'sidebar',
  data() {
    return {
      taskData: {},
      isLoading: true,
      timeToWork:''
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    ...mapActions({
      getTaskByID: 'user/getTaskByID',
    }),

    async asyncData() {
      const {data} = await this.getTaskByID(this.$route.params.id)
      this.taskData = data.data

      this.isLoading = false
    }
  }
}
</script>
