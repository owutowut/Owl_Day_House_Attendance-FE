<template>
  <div class="flex flex-col ">
    <nav class="w-full flex lg:justify-end justify-between py-3 bg-white1 h-[80px] px-6">
      <img src="~/assets/images/menu.png" class=" w-8 h-9 mt-2  lg:hidden">
      <img src="~/assets/images/Notification.svg">
    </nav>

    <aside
      class='overflow shadow-2xl transform bg-blue fixed w-[252px] h-full shadow-lg overflow-auto ease-in-out transition-all duration-300 z-10 md:hidden lg:block'>
      <div>
        <div class="flex justify-center py-3.5 mx-4 border-b border-white">
          <img src="~/assets/images/ODH_Banding-09 (1) 2.png">
        </div>
        <div class="flex flex-col items-center text-white  ">
          <img src="~/assets/images/Group 894.png" class="py-5">
          <p class="font-light">CHAWANNOP THAMMAJAI</p>
          <p class="text-xs mt-2 font-thin">UX/UI Designer</p>
        </div>
        <div class="px-5">
          <ul class="text-white mt-12">
            <li class="mb-6">
              <NuxtLink to="/home" exact class="flex items-center">
                <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='home'"/>
                <span>Home</span>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink to="/profile" class="flex items-center">
                <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='profile'"/>
                Profile
              </NuxtLink>
            </li>
            <li class="mb-6">
              <div class="flex items-center">
                <svg-icon name="ArrowRight" height="28" width="28"
                          v-if="currentPath==='worklist' || currentPath==='worklist_complete'"/>
                Work list
              </div>
            </li>
            <li class="mb-6 ml-4">
              <NuxtLink to="/worklist" :class="`${currentPath === 'worklist' && 'text-yellow'}`"> Work list Yesterday
              </NuxtLink>
            </li>
            <li class="mb-6 ml-4">
              <NuxtLink to="/worklist_complete" :class="`${currentPath === 'worklist_complete' && 'text-yellow'}`">Work
                list Complete
              </NuxtLink>
            </li>
            <li class="mb-6">
              <div class="flex items-center">
                <svg-icon name="ArrowRight" height="28" width="28" v-if="currentPath==='leaves'||currentPath==='wfh'"/>
                Leaves
              </div>
            </li>
            <li class="mb-6 ml-4">
              <NuxtLink to="/leaves" :class="`${currentPath === 'leaves' && 'text-yellow'}`">Leave</NuxtLink>
            </li>
            <li class="mb-6 ml-4">
              <NuxtLink to="/wfh" :class="`${currentPath === 'wfh' && 'text-yellow'}`">Work from Home</NuxtLink>
            </li>
          </ul>
          <button class="rounded-md bg-red1  text-white w-full p-3 mt-20 flex space-x-4 justify-center font-kanit">
            <img src="~/assets/images/ls_logout.svg">
            <span>ออกจากระบบ</span>
          </button>
        </div>
      </div>
    </aside>
    <div class="lg:pl-[276px] pt-10 pr-6 bg-gray18 min-h-screen">
      <Nuxt/>
    </div>

  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      currentPath: "",
      isActive: false
    }
  },
  mounted() {
    this.checkPath(this.$route.path)
  },
  watch: {
    $route() {
      this.checkPath(this.$route.path)
    }
  },
  methods: {
    checkPath(path) {
      console.log(path.split("/"))
      this.currentPath = path.split("/")[1]
    }
  },
}
</script>

<style scoped>

</style>
