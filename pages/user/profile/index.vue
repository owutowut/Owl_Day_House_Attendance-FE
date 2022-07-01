<template>
  <div>
    <Loading v-if="isLoading" />

    <div v-else class="pt-10 sm:space-y-6 sm:mx-4 sm:mb-4 lg:mx-4 space-y-4">
        <div class="sm:space-y-2 lg:flex lg:justify-between">
          <span class="sm:flex sm:justify-center text-3xl font-semibold text-blue">PROFILE</span>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg text-left font-kanit border border-gray19 space-x-5 shadow w-full flex md:px-8 lg:px-8 xl:px-12 xl:justify-start lg:justify-start md:justify-start sm:justify-center">
            <div class="self-center md:py-6 sm:py-6">
              <img :src="user_profile.profile_img" class="rounded-full sm:h-28 sm:w-28 md:h-28 md:w-28 w-32 h-32 bg-gray5">
            </div>
            <div class="self-center">
              <p class="whitespace-nowrap text-base lg:text-xl xl:text-xl text-blue2 uppercase">{{user_profile.first_name}} {{user_profile.last_name}}</p>
              <p class="flex lg:justify-start md:justify-start sm:justify-center sm:text-base text-lg text-gray6">{{user_profile.position}}</p>
              <div class="flex lg:justify-start md:justify-start sm:justify-center lg:mt-2 md:mt-2 sm:mt-4">
                <span class="bg-blue rounded-2xl text-white text-center py-1 px-4 sm:px-6">{{ user_profile.tag }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white shadow p-6 rounded-lg">
           <div class="space-y-2 mx-4 whitespace-nowrap">
             <div class="flex space-x-5">
              <p class="text-blue2">Date of Join: </p>
              <p class="text-gray7">{{user_profile.date_of_join}}</p>
             </div>
             <div class="flex space-x-5">
               <p class="text-blue2">Phone: </p>
               <p class="text-gray7">{{user_profile.phone}}</p>
             </div>
             <div class="flex space-x-5">
               <p class="text-blue2">Birthday: </p>
               <p class="text-gray7">{{user_profile.birthday}}</p>
             </div>
             <div class="flex space-x-5">
               <p class="text-blue2">Address: </p>
               <p class="text-gray7">{{user_profile.address}}</p>
             </div>
             <div class="flex space-x-5">
               <p class="text-blue2">Report to: </p>
               <p class="text-gray7">{{user_profile.report_to}}</p>
             </div>
           </div>
          </div>
          <div class="bg-white shadow p-6 rounded-lg lg:col-end-3">
            <div class="mx-4 space-y-4 my-5">
              <div>
                <p class="text-blue2">Account Data</p>
              </div>
              <div class="flex space-x-5">
                <p class="text-blue2">Email :</p>
                <p class="text-gray7">{{ user_profile.email }}</p>
              </div>
              <div>
                <NuxtLink to="/user/profile/change_password" class="bg-blue rounded-lg text-white text-xs px-3 py-2">Change Password</NuxtLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: "profile",
  layout: 'sidebar',
  data() {
    return {
      isLoading: true,
      user_profile: {},
    }
  },
  mounted() {
    this.userProfile()
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>
