<template>
  <div>
    <div class="font-semibold text-3xl">Hello! HR</div>
    <div class="grid grid-cols-3 mt-16 gap-6">
      <div>
        <div class="bg-white p-6 rounded-lg">
          <p class="text-2xl font-medium mb-6 px-5">Employee</p>
          <div class="grid grid-cols-2">
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">พนักงานทั้งหมด</p>
              <p class="text-black text-lg">15</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">พนักงาน</p>
              <p class="text-black text-lg">8</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">ทดลองงาน</p>
              <p class="text-black text-lg">4</p>
            </div>
            <div class="bg-white m-4 p-4 rounded-lg text-center font-kanit border border-gray19">
              <p class="text-xs text-black mb-4">ฝึกงาน</p>
              <p class="text-black text-lg">3</p>
            </div>
          </div>
        </div>
        <div class="bg-white mt-4 py-6 px-4 rounded-lg grid grid-cols-2 ">
          <div class="flex items-center ml-16">
            <svg-icon name="Man" width="65" height="65" />
            <span class="text-lg font-medium">60%</span>
          </div>
          <div class="flex items-center ml-10 ">
            <svg-icon name="Female" width="65" height="65" />
            <span class="text-lg font-medium">40%</span>
          </div>
        </div>
      </div>
      <div class="bg-white py-6 rounded-lg">
        <p class="text-2xl font-medium mb-6 px-5">Employee Availability</p>
        <div class="grid grid-cols-2">
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Work" width="40" height="40" />
              <p class="text-xs font-medium mt-4">Attendance</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">10</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Time Circle" width="40" height="40" />
              <p class="text-xs font-medium mt-4">Late Coming</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">3</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Close Square" width="40" height="40" />
              <p class="text-xs font-medium mt-4">Leave</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">1</p>
          </div>
          <div class="bg-white  p-4 border border-gray19 m-4 rounded-lg">
            <div>
              <svg-icon name="Home" width="40" height="40" />
              <p class="text-xs font-medium mt-4">Work from Home</p>
            </div>
            <p class="text-lg text-gray20 text-center mt-6">1</p>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2">
        <div class="bg-white py-6 rounded-md mb-6">
          <p class="text-2xl font-medium px-5">Notifications</p>
          <div class="flex justify-start space-x-2 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="DangerCircle" width="20" height="20"/>
            <span class="text-xs text-black1 font-kanit">คุณได้รับการอนุมัติการลากิจในวันที่ 11 Jan 2021 ของคุณเรียบร้อยแล้ว!</span>
          </div>
        </div>
        <div class="bg-white py-6 rounded-lg">
          <p class="text-2xl font-medium px-5">Holiday of the month</p>
          <div class="flex items-center space-x-6 items-center mt-7 border-y-[0.4px] border-gray3 py-6 px-5">
            <svg-icon name="Calendar-yellow" width='20' height="20"/>
            <span class="text-xs text-black1 font-kanit">วันสงกรานต์</span>
            <span class="text-xs text-black1 font-kanit">10/04/2022 - 18/04/2022</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-24" >
      <span class="text-3xl font-semibold">Attendance Today</span>
      <button class="bg-blue py-2 px-8 rounded-lg">
        <p class="text-lg text-white">View all</p>
      </button>
    </div>
    <div class="grid grid-cols-4 gap-6 mt-12">
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">พนักงาน</p>
        <p class="text-gray4 text-lg">3</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ทดลองงาน</p>
        <p class="text-gray4 text-lg">2</p>
      </div>
      <div class="bg-white  p-4 rounded-md text-center font-kanit">
        <p class="text-lg mb-4">ฝึกงาน</p>
        <p class="text-gray4 text-lg">5</p>
      </div>
      <div class="grid grid-cols-2 bg-white  p-4 rounded-lg font-kanit">
        <div class="border-r border-gray13 text-center">
          <div class="text-sm mb-3">เข้างาน</div>
          <div class="text-gray4 text-lg">10</div>
        </div>
        <div class="text-center ">
          <div class="text-sm mb-3">ลา</div>
          <div class="text-gray4 text-lg">3</div>
        </div>
      </div>
    </div>
    <div class="flex justify-end space-x-4 mt-6">
      <div class="search-wrapper  flex justify-center items-center bg-white rounded-lg px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" placeholder="Search to Name.." class="font-kanit text-lg w-[704px]"/>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-[236px]">
          <option value="Position" >Position</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <select  class="rounded-lg px-4 py-2  text-gray14 font-kanit text-lg w-[152px]">
          <option value="Status" >Status</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-auto  sm:rounded-lg mt-6">
      <table class="w-full">
        <thead class="text-lg text-blue  bg-white">
        <tr>
          <th scope="col" class="px-6 py-4">
            <div class="flex items-center">
              <Span>Employee</Span>
            </div>
          </th>
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
              <Span>Tag</Span>
            </div>
          </th>
          <th scope="col" class="px-10 py-4">
            <div class="flex items-center">
              <svg-icon name="Swap" width="20" height="20"/>
              <Span>Status</Span>
            </div>
          </th>
          <th scope="col" class="px-6 py-4">
            <Span>Actions</Span>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-lg">
        <tr class="bg-white border-t border-gray12"  v-for="data in mockData" :key="data.id">
          <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{data.name}}</td>
          <td class="px-8 py-4 text-gray11 whitespace-nowrap">{{ data.time_in }}</td>
          <td class="px-8 py-4 text-gray11 whitespace-nowrap">{{ data.time_out}}</td>
          <td class="w-8">
            <div class="bg-blue rounded-2xl text-white  whitespace-nowrap px-4 text-center" v-if="data.tag=='พนักงาน'" >{{data.tag}}</div>
            <div v-if="data.tag=='ทดลองงาน'" class="bg-yellow rounded-2xl text-white  whitespace-nowrap px-4 text-center">{{data.tag}}</div>
            <div v-if="data.tag=='ฝึกงาน'" class="bg-purple1 rounded-2xl text-white  whitespace-nowrap px-4 text-center">{{data.tag}}</div>
          </td>
          <td class="flex mt-4 ml-10">
            <div class="bg-green rounded-2xl text-white  whitespace-nowrap px-4 " v-if="data.status=='Punch In'">{{data.status}}</div>
            <div class="bg-red4 rounded-2xl text-white  whitespace-nowrap px-4 px-6" v-if="data.status=='Leaves'">{{data.status}}</div>
          </td>
          <td >
            <svg-icon name="Search2" width="25" height="25" class="ml-24 whitespace-nowrap"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-6 flex justify-end">
      <img src="~/assets/images/Group 204.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  layout: 'sidebar_hr',
  data(){
    return{
      mockData: [
        {
          id:1,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'10.30 AM',
          time_out:'--.-- AM',
          tag: 'พนักงาน',
          status: 'Punch In'
        },
        {
          id:2,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'10.30 AM',
          time_out:'--.-- AM',
          tag: 'พนักงาน',
          status: 'Punch In'
        },
        {
          id:3,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'10.32 AM',
          time_out:'--.-- AM',
          tag: 'ทดลองงาน',
          status: 'Punch In'
        },
        {
          id:4,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'10.25 AM',
          time_out:'--.-- AM',
          tag: 'ฝึกงาน',
          status: 'Punch In'
        },
        {
          id:5,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'10.36 AM',
          time_out:'--.-- AM',
          tag: 'ฝึกงาน',
          status: 'Punch In'
        },
        {
          id:6,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'--.-- AM',
          time_out:'--.-- AM',
          tag: 'พนักงาน',
          status: 'Leaves'
        },
        {
          id:7,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'--.-- AM',
          time_out:'--.-- AM',
          tag: 'ทดลองงาน',
          status: 'Leaves'
        },
        {
          id:8,
          name:'CHAWANNOP THAMMAJAI',
          time_in:'--.-- AM',
          time_out:'--.-- AM',
          tag: 'ฝึกงาน',
          status: 'Leaves'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
