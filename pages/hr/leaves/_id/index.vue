<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else>
      <div class="sm:mx-4 md:mx-2 lg:mx-1 mt-20 lg:space-y-4 md:space-y-4 sm:space-y-4">

      <div class="sm:pb-2 flex justify-between items-center">
        <span class="text-3xl font-semibold text-blue">LEAVE</span>
        <div>
          <nuxt-link to="/hr/leaves" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
            <span class="text-lg font-kanit">Back</span>
          </nuxt-link>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-4">
        <div class="flex lg:justify-start bg-white p-6 rounded-lg text-left font-kanit border border-gray19 space-x-3 sm:justify-center">
          <div class="md:my-4 self-center">
            <img :src="user_profile.profile_img" class="rounded-full sm:h-28 sm:w-28 w-28 h-28 bg-gray5 lg:ml-10">
          </div>
          <div class="self-center">
            <p class="sm:whitespace-nowrap sm:text-base text-xl text-blue2">{{user_profile.first_name}} {{user_profile.last_name}}</p>
            <p class="flex lg:justify-start sm:justify-center text-base text-gray6">{{user_profile.position}}</p>
            <div class="flex lg:justify-start sm:justify-center sm:mt-4">
              <span class="bg-blue rounded-2xl text-white text-center py-1 px-4 sm:px-6">{{ user_profile.tag }}</span>
            </div>
          </div>
        </div>

        <div class="overflow-x-hidden whitespace-nowrap space-y-2 bg-white p-8 rounded-lg text-left font-kanit border border-gray19">
          <div class="lg:space-x-2 md:space-x-2 lg:flex md:flex">
            <p class="text-blue2">Date of Join :</p>
            <p class="overflow-x-hidden text-gray7">{{ user_profile.date_of_join }}</p>
          </div>
          <div class="lg:space-x-2 md:space-x-2 lg:flex md:flex">
            <p class="text-blue2">Phone :</p>
            <p class="text-gray7">{{ user_profile.phone }}</p>
          </div>
          <div class="lg:space-x-2 md:space-x-2 lg:flex md:flex">
            <p class="text-blue2">Birthday :</p>
            <p class="text-gray7">{{ user_profile.birthday }}</p>
          </div>
          <div class="lg:space-x-2 md:space-x-2 lg:flex md:flex">
            <p class="text-blue2">Address :</p>
            <p class="text-gray7">{{ user_profile.address }}</p>
          </div>
          <div class="lg:space-x-2 md:space-x-2 lg:flex md:flex">
            <p class="text-blue2">Report to :</p>
            <p class="text-gray7">{{ user_profile.report_to }}</p>
          </div>
        </div>
      </div>

      <div class="pb-4 lg:grid lg:grid-cols-4 lg:grid-rows-3 sm:grid sm:grid-rows-4 sm:space-y-4 md:space-y-4 lg:space-y-0 lg:flex lg:gap-4">
        <div class="lg:col-span-3 sm:row-span-3 space-y-4">
          <div class="lg:grid lg:grid-cols-3 md:gap-4 sm:gap-4 sm:grid sm:grid-cols-2 sm:grid-row-2 lg:gap-4 text-gray23">
            <div class="lg:col-span-1 sm:col-span-2 sm:text-center bg-white py-4 px-5 rounded-lg text-left space-y-1">
              <Span class="text-base text-blue font-semibold">From</Span>
              <div class="sm:space-x-4 flex sm:justify-center border border-gray12 rounded-md bg-gray22 w-full justify-between">
                <p class="pl-2 py-1">{{leave.from}}</p>
                <svg-icon name="Calendar" width="16" height="16" class="self-center mr-2 fill-current"/>
              </div>
            </div>
            <div class="lg:col-span-1 sm:col-span-2 bg-white p-4 rounded-lg text-left space-y-1">
              <Span class="text-base text-blue font-semibold">to</Span>
              <div class="sm:space-x-4 flex sm:justify-center border border-gray12 rounded-md bg-gray22 w-full justify-between">
                <p class="pl-2 py-1">{{leave.to}}</p>
                <svg-icon name="Calendar" width="16" height="16" class="self-center mr-2 fill-current"/>
              </div>
            </div>
            <div class="lg:col-span-1 sm:col-span-2 sm:text-center bg-white py-4 px-5 rounded-lg text-left space-y-1">
              <Span class="text-base text-blue font-semibold">No of day</Span>
              <p class="border border-gray12 rounded-md bg-gray22 w-full px-2 py-1">{{leave.no_of_days}} Days</p>
            </div>
          </div>
          <div class="sm:col-span-2 overflow-x-hidden text-base font-kanit">
            <div class="bg-white lg:p-8 md:p-6 sm:py-4 sm:px-5 rounded-lg text-left space-y-4 text-gray23 w-full">
              <div class="md:flex lg:flex space-x-2 overflow-x-hidden">
                <div class="w-full space-y-4 text-blue">
                  <div class="space-y-2">
                    <p>Leave Type</p>
                    <input type="text" disabled class="w-full border border-gray12 rounded-md bg-gray22 px-4 py-2" v-model="leave.leave_type">
                  </div>
                  <div class="space-y-2">
                    <p>Leave Reason</p>
                    <textarea rows="10" cols="40" disabled class="w-full border border-gray12 rounded-md bg-gray22 p-4" v-model="leave.reason"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 sm:row-span-1">
          <div class="bg-white p-4 rounded-lg space-y-1">
            <Span class="text-base text-blue font-semibold text-left">Status</Span>
            <div class="grid space-y-2 justify-items-center">
              <select v-model="selected" class="cursor-pointer w-full border border-gray12 rounded-md bg-white px-2 py-1 text-gray23 font-kanit">
                <option disabled value="current" > {{leave.status}} </option>
                <option value="Approve">Approve</option>
                <option value="Pending">Pending</option>
              </select>
              <Span v-if="alert===true" class="text-red-700">
                  กรุณาเลือกสถานะ
              </Span>
              <div class="pt-2 self-center">
                <button @click="leaveStatus" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
                  <span class="text-lg font-kanit">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ModalHR :show="show"/>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import ModalHR from '@/components/ModalHR.vue'
