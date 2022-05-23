<template>
  <div>
    <Loading v-if="isLoading"/>

    <div class="flex flex-col">
      <nav class="w-full flex lg:justify-end justify-between py-3 bg-white1 h-[80px] px-6">
        <img src="~/assets/images/menu.png" class="w-8 h-9 mt-2 lg:hidden" v-show='isOpen' @click='handleOpen'>
        <button class="relative">
          <svg-icon name="Notification" class="h-[45px] w-[45px]" />
          <div class="absolute -top-1 -right-2 bg-red6 text-white text-xs px-2 rounded-lg ">
            {{total_notification}}
          </div>
        </button>
      </nav>

      <aside
        class='overflow transform bg-blue fixed w-[252px] h-full overflow-auto ease-in-out transition-all duration-300 z-10 sm:hidden md:block'
        :class="isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'"
      >
        <div>
          <div class="flex justify-center py-3.5 mx-4 border-b border-white">
            <img src="~/assets/images/ODH_Banding-09 (1) 2.png">
          </div>
          <div class="flex flex-col items-center text-white  ">
            <img src="~/assets/images/profile-hr.png" class="py-5">
            <p class="font-light">{{ user_profile.first_name }} {{user_profile.last_name}}</p>
            <p class="text-xs mt-2 font-thin">{{user_profile.tag}}</p>
          </div>
          <div class="px-5">
            <ul class="text-white mt-12">
              <li class="mb-6">
                <NuxtLink to="/hr/home" exact class="flex items-center">
                  <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='home' || currentPath==='attendance-of-month'  "/>
                  <span>Home</span>
                </NuxtLink>
              </li>
              <li class="mb-6">
                <NuxtLink to="/hr/employee" class="flex items-center">
                  <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='employee' || currentPath==='addEmployee' || currentPath==='edit_employee' || currentPath==='project-complete' || currentPath==='profile'"/>
                  Employee
                </NuxtLink>
              </li>
              <li class="mb-6">
                <NuxtLink to="/hr/holidays" class="flex items-center">
                  <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='holidays'"/>
                  Hoilday
                </NuxtLink>
              </li>
              <li class="mb-6">
                <NuxtLink to="/hr/leaves" class="flex items-center">
                  <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='leaves'"/>
                  Leaves
                </NuxtLink>
              </li>
              <li class="mb-6">
                <NuxtLink to="/hr/workfromhome" class="flex items-center">
                  <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='workfromhome'"/>
                  Work from Home
                </NuxtLink>
              </li>
            </ul>
            <button @click="logout()" class="rounded-md bg-red1  text-white w-full p-3 mt-20 flex space-x-4 justify-center font-kanit">
              <img src="~/assets/images/ls_logout.svg">
              <span>ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </aside>
      <div class="lg:pl-[276px] pt-10 px-6 bg-gray18 min-h-screen " @click='isOpen = true'>
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar_hr",
  data() {
    return {
      currentPath: "",
      isActive: false,
      isOpen: true,
      total_notification: '0',
      first_name: '',
      last_name: '',
      user_profile: [],
      isLoading: true
    }
  },
  mounted() {
    this.checkPath(this.$route.path)
    this.profile()
  },
  watch: {
    $route() {
      this.checkPath(this.$route.path)
    }
  },
  methods: {
    checkPath(path) {
      this.currentPath = path.split("hr/")[1]
    },

    handleOpen() {
      this.isOpen = !this.isOpen
    },
    async logout(){
      try {
        await this.$auth.logout()
        await this.$auth.redirect('logout')

      } catch (error) {
        console.log(error)
      }
    },
    async profile() {
      try {
        const profile = await this.$auth.user

        this.user_profile = profile.data.user
        this.isLoading = false
      } catch (error) {
        await this.$auth.logout()
        await this.$auth.redirect('logout')
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
