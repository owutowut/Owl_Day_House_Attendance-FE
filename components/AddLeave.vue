<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white shadow p-6 rounded-md w-1/3"
         >
      <div class="flex justify-end cursor-pointer" @click="hideAddLeave">
        <svg-icon name="cross" width="20" height="20"/>
      </div>
      <div>
        <p class="font-medium text-3xl text-blue text-center mb-4">Add Leave</p>
        <div class="mb-4">
          <p class="mb-3 text-xl">Leave Types</p>
          <select v-model="form.selected" class="rounded-lg px-4 py-2 w-full text-gray14 border border-gray12">
            <option value="Leave type">Select Leave type</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <p class="mb-3 text-xl">From</p>
        <div class="relative w-full mb-4">
          <input class="custom-input-date-from w-full border border-gray12 rounded-lg h-10 pl-3 pr-8" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="form.date_from"
            custom-input=".custom-input-date-from"
          />
        </div>
        <p class="mb-3 text-xl">To</p>
        <div class="relative w-full mb-4">
          <input class="custom-input w-full border border-gray12 rounded-lg h-10 pl-3 pr-8" placeholder="วว/ดด/ปปปป"/>
          <svg-icon name="Calendar" width="24" height="24" class="absolute right-2 top-2"/>
          <date-picker
            v-model="form.date_to"
            custom-input=".custom-input"
          />
        </div>
        <div class="w-full mt-4">
          <p class="mb-4 text-xl">Number of day</p>
          <input v-model="form.number_of_day" class="w-full bg-gary15 rounded-md h-10"/>
        </div>
        <div class="w-full mt-4 mb-10">
          <p class="mb-4 text-xl">Leave Reason</p>
          <textarea v-model="form.message" class="w-full h-40 border border-gray12 rounded-md"/>
        </div>
        <div class="flex justify-center">
          <button class="bg-blue rounded-md py-2 px-8 text-white" @click="update">Submit</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "AddLeave",
  props: ['isAddLeave'],
  components: {
    Modal
  },
  data() {
    return {

      isModal: false,
      form: {
        selected: 'Leave type',
        date_from: new Date(),
        date_to: new Date(),
        message: '',
        number_of_day:''
      }
    }
  },

  methods: {
    hideAddLeave() {
      this.$emit('handleHidAddLeave', false)
    },
    onHideModal(event) {
      this.isModal = event
    },
    update(){
      this.$emit('submit',this.form)
    }
  }
}
</script>

<style scoped>
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
