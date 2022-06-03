<template>
  <div class="absolute top-12 right-2" v-if="isEdit">
    <div class="bg-white px-6 py-4 border border-gray21 w-40 h-20" >
      <div class="flex space-x-4" >
        <svg-icon name="Edit" width="20" height="20"/>
        <NuxtLink :to="`/hr/employee/${id}`">Edit</NuxtLink>
      </div>
      <div class="flex space-x-4 mt-2">
        <svg-icon name="Delete" width="20" height="20"/>
        <button @click="handleModalDelete(id)">Delete</button>
      </div>
    </div>
    <Delete v-if="isDelete" :isDelete="isDelete" @handleHideDelete="onHideDelete" @submit="submit"/>
    <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
  </div>
</template>

<script>
import Delete from "@/components/Delete";
import Modal from "@/components/Modal";
import {mapActions} from "vuex";
export default {
  name: "Edit",
  props: ['isEdit','id'],
  components: {
    Delete,Modal
  },
  data() {
    return {
      isDelete: false,
      isModal: false
    }
  },
  methods: {
    ...mapActions({
      deleteEmployee: 'hr/deleteEmployee'
    }),
    async handleModalDelete(id) {
      this.$swal({
        title: `<p class="text-2xl">Delete Holiday <br> <div class="text-lg font-light">Are you sure to permanently delete this ?</div> </p>`,
        imageUrl: `${require('~/assets/sprite/svg/trash-alt-solid.svg')}`,
        imageWidth: 60,
        imageHeight: 69,
        showCancelButton: true,
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await this.deleteEmployee(id)
          if (res) {
            this.$swal({
              title: '<p class="text-3xl"> Successful transaction</p>',
              imageUrl: `${require('~/assets/sprite/svg/check-circle-solid2.svg')}`,
              imageWidth: 80,
              imageHeight: 80,
              showConfirmButton: false,
              timer: 2500,
            })
          }
         await this.$router.push('/hr/employee')
        }
      })
    },
  }
}
</script>

<style scoped>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 250ms;
  animation-duration: 250ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
