import axios from "axios";

const BASE_URL ="https://e-commerce-2-sigma.vercel.app/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yzk1NjM0MWM1ZDRmZjNmYjZlMGYyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDgxNTY4MCwiZXhwIjoxNzI1MDc0ODgwfQ.LM4fQoHdLOBftF9m6HcSibG_Pfq-y-dxT-EhF0JE6gU"

// for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})