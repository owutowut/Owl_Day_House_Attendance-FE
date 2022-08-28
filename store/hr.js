export const actions = {
  getHome() {
    return this.$axios.get(`home`)
  },
  getProfile() {
    return this.$axios.get(`/me`)
  },
  getUserByID({}, data) {
    return this.$axios.get(`/users/${data}`)
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

  getHoliday({}, data) {
    return this.$axios.post(`holiday`, data)
  },
  getHolidayByID({}, id) {
    return this.$axios.get(`holiday/${id}`)
  },
  createHolidayForm({}, data) {
    return this.$axios.post(`holiday/create`, data)
  },
  deleteHoliday({}, data) {
    return this.$axios.$delete(`holiday/delete/${data}`)
  },
  editHoliday({}, data) {
    return this.$axios.$patch(`/holiday/update/${data.id}`, data)

  },
  getLeave({}, data) {
    return this.$axios.post(`leaves`, data)
  },
  getLeaveByID({}, id) {
    return this.$axios.$get(`leaves/${id}`)
  },
  leaveApprove({}, data) {
    return this.$axios.patch(`leaves/update/${data.id}`, data)
  },
  createLeave({}, data) {
    return this.$axios.post(`leaves/create`, data)
  },

  getWfhData({}, data) {
    return this.$axios.post(`work_from_home`, data)
  },

  createWfhForm({}, data) {
    return this.$axios.post(`work_from_home/create`, data)
  },
  getWfhById({}, id) {
    return this.$axios.$get(`work_from_home/${id}`)
  },
  wfhApprove({}, data) {
    return this.$axios.patch(`work_from_home/update/${data.id}`, data)
  },

  getEmployee({}, data) {
    return this.$axios.post(`users`, data)
  },
  getEmployeeByID({}, id) {
    return this.$axios.$get(`users/${id}`)
  },
  createEmployee({}, data) {
    return this.$axios.post(`register`, data)
  },
  deleteEmployee({}, data) {
    return this.$axios.$delete(`users/delete/${data}`)
  },
  editEmployeeById({}, data) {
    return this.$axios.$patch(`/users/update/${data.id}`, data.formData)
  },

  getNotifications({}, id) {
    return this.$axios.get(`notifications/${id}`)
  },
  notifications({}, data) {
    return this.$axios.post(`notifications/create`, data)
  },
  getAttendance({}, data) {
    return this.$axios.post(`attendance/all`, data)
  },
}
