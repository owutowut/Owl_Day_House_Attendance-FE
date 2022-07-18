<template>
  <div>
    <div class="grid lg:grid-cols-5 md:grid-cols-6 h-screen sm:grid-cols-2 sm:grid-rows-5">
      <div class="lg:col-span-3 md:col-span-3 lg:row-span-full md:col-span-3 md:row-span-full bg-blue flex items-center justify-center sm:row-span-1 sm:px-6 sm:col-span-full">
        <img src="~/assets/images/ODH_Banding-09 (1) 2.png" alt="" class="min-w-full px-2">
      </div>
      <div class="lg:col-span-2 md:col-span-3 lg:row-span-full md:col-span-3 md:row-span-full lg:p-20 md:p-16 sm:p-10 sm:row-span-4 sm:col-span-full">
        <form @submit="login" class="lg:mt-14 shadow-md">
          <div class="bg-white px-6 py-20 space-y-8">
            <div class="space-y-4 pb-4">
              <h2 class="text-center font-bold text-3xl">Welcome back!</h2>
              <p class="text-center text-sm text-gray">sign in to your account to continue</p>
            </div>
            <div class="space-y-4">
              <p class="font-bold text-black">Username</p>
              <input required class="border border-gray2 rounded-md px-3 py-2 w-full focus:outline-none" v-model="form.email" type="email"
                     placeholder="Type your email"/>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between ">
                <p class="font-bold text-black">Password</p>
                <nuxt-link to="forgot_password" class="text-black text-sm">Forgot password?</nuxt-link>
              </div>
              <input required class="border border-gray2 rounded-md px-3 py-2 w-full focus:outline-none" v-model="form.password" type="password"
                     placeholder="Type your password"/>
              <div v-if="invalid!==''">
                <p class="text-sm text-red-700">{{ invalid }}</p>
              </div>
            </div>
            <button type="submit" class="border bg-yellow text-white w-full rounded-md py-2">Login</button>
          </div>
        </form>
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
      invalid: '',
    }
  },
  methods: {
    async login() {
      try {
        event.preventDefault();
        let {data} = await this.$auth.loginWith('local', {data: this.form})
        if (!data.invalid) {
          await this.$auth.setUser(data.user)
          if (this.$auth.user.role === 'user') {
            return await this.$router.push('/user/home')
          }
          return await this.$router.push('/hr/home')
        } else {
          return this.invalid = data.invalid
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>
