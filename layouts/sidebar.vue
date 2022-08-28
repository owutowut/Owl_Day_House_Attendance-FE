<template>
  <div>
    <Loading v-if="isLoading" />

    <div v-else>
      <div class="flex flex-col">
        <nav class="sticky top-0 navbar w-full flex lg:justify-end justify-between py-3 bg-white1 h-[80px] px-6 sm:w-full">
          <img src="~/assets/images/menu.png" class="w-8 h-9 mt-2 lg:hidden" v-show='isOpen' @click='handleOpen' alt="">
          <button v-if="isOpen" class="relative">
            <svg-icon name="Notification" class="h-[45px] w-[45px]" />
            <div class="absolute -top-1 -right-2 bg-red6 text-white text-xs px-2 rounded-lg ">
              {{total_notification}}
            </div>
          </button>
        </nav>

        <aside
          class='overflow transform bg-blue fixed w-[252px] h-full overflow-auto ease-in-out transition-all duration-300 z-10 md:block'
          :class="isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'"
        >
          <div>
            <div class="flex justify-center py-3.5 mx-4 border-b border-white">
              <img src="~/assets/images/ODH_Banding-09 (1) 2.png" alt="">
            </div>
            <div class="flex flex-col items-center text-white  ">
              <img v-if="user_profile.profile_img===undefined" src="~/assets/images/profile-hr.png" class="w-28 h-28 bg-gray5 rounded-full flex justify-center items-center mt-6 md:mx-10 lg:ml-10" alt="">
              <img v-else :src="user_profile.profile_img" class="w-28 h-28 bg-gray5 rounded-full flex justify-center items-center mt-6 md:mx-10 lg:ml-10" alt="">
              <p class="font-light mt-4 uppercase">{{ user_profile.first_name }} {{ user_profile.last_name }}</p>
              <p class="text-xs mt-2 font-thin">{{ user_profile.position }}</p>
            </div>
            <div class="px-5">
              <ul class="text-white mt-8">
                <li class="mb-6">
                  <NuxtLink to="/user/home" exact class="flex items-center">
                    <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='home' "/>
                    <span>Home</span>
                  </NuxtLink>
                </li>
                <li class="mb-6">
                  <NuxtLink to="/user/profile" class="flex items-center">
                    <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='profile'"/>
                    Profile
                  </NuxtLink>
                </li>
                <li class="mb-6">
                  <div class="flex items-center">
                    <svg-icon name="ArrowRight" height="28" width="28"
                              v-if="currentPath==='work-list-yesterday' || currentPath==='work-list-complete' "/>
                    Work list
                  </div>
                </li>
                <li class="mb-6 ml-4">
                  <NuxtLink to="/user/work-list-yesterday" :class="`${currentPath === 'work-list-yesterday' && 'text-yellow'}`"> Work list Yesterday
                  </NuxtLink>
                </li>
                <li class="mb-6 ml-4">
                  <NuxtLink to="/user/work-list-complete" :class="`${currentPath === 'work-list-complete' && 'text-yellow'}`">Work
                    list Complete
                  </NuxtLink>
                </li>
                <li class="mb-6">
                  <div class="flex items-center">
                    <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='leave'||currentPath==='work-from-home'"/>
                    Leaves
                  </div>
                </li>
                <li class="mb-6 ml-4">
                  <NuxtLink to="/user/leave" :class="`${currentPath === 'leave' && 'text-yellow'}`">Leave</NuxtLink>
                </li>
                <li class="mb-6 ml-4">
                  <NuxtLink to="/user/work-from-home" :class="`${currentPath === 'work-from-home' && 'text-yellow'}`">Work from Home</NuxtLink>
                </li>
              </ul>
              <button @click="logout()" class="rounded-md bg-red1  text-white w-full p-3 mb-6 mt-8 flex space-x-4 justify-center font-kanit">
                <img src="~/assets/images/ls_logout.svg" alt="">
                <span>ออกจากระบบ</span>
              </button>
            </div>
          </div>
        </aside>
        <div class="sm:pl-[4px] lg:pl-[250px] bg-gray18 min-h-screen" @click='isOpen = true'>
          <Nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/plugins/auth";

export default {
  middleware: 'auth',
  name: "sidebar",
  data() {
    return {
      isLoading: true,
      currentPath: "",
      isActive: false,
      isOpen: true,
      total_notification: '0',
      user_profile: {},
    }
  },
  mounted() {
    this.userProfile()
    this.checkPath(this.$route.path)
  },
  watch: {
    $route() {
      this.checkPath(this.$route.path)
    }
  },
  methods: {
    checkPath(path) {
      this.currentPath = path.split("user/")[1]
    },
    handleOpen() {
      this.isOpen = !this.isOpen
    },
    async logout(){
      try {
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    },
    async userProfile() {
      const verify = await this.$auth.loggedIn

      try {
        if (!verify) {
          return 'Login required!'
        }
        const user=await this.$axios.get('me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('auth._token.local')}` },
        })
        if (user.data.role !== 'user') {
          return this.$router.push('/')
        }
        this.user_profile = user.data

        this.isLoading = false
      } catch (error) {
        return error.message
      }
    }
  }
}
</script>
