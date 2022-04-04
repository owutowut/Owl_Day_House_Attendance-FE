<template>
  <div class="bg-blue h-screen flex  items-center justify-center">
    <div>
      <div class="flex justify-center">
        <img src="~/assets/images/ODH_Banding-09 (1) 2.png" class="h-20 mb-3" >
      </div>
      <div class="bg-white shadow p-6 rounded-md md:w-[578px]">
        <p class="text-center font-bold text-3xl">Forgot password?</p>
        <p class="text-center text-sm text-gray mt-2">Enter you email get the password reset link</p>
        <p class="font-bold text-black mt-4 mb-4">Email Address</p>
        <input class="border border-gray2 rounded-md px-3 py-2 w-full mb-10" v-model="username" placeholder="Type your email" />
        <button class="border bg-yellow text-white w-full  rounded-md py-2 " >Reset password</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgot_password"
}
</script>

<style scoped>

</style>
