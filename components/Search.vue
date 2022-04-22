<template>
  <div class="bg-white py-6 rounded-lg flex justify-start space-x-4 mt-8">
    <div
      class="
        search-wrapper
        flex
        justify-center
        items-center
        bg-white
        rounded-lg
        px-4
        py-2
        border border-white3
      "
    >
      <input
        v-model="search"
        placeholder="Search to Name.."
        class="font-kanit text-lg w-96"
      />
    </div>
    <div>
      <select
        v-model="month"
        @change="onChange"
        class="
          rounded-lg
          px-4
          py-2
          text-gray14
          font-kanit
          text-lg
          w-72
          border border-white3
        "
      >
        <option>Select Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
    <div>
      <select
        v-model="year"
        @change="onChange"
        class="
          rounded-lg
          px-4
          py-2
          text-gray14
          font-kanit
          text-lg
          w-64
          border border-white3
        "
      >
        <option>Select Year</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      month: this.$route.params.month,
      year: this.$route.params.year,
    };
  },
  methods: {
    onChange() {
      if (this.month != "Select Month" && this.year != "Select Year") {
        this.$router.push({
          path: `/attendance/${this.year}/${this.month}`,
        });
      }
    },
  },
  watch: {
    search: function (val) {
      this.$emit("search", val);
    },
  }
}
</script>

<style scoped>

</style>
