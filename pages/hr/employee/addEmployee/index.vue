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
    <div class="bg-white rounded-lg p-6 lg:w-3/4 ">
      <Profile_img class="my-4 lg:mt-14 w-14" :currentImage="form.profile_img" />
      <div class="grid lg:grid-cols-3 gap-6 lg:-mt-32">
          <div class="lg:col-start-2">
            <p>First Name</p>
            <input v-model="form.first_name" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
        <div>
          <p>Last Name</p>
          <input v-model="form.last_name" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
          <div class="lg:col-start-2 ">
            <p>Email</p>
            <input v-model="form.email" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
        <div>
          <p>Password</p>
          <input v-model="form.password" type="password" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
          <div class="lg:col-start-2 ">
            <p>Position</p>
            <input v-model="form.position" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
        <div>
          <p class="mb-2">Tag</p>
          <select v-model="form.tag" class="rounded-lg h-11 px-4 py-2 w-full text-gray14 border border-gray12">
            <option value="Select Tag">Select Tag</option>
            <option>พนักงาน</option>
            <option>ฝึกงาน</option>
            <option>ทดลองงาน</option>
          </select>
        </div>
          <div class="lg:col-start-2 ">
            <p>Phone</p>
            <input v-model="form.phone" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
        <div>
          <p class="mb-2">Birthday</p>
          <div class="relative">
            <input class="custom-input-birthday w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit" placeholder="18/03/1999"/>
            <svg-icon name="CalendarBlack" width="24" height="24" class="absolute right-3 top-3 "/>
            <date-picker
              v-model="form.birthday"
              custom-input=".custom-input-birthday"
            />
          </div>
        </div>
          <div class="lg:col-start-2 ">
            <p class="mb-2">Date of Join</p>
            <div class="relative">
              <input class="custom-input w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit" placeholder="วว/ดด/ปปปป"/>
              <svg-icon name="CalendarBlack" width="24" height="24" class="absolute right-3 top-3"/>
              <date-picker
                v-model="form.date_of_join"
                custom-input=".custom-input"
              />
            </div>
          </div>
          <div class="">
            <p class="mt-2">Report to</p>
            <select v-model="form.report_to" class="rounded-lg h-11 my-2 px-4 py-2 w-full text-gray14 border border-gray12">
              <option value="Select Name">Select Name</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        <div class="lg:col-start-2 lg:col-span-2" >
          <p>Address</p>
          <input v-model="form.address" class="w-full  border border-gray12 rounded-lg  py-2 px-4"/>
        </div>

          <div class="lg:col-start-2">
            <p>State</p>
            <input v-model="form.state" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>
          <div>
            <p>Pincode</p>
            <input v-model="form.pin_code" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
          </div>

        <div class="lg:col-start-2">
          <p>Country</p>
          <input v-model="form.country" class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button class="bg-blue rounded-md py-2 px-8 text-white" @click="submitEmployee">Submit</button>
      </div>
      <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
    </div>
  </div>
</template>

<script>

import Modal from "@/components/Modal";
import Profile_img from "@/components/Profile_img";
import {mapActions} from "vuex";

export default {
  name: "index",
  layout: 'sidebar_hr',
  components: {
    Modal,Profile_img
  },
  data(){
    return {
      isModal: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        position:'',
        phone: '',
        tag: '',
        birthday:'',
        date_of_join: '',
        report_to: '',
        address: '',
        state: '',
        country: '',
        pin_code: '',
        gender:'as'
      }
    }
  },
  methods: {
    ...mapActions({
      getEmployee: 'hr/getEmployee',
      createEmployee: 'hr/createEmployee'
    }),
    onHideModal(event) {
      this.isModal = event
    },
    update(){
      this.isModal = true
    },
    async submitEmployee(){
      const data = {
        first_name: `${this.form.first_name}`,
        last_name: `${this.form.last_name}`,
        email: `${this.form.email}`,
        password: `${this.form.password}`,
        position:`${this.form.position}`,
        phone: `${this.form.phone}`,
        tag: `${this.form.tag}`,
        birthday:`${this.form.birthday}`,
        date_of_join: `${this.form.date_of_join}`,
        report_to: `${this.form.report_to}`,
        address: `${this.form.address}`,
        state: `${this.form.state}`,
        country: `${this.form.country}`,
        pin_code: `${this.form.pin_code}`,
        gender: `${this.form.gender}`,
        // profile_img: ''
      }
      console.log(data)
      await this.createEmployee(data)
        .then(response => {
          this.$router.push(`/hr/employee`)
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
      if (data) {
        this.$swal({
          title: '<p class="text-3xl"> Successful transaction</p>',
          imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
          imageWidth: 80,
          imageHeight: 80,
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

