<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else>
      <client-only>
        <div class="flex justify-between mb-8">
          <span class="text-3xl font-semibold">Edit Employee</span>
          <div>
            <button class="bg-blue px-10 py-2 text-white rounded-md text-sm">
              <NuxtLink to="/hr/employee">Back</NuxtLink>
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg p-6 lg:w-3/4 ">
          <ProfileEmployee class="my-4 w-14 lg:mt-10 lg:left-14" @change="onChangeFile"
                           :currentImage="form.profile_img"/>
          <div class="grid lg:grid-cols-3 gap-6 lg:-mt-32 ">
            <div class="lg:col-start-2">
              <p>First Name</p>
              <input v-model="form.first_name"
                     class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p>Last Name</p>
              <input v-model="form.last_name"
                     class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-2 ">
              <p>Email</p>
              <input v-model="form.email" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p>Password</p>
              <input type="password" v-model="form.password"
                     class="w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-2 ">
              <p>Position</p>
              <input v-model="form.position" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
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
              <input v-model="form.phone" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p class="mb-2">Birthday</p>
              <div class="relative">
                <input
                  class="custom-input-birthday w-full text-black4 border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit"
                  placeholder="18/03/1999"/>
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
                <input class="custom-input w-full border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit"
                       placeholder="วว/ดด/ปปปป"/>
                <svg-icon name="CalendarBlack" width="24" height="24" class="absolute right-3 top-3"/>
                <date-picker
                  v-model="form.date_of_join"
                  custom-input=".custom-input"
                />
              </div>
            </div>
            <div>
              <p>Gender</p>
              <select v-model="form.gender" class="rounded-lg h-11 my-2 px-4 py-2 w-full text-gray14 border border-gray12">
                <option disabled value="Select Name">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div class="lg:col-start-2 lg:col-span-2">
              <p>Address</p>
              <input v-model="form.address" class="w-full text-black4 border border-gray12 rounded-lg  py-2 px-4"/>
            </div>

            <div class="lg:col-start-2">
              <p>Report to</p>
              <select v-model="form.report_to"
                      class="rounded-lg h-11 my-2 px-4 py-2 w-full text-gray14 border border-gray12">
                <option value="Select Name">Select Name</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div >
              <p>State</p>
              <input v-model="form.state" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-2">
              <p>Pincode</p>
              <input v-model="form.pin_code" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>

            <div>
              <p>Country</p>
              <input v-model="form.country" class="w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>

          </div>
          <div class="flex justify-center mt-10">
            <button class="bg-blue rounded-md py-2 px-8 text-white" @click="editEmployee">Submit</button>
          </div>
          <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import ProfileEmployee from "@/components/ProfileEmployee";
import {mapActions} from "vuex";

export default {
  name: "index",
  layout: 'sidebar_hr',
  components: {
    Modal, ProfileEmployee, Loading
  },
  data() {
    return {
      isLoading: true,
      isModal: false,
      form: [],
    }
  },

  mounted() {
    this.employeeData()
  },
  methods: {
    ...mapActions({
      editEmployeeById: 'hr/editEmployeeById',
      getEmployeeByID: 'hr/getEmployeeByID',
    }),
    onChangeFile(e) {
      this.form.profile_img = e
      console.log(e)
    },
    async employeeData() {
      try {
        const id = this.$route.params.id
        const data = await this.getEmployeeByID(id)
        if (data) {
          this.form = data
        }
        this.isLoading = false
      } catch (e) {
        console.log(e)
      }
    },
    async editEmployee() {
      const formData = new FormData()
      for (const key in this.form) {
        formData.append(key, this.form[key])
      }
      formData.set('profile_img', this.form.profile_img)


      const data = {
        id: this.$route.params.id,
        formData,
        // first_name: `${this.form.first_name}`,
        // last_name: `${this.form.last_name}`,
        // email: `${this.form.email}`,
        // password: `${this.form.password}`,
        // position: `${this.form.position}`,
        // phone: `${this.form.phone}`,
        // tag: `${this.form.tag}`,
        // birthday: `${this.form.birthday}`,
        // date_of_join: `${this.form.date_of_join}`,
        // report_to: `${this.form.report_to}`,
        // address: `${this.form.address}`,
        // state: `${this.form.state}`,
        // country: `${this.form.country}`,
        // pin_code: `${this.form.pin_code}`,
        // gender: `${this.form.gender}`,
        // profile_img: this.form.profile_img
      }

      // return console.log([...formData])

      await this.editEmployeeById(data)
        .then(result => {
          if (result) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 1000
            })
            this.$router.replace('/hr/employee')
          }
        }).catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