import {mapActions} from "vuex";

export default {
  name: "leave_view.vue",
  layout: 'sidebar_hr',
  components:{
    ModalHR
  },
  data() {
    return {
      isLoading: true,
      selected:'current',
      show:{
        success: false,
      },
      leave: [],
      user_profile: [],
      alert: false,
    }
  },

  mounted() {
    this.leavesData()
  },

  methods: {
    ...mapActions({
      getLeaveByID: 'hr/getLeaveByID',
      leaveApprove: 'hr/leaveApprove',
      getUserByID: 'hr/getUserByID',
      notifications: 'hr/notifications'
    }),

    async leavesData() {
      const id = this.$route.params.id
      const data = await this.getLeaveByID(id)
      this.leave = data.leave
      const user = await this.getUserByID(data.leave.user_id)
      this.user_profile = user.data

      this.isLoading = false
    },

    async leaveStatus() {
      const data = {
        id : this.$route.params.id,
        status: this.selected,
      }
      const notificationData = {
        leave_id: this.$route.params.id,
        user_id: this.user_profile.id
      }
      if (this.selected!=="current") {
        await this.leaveApprove(data)
          .then(response => {
            if (response) {
              this.show.add_leave = false

              this.$swal({
                title: '<p class="text-3xl"> Successful transaction</p>',
                imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
                imageWidth: 80,
                imageHeight: 80,
                showConfirmButton: false,
                reverseButtons: true,
                timer: 2500
              })

              this.$router.push('/hr/leaves')
            }
          })
          .catch(err => {
            console.log(err.message)
          })
      }
      if (this.selected==="Approve") {
        await this.notifications(notificationData)
        await this.leaveApprove(data)
          .then(response => {
            if (response) {
              this.show.add_leave = false

              this.$swal({
                title: '<p class="text-3xl"> Successful transaction</p>',
                imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
                imageWidth: 80,
                imageHeight: 80,
                showConfirmButton: false,
                reverseButtons: true,
                timer: 2500
              })

              this.$router.push('/hr/leaves')
            }
          })
          .catch(err => {
            console.log(err.message)
          })
      }
      else {
        this.alert = true
      }
    }
  },
}
</script>

<style scoped>

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
