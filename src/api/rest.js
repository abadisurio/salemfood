import axios from "axios";

const rest = () => {
    const baseURL = 'https://api.spoonacular.com'
    const apiKey = process.env.REACT_APP_API_KEY_SPOONACULAR
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: 'Bearer ' + apiKey
        }

    });
    console.log(apiKey);
    const get = async (subDir) => {
        console.log(subDir)
        const result = await client.get(`/food/menuItems/search?apiKey=${apiKey}&query=burger&minCalories=50&maxCalories=800&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minFat=1&maxFat=100&offset=606&number=10`)
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