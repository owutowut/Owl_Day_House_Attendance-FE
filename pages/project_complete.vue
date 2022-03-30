<template>
  <div>
    <div class="flex justify-between ">
      <span class="text-3xl font-semibold mb-12">Project Complete</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <nuxt-link to="/worklist_complete">Back</nuxt-link>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-4">Punch In</p>
        <p class="text-gray4">Mon, 11 January 2022 10.30 AM </p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-4">Punch Out</p>
        <p class="text-gray4">Mon, 11 January 2022 14.00 AM </p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-4">Break Time</p>
        <p class="text-gray4">11.45 AM - 13.00 AM </p>
      </div>
      <div class="grid grid-cols-2 bg-white p-4 rounded-lg ">
        <div class="border-r border-gray13 text-center">
          <div class="text-sm mb-3">Time to Work </div>
          <div class="text-sm text-gray4">4.10 hrs</div>
        </div>
        <div class="text-center">
          <div class="text-sm mb-3">Time to Break</div>
          <div class="text-sm text-gray4">1.15 hrs</div>
        </div>
      </div>
    </div>
    <div class="bg-white shadow p-6 rounded-md mt-6 ">
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3">Project Name</span>
        </div>
        <div class="col-span-10">
          <input v-model="form.project_name" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3">Details</span>
        </div>
        <div class="col-span-10">
          <textarea v-model="form.detail" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3">Proceeding</span>
        </div>
        <div class="col-span-10">
          <textarea v-model="form.proceeding" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project_complete",
  layout: 'sidebar',
  data() {
    return {
      form: {
        project_name: 'Lorem ipsum dolor sit',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tincidunt sed tortor, dapibus nulla. Nisi leo sem pellentesque et ut arcu dignissim adipiscing arcu. Suscipit proin aliquam morbi pellentesque euismod.',
        proceeding: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tincidunt sed tortor, dapibus nulla. Nisi leo sem pellentesque et ut arcu dignissim adipiscing arcu. Suscipit proin aliquam morbi pellentesque euismod.'
      }
    }
  }
}
</script>

<style scoped>

</style>
