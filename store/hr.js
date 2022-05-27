export const actions = {
  getHoliday({}, data) {
    return this.$axios.get(`holiday`,data)
  },
  getHolidayByID({}, data) {
    return this.$axios.get(`holiday/${data}`)
  },
  deleteHoliday({}, data) {
    return this.$axios.$delete(`holiday/delete/${data}`)
  },
  editHoliday({}, data) {
    return this.$axios.$patch(`/holiday/update/${data.id}`,data)
  },
  getLeave({}, data){
    return this.$axios.get(`leaves`,data)
  },
  getWfhData({}, data){
    return this.$axios.get(`work_from_home`,data)
  },
  createHolidayForm({}, data){
    return this.$axios.post(`holiday/create`,data )
  },
  createLeave({}, data){
    return this.$axios.post(`leaves/create`, data )
  },
  createWfhForm({},data){
    return this.$axios.post(`work_from_home/create`, data)
  },
  getWfhById({},id){
    return this.$axios.$get(`work_from_home/${id}`)
  },
  wfhApprove({}, data){
    return this.$axios.patch(`work_from_home/update/${data.id}`,data)
  },
}
