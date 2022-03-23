<template>
  <div class="grid grid-cols-5 h-screen">
    <div class="col-span-3 bg-blue flex items-center justify-center">
      <img src="~/assets/images/ODH_Banding-09 (1) 2.png" >
    </div>
    <div class="col-span-2 p-24">
      <div class="bg-white shadow p-6 " >
        <h2 class="text-center font-bold text-3xl">Welcome back!</h2>
        <p class="text-center text-sm text-gray mb-12">sign in to your account to continue</p>
        <p class="font-bold text-black mb-4">Username</p>
        <input class="border border-gray2 rounded-md px-3 py-2 w-full" v-model="username" placeholder="Type your email" />
        <div class="flex items-center justify-between ">
          <p class="font-bold text-black mb-4 mt-4">Password</p>
          <p class="text-black text-sm" >Forgot password?</p>
        </div>
        <input class="border border-gray2 rounded-md px-3 py-2 w-full mb-10 " v-model="password" placeholder="Type your password" />
        <button class="border bg-yellow text-white w-full rounded-md py-2" >Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'

}
</script>
