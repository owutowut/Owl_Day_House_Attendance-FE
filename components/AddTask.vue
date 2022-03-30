<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white shadow p-6 rounded-md w-1/3"
         v-if="isAddTask">
      <div class="flex justify-end cursor-pointer" @click="hideAddTask">
        <svg-icon name="cross" width="20" height="20"/>
      </div>
      <div>
        <p class="font-medium text-3xl text-blue text-center mb-4">Add Task</p>
        <div class="w-full mt-4">
          <p class="mb-4 text-xl">Project Name</p>
          <input v-model="message" class="w-full border border-gray12 rounded-md h-10"/>
        </div>
        <div class="w-full mt-4 mb-10">
          <p class="mb-4 text-xl">Details</p>
          <textarea v-model="message" class="w-full h-40 border border-gray12 rounded-md"/>
        </div>
        <div class="flex justify-center">
          <button class="bg-blue rounded-md py-2 px-8 text-white" @click="hideAddTask">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: ['isAddTask'],
  data(){
    return {
      message: ''
    }
  },
  methods: {
    hideAddTask() {
      this.$emit('handleHideAddTask', false)
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
