import axios from 'axios';


export default axios.create({
    baseURL: "https://elsaleh-staging-apis.herokuapp.com",
    headers: {
        Authorization: typeof window !== 'undefined' ? `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}` : null
    }
})