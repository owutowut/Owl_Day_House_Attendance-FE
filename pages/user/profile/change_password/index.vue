<template>
  <div>
    <Loading v-if="isLoading"/>

    <div v-else class="pt-10 sm:space-y-6 sm:mx-4 sm:mb-4 lg:mx-6 space-y-4">
      <div class="sm:space-y-2 md:flex md:justify-between lg:flex lg:justify-between">
        <span class="sm:flex sm:justify-center text-3xl font-semibold text-blue">Change Password</span>
        <div class="sm:flex sm:justify-center lg:justify-self-center">
          <button class="sm:w-full bg-blue px-10 py-2 text-white rounded-md text-sm">
            <NuxtLink to="/user/profile">Back</NuxtLink>
          </button>
        </div>
      </div>      <div class="space-y-4 bg-white rounded-md shadow p-7">
        <p class="text-blue text-2xl">Account Data</p>
        <div class="flex space-x-2">
          <p class="text-blue2 text-lg">Email :</p>
          <p class="text-gray7 font-light text-lg">{{user_profile.email}}</p>
        </div>
        <form @submit="passwordReset" class="space-y-4">
          <span class="text-sm text-red-700">{{invalid}}</span>
          <input minlength="6" required type="password" v-model="currentPassword" class="focus:outline-none border border-gray9 rounded-md px-3 py-2 w-full font-light text-sm" placeholder="Current Password"/>
          <input minlength="6" required type="password" v-model="newPassword" class="focus:outline-none border border-gray9 rounded-md px-3 py-2 w-full font-light text-sm" placeholder="New Password"/>
          <input minlength="6" required type="password" v-model="confirmNewPassword" class="focus:outline-none border border-gray9 rounded-md px-3 py-2 w-full font-light text-sm" placeholder="Confirm New Password"/>
          <div class="flex justify-end">
            <button class="bg-blue text-white rounded-lg text-sm px-8 py-2 text-sm" type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  middleware: 'auth',
  name: "change_password",
  layout: 'sidebar',
  data() {
    return {
      isLoading: true,
      user_profile: {},
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      invalid: '',
    }
  },
  mounted() {
    this.userProfile()
  },
  methods: {
    ...mapActions({
      changePassword: 'user/changePassword',
    }),

    async userProfile() {
      const verify = await this.$auth.loggedIn

      try {
        if (!verify) {
          return 'Login required!'
        }
        const user=await this.$axios.get('me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` },
        })
        this.user_profile = user.data
        this.isLoading = false
      } catch (error) {
        return error.message
      }
    },
    async passwordReset () {
      event.preventDefault();
      if (this.newPassword!==this.confirmNewPassword) {
        return this.invalid = 'New Password and Confirm New Password must match.'
      }
      const data = {
        id: this.user_profile.id,
        password: this.currentPassword,
        newPassword: this.newPassword,
      }
      const response = await this.changePassword(data)
      if ( response.data!==false ) {
        this.$swal({
          title: '<p class="text-3xl"> Successful transaction</p>',
          imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
          imageWidth: 80,
          imageHeight: 80,
          showConfirmButton: false,
          timer: 2500
        })
        await this.$router.push('/user/profile')
      } else {
        return this.invalid = 'Invalid Current Password !'
      }
    }
  },
}
</script>

<style scoped>

</style>
