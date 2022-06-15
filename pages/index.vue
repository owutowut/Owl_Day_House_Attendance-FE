<template>
  <div>
    <div class="grid lg:grid-cols-5 md:grid-cols-6 h-screen sm:grid-cols-2 sm:grid-rows-5">
      <div class="lg:col-span-3 md:col-span-3 lg:row-span-full md:col-span-3 md:row-span-full bg-blue flex items-center justify-center sm:row-span-1 sm:px-6 sm:col-span-full">
        <img src="~/assets/images/ODH_Banding-09 (1) 2.png" alt="" class="min-w-full px-2">
      </div>
      <div class="lg:col-span-2 md:col-span-3 lg:row-span-full md:col-span-3 md:row-span-full md:p-16 lg:p-24 sm:p-10 sm:row-span-4 sm:col-span-full">
        <div class="bg-white shadow p-6 ">
          <h2 class="text-center font-bold text-3xl">Welcome back!</h2>
          <p class="text-center text-sm text-gray mb-12">sign in to your account to continue</p>
          <p class="font-bold text-black mb-4">Username</p>
          <input class="border border-gray2 rounded-md px-3 py-2 w-full" v-model="form.email"
                 placeholder="Type your email"/>
          <div class="flex items-center justify-between ">
            <p class="font-bold text-black mb-4 mt-4">Password</p>
            <p class="text-black text-sm">Forgot password?</p>
          </div>
          <input class="border border-gray2 rounded-md px-3 py-2 w-full mb-10 " v-model="form.password" type="password"
                 placeholder="Type your password"/>
          <button @click="login()" class="border bg-yellow text-white w-full rounded-md py-2">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: 'guest',
  name: 'IndexPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      let {data} = await this.$auth.loginWith('local', {data: this.form})
      try {
        if (data) {
          await this.$auth.setUser(data.user)
          // await localStorage.setItem('token',data.token)
          if (this.$auth.user.role === 'admin') {
            return await this.$router.push('/admin/home')
          } else {
            return await this.$router.push('/hr/home')
          }
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>
