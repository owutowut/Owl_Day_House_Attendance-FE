<template xmlns="http://www.w3.org/1999/html">
  <div>

    <div class="AddFormModal">
      <form @submit="addForm">
        <div>
          <div class="fixed p-8 flex h-screen w-full top-0 right-0 overflow-hidden justify-center items-center animated fadeIn faster bg-gray10" v-if="show.add_form">
            <div class="text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.add_form = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8 pb-8">
                <p class="font-medium text-3xl text-blue text-center mb-6">Add Hoilday</p>
                <div class="space-y-4">
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Hoilday Name</Span>
                    <input v-model="holiday.name" placeholder="Name" class="no-outline text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="text-left space-y-1 w-full">
                    <Span class="text-base text-blue">From</Span>
                    <date-picker
                      color="#252647"
                      auto-submit
                      @change="GetDays(dataName='holiday')"
                      v-model="holiday.from"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="holiday_date_picker_from"
                    ></date-picker>
                    <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                      <input v-model="holiday.from" required id="holiday_date_picker_from" placeholder="วว/ดด/ปปปป" class="no-outline cursor-pointer w-full">
                      <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                    </div>
                  </div>
                  <div class=" text-left space-y-1 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <date-picker
                      :disabled="isDateFrom"
                      color="#252647"
                      auto-submit
                      @change="GetDays(dataName='holiday')"
                      v-model="holiday.to"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="holiday_date_picker_to"
                    ></date-picker>
                    <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                      <input v-model="holiday.to" required placeholder="วว/ดด/ปปปป" id="holiday_date_picker_to" class="no-outline cursor-pointer w-full">
                      <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                    </div>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Number of day</Span>
                    <input v-model="holiday.no_of_days+' Days'" required disabled class="text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
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
      <form @submit="editModal">
        <div>
          <div class="fixed flex h-screen p-8 w-full top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="show.edit">
            <div class="text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.edit = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8 pb-8">
                <p class="font-medium text-3xl text-blue text-center mb-6">Edit Hoilday</p>
                <div class="space-y-4">
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Hoilday Name</Span>
                    <input v-model="holiday_by_id.name" required placeholder="Name" class="no-outline text-gray26 bg-white rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
                  </div>
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">From</Span>
                    <date-picker
                      color="#252647"
                      auto-submit
                      @change="GetDays(dataName='holiday_by_id')"
                      v-model="holiday_by_id.from"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="holiday_by_id_date_picker_from"
                    ></date-picker>
                    <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                      <input v-model="holiday_by_id.from" required placeholder="วว/ดด/ปปปป" id="holiday_by_id_date_picker_from" class="no-outline cursor-pointer w-full">
                      <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                    </div>
                  </div>
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <date-picker
                      :disabled="isDateFrom"
                      color="#252647"
                      auto-submit
                      @change="GetDays(dataName='holiday_by_id')"
                      v-model="holiday_by_id.to"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="holiday_by_id_date_picker_to"
                    ></date-picker>
                  </div>
                  <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                    <input v-model="holiday_by_id.to" required placeholder="วว/ดด/ปปปป" id="holiday_by_id_date_picker_to" class="no-outline cursor-pointer w-full">
                    <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                  </div>
                  <div class=" text-left space-y-2 w-full">
                    <Span class="text-base text-blue">Number of day</Span>
                    <input v-model="holiday_by_id.no_of_days+ ' Days'" disabled class="text-gray26 bg-gray15 rounded-md border border-gray12 px-4 py-1 w-full" type="text"/>
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

    <div class="AddLeaveModal">
      <form @submit="leaveSubmit">
        <div>
          <div class="fixed flex h-screen w-full p-8 top-0 right-0 overflow-hidden justify-center items-center animated fadeIn faster bg-gray10" v-if="show.add_leave">
            <div class="text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
              <div @click="show.add_leave = false" class="flex justify-end cursor-pointer right m-4">
                <svg-icon name="cross" width="33.33" height="33.33"/>
              </div>
              <div class="px-8 pb-8">
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
                      @change="GetDays(dataName='leave')"
                      v-model="leave.from"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="leave_date_picker_from"
                    ></date-picker>
                  </div>
                  <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                    <input v-model="leave.from" required placeholder="วว/ดด/ปปปป" id="leave_date_picker_from" class="no-outline cursor-pointer w-full">
                    <svg-icon name="Calendar" width="19.5" height="19.5"></svg-icon>
                  </div>
                  <div class="text-left space-y-2 w-full">
                    <Span class="text-base text-blue">To</Span>
                    <date-picker
                      :disabled="isDateFrom"
                      color="#252647"
                      @change="GetDays(dataName='leave')"
                      v-model="leave.to"
                      :min="new Date().toISOString().substr(0, 10)"
                      element="leave_date_picker_to"
                    ></date-picker>
                  </div>
                  <div class="flex justify-between items-center font-light text-gray26 rounded-md border border-gray12 px-4 py-1">
                    <input v-model="leave.to" required placeholder="วว/ดด/ปปปป" id="leave_date_picker_to" class="no-outline cursor-pointer w-full">
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
      delete: Boolean,
      edit: Boolean,
      add_leave: Boolean,
    },
    holiday_by_id: {
      type: Object,
    },
  },
  data() {
    return {
      leave: {
        name:'',
        leave_type: '',
        from: '',
        to: '',
        no_of_days: 0,
        reason: '',
        status: 'Pending'
      },
      holiday: {
        name: '',
        from: '',
        to: '',
        no_of_days: 0,
      },
      user_profile: [],
      isDateFrom: true,
      dataName: ''
    }
  },

  mounted() {
    this.profile()
  },

  watch: {
    'leave.from' () {
      if (this.leave.from) {
        this.isDateFrom = false
      }
    },
    'holiday.from' () {
      if (this.holiday.from) {
        this.isDateFrom = false
      }
    },
    'holiday_by_id.from' () {
      if (this.holiday_by_id.from) {
        this.isDateFrom = false
      }
    }
  },

  methods: {
    ...mapActions({
      createHolidayForm: 'hr/createHolidayForm',
      createLeave: 'hr/createLeave',
      editHoliday: 'hr/editHoliday'
    }),
    GetDays() {
      if (this.dataName === "leave") {
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
      }
      if (this.dataName === "holiday") {

        let from = new Date(this.holiday.from);
        let to = new Date(this.holiday.to);

        if (this.holiday.to === '') {
          return this.holiday.no_of_days = 0
        }

        let total = parseInt((to - from) / (24 * 3600 * 1000))

        if(total < 0) {
          return this.holiday.no_of_days = 0
        } else {
          this.holiday.no_of_days = total
        }
      }
      if (this.dataName === "holiday_by_id") {

        let from = new Date(this.holiday_by_id.from);
        let to = new Date(this.holiday_by_id.to);

        if (this.holiday_by_id.to === '') {
          return this.holiday_by_id.no_of_days = 0
        }

        let total = parseInt((to - from) / (24 * 3600 * 1000))

        if(total < 0) {
          return this.holiday_by_id.no_of_days = 0
        } else {
          this.holiday_by_id.no_of_days = total
        }
      }
    },

    async leaveSubmit(ev) {
      const data = {
        user_id: this.user_profile.id,
        name: `${this.user_profile.first_name} ${this.user_profile.last_name}`,
        tag: this.user_profile.tag,
        status: this.leave.status,
        leave_type: this.leave.leave_type,
        from: this.leave.from,
        to: this.leave.to,
        no_of_days: this.leave.no_of_days,
        reason: this.leave.reason,
      }
      await this.createLeave(data)
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
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },

    async addForm() {
      const data = {
        name: this.holiday.name,
        from: this.holiday.from,
        to: this.holiday.to,
        no_of_days: this.holiday.no_of_days,
      }

      await this.createHolidayForm(data)
        .then(response => {
          if (response) {
            this.show.add_form = false

            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              reverseButtons: true,
              timer: 2500
            })

            this.$router.push('hr/holidays')
          }
        }).catch(err => {
          console.log(err.message)
        })
    },

    async profile() {
      const verify = await this.$auth.loggedIn

      try {
        if (!verify) {
          return 'Login required!'
        } else {
          const user=await this.$axios.get('me', {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` },
          })
          return this.user_profile = user.data
        }
      } catch (error) {
        return error.message
      }
    },

    async editModal() {
      const data = {
        id : this.holiday_by_id.id,
        name: this.holiday_by_id.name,
        from: this.holiday_by_id.from,
        to: this.holiday_by_id.to,
        no_of_days: this.holiday_by_id.no_of_days,
      }
      await this.editHoliday(data)
        .then(response => {
          if (response) {
            this.show.edit = false

            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              reverseButtons: true,
              timer: 2500
            })
          }
        }).catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>

<style scoped>
.no-outline:focus {
  outline: none;
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
