<template>
  <div>
    <Loading v-if="isLoading" />

    <div v-else class="pt-10 sm:space-y-6 sm:mx-4 sm:mb-4 lg:mx-6 space-y-4">
      <div class="sm:space-y-2 md:flex md:justify-between lg:flex lg:justify-between">
        <span class="sm:flex sm:justify-center text-3xl font-semibold text-blue">Work from Home</span>
        <div class="sm:flex sm:justify-center lg:justify-self-center">
          <button class="sm:w-full bg-blue px-10 py-2 text-white rounded-md text-sm">
            <NuxtLink to="/user/work-from-home">Back</NuxtLink>
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div class="md:col-span-2 lg:col-span-1 lg:self-center px-4 py-3 bg-white rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">From</Span>
          <date-picker
            color="#252647"
            auto-submit
            @change="GetDate()"
            v-model="wfh_by_id.from"
            :min="new Date().toISOString().substr(0, 10)"
            element="date_picker_from"
          />
          <div id="date_picker_from" class="sm:flex sm:justify-center lg:flex lg:justify-start rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer">
            <div class="sm:w-24 lg:w-full">
              <input v-model="wfh_by_id.from" required placeholder="วว/ดด/ปปปป" class="text-gray23 focus:outline-none cursor-pointer w-full">
            </div>
            <div class="sm:self-center">
              <svg-icon  name="Calendar" width="19" height="19" class="lg:self-center"></svg-icon>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 lg:col-span-1 lg:self-center px-4 py-3 bg-white rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">To</Span>
          <date-picker
            color="#252647"
            auto-submit
            @change="GetDate()"
            v-model="wfh_by_id.to"
            :min="new Date().toISOString().substr(0, 10)"
            element="date_picker_to"
          />
          <div id="date_picker_to" class="sm:flex sm:justify-center lg:flex lg:justify-start rounded-md border border-gray12 px-4 py-1 w-full cursor-pointer">
            <div class="sm:w-24 lg:w-full">
              <input v-model="wfh_by_id.to" required placeholder="วว/ดด/ปปปป" class="text-gray23 focus:outline-none cursor-pointer w-full">
            </div>
            <div class="sm:self-center">
              <svg-icon  name="Calendar" width="19" height="19" class="lg:self-center"></svg-icon>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 lg:col-span-1 lg:self-center px-4 py-3 bg-white rounded-lg text-left space-y-1">
          <Span class="text-base text-blue font-semibold">No of day</Span>
          <p class="sm:flex sm:justify-center lg:flex lg:justify-start text-gray23 bg-gray22 w-full rounded-md border border-gray12 px-4 py-1 w-full">{{wfh_by_id.no_of_days}} Days</p>
        </div>
        <div class="md:col-span-2 lg:col-span-1 bg-white px-4 py-3 rounded-lg">
          <div class="text-center grid grid-cols-2 justify-center divide-x divide-gray13">
            <div class="col-span-1 overflow-x-hidden">
              <Span class="text-base text-blue font-semibold">Punch In</Span>
              <div @click="showModalPunchin = true" class="px-4 overflow-x-hidden space-x-1 flex justify-center mt-1 mr-2 text-gray23 cursor-pointer py-1 border border-gray12 rounded-md">
                <div class="text-center">
                  <p v-if=" punchIn.hour||punchIn.minute !== '' ">{{ punchIn.hour + ":" + punchIn.minute }}</p>
                  <p v-else>{{ wfh_by_id.punchIn }}</p>
                </div>
                <div>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>
            </div>
            <div class="col-span-1 overflow-x-hidden">
              <Span class="text-base text-blue font-semibold ml-1">Punch Out</Span>
              <div @click="showModalPunchout = true" class="px-4 overflow-x-hidden space-x-1 flex justify-center mt-1 ml-2 text-gray23 cursor-pointer py-1 border border-gray12 rounded-md">
                <div class="text-center">
                  <p v-if=" punchOut.hour||punchOut.minute !== '' ">{{ punchOut.hour + ":" + punchOut.minute }}</p>
                  <p v-else>{{ wfh_by_id.punchOut }}</p>
                </div>
                <div>
                  <svg-icon class="mt-1" width="15" height="15" name="ArrowDown"></svg-icon>
                </div>
              </div>
            </div>

            <form @submit="getPunchIn">
              <div class="bottom-1/2 right-64 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchin">
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
              <div class="bottom-1/2 right-48 fixed justify-center items-center animated fadeIn faster" v-if="showModalPunchout">
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

      <div class="bg-white p-6 rounded-md mt-6">
        <div class="bg-white rounded-lg text-left space-y-4 text-gray23 w-full">
          <div class="space-x-2 overflow-x-hidden">
            <div class="w-full space-y-4 text-blue">
              <div class="space-y-2">
                <p>Reason</p>
                <input type="text" class="focus:outline-none text-gray23 w-full border border-gray12 rounded-md px-4 py-2" v-model="wfh_by_id.reason">
              </div>
              <div class="space-y-2">
                <p>Details</p>
                <textarea rows="10" cols="40" class="focus:outline-none text-gray23 w-full border border-gray12 rounded-md p-4" v-model="wfh_by_id.detail"></textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            <button class="bg-blue px-10 py-2 text-white rounded-md text-sm" @click="updateWfh">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "editWfh",
  layout: 'sidebar',

  data() {
    return {
      isLoading: true,
      wfh_by_id: {},
      punchIn:{
        hour: '',
        minute: ''
      },
      punchOut:{
        hour: '',
        minute: ''
      },
      showModalPunchin: false,
      showModalPunchout: false,
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    ...mapActions({
      getWfhById: 'user/getWfhById',
      editWfh: 'user/editWfh'
    }),

    getPunchIn(ev){
      this.wfh_by_id.punchIn = `${this.punchIn.hour}:${this.punchIn.minute}`
      ev.preventDefault();
      this.showModalPunchin = false
    },
    getPunchOut(ev){
      this.wfh_by_id.punchOut = `${this.punchOut.hour}:${this.punchOut.minute}`
      ev.preventDefault();
      this.showModalPunchout = false
    },

    async fetchData() {
      const id = this.$route.params.id
      const {data} = await this.getWfhById(id)
      this.wfh_by_id = data
      console.log(this.wfh_by_id)

      this.isLoading = false
    },

    async updateWfh() {
      const data = {
        id : this.$route.params.id,
        reason : this.wfh_by_id.reason,
        detail : this.wfh_by_id.detail,
        from : this.wfh_by_id.from,
        to : this.wfh_by_id.to,
        no_of_days : this.wfh_by_id.no_of_days,
        punchIn : this.wfh_by_id.punchIn,
        punchOut : this.wfh_by_id.punchOut,
      }
      await this.editWfh(data)
        .then(result => {
          if (result) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 2500
            })
            this.$router.push('/user/work-from-home')
            console.log(result)
          }
        }).catch(err => {
          console.log(err.message)
        })
    },

    GetDate() {
      let from = new Date(this.wfh_by_id.from);
      let to = new Date(this.wfh_by_id.to);
      if (this.wfh_by_id.to === '') {
        return this.wfh_by_id.no_of_days = 0
      }
      let total = parseInt((to - from) / (24 * 3600 * 1000))
      if(total < 0) {
        return this.wfh_by_id.no_of_days = 0
      } else {
        return this.wfh_by_id.no_of_days = total
      }
    },
  }
}
</script>
