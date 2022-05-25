<template xmlns="http://www.w3.org/1999/html">
  <div>

    <div class="AddFormModal">
      <form @submit="addForm">
        <div>
          <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.addform">
            <div class="modal text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.add_form = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8">
                <p class="font-medium text-3xl text-blue text-center mb-6">Add Hoilday</p>
                <div class="space-y-4">
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Hoilday Name</Span>
                    <input v-model="form.name" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">From</Span>
                    <input v-model="form.from" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer" type="date"/>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <input v-model="form.to" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer" type="date"/>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Number of day</Span>
                    <input v-model="form.no_of_days+' Days'"  class="text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="flex justify-center pt-6">
                    <button type="submit" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
                      <span class="text-lg font-kanit">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="EditModal">
      <form onsubmit="Submit()">
        <div>
          <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.edit">
            <div class="modal text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.edit = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8">
                <p class="font-medium text-3xl text-blue text-center mb-6">Edit Hoilday</p>
                <div class="space-y-4">
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Hoilday Name</Span>
                    <input v-model="data.name" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">From</Span>
                    <input v-model="data.from" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer" type="date"/>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <input v-model="data.to" class="text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer" type="date"/>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Number of day</Span>
                    <input v-model="data.noofdays+' Day'" disabled class="text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="flex justify-center pt-6">
                    <button @click="show.edit = false;show.success = true" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
                      <span class="text-lg font-kanit">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="DeleteModal">
      <div>
        <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.delete">
          <div class="modalSuccess bg-white rounded-lg border border-gray19 drop-shadow">
            <div @click="show.delete = false" class="pt-8 mb-6 flex justify-center">
              <svg-icon name="trashsolid" width="60" height="69"/>
            </div>
            <div class="text-center text-gray27 space-y-4">
              <span class="text-3xl">Delete Hoilday</span>
              <p class="text-xl font-light">Are you sure to permanently delete this ?</p>
            </div>
            <div class="w-full text-base font-light text-gray27 flex justify-center space-x-6 mt-8">
              <button @click="show.delete=false" class="border border-gray27 rounded-lg px-8 py-1.5">NO, KEEP IT</button>
              <button @click="show.delete=false;show.success = true" class="border border-green bg-green text-white rounded-lg px-8 py-1.5">YES, DELETE IT</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="SuccessModal">
      <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.success">
        <div class="grid justify-items-center modalSuccess text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
          <div @click="show.success = false" class="cursor-pointer justify-self-end m-4">
            <svg-icon name="close" width="15" height="15"/>
          </div>
          <div class="mt-2">
            <svg-icon name="check-circle-solid2" width="77.5" height="77.5"/>
          </div>
          <span class="pb-12">Successful transaction</span>
        </div>
      </div>
    </div>

    <div class="AddLeaveModal">
      <form @submit="leaveSubmit">
        <div>
          <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.add_leave">
            <div class="modalAddLeave text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.add_leave = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8">
                <p class="font-medium text-3xl text-blue text-center mb-2">Add Leave</p>
                <div class="space-y-2">
                  <div class="text-left space-y-1 w-full">
                    <Span class="text-base text-blue">Leave Type</Span>
                    <select required v-model="leave.leave_type" class="no-outline font-light text-gray26 rounded-md px-4 py-1 w-full border border-gray12 cursor-pointer">
                      <option value="" disabled selected>Select Leave type</option>
                      <option value="ลาป่วย">ลาป่วย</option>
                      <option value="ลากิจ">ลากิจ</option>
                    </select>
                  </div>
                  <div class="text-left space-y-1 w-full">
                    <Span class="text-base text-blue">From</Span>
                    <date-picker
                      color="#252647"
                      auto-submit
                      @change="GetDays()"
                      v-model="leave.from"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="date_picker_from"
                    ></date-picker>
                    <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                      <input v-model="leave.from" required id="date_picker_from" placeholder="วว/ดด/ปปปป" class="no-outline cursor-pointer w-full">
                      <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                    </div>
                  </div>
                  <div class=" text-left space-y-1 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <date-picker
                      color="#252647"
                      auto-submit
                      @change="GetDays()"
                      v-model="leave.to"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="date_picker_to"
                    ></date-picker>
                    <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                      <input v-model="leave.to" required placeholder="วว/ดด/ปปปป" id="date_picker_to" class="no-outline cursor-pointer w-full">
                      <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                    </div>
                  </div>
                  <div class=" text-left space-y-1 w-full">
                    <Span class="text-base text-blue">Number of day</Span>
                    <input v-model="leave.no_of_days+' Days'" required disabled class="no-outline font-light text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full"/>
                  </div>
                  <div class=" text-left space-y-1 w-full">
                    <Span class="text-base text-blue">Leave Reason</Span>
                    <textarea required v-model="leave.reason" class="no-outline font-light w-full h-24 text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="flex justify-center pt-2">
                    <button type="submit" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
                      <span class="text-lg font-kanit">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    show:{
      add_form: Boolean,
      success: Boolean,
      delete: Boolean,
      edit: Boolean,
      add_leave: Boolean,
    },
  },
  data() {
    return {
      leave: {
        leave_type: '',
        from: '',
        to: '',
        no_of_days: 0,
        reason: '',
        status: 'pending'
      },
      form: {
        name: '',
        from: '',
        to: '',
        no_of_days: 0,
      },
      data: {
          id: 1,
          name: '',
          from: '',
          to: '',
          noofdays: 7,
      },
      user_profile: [],
    }
  },

  mounted() {
    this.profile()
  },

  methods: {
    ...mapActions({
      createHolidayForm: 'hr/createHolidayForm',
      createLeave: 'hr/createLeave'
    }),
    GetDays() {
      let from = new Date(this.leave.from);
      let to = new Date(this.leave.to);
      if (this.leave.to === '') {
        return this.leave.no_of_days = 0
      }
      let total = parseInt((to - from) / (24 * 3600 * 1000))
      if(total < 0) {
        return this.leave.no_of_days = 0
      } else {
        this.leave.no_of_days = total
      }
    },
    async leaveSubmit() {
      const data = {
        user_id: `${this.user_profile.id}`,
        name: `${this.user_profile.first_name} ${this.user_profile.last_name}`,
        tag: `${this.user_profile.tag}`,
        status: `${this.leave.status}`,
        leave_type: `${this.leave.leave_type}`,
        from: `${this.leave.from}`,
        to: `${this.leave.to}`,
        no_of_days: `${this.leave.no_of_days}`,
        reason: `${this.leave.reason}`,
      }
      await this.createLeave(data)
        .then(response => {
          this.show.success = true
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async addForm() {
      const data = {
        name: `${this.form.name}`,
        from: `${this.form.from}`,
        to: `${this.form.to}`,
        no_of_days: `${this.form.no_of_days}`,
      }
      await this.createHolidayForm(data)
        .then(response => {
          this.show.success = true
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async profile() {
      try {
        const profile = await this.$auth.user

        this.user_profile = profile.data.user
      } catch (error) {
        await this.$auth.logout()
        await this.$auth.redirect('logout')
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.no-outline:focus {
  outline: none;
}

.modal{
  width: 560px;
  height: 600px;
}

.modalAddLeave{
  width: 560px;
  height: 660px;
}

.modalSuccess{
  width: 590px;
  height: 314px;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 250ms;
  animation-duration: 250ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

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
