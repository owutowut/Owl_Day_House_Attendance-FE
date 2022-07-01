<template>
  <div class="bg-blue h-screen flex  items-center justify-center">
    <div>
      <div class="flex justify-center">
        <img src="~/assets/images/ODH_Banding-09 (1) 2.png" class="h-20 mb-3" >
      </div>
      <div class="bg-white shadow p-6 rounded-md md:w-[578px]">
        <p class="text-center font-bold text-3xl">Forgot password?</p>
        <p class="text-center text-sm text-gray mt-2">Enter you email get the password reset link</p>
        <p class="font-bold text-black mt-4 mb-2">Email Address</p>
        <div class="space-y-2">
          <input class="border border-gray2 rounded-md px-3 py-2 w-full mb-2 focus:outline-none" v-model="email" placeholder="Type your email" />
          <div class="flex justify-center ">
            <button @click="passwordReset" class="border bg-yellow text-white w-2/3 rounded-md py-2 mb-1" >Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  auth: 'guest',
  name: "forgot_password",
  data() {
    return {
      email: '',
    }
  },
  methods: {
    ...mapActions({
      forgotPassword: 'hr/forgotPassword'
    }),

    async passwordReset() {
      const data = {
        email: this.email
      }
      await this.forgotPassword(data)
        .then(response => {
          if (response) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction <br> <div class="text-xl py-2"> Please check your Email</div> </p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 2500
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.success = true
    }
  }
}
</script>

<style scoped>

</style>
