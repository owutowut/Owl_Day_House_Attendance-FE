<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white  p-6 rounded-md  lg:w-1/3"
         v-if="isDelete">
      <div class="flex flex-col justify-center items-center my-8" >
        <svg-icon name="trash-alt-solid" class="w-20 h-20 mb-6" />
        <p class="text-xl font-semibold" >Delete Profile</p>
        <p class="text-xs font-light mt-2">Are you sure to permanently delete this Profile ?</p>
      </div>
      <div class="flex items-center space-x-4 mt-6">
        <button class="rounded-lg px-4 py-2 w-full border" @click="update"  >No, Keep it</button>
        <button class="rounded-lg px-4 py-2 bg-green  text-white w-full" @click="update">yes, Delete it</button>
      </div>
    </div>
  </div>
</template>

<script>

import Modal from "@/components/Modal";

export default {
  name: "Delete",
  props: ['isDelete'],
  components: {
    Modal
  },
  data() {
    return {
      isModal: false
    }
  },
  methods: {
    hideDelete(){
      this.$emit('handleHideDelete', false)
    },
    onHideModal(event) {
      this.isModal = event
    },
    update(){
      this.$emit('submit',true)
    }
  },
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
