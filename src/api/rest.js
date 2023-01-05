import axios from "axios";

const rest = () => {
    const baseURL = 'http://localhost:3000'
    const client = axios.create({ baseURL });
    const get = async (subDir) => {
        console.log(subDir)
        const result = await client.get(subDir)
        return result.data
    }
    const post = () => {

    }
    const update = () => {

    }
    const drop = () => {

    }

    return {
        get, post, update, drop,
    }
}

export default rest