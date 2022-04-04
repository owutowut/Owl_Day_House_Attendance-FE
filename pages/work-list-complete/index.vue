<template>
  <div>
    <p class="text-3xl font-semibold mb-8">work list Complete</p>
    <div class="flex justify-end">
      <div class="flex justify-end items-center bg-white rounded-md px-4 mb-6 text-lg">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input class="rounded-md py-2"  placeholder="Search.." />
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full  text-left">
        <thead class="text-lg text-blue font-kanit bg-white font-medium">
        <tr>
          <th scope="col" class="px-6 py-4">Project Name</th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Punch In</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Punch Out</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Status</Span>
            </div>
            </th>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Actions</Span>
            </div>
            </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">11 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap ">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-yellow rounded-2xl text-white flex justify-center px-6">Pending</div>
            </td>
          <td >
            <button >
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">5 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-red4 rounded-2xl text-white flex justify-center px-8">Break</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">24 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">18 Jan 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        <tr class="bg-white border-t border-gray12 ">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap">Lorem ipsum dolor sit</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-10 py-4 text-gray11 whitespace-nowrap">3 Mar 2020</td>
          <td class="px-14 py-4 text-gray11 whitespace-nowrap">1 day</td>
          <td class="flex mt-4 ml-4">
            <div class="bg-green rounded-2xl text-white flex justify-center px-4">Complete</div>
          </td>
          <td >
            <button>
              <NuxtLink to="/work-list-project">
                <img src="~/assets/images/Search.svg" class="ml-14 whitespace-nowrap"/>
              </NuxtLink>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-10">
      <img src="~/assets/images/Group 204.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "worklist_complete",
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
