import axios from "axios"

 const getCommentService = async (inputs) => {
        const response = await axios.get(`http://localhost:8080/comments/${inputs}`)
        return response
}

export default getCommentService