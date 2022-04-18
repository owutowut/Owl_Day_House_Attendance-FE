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
    <div class="bg-white rounded-lg p-6 lg:w-3/4">
      <div class="grid grid-cols-12 gap-8 mt-12">
        <div class="col-span-3">
          <div class="lg:ml-16">
            <img src="~/assets/images/Ellipse4.png" class="h-36 w-36">
            <svg-icon name="camera" width="32" height="32" class="relative -top-6 left-24" />
          </div>
        </div>
        <div class="col-span-4 ">
          <div>
            <p>First Name</p>
            <input v-model="form.first_name" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-4">
            <p>Email</p>
            <input v-model="form.email" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-4">
            <p>Position</p>
            <input v-model="form.position" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-4">
            <p>Phone</p>
            <input v-model="form.phone" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-4">
            <p class="mb-2">Date of Join</p>
            <input class="custom-input w-full border text-gray7 border-gray12 rounded-lg h-11 pl-3 pr-8 font-kanit" placeholder="วว/ดด/ปปปป"/>
            <!--            <svg-icon name="Calendar" width="24" height="24" class="relative left-80 top-6"/>-->
            <date-picker
              v-model="form.date_of_join"
              custom-input=".custom-input"
            />
          </div>
        </div>
        <div class="col-span-4 ">
          <div>
            <p>Last Name</p>
            <input v-model="form.last_name" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-4">
            <p>Password</p>
            <input v-model="form.password" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div class="my-5">
            <p class="mb-2">Tag</p>
            <select v-model="form.select_Tag" class="rounded-lg h-11 px-4 py-2 w-full text-gray14 border border-gray12">
              <option value="Select Tag">Select Tag</option>
              <option>พนักงาน</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div class="my-5">
            <p class="mb-2">Birthday</p>
            <input class="custom-input w-full border border-gray12 rounded-lg h-11 pl-3 pr-8 font-kanit" placeholder="18/03/1999"/>
            <!--            <svg-icon name="Calendar" width="24" height="24" class="relative left-80 top-6"/>-->
            <date-picker
              v-model="form.birthday"
              custom-input=".custom-input-birthday"
            />
          </div>
          <div class="my-5">
            <p class="mt-2">Report to</p>
            <select v-model="form.report_to" class="rounded-lg h-11 my-2 px-4 py-2 w-full text-gray14 border border-gray12">
              <option value="Select Name">Select Name</option>
              <option>Manee Owan</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
        <div class="col-start-4 col-span-8">
          <p>Address</p>
          <input v-model="form.address" class="w-full text-gray7 border border-gray12 rounded-lg  py-2 px-4"/>
        </div>
        <div class="col-start-4 col-span-4 ">
          <div>
            <p>State</p>
            <input v-model="form.state" class="w-full font-kanit text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div>
            <p>Pincode</p>
            <input v-model="form.pincode" class="w-full text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
        </div>
        <div class="col-span-4 ">
          <p>Country</p>
          <input v-model="form.country" class="w-full font-kanit text-gray7 border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button class="bg-blue rounded-md py-2 px-8 text-white" @click="update">Submit</button>
      </div>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "index",
  layout: 'sidebar_hr',
  components: {
    Modal
  },
  data(){
    return {
      isModal: false,
      form: {
        first_name: 'Chawannop',
        last_name: 'Thammajai',
        email: 'chwannop@owndayshouse.com',
        password: '**********',
        position:'UX/UI Designer',
        phone: '088-008-0000',
        tag: 'พนักงาน',
        birthday:'18/03/1999',
        date_of_join: '01/01/2021',
        select_Tag: 'Select Tag',
        report_to: 'Manee Owan',
        address: '199/50 one bn kof ,frlp;@:, ',
        state: 'สันทราย',
        country: 'สันทรายหลวง',
        pincode: '10130'
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
