<template>
  <div class="relative overflow-x-auto  sm:rounded-lg mt-6">
    <table class="w-full">
      <thead class="text-lg text-blue  bg-white">
      <tr>
        <th scope="col" class="px-6 py-4">
          <div class="flex items-center">
            <Span>Employee</Span>
          </div>
        </th>
        <th scope="col" class="" v-for="n in 31" :key ="n">
          <div class="flex items-center justify-center">
            {{ n }}
          </div>
        </th>
      </tr>
      </thead>
      <tbody class="font-kanit text-lg">
      <tr class="bg-white border-t border-gray12">
        <td class="px-6 py-4 text-gray11 whitespace-nowrap ">{{attendance.name}}</td>
        <td v-for="n in attendance.status.length" :key="n">
          <div v-if="attendance.status[n-1]==='active'" >
            <svg-icon name="check" width="20" height="20" />
          </div>
          <div v-if="attendance.status[n-1]==='weekend'">
            <svg-icon name="cross_red" width="20" height="20" />
          </div>
          <div v-if="attendance.status[n-1]==='wait'">
            <svg-icon name="cross_yellow" width="20" height="20" />
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

const createStatus = (days) => {
  let status = [];
  for (let i = 0; i < days; i++) {
    if (i % 7 < 5) {
      status.push("sent");
    } else {
      status.push("absent");
    }
  }
  return status;
}

export default {
  name: "Table",
  props: {
    attendance: {
      type: Object,
      default: () => {}
    },
    days: {
      type: Number,
      required: true,
    },
    search: {
      type: String,
      required: true,
    }
  },
  data(){
    return{
      employeeData: [
        {
          id:1,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:2,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:3,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:4,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:5,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:6,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:7,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        },
        {
          id:8,
          name:'CHAWANNOP THAMMAJAI',
          status: createStatus(this.days)
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
