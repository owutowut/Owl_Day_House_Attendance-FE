<template>
  <div class="absolute top-14 right-2" v-if="isEdit">
    <div class="bg-white px-6 py-4 border border-gray21 w-40 h-20" >
      <div class="flex space-x-4">
        <svg-icon name="Edit" width="20" height="20"/>
        <button>
          <NuxtLink to="/hr/edit_employee">Edit</NuxtLink>
        </button>
      </div>
      <div class="flex space-x-4 mt-2">
        <svg-icon name="Delete" width="20" height="20"/>
        <button @click="Delete">Delete</button>
      </div>
    </div>
    <Delete v-if="isDelete" :isDelete="isDelete" @handleHideDelete="onHideDelete" @submit="submit"/>
    <Modal v-if="isModal" :isModal="isModal" @handleHideModal="onHideModal"/>
  </div>
</template>

<script>
import Delete from "@/components/Delete";
import Modal from "@/components/Modal";
export default {
  name: "Edit",
  props: ['isEdit'],
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
    onHideDelete(event) {
      this.isDelete = event
    },
    Delete(){
      this.isDelete = true
    },
    onHideModal(event) {
      this.isModal = event
    },
    submit(event){
      this.isDelete = false
      this.$emit('handleHideEdit',false)
      setTimeout(()=>{
        this.isModal = true
      },500)
    }
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
