<template>
  <div class="bg-white p-6 mt-8 text-center relative" >
    <div class="flex justify-end cursor-pointer" @click="update">
      <svg-icon name="menu" width="15" height="15"/>
    </div>
      <div class="flex flex-col items-center">
        <img :src="require('@/assets/' + card.profile + '')" class="h-32 w-32 mb-4">
        <p class="text-blue2">{{card.name}}</p>
        <p class="text-xs text-gray6 ">{{card.department}}</p>
        <div>
          <div class="bg-blue rounded-2xl text-white w-auto px-4 py-1 mt-2 text-xs " v-if="card.tag=='พนักงาน'" >{{card.tag}}</div>
          <div v-if="card.tag=='ทดลองงาน'" class="bg-yellow rounded-2xl text-white w-auto px-4 py-1 mt-2 text-xs">{{card.tag}}</div>
          <div v-if="card.tag=='ฝึกงาน'" class="bg-purple1 rounded-2xl text-white w-auto px-4 py-1 mt-2 text-xs">{{card.tag}}</div>
        </div>
      </div>
    <Edit v-if="isEdit" :isEdit="isEdit" @handleHideEdit="onHideEdit" />
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
    },
    onHideEdit(event){
      this.isEdit = event
    }
  },
  mounted() {
    console.log(this.card.profile)
  }
}
</script>

<style scoped>

</style>
