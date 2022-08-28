export const actions = {
  getUserHoliday() {
    return this.$axios.get(`user/holiday`)
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

  getTaskByID({}, id) {
    return this.$axios.get(`task/${id}`)
  },
  taskUpdate({}, data) {
    return this.$axios.patch(`task/update/${data.id}`, data)
  },
  yesterdayTasks({}, data) {
    return this.$axios.post(`task/yesterdayTasks/${data.id}`, data)
  },
  addToTask({}, data) {
    return this.$axios.post(`task/addToTask/`, data)
  },
  yesterdayWorkList({}, data) {
    return this.$axios.post(`task/yesterdayWorkList/${data.id}`, data)
  },
  createTask({}, data) {
    return this.$axios.post(`task/create`, data)
  },
  todayTaskPending({}, data) {
    return this.$axios.post(`task/today/pending/${data.id}`, data)
  },
  todayTaskCompleted({}, data) {
    return this.$axios.post(`task/today/completed/${data.id}`, data)
  },
  getWorkListCompleted({}, data) {
    return this.$axios.post(`task/completed/${data.id}`, data)
  },
  taskCompleted({}, data) {
    return this.$axios.patch(`task/completed/${data.id}`, data)
  },

  attendancePunchIn({}, data) {
    return this.$axios.post(`attendance/create`, data)
  },
  attendancePunchOut({}, data) {
    return this.$axios.patch(`attendance/update/${data.id}`, data)
  },
  userAttendance({}, id) {
    return this.$axios.get(`attendance/${id}`)
  },
}
