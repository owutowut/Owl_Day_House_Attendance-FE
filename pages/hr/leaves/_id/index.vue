<template>
<div class="mr-4">

  <div class="flex justify-between mb-4">
    <span class="text-3xl font-semibold text-blue">LEAVE</span>
    <nuxt-link to="/hr/leaves" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
      <span class="text-lg font-kanit">Back</span>
    </nuxt-link>
  </div>

  <div class="grid lg:grid-cols-2 gap-4 mb-4">
    <div class="flex bg-white p-10 rounded-lg text-left font-kanit border border-gray19 space-x-6">
      <div class="self-center">
        <img src="~/assets/images/profile-hr.png" class="rounded-full" width="126px" height="126px" alt="">
      </div>
      <div class="self-center">
        <p class="text-xl text-blue2">{{user_profile.first_name}} {{user_profile.last_name}}</p>
        <p class="text-base text-gray6 mb-2">{{user_profile.position}}</p>
        <div>
          <span class="bg-blue rounded-2xl text-white text-center py-1 px-4">{{ user_profile.tag }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-10 rounded-lg text-left font-kanit border border-gray19">
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Date of Join :</p>
        <p class="text-gray7 mb-2">{{ user_profile.date_of_join }}</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Phone :</p>
        <p class="text-gray7 mb-2">{{ user_profile.phone }}</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Birthday :</p>
        <p class="text-gray7 mb-2">{{ user_profile.birthday }}</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Address :</p>
        <p class="text-gray7 mb-2">{{ user_profile.address }}</p>
      </div>
      <div class="space-x-6 flex">
        <p class="text-blue2 mb-2">Report to :</p>
        <p class="text-gray7 mb-2">{{ user_profile.report_to }}</p>
      </div>
    </div>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-4 flex space-x-4">
    <div class="col-span-3 space-y-4">
      <div class="grid grid-cols-3 col-span-full flex gap-4 text-gray23">
        <div class="bg-white p-4 rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">From</Span>
          <div class="flex border border-gray12 rounded-md bg-gray22 w-full justify-between">
            <p class="pl-2 py-1">{{leave.from}}</p>
            <svg-icon name="Calendar" width="16" height="16" class="self-center mr-2 fill-current"/>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">to</Span>
          <div class="flex border border-gray12 rounded-md bg-gray22 w-full justify-between">
            <p class="pl-2 py-1">{{leave.to}}</p>
            <svg-icon name="Calendar" width="16" height="16" class="self-center mr-2 fill-current"/>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">No of day</Span>
          <p class="border border-gray12 rounded-md bg-gray22 w-full px-2 py-1">{{leave.no_of_days}}</p>
        </div>
      </div>
      <div class="overflow-x-hidden pb-16 text-base font-kanit">
        <div class="bg-white p-10 rounded-lg text-left space-y-4 text-gray23 w-full">
          <div class="flex space-x-2 overflow-x-hidden">
            <div class="space-y-8 mt-2 text-blue w-1/6">
              <p>Leave Type</p>
              <p>Leave Reason</p>
            </div>
            <div class="space-y-4 w-full">
              <input type="text" disabled class="w-full border border-gray12 rounded-md bg-gray22 px-4 py-2" v-model="leave.leave_type">
              <textarea rows="10" cols="40" disabled class="w-full border border-gray12 rounded-md bg-gray22 p-4" v-model="leave.reason"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-1">
      <div class="bg-white p-4 rounded-lg space-y-1">
        <Span class="text-base text-blue font-semibold text-left">Status</Span>
        <div class="grid justify-items-center">
          <select v-model="selected" class="cursor-pointer w-full border border-gray12 rounded-md bg-white px-2 py-1 text-gray23 font-kanit">
            <option disabled value="current" > {{leave.status}} </option>
            <option value="Approve">Approve</option>
            <option value="Pending">Pending</option>
          </select>
          <div class="pt-8 self-center">
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
      selected:'current',
      show:{
        success: false,
      },
      leave: [],
      user_profile: [],
    }
  },

  mounted() {
    this.leavesData()
  },

  methods: {
    ...mapActions({
      getLeaveByID: 'hr/getLeaveByID',
      leaveApprove: 'hr/leaveApprove',
      getUserByID: 'hr/getUserByID'
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

            this.$router.back('hr/leaves')
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },
  }
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
