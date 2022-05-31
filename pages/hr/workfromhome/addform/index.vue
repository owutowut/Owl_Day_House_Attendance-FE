<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="flex justify-between mb-6">
      <span class="text-3xl font-semibold text-blue">Work from Home</span>
      <nuxt-link to="/hr/workfromhome" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <span class="text-lg font-kanit">Back</span>
      </nuxt-link>
    </div>
    <div class="grid flex space-x-4 mb-4">
        <div class="grid grid-cols-4 col-span-full flex gap-4 text-gray23">
          <div class="bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">From</Span>
            <date-picker
              color="#252647"
              auto-submit
              @change="GetDate()"
              v-model="form.from"
              :min="new Date().toISOString().substr(0, 10)"
              element="date_picker_from"
            />
            <div class="rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer relative">
              <input v-model="form.from" required placeholder="วว/ดด/ปปปป" id="date_picker_from" class="focus:outline-none no-outline cursor-pointer w-full">
              <svg-icon  name="Calendar" width="19" height="19" class="absolute top-1 right-1"></svg-icon>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg text-left space-y-1">
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
            <div class="rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer relative">
              <input v-model="form.to" required placeholder="วว/ดด/ปปปป" id="date_picker_to" class="focus:outline-none no-outline cursor-pointer w-full">
              <svg-icon  name="Calendar" width="19" height="19" class="absolute top-1 right-1"></svg-icon>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">No of day</Span>
            <input v-model="form.no_of_days+' Days'" disabled class="border border-gray12 rounded-md bg-gray12 w-full px-2 py-1"/>
          </div>
          <div class="bg-white px-2 py-4 rounded-lg">
            <div class="text-center grid grid-cols-2 divide-x justify-center divide-gray13">
              <div>
                <Span class="mr-2 text-base text-blue font-semibold">Punch In</Span>
                <div @click="showModalPunchin = true" class="overflow-x-hidden flex justify-between mr-3 ml-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchIn.hour||punchIn.minute !== '' " class="px-2">{{ punchIn.hour + ":" + punchIn.minute }} {{ punchIn.time_type }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>
              <div>
                <Span class="ml-2 text-base text-blue font-semibold">Punch Out</Span>
                <div @click="showModalPunchout = true" class="overflow-x-hidden flex justify-between ml-3 mr-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchOut.hour||punchOut.minute !== '' " class="px-2">{{ punchOut.hour + ":" + punchOut.minute }} {{ punchOut.time_type }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>

              <form @submit="getPunchIn">
                <div class="right-36 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchin">
                  <div class="grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
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
                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">
                          <div v-if="punchIn.time_type==='AM'||punchIn.time_type===''">
                            <div @click="punchIn.time_type='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchIn.time_type='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                          <div v-else>
                            <div @click="punchIn.time_type='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchIn.time_type='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                        </div>
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
                <div class="right-36 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchout">
                  <div class="grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
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
                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">
                          <div v-if="punchOut.time_type==='AM'||punchOut.time_type===''">
                            <div @click="punchOut.time_type='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchOut.time_type='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                          <div v-else>
                            <div @click="punchOut.time_type='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchOut.time_type='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                        </div>
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

      <div class="overflow-x-hidden pb-16 text-base font-kanit">
        <div class="grid bg-white p-10 rounded-lg text-left space-y-4 text-gray23 w-full">
          <div class="flex space-x-2 overflow-x-hidden">
            <div class="space-y-8 mt-2 text-blue w-1/6">
              <p>Reason</p>
              <p>Details</p>
            </div>
            <div class="space-y-4 w-full">
              <input type="text" class="focus:outline-none w-full border border-gray12 rounded-md px-4 py-2" v-model="form.reason">
              <textarea rows="10" cols="40" class="focus:outline-none w-full border border-gray12 rounded-md p-4" v-model="form.detail"></textarea>
            </div>
          </div>
          <div class="pt-6 justify-self-end">
            <button @click="onSubmitForm" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
              <span class="text-lg font-kanit">Submit</span>
            </button>
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
        time_type:'AM',
        hour: '',
        minute: ''
      },
      punchOut:{
        time_type:'AM',
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
        reason: `${this.form.reason}`,
        detail: `${this.form.detail}`,
        from: `${this.form.from}`,
        to: `${this.form.to}`,
        no_of_days: `${this.form.no_of_days}`,
        punchIn: `${this.form.punchIn}`,
        punchOut: `${this.form.punchOut}`,
        name: `${this.user_profile.first_name} ${this.user_profile.last_name}`,
        user_id: `${this.user_profile.id}`,
        tag: `${this.user_profile.tag}`
      }
      await this.createWfhForm(data)
        .then(response => {
          this.$router.push(`/hr/workfromhome`)
          console.log(response)
        })
        .catch(err => {
          console.log(err)
      })
    },
    getPunchIn(ev){
      this.form.punchIn = `${this.punchIn.hour}:${this.punchIn.minute} ${this.punchIn.time_type}`
      ev.preventDefault();
      this.showModalPunchin = false
    },
    getPunchOut(ev){
      this.form.punchOut = `${this.punchOut.hour}:${this.punchOut.minute} ${this.punchOut.time_type}`
      ev.preventDefault();
      this.showModalPunchout = false

    },
    async profile() {
      try {
        const profile = await this.$auth.user
        if (profile) {
          this.user_profile = profile.data.user
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.btn-group button {
  display: block;
}

.modal{
  width: 240px;
  height: 160px;
}

.modalSucess{
  width: 590px;
  height: 292px;
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
