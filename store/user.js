export const actions = {
  getHome() {
    return this.$axios.get(`user/home`)
  },
  getHoliday({}, data) {
    return this.$axios.post(`holiday`, data)
  },

  getProfile() {
    return this.$axios.get(`/me`)
  },
  forgotPassword({}, data) {
    return this.$axios.post(`forgot_password`, data)
  },
  verifyToken({}, data) {
    return this.$axios.get(`forgot_password/${data.token}`)
  },
  passwordReset({}, data) {
    return this.$axios.patch(`forgot_password/${data.token}`, data)
  },
  changePassword({}, data) {
    return this.$axios.patch(`users/change_password/${data.id}`, data)
  },

  getLeave({}, data) {
    return this.$axios.post(`leaves/user`, data)
  },
  editLeave({}, data) {
    return this.$axios.$patch(`/leaves/update/${data.id}`, data)
  },
  getLeaveByID({}, id) {
    return this.$axios.$get(`leaves/${id}`)
  },
  createLeave({}, data) {
    return this.$axios.post(`leaves/create`, data)
  },

  getWfhData({}, data) {
    return this.$axios.post(`work_from_home/user`, data)
  },
  editWfh({}, data) {
    return this.$axios.patch(`work_from_home/update/${data.id}`, data)
  },
  createWfhForm({}, data) {
    return this.$axios.post(`work_from_home/create`, data)
  },
  getWfhById({}, id) {
    return this.$axios.$get(`work_from_home/${id}`)
  },

  notifications({}, id) {
    return this.$axios.get(`notifications/${id}`)
  },
}
