export const actions = {
  getHome() {
    return this.$axios.get(`home`)
  },

  getHoliday({}, data) {
    return this.$axios.get(`holiday`, data)
  },
  getHolidayByID() {
    return this.$axios.get(`holiday`)
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
    return this.$axios.get(`leaves`, data)
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
    return this.$axios.get(`work_from_home`, data)
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
    return this.$axios.get(`users`, data)
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
}
