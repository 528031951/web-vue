import axios from "axios/index"

export function saveMpGenerator(data) {
    return axios({
        url:'/api/mp-generator/save-mp-generator',
        method:"POST",
        data:data,
    })
}