<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="lg:mx-2 lg:space-y-2 md:space-y-4 sm:space-y-4">
    <div class="mb-6">
      <div class="self-center lg:flex justify-between items-center space-y-6 sm:text-center sm:space-y-6">
        <span class="text-3xl font-semibold text-blue">Work from Home</span>
        <nuxt-link to="/hr/workfromhome" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
          <span class="text-lg font-kanit">Back</span>
        </nuxt-link>
      </div>
    </div>
    <div class="grid flex space-x-4 mb-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 col-span-full flex gap-4 text-gray23">
          <div class="sm:text-center bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">From</Span>
            <date-picker
              color="#252647"
              auto-submit
              @change="GetDate()"
              v-model="form.from"
              :min="new Date().toISOString().substr(0, 10)"
              element="date_picker_from"
            />
            <div class="sm:flex sm:space-x-4 rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer">
              <input v-model="form.from" required placeholder="วว/ดด/ปปปป" id="date_picker_from" class="focus:outline-none no-outline cursor-pointer w-full">
              <svg-icon  name="Calendar" width="19" height="19" class=""></svg-icon>
            </div>
          </div>
          <div class="sm:text-center bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">to</Span>
            <date-picker
              :disabled="isDateFrom"
              color="#252647"
              auto-submit
              @change="GetDate()"
              v-model="form.to"
              :min="new Date().toISOString().substr(0, 10)"
              element="date_picker_to"
            ></date-picker>
            <div class="sm:flex sm:space-x-4 rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer">
              <input v-model="form.to" required placeholder="วว/ดด/ปปปป" id="date_picker_to" class="focus:outline-none no-outline cursor-pointer w-full">
              <svg-icon  name="Calendar" width="19" height="19"></svg-icon>
            </div>
          </div>
          <div class="sm:text-center bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">No of day</Span>
            <input v-model="form.no_of_days+' Days'" disabled class="sm:pl-4 border border-gray12 rounded-md bg-gray12 w-full px-2 py-1"/>
          </div>
          <div class="bg-white px-2 py-4 rounded-lg">
            <div class="text-center grid grid-cols-2 justify-center divide-x divide-gray13">
              <div class="col-span-1">
                <Span class="text-base text-blue font-semibold">Punch In</Span>
                <div @click="showModalPunchin = true" class="text-center overflow-x-hidden flex sm:justify-center sm:px-2 justify-between mr-3 ml-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchIn.hour||punchIn.minute !== '' " class="px-2">{{ punchIn.hour + ":" + punchIn.minute }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>
              <div class="col-span-1">
                <Span class="text-base text-blue font-semibold">Punch Out</Span>
                <div @click="showModalPunchout = true" class="text-center overflow-x-hidden flex sm:justify-center sm:px-2 justify-between ml-3 mr-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchOut.hour||punchOut.minute !== '' " class="px-2">{{ punchOut.hour + ":" + punchOut.minute }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>

              <form @submit="getPunchIn">
                <div class="md:right-56 sm:right-36 sm:bottom-1/3 md:bottom-1/3 bottom-1/2 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchin">
                  <div class="px-4 grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
                    <div class="p-2 text-gray24">
                      <p class="text-left text-sm font-light text-gray25 mb-2">ENTER TIME</p>
                      <div class="flex space-x-2">
                        <div class="flex font-bold space-x-2 text-blue">
                          <div class="space-y-1">
                            <input @click="showModalPunchin = true" v-model="punchIn.hour" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2" maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Hour</p>
                          </div>
                          <p class="self-center mb-5 text-3xl">:</p>
                          <div class="space-y-1">
                            <input v-model="punchIn.minute" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Minute</p>
                          </div>
                        </div>
<!--                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">-->
<!--                          <div v-if="punchIn.time_type==='AM'||punchIn.time_type===''">-->
<!--                            <div @click="punchIn.time_type='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>-->
<!--                            <div @click="punchIn.time_type='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>-->
<!--                          </div>-->
<!--                          <div v-else>-->
<!--                            <div @click="punchIn.time_type='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>-->
<!--                            <div @click="punchIn.time_type='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>-->
<!--                          </div>-->
<!--                        </div>-->
                      </div>
                      <div class="mt-2 flex justify-end text-blue text-sm space-x-4">
                        <button @click="showModalPunchin = false ;punchIn.hour='',punchIn.minute=''">CANCEL</button>
                        <button type="submit" >OK</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <form @submit="getPunchOut">
                <div class="md:right-32 sm:right-20 sm:bottom-1/3 md:bottom-1/3 bottom-1/2 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchout">
                  <div class="px-4 grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
                    <div class="p-2 text-gray24">
                      <p class="text-left text-sm font-light text-gray25 mb-2">ENTER TIME</p>
                      <div class="flex space-x-2">
                        <div class="flex font-bold space-x-2 text-blue">
                          <div class="space-y-1">
                            <input @click="showModalPunchout = true" v-model="punchOut.hour" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Hour</p>
                          </div>
                          <p class="self-center mb-5 text-3xl">:</p>
                          <div class="space-y-1">
                            <input v-model="punchOut.minute" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Minute</p>
                          </div>
                        </div>
<!--                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">-->
<!--                          <div v-if="punchOut.time_type==='AM'||punchOut.time_type===''">-->
<!--                            <div @click="punchOut.time_type='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>-->
<!--                            <div @click="punchOut.time_type='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>-->
<!--                          </div>-->
<!--                          <div v-else>-->
<!--                            <div @click="punchOut.time_type='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>-->
<!--                            <div @click="punchOut.time_type='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>-->
<!--                          </div>-->
<!--                        </div>-->
                      </div>
                      <div class="mt-2 flex justify-end text-blue text-sm space-x-4">
                        <button @click="showModalPunchout = false;punchOut.hour='',punchOut.minute=''">CANCEL</button>
                        <button type="submit">OK</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    <div class="sm:col-span-2 overflow-x-hidden text-base font-kanit">
      <div class="bg-white lg:p-8 md:p-6 sm:py-4 sm:px-5 rounded-lg text-left space-y-4 text-gray23 w-full">
        <div class="md:flex lg:flex space-x-2 overflow-x-hidden">
          <div class="w-full space-y-4 text-blue">
            <div class="space-y-2">
              <p>Reason</p>
              <input type="text" class="no-outline w-full border border-gray12 text-gray23 rounded-md px-4 py-2" v-model="form.reason">
            </div>
            <div class="space-y-2">
              <p>Details</p>
              <textarea rows="10" cols="40" class="no-outline w-full border border-gray12 text-gray23 rounded-md p-4" v-model="form.detail"></textarea>
            </div>
            <div class="py-2 flex justify-end">
              <button @click="onSubmitForm" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
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
import ModalHR from "@/components/ModalHR";
import {mapActions} from "vuex";

export default {
  name: "leaveview.vue",
  layout: 'sidebar_hr',
  components:{
    ModalHR
  },
  data() {
    return {
      showModalPunchin: false,
      showModalPunchout: false,
      show:{
        success:false,
      },
      form: {
        reason:'',
        detail:'',
        from:'',
        to:'',
        no_of_days: 0,
        punchIn: '',
        punchOut: '',
      },
      punchIn:{
        hour: '',
        minute: ''
      },
      punchOut:{
        hour: '',
        minute: ''
      },
      isDateFrom: true,
      user_profile:[],
    }
  },
  watch: {
    'form.from' () {
      if (this.form.from) {
        this.isDateFrom = false
      }
    }
  },
  mounted() {
    this.profile()
  },
  methods: {
    ...mapActions({
      createWfhForm: 'hr/createWfhForm'
    }),
    GetDate() {
      let from = new Date(this.form.from);
      let to = new Date(this.form.to);
      if (this.form.to === '') {
        return this.form.no_of_days = 0
      }
      let total = parseInt((to - from) / (24 * 3600 * 1000))
      if(total < 0) {
        return this.form.no_of_days = 0
      } else {
        this.form.no_of_days = total
      }
    },
    async onSubmitForm() {
      const data = {
        reason: this.form.reason,
        detail: this.form.detail,
        from: this.form.from,
        to: this.form.to,
        no_of_days: this.form.no_of_days,
        punchIn: this.form.punchIn,
        punchOut: this.form.punchOut,
        user_id: this.user_profile.id,
        name: `${this.user_profile.first_name} ${this.user_profile.last_name}`,
        status: this.user_profile.status,
        tag: this.user_profile.tag,
      }
      await this.createWfhForm(data)
        .then(response => {
          if (response) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              reverseButtons: true,
              timer: 2500
            })

            this.$router.push(`/hr/workfromhome`)
          }
        }).catch(err => {
          console.log(err.message)
        })
    },

    getPunchIn(ev){
      this.form.punchIn = `${this.punchIn.hour}:${this.punchIn.minute}`
      ev.preventDefault();
      this.showModalPunchin = false
    },
    getPunchOut(ev){
      this.form.punchOut = `${this.punchOut.hour}:${this.punchOut.minute}`
      ev.preventDefault();
      this.showModalPunchout = false
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
    }
  }
}
</script>

<style scoped>
.btn-group button {
  display: block;
}

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

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
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
