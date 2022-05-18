<template xmlns="http://www.w3.org/1999/html">
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
            <input v-model="workfromhome.from" class="rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
          </div>
          <div class="bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">to</Span>
            <input v-model="workfromhome.to" class="rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
          </div>
          <div class="bg-white p-4 rounded-lg text-left space-y-1">
            <Span class="text-base text-blue font-semibold">No of day</Span>
            <input v-model="workfromhome.noofdays+' day'" disabled class="border border-gray12 rounded-md bg-gray12 w-full px-2 py-1"/>
          </div>
          <div class="bg-white px-2 py-4 rounded-lg">
            <div class="text-center grid grid-cols-2 divide-x justify-center divide-gray13">
              <div>
                <Span class="mr-2 text-base text-blue font-semibold">Punch In</Span>
                <div @click="showModalPunchin = true" class="overflow-x-hidden flex justify-between mr-3 ml-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchin.hour||punchin.minute !== '' " class="px-2">{{ punchin.hour + ":" + punchin.minute }} {{ punchin.timetype }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>
              <div>
                <Span class="ml-2 text-base text-blue font-semibold">Punch Out</Span>
                <div @click="showModalPunchout = true" class="overflow-x-hidden flex justify-between ml-3 mr-1 mt-1 text-gray23 cursor-pointer px-2 py-1 border border-gray12 rounded-md">
                  <p v-if=" punchout.hour||punchout.minute !== '' " class="px-2">{{ punchout.hour + ":" + punchout.minute }} {{ punchout.timetype }}</p>
                  <p v-else class="px-2" >00:00</p>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>

              <form onSubmit="punchinSubmit">
                <div class="right-36 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchin">
                  <div class="grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
                    <div class="p-2 text-gray24">
                      <p class="text-left text-sm font-light text-gray25 mb-2">ENTER TIME</p>
                       <div class="flex space-x-2">
                        <div class="flex font-bold space-x-2 text-blue">
                          <div class="space-y-1">
                            <input v-model="punchin.hour" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2" maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Hour</p>
                          </div>
                          <p class="self-center mb-5 text-3xl">:</p>
                          <div class="space-y-1">
                            <input v-model="punchin.minute" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Minute</p>
                          </div>
                        </div>
                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">
                          <div v-if="punchin.timetype==='AM'||punchin.timetype===''">
                            <div @click="punchin.timetype='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchin.timetype='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                          <div v-else>
                            <div @click="punchin.timetype='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchin.timetype='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                        </div>
                    </div>
                      <div class="mt-2 flex justify-end text-blue text-sm space-x-4">
                        <button @click="showModalPunchin = false;punchin.hour='',punchin.minute=''">CANCEL</button>
                        <button type="onSubmit">OK</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <form onSubmit="punchoutSubmit">
                <div class="right-36 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchout">
                  <div class="grid justify-items-center modal text-xl bg-white rounded-xl font-kanit border shadow-md border-gray19">
                    <div class="p-2 text-gray24">
                      <p class="text-left text-sm font-light text-gray25 mb-2">ENTER TIME</p>
                      <div class="flex space-x-2">
                        <div class="flex font-bold space-x-2 text-blue">
                          <div class="space-y-1">
                            <input v-model="punchout.hour" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Hour</p>
                          </div>
                          <p class="self-center mb-5 text-3xl">:</p>
                          <div class="space-y-1">
                            <input v-model="punchout.minute" required placeholder="00" class="text-3xl text-center bg-gray24 rounded-md py-4" pattern="[0-9]+" minlength="2"  maxlength="2" size="2" type="text">
                            <p class="text-left text-gray24 text-xs	font-light">Minute</p>
                          </div>
                        </div>
                        <div class="btn-group text-center font-thin text-xs pt-1 pl-2">
                          <div v-if="punchout.timetype==='AM'||punchout.timetype===''">
                            <div @click="punchout.timetype='AM'" class="cursor-pointer text-white bg-blue rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchout.timetype='PM'" class="cursor-pointer text-gray25 bg-gray24 rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                          <div v-else>
                            <div @click="punchout.timetype='AM'" class="cursor-pointer text-gray25 bg-gray24 rounded-t-lg px-2 py-1 w-full">AM</div>
                            <div @click="punchout.timetype='PM'" class="cursor-pointer text-white bg-blue rounded-b-lg px-2 py-1 w-full">PM</div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 flex justify-end text-blue text-sm space-x-4">
                        <button @click="showModalPunchout = false;punchout.hour='',punchout.minute=''">CANCEL</button>
                        <button type="onSubmit">OK</button>
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
            <input type="text" class="w-full border border-gray12 rounded-md px-4 py-2" v-model="reason">
            <textarea rows="10" cols="40" class="w-full border border-gray12 rounded-md p-4" v-model="details"></textarea>
          </div>
        </div>
        <div class="pt-6 justify-self-end">
          <button @click="show.success = true" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
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
      workfromhome: {
        reason:'',
        details:'',
        from:'',
        to:'',
        noofdays: 0,
      },
      punchin: {
        timetype:'AM',
        hour: '',
        minute: '',
      },
      punchout: {
        timetype:'AM',
        hour: '',
        minute: '',
      },
    }
  },
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
