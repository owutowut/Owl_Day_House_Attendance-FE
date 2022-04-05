<template>
  <div>
    <div class="flex justify-between mb-8">
      <span class="text-3xl font-semibold">Add Employee</span>
      <div>
        <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
          <NuxtLink to="/hr/employee">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 w-3/4">
      <div class="grid grid-cols-12 gap-8 mt-12">
        <div class="col-span-3">
          <div class="w-36 h-36 bg-gray5 rounded-full flex justify-center items-center ml-16">
            <svg-icon name="Profile" width="96" height="96" />
          </div>
          <div>
            <svg-icon name="camera" width="32" height="32" />
          </div>
        </div>
        <div class="col-span-4">
          <p>First Name</p>
          <input class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
        <div class="col-span-4 ">
          <p>Last Name</p>
          <input class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'sidebar_hr'
}
</script>

<style scoped>

</style>
