<template>
  <div class="relative mx-20 md:mx-64 lg:ml-2">
    <div class="w-36 h-36 bg-gray5 rounded-full flex justify-center items-center md:mx-16 lg:ml-10">
      <img
        v-if="image === null && currentImage !== null"
        alt="" width="96" height="96"
        class="rounded-full object-cover relative "
        :src="typeof currentImage !== 'undefined' ? currentImage : require(`~/assets/sprite/svg/Profile.svg`)"
      />
      <img
        v-else
        :src="fileReader"
        alt=""
        class="rounded-full object-cover w-36 h-36"
        width="96" height="96"
      >
      <div class="absolute left-28 md:left-44 lg:left-36  bottom-0">
        <input type="file" class="absolute right-0.5 bottom-0 rounded-full w-12 h-12 opacity-0 cursor-pointer"
               ref="file" @change="onChangeFile">
        <svg-icon name="camera" width="32" height="32" />
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
