<template>
  <div>

    <div class="flex justify-between mb-6">
      <span class="text-3xl font-semibold text-blue">Hoilday of the month</span>
      <button  @click="showModal=true" class="bg-yellow px-10 py-2 text-white rounded-md text-lg font-light flex justify-center items-center">
        <svg-icon name="add1" width="15" height="15" class="mr-2"/>
        <span class="text-lg font-kanit">Add Form</span>
      </button>
    </div>

    <div class="flex justify-end space-x-4 mb-6">
      <div class="search-wrapper flex justify-center items-center bg-white rounded-md px-4 py-2">
        <svg-icon name="Search" width="15" height="15" class="mr-2"/>
        <input type="text" v-model="search" placeholder="Search.." class="w-[488px] font-kanit text-lg px-4"/>
      </div>
      <div>
        <select v-model="selected" class="rounded-md px-4 py-2 w-[320px] text-gray14 font-kanit text-lg">
          <option value="all">Date</option>
        </select>
      </div>
    </div>

    <div class="relative overflow-x-auto sm:rounded-lg">
      <TableHoliday :holidays="filtered" :sort="sort"/>
    </div>

    <form onsubmit="Submit()">
      <div>
        <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="showModal">
          <div class="modal text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
            <div @click="showModal = false" class="flex justify-end cursor-pointer right m-4">
              <svg-icon name="cross" width="33.33" height="33.33"/>
            </div>
            <div class="px-8">
              <p class="font-medium text-3xl text-blue text-center mb-6">Add Hoilday</p>
              <div class="space-y-4">
                <div class="text-left space-y-2 w-full">
                  <Span class="text-base text-blue">Hoilday Name</Span>
                  <input v-model="form.name" class="bg-white rounded-md border border-gray12 px-2 py-1 w-full" type="text"/>
                </div>
                <div class="text-left space-y-2 w-full">
                  <Span class="text-base text-blue">From</Span>
                  <input v-model="form.from" class="text-gray26 bg-white rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
                </div>
                <div class=" text-left space-y-2 w-full">
                  <Span class="text-base text-blue">To</Span>
                  <input v-model="form.to" class="text-gray26 bg-white rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
                </div>
                <div class=" text-left space-y-2 w-full">
                  <Span class="text-base text-blue">Number of day</Span>
                  <input v-model="form.noofdays" disabled class="bg-gray15 rounded-md border border-gray12 px-2 py-1 w-full" type="text"/>
                </div>
                <div class="flex justify-center pt-6">
                  <button @click="showModal = false;showModalSuccess = true" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
                    <span class="text-lg font-kanit">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <form onsubmit="Submit()">
      <div>
        <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="showModalEdit">
          <div class="modal text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
            <div @click="showModalEdit = false" class="flex justify-end cursor-pointer right m-4">
              <svg-icon name="cross" width="33.33" height="33.33"/>
            </div>
            <div class="px-8">
              <p class="font-medium text-3xl text-blue text-center mb-6">Edit Hoilday</p>
              <div class="space-y-4">
                <div class="text-left space-y-2 w-full">
                  <Span class="text-base text-blue">Hoilday Name</Span>
                  <input v-model="holidays.name" class="bg-white rounded-md border border-gray12 px-2 py-1 w-full" type="text"/>
                </div>
                <div class="text-left space-y-2 w-full">
                  <Span class="text-base text-blue">From</Span>
                  <input v-model="holidays.from" class="text-gray26 bg-white rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
                </div>
                <div class=" text-left space-y-2 w-full">
                  <Span class="text-base text-blue">To</Span>
                  <input v-model="holidays.to" class="text-gray26 bg-white rounded-md border border-gray12 px-2 py-1 w-full cursor-pointer" type="date"/>
                </div>
                <div class=" text-left space-y-2 w-full">
                  <Span class="text-base text-blue">Number of day</Span>
                  <input v-model="holidays.noofdays" disabled class="bg-gray15 rounded-md border border-gray12 px-2 py-1 w-full" type="text"/>
                </div>
                <div class="flex justify-center pt-6">
                  <button @click="showModalEdit = false;showModalSuccess = true" class="bg-blue px-10 py-2 text-white rounded-md text-lg font-light">
                    <span class="text-lg font-kanit">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div>
      <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="showModalSuccess">
        <div class="grid justify-items-center modalSucess text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
          <div @click="showModalSuccess = false" class="cursor-pointer justify-self-end m-4">
            <svg-icon name="close" width="15" height="15"/>
          </div>
          <div class="mt-2">
            <svg-icon name="check-circle-solid2" width="77.5" height="77.5"/>
          </div>
          <span class="pb-12">Successful transaction</span>
        </div>
      </div>
    </div>

    <div>
      <div class="fixed w-full h-screen top-0 right-0 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10" v-if="showModalDelete">
        <div class="modalSucess text-xl bg-white rounded-lg font-kanit border border-gray19 drop-shadow">
          <div class="pt-8 mb-6 flex justify-center">
            <svg-icon name="trashsolid" width="60" height="69"/>
          </div>
          <div class="text-center text-gray27 space-y-4">
            <span class="text-3xl">Delete Hoilday</span>
            <p class="text-xl font-thin">Are you sure to permanently delete this ?</p>
          </div>
          <div class="text-xl font-thin text-gray27 flex justify-center space-x-6 mt-8">
            <button @click="showModalDelete=false" class="border border-gray27 rounded-lg px-6 py-2">NO, KEEP IT</button>
            <button @click="onSubmit()" class="border border-green bg-green text-white rounded-lg px-6 py-2">YES, DELETE IT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableHoliday from '@/components/TableHoliday.vue'

