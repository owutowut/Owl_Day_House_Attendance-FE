export const actions = {
  getEmployeeHoliday({}, data) {
    return this.$axios.get(`holiday`,data)
  },
  deleteEmployeeHoliday({},data) {
    return this.$axios.$delete(`holiday/delete/${data}`)
  },
  getLeave({}, data){
    return this.$axios.get(`leaves`,data)
  },
  getWfhData({}, data){
    return this.$axios.get(`work_from_home`,data)
  },
  addHolidayForm({}, data){
    return this.$axios.post(`holiday/create`,data )
  }
}
