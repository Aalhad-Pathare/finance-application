import axios from "axios"

const TOKEN = "cetnvmaad3i5jsal8hqgcetnvmaad3i5jsal8hr0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})