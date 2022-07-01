<template>
  <div class="sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center">
    <div class="xl:w-44 xl:h-44 lg:w-40 lg:h-40 relative w-36 h-36 bg-gray5 rounded-full items-center">
      <input type="file" class="absolute rounded-full w-full h-full opacity-0 cursor-pointer"
             ref="file" @change="onChangeFile">
      <div class="flex h-full self-center justify-center">
        <img
          v-if="image === null && currentImage !== null"
          alt="" width="96" height="96"
          src="~/assets/sprite/svg/profile.svg"
        />
        <img
          v-else
          :src="fileReader"
          alt=""
          class="rounded-full object-cover w-full h-full"
          width="96" height="96"
        >
      </div>
      <div class="absolute bottom-0 right-0">
        <svg-icon name="camera" width="36" height="36" class="lg:w-[40px] lg:h-[40px] xl:w-[44px] xl:h-[44px]"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile_img",
  props: ['currentImage'],
  data() {
    return {
      image: null,
      fileReader: null,
    }
  },
  methods: {
    onChangeFile(e) {
      this.$emit("change", this.$refs.file.files.item(0));
      if (e.target.files[0] !== undefined) {
        this.image = e.target.files[0];
        let files = e.target.files || e.dataTransfer.files;
        this.createFile(files[0]);
      }
    },
    createFile(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.fileReader = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
}
</script>

<style scoped>

</style>
