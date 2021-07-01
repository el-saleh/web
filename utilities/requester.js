import axios from 'axios';


export default axios.create({
    baseURL: "https://el-saleh-staging-apis.herokuapp.com",
    headers: {
        Authorization: typeof window !== 'undefined' ? `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}` : null
    }
})