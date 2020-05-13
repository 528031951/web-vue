import axios from 'axios/index';


//登录验证
export function loginUser(data){
    return axios({
       url:'/api/user/loginUser',
        method:"GET",
        params:data,
    })
}