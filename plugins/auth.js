export default ({ $axios, $auth }) => {
    $axios.onError((error) => {
        if (
            error.response &&
            error.response.status === 401
        ) {
            $auth.logout()
        }
    })
}
