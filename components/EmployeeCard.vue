<template>
  <div class="bg-white p-6 mt-8 text-center relative" >
    <div class="flex justify-end cursor-pointer" @click="update">
      <svg-icon name="Group6926" width="15" height="15"/>
    </div>
    <img src="~/assets/images/Group 894.png" class="h-32 w-32 ml-28 mb-4">
    <p class="text-blue2">{{card.name}}</p>
    <p class="text-xs text-gray6 ">{{card.department}}</p>
    <div>
      <div class="bg-blue rounded-2xl text-white w-1/4 ml-32 py-1 mt-2 text-xs " v-if="card.tag=='พนักงาน'" >{{card.tag}}</div>
      <div v-if="card.tag=='ทดลองงาน'" class="bg-yellow rounded-2xl text-white w-1/4 ml-32 py-1 mt-2 text-xs">{{card.tag}}</div>
      <div v-if="card.tag=='ฝึกงาน'" class="bg-purple1 rounded-2xl text-white w-1/4 ml-32 py-1 mt-2 text-xs">{{card.tag}}</div>
    </div>
    <Edit v-if="isEdit" :isEdit="isEdit" />
  </div>
</template>

<script>
import Edit from "@/components/Edit";

export default {
  name: "EmployeeCard",
  components: {
    Edit
  },
  data() {
    return {
      isEdit: false
    }
  },
  props: {
    card:{
      type: Object,
      default: () => {}
    }
  },
  methods: {
    update() {
      this.isEdit = true
    }
  }
}
</script>

<style scoped>

</style>