export default {
  name: "holiday",
  layout: 'sidebar_hr',
  components:{
    TableHoliday,
  },
  computed: {
    filtered: function () {
      if (this.search !== "") {
        return this.holidays.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase()) || item.noofdays.includes(this.selected)
        })
      }
      if (this.selected !== "all") {
        return this.holidays.filter(item => {
          return item.noofdays.includes(this.selected)
        })
      }
      if (this.sort.field){
        if (this.sort.field == "from") {
          if(this.sort.sorted==true){
            return this.holidays.slice().sort((a,b)=>{
              return (Date.parse(a.from) > Date.parse(b.from)) ? 1:-1
            })
          }else {
            return this.holidays.slice().sort((a,b)=>{
              return (Date.parse(a.from) > Date.parse(b.from)) ? -1:1
            })
          }
        }
        if (this.sort.field == "to") {
          if(this.sort.sorted==true){
            return this.holidays.slice().sort((a,b)=>{
              return (Date.parse(a.to) > Date.parse(b.to)) ? 1:-1
            })
          }else {
            return this.holidays.slice().sort((a,b)=>{
              return (Date.parse(a.to) > Date.parse(b.to)) ? -1:1
            })
          }
        }
        if (this.sort.field == "noofdays") {
          if(this.sort.sorted==true){
            return this.holidays.slice().sort((a,b)=>{
              return (a.noofdays > b.noofdays) ? 1:-1
            })
          }else {
            return this.holidays.slice().sort((a,b)=>{
              return (a.noofdays > b.noofdays) ? -1:1
            })
          }
        }
      }
      return this.holidays
    }
  },
  data() {
    return {
      form: {
        name:'',
        from:'',
        to:'',
        noofdays:'',
      },
      showModal: false,
      showModalSuccess: false,
      showModalEdit: false,
      showModalDelete: true,
      sort: {
        field: '',
        sorted:true,
      },
      selected: 'all',
      search: '',
      holidays: [
        {
          id: 1,
          name: 'สงกรานต์',
          from: '10 Jan 2020',
          to: '17 Jan 2020',
          noofdays: '7 day',
        },
        {
          id: 2,
          name: 'วันจักรี',
          from: '6 Jan 2020',
          to: '7 Jan 2020',
          noofdays: '1 day',
        },
        {
          id: 3,
          name: 'วันภาพยนตร์แห่งชาติ',
          from: '4 Jan 2020',
          to: '5 Jan 2020',
          noofdays: '1 day',
        },
      ],
    }
  },
}
</script>

<style scoped>
.modal{
  width: 560px;
  height: 600px;
}

.modalSucess{
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
