import axios from "axios/index"

export function test(data){
    return axios({
        url:"/api/hello/test",
        method:"GET",
        params:data
    })
}