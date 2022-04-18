<template>
  <div
    :class="`fixed w-full h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray10`"
  >
    <div class="bg-white shadow p-6 rounded-md lg:w-1/3"
         v-if="isModal">
      <div class="flex justify-end cursor-pointer" @click="hideModal">
        <svg-icon name="close" width="15" height="15"/>
      </div>
      <div class="flex flex-col justify-center items-center my-8">
        <img src="~/assets/images/check-circle-solid 2.svg" class="w-20 h-20 mb-6">
        <p class="text-3xl font-semibold">Successful transaction</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['isModal'],

  methods: {
    hideModal() {
      this.$emit('handleHideModal', false)
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
