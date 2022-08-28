<template>
  <div class="bg-blue h-screen flex  items-center justify-center">
    <div>
      <div class="flex justify-center">
        <img src="~/assets/images/ODH_Banding-09 (1) 2.png" class="h-20 mb-3" >
      </div>
      <form class="bg-white shadow p-6 rounded-md md:w-[578px] space-y-4">
        <p class="text-center font-bold text-3xl">Account Password Reset</p>
        <input required type="password" class="border border-gray2 rounded-md px-3 py-2 w-full focus:outline-none" v-model="new_password" placeholder="New Password" />
        <input required type="password" class="border border-gray2 rounded-md px-3 py-2 w-full focus:outline-none" v-model="confirm_password" placeholder="Confirm Password" />
        <button @click="getNewPassword" class="border bg-yellow text-white w-full rounded-md py-2" >Submit</button>
      </form>
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
      password: '',
      confirm_password: '',
      new_password: '',
      email:'',
    }
  },

  methods: {
    ...mapActions({
      passwordReset: 'hr/passwordReset'
    }),

    async getNewPassword() {
      if (this.password === this.confirm_password) {
        this.new_password = this.password
      }
      const data = {
        token: this.$route.params.token,
        new_password: this.new_password
      }
      await this.passwordReset(data)
        .then(response => {
          if (response) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 3000
            })
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
