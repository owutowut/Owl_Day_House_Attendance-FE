<template>
  <div class="bg-white shadow p-6 rounded-md" v-if="isModal">
    <svg-icon name="close" @click="isModal = false" > </svg-icon>
    <img src="assets/images/check-circle-solid 2.svg" class="w-32 h-32">
    <p>Successful transaction</p>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['isModal']
}
</script>

<style scoped>

</style>
