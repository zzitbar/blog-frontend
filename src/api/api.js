import axios from 'axios'
import qs from 'qs';

// axios.defaults.baseURL = 'http://127.0.0.1:8081';
// axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

const cnodejsApi = "https://cnodejs.org/api/v1/topics?accesstoken=33771e44-2688-4e8c-b5a1-822026574be5";

export const stringify = params => {
    return qs.stringify(params);
}
export const requestLogin = params => {
    return axios.post('/user/login', params).then(res => res.data)
}
export const aiticleList = params => {
    return axios.post('http://localhost:8080/admin/article/page', params)
}

export const aiticleTagsList = () => {
    return axios.get('http://localhost:8080/tags/list')
}
export const aiticleCategoryList = () => {
    return axios.get('http://localhost:8080/admin/category/list')
}
export const aiticleTagsSearch = (param) => {
    return axios.get('http://localhost:8080/tags/search?tagTitle='+param)
}
export const aiticleGet = (param) => {
    return axios.get('http://localhost:8080/admin/article/'+param)
}

export const aiticleSave= (param) => {
    console.log(param)
    return axios.post('http://localhost:8080/admin/article/edit', param, { headers: {'content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},})
}