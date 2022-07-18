<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else>
      <client-only>
        <div class="flex justify-between mb-8">
          <span class="text-3xl font-semibold">Edit Employee</span>
          <div>
            <NuxtLink to="/hr/employee" class="bg-blue px-10 py-2 text-white rounded-md text-sm">Back</NuxtLink>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 mb-14 bg-white rounded-lg px-8 py-10 gap-4">
          <ProfileEmployee class="lg:col-span-1 lg:mt-4 xl:mt-4 w-full" @change="onChangeFile"
                           :currentImage="form.profile_img"/>
          <div class="lg:col-span-2 grid gap-4">
            <div class="lg:col-start-1">
              <p>First Name</p>
              <input v-model="form.first_name"
                     class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p>Last Name</p>
              <input v-model="form.last_name"
                     class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-1 ">
              <p>Email</p>
              <input v-model="form.email" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="overflow-x-hidden">
              <p>Password</p>
              <input type="password" v-model="form.password"
                     class="focus:outline-none pr-28 w-full border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-1 ">
              <p>Position</p>
              <input v-model="form.position" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p class="mb-2">Tag</p>
              <select v-model="form.tag" class="focus:outline-none cursor-pointer rounded-lg h-11 px-4 py-2 w-full text-gray14 border border-gray12">
                <option value="">Select Tag</option>
                <option value="พนักงาน">พนักงาน</option>
                <option value="ฝึกงาน">ฝึกงาน</option>
                <option value="ทดลองงาน">ทดลองงาน</option>
              </select>
            </div>
            <div class="lg:col-start-1 ">
              <p>Phone</p>
              <input v-model="form.phone" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div>
              <p class="mb-2">Birthday</p>
              <div class="relative">
                <input v-model="form.birthday" class="focus:outline-none custom-input-birthday w-full text-black4 border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit"/>
                <svg-icon name="CalendarBlack" width="24" height="24" class="absolute right-3 top-3 "/>
                <date-picker
                  v-model="form.birthday"
                  custom-input=".custom-input-birthday"
                />
              </div>
            </div>
            <div class="lg:col-start-1 ">
              <p class="mb-2">Date of Join</p>
              <div class="relative">
                <input v-model="form.date_of_join" class="focus:outline-none custom-input w-full text-black4 border border-gray12 rounded-lg h-11 py-2 pl-3 pr-8 font-kanit"
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
              <select v-model="form.gender" class="focus:outline-none rounded-lg h-11 my-2 px-4 py-2 w-full text-black4 border border-gray12">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div class="lg:col-start-1 lg:col-span-2">
              <p>Address</p>
              <input v-model="form.address" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg  py-2 px-4"/>
            </div>

            <div class="lg:col-start-1">
              <p>Report to</p>
              <select v-model="form.report_to"
                      class="focus:outline-none rounded-lg h-11 my-2 px-4 py-2 w-full text-black4 border border-gray12">
                <option value="Sarawut Bunmee">Sarawut Bunmee</option>
              </select>
            </div>

            <div >
              <p>State</p>
              <input v-model="form.state" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>
            <div class="lg:col-start-1">
              <p>Pincode</p>
              <input v-model="form.pin_code" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>

            <div>
              <p>Country</p>
              <input v-model="form.country" class="focus:outline-none w-full text-black4 border border-gray12 rounded-lg my-2 py-2 px-4"/>
            </div>

            <div class="lg:col-start-1 w-full flex justify-center mt-2">
              <button class="w-1/2 bg-blue rounded-md py-2 px-8 text-white" @click="editEmployee">Submit</button>
            </div>
          </div>
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
    ProfileEmployee, Loading
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
      }

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
            this.$router.push('/hr/employee')
          }
        }).catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>
