export default ({ store, redirect }) => {
  if (!store.state.auth.loggedIn || store.state.auth.user.role !== 'admin') {
    return redirect('/')
  }
}
