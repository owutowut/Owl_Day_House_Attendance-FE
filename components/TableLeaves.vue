<template>
  <div>
    <div class="drop-shadow-md">
      <table class="w-full ">
        <thead class="text-base text-blue bg-white">
        <tr>
          <th scope="col" class="">
            <div class="py-4 text-left pl-12">
              <Span>Employee</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>Leave Type</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>From</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>To</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>No of Days</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>Tag</Span>
            </div>
          </th>
          <th scope="col" class="">
            <div class="flex justify-center space-x-2">
              <svg-icon name="Swap" width="15.82px" height="16.33px"/>
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col">
            <div class="pr-8">
              <Span>Actions</Span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-base text-gray11 whitespace-nowrap" v-for="employee in employees" :key="employee.id">
        <tr class="bg-white border-t border-gray12 text-center">
          <td class="py-4 text-left pl-12">{{ employee.name }}</td>
          <td class="py-4 ">{{ employee.leavetype }}</td>
          <td class="py-4 ">{{ employee.from }}</td>
          <td class="py-4 ">{{ employee.to }}</td>
          <td class="py-4 ">{{ employee.noofdays }}</td>
          <td class="px-2 ">
            <div v-if="employee.tag=='พนักงาน'" class="bg-blue rounded-xl text-white text-center">{{ employee.tag }}</div>
            <div v-else-if="employee.tag=='ทดลองงาน'" class="bg-yellow rounded-xl text-white text-center">{{ employee.tag }}
            </div>
            <div v-else class="bg-purple1 rounded-xl text-white text-center">{{ employee.tag }}</div>
          </td>
          <td class="px-2 pl-8">
            <div v-if="employee.status=='Approve'" class="bg-green rounded-xl text-white text-center">{{ employee.status }}
            </div>
            <div v-else class="bg-yellow rounded-xl text-white text-center">{{ employee.status }}</div>
          </td>
          <td>
            <a :href="`/hr/leaves/${employee.id}`">
              <svg-icon name="Search" width="18.76px" height="19.22px" class="ml-8"/>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-2 mb-4 text-gray8">
      <nav class="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center py-2 rounded-l-md text-sm font-medium ">
          <span class="sr-only">Previous</span>
          <!-- Heroicon name: solid/chevron-left -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <a href="#" aria-current="page" class="px-2 z-10 text-blue relative inline-flex items-center py-2 text-sm font-medium"> 1 </a>
        <a href="#" class="px-2 relative inline-flex items-center py-2 text-sm font-medium"> 2 </a>
        <a href="#" class="px-2 hidden md:inline-flex relative items-center py-2 text-sm font-medium"> 3 </a>
        <span class="px-2 relative inline-flex items-center py-2 text-sm font-medium"> ... </span>
        <a href="#" class="px-2 relative inline-flex items-center py-2 text-sm font-medium"> 10 </a>
        <a href="#" class=" relative inline-flex items-center py-2 rounded-r-md text-sm font-medium">
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      employees: {}
    }
  }
</script>
