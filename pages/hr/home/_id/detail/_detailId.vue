<template>
  <div>
    <div class="md:flex justify-between ">
      <span class="text-3xl font-semibold mb-12">Project Complete</span>
      <div>
        <button class="bg-blue w-full h-10 my-4 md:mt-0 md:w-44 lg:w-44 text-white rounded-md text-sm">
          <nuxt-link to="/hr/home/profile">Back</nuxt-link>
        </button>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-2 font-medium">Punch In</p>
        <p class="text-gray4">Mon, 11 January 2022 10.30 AM </p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <p class="text-lg mb-2 font-medium">Punch Out</p>
        <p class="text-gray4">Mon, 11 January 2022 14.00 AM </p>
      </div>
        <div class="flex md:grid md:grid-cols-2 md:col-span-2 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <p class="text-lg mb-2 font-medium">Break Time</p>
            <p class="text-gray4">11.45 AM - 13.00 AM </p>
          </div>
          <div class="grid grid-cols-2 bg-white p-4 rounded-lg ">
            <div class="border-r-2 border-gray13 text-center">
              <div class="text-sm mb-3 font-medium">Time to Work </div>
              <div class="text-sm text-gray4">4.10 hrs</div>
            </div>
            <div class="text-center">
              <div class="text-sm mb-3 font-medium">Time to Break</div>
              <div class="text-sm text-gray4">1.15 hrs</div>
            </div>
          </div>
        </div>
    </div>
    <div class="bg-white shadow p-6 rounded-md mt-6 ">
      <div class="grid lg:grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Project Name</span>
        </div>
        <div class="col-span-10">
          <input v-model="form.project_name" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid lg:grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Details</span>
        </div>
        <div class="col-span-10">
          <textarea v-model="form.detail" rows="8" class="w-full rounded-lg text-gray8 disabled:bg-gary16 py-2 px-4" disabled/>
        </div>
      </div>
      <div class="grid lg:grid-cols-12 gap-4 mb-8">
        <div class="col-span-2">
          <span class="mb-4 text-xl text-black3 font-medium">Proceeding</span>
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
  name: "index",
  layout: 'sidebar_hr',
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
