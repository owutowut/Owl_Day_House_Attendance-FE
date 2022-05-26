export const actions = {
  getEmployeeHoliday({}, data) {
    return this.$axios.get(`holiday`,data)
  },
  getEmployeeHolidayByID({}, data) {
    return this.$axios.get(`holiday/${data}`)
  },
  deleteEmployeeHoliday({}, data) {
    return this.$axios.$delete(`holiday/delete/${data}`)
  },
  editEmployeeHoliday({}, data) {
    return this.$axios.$patch(`/holiday/update/${data}`)
  },
  getLeave({}, data){
    return this.$axios.get(`leaves`,data)
  },
  getLeaveByID({}, id){
    return this.$axios.get(`leaves/${id}`)
  },
  leaveApprove({}, data){
    return this.$axios.patch(`leaves/update/${data.id}`,data)
  },
  getWfhData({}, data){
    return this.$axios.get(`work_from_home`,data)
  },
  createHolidayForm({}, data){
    return this.$axios.post(`holiday/create`,data )
  },
  createLeave({}, data){
    return this.$axios.post(`leaves/create`, data )
  }
}
