import axios from 'axios'

const API_URL = `${import.meta.env.VITE_SERVER_URL}`

// GET REQUESTS
const fetch = async (token, path) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(`${API_URL}${path}`, config)
    return response.data
}



const getData = {
    fetch
}

export default getData
