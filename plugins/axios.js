export default async ({ $axios, redirect }) => {
    $axios.defaults.baseURL = process.env.apiUrl
}
