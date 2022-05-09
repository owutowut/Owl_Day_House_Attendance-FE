<template>
  <div>
    <div class="drop-shadow-md">
      <table class="w-full ">
        <thead class="text-base text-blue bg-white">
        <tr>
          <th v-for="(header,i) in headers" :key="i" @click="sort.field=header.key; sort.sorted = !sort.sorted">
            <div v-if="header.sort" class="flex justify-center space-x-2">
              <div class="cursor-pointer">
                <svg-icon name="Swap" width="15.82px" height="16.33px" class="h-full self-center"/>
              </div>
              <div class="py-4 cursor-pointer">
                <button class="font-semibold">
                  {{ header.title }}
                </button>
              </div>
            </div>
            <div v-if="!header.sort" class="pr-8">
              <div class="py-4">
                <span class="font-semibold">
                  {{ header.title }}
                </span>
              </div>
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-base text-gray11 whitespace-nowrap" v-for="item in filtered" :key="item.id">
          <tr class="bg-white border-t border-gray12 text-center">
            <td>
              <div class="py-4">
                {{ item.name }}
              </div>
            </td>
            <td v-if="item.leavetype">
              <div class="py-4">
                {{ item.leavetype }}
              </div>
            </td>
            <td>
              <div class="py-4">
                {{ item.from }}
              </div>
            </td>
            <td>
              <div class="py-4">
                {{ item.to }}
              </div>
            </td>
            <td>
              <div class="py-4">
                {{ item.noofdays }} Day
              </div>
            </td>
            <td v-if="item.leavetype" class="text-white text-center">
              <div v-if="item.tag==='พนักงาน'" class="mx-1 bg-blue rounded-xl">
                {{ item.tag }}
              </div>
              <div v-else-if="item.tag==='ทดลองงาน'" class="mx-1 bg-yellow rounded-xl">
                {{ item.tag }}
              </div>
              <div v-else class="mx-1 bg-purple1 rounded-xl">
                {{ item.tag }}
              </div>
            </td>
            <td v-if="item.leavetype" class="px-2 text-white text-center">
              <div v-if="item.status==='Approve'" class="mx-1 bg-green rounded-xl">
                {{ item.status }}
              </div>
              <div v-else class="mx-1 bg-yellow rounded-xl">
                {{ item.status }}
              </div>
            </td>
            <td class="pr-6">
              <div class="flex justify-center">
                <a v-if="path!=='holidays'" :href="`/hr/${path}/${item.id}`">
                  <svg-icon :name="`${icon}`" width="18.76px" height="19.22px"/>
                </a>
                <div v-else class="flex justify-center space-x-4">
                  <button @click="show.edit=true">
                    <svg-icon :name="`${icon}`" width="18.76px" height="19.22px"/>
                  </button>
                  <button @click="show.delete=true">
                    <svg-icon name="trashsolid" width="18.76px" height="19.22px"/>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <br class="my-6">
    </div>

    <div>
      <ModalHR :from="form" :show="show"/>
    </div>

  </div>
</template>

<script>
import ModalHR from '@/components/ModalHR.vue'

export default {
  components:{
    ModalHR,
  },
  data() {
    return {
      show:{
        addform: false,
        success: false,
        delete: false,
        edit: false,
      },
    }
  },
  props: {
    form: {
      name:'',
      from:'',
      to:'',
      noofdays:0,
    },
    data: {
      type: Array,
      default: [],
    },
    headers: {
      type: Array,
      default: [],
    },
    sort: {},
    selected: '',
    icon:'',
    search: '',
    path: '',
  },
  computed: {
    filtered: function () {
      if (this.search !== "") {
        if (this.selected === "all") {
          return this.data.filter(item => {
            return item.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
        if (this.selected !== "all") {
          return this.data.filter(item => {
            return item.name.toLowerCase().includes(this.search.toLowerCase()) && item.leavetype.includes(this.selected)
          })
        }
      }
      if (this.selected !== "all") {
        if (this.path === "holidays"||"workfromhome") {
          return this.data.filter(item => {
            return item.createdate.includes(this.selected)
          })
        } else{
          return this.data.filter(item => {
            return item.leavetype.includes(this.selected)
          })
        }
      }
      if (this.sort.field !== ""){
        if (this.sort.field === "leavetype") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (a.leavetype > b.leavetype) ? 1:-1
            })
          }else {
            return this.data.slice().sort((a,b)=>{
              return (a.leavetype > b.leavetype) ? -1:1
            })
          }
        }
        if (this.sort.field === "from") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (Date.parse(a.from) > Date.parse(b.from)) ? 1:-1
            })
          }else {
            return this.data.slice().sort((a,b)=>{
              return (Date.parse(a.from) > Date.parse(b.from)) ? -1:1
            })
          }
        }
        if (this.sort.field === "to") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (Date.parse(a.to) > Date.parse(b.to)) ? 1:-1
            })
          }else {
            return this.data.slice().sort((a,b)=>{
              return (Date.parse(a.to) > Date.parse(b.to)) ? -1:1
            })
          }
        }
        if (this.sort.field === "noofdays") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (a.noofdays > b.noofdays) ? 1:-1
            })
          }else {
            return this.data.slice().sort((a,b)=>{
              return (a.noofdays > b.noofdays) ? -1:1
            })
          }
        }
        if (this.sort.field === "tag") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (a.tag > b.tag) ? 1:-1
            })
          }else {
            return this.data.slice().sort((a,b)=>{
              return (a.tag > b.tag) ? -1:1
            })
          }
        }
        if (this.sort.field === "status") {
          if(this.sort.sorted===true){
            return this.data.slice().sort((a,b)=>{
              return (a.status > b.status) ? 1:-1
            })
          } else {
            return this.data.slice().sort((a,b)=>{
              return (a.status > b.status) ? -1:1
            })
          }
        }
      }
      return this.data
    }
  },
}
</script>
