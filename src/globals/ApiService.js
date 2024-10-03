import axios from "axios";

class ApiService{
    async getData(endpoint) {
        try {
            const response = await axios.get(`${endpoint}`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async getAllOrders(endpoint) {
        try {
            const response = await axios.get(`${endpoint}`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

const api = new ApiService();
export default api;