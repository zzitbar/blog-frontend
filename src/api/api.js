import axios from 'axios'
import qs from 'qs';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers['content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.validateStatus = function (status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
};

const cnodejsApi = "https://cnodejs.org/api/v1/topics?accesstoken=33771e44-2688-4e8c-b5a1-822026574be5";

export const stringify = params => {
    return qs.stringify(params);
};
export const requestLogin = params => {
    return axios.post('/user/login', params).then(res => res.data)
};
//获取文章列表
export const aiticleList = params => {
    return axios.post('/admin/article/page', params)
};
//获取标签列表
export const aiticleTagsList = () => {
    return axios.get('/tags/list')
};
//获取分类列表
export const aiticleCategoryList = () => {
    return axios.get('/admin/category/list')
};
//根据关键字搜索标签
export const aiticleTagsSearch = (param) => {
    return axios.get('/tags/search?tagTitle='+param)
};
//根据id获取文章
export const aiticleGet = (param) => {
    return axios.get('/admin/article/'+param)
};
//保存文章
export const aiticleSave= (param) => {
    return axios.post('/admin/article/edit', param)
};
//删除文章
export const aiticleDelete= (id) => {
    return axios.post('/admin/article/delete', 'id='+id)
};
//获取分类列表
export const aiticleCategoryPage = params => {
    return axios.post('/admin/category/page', params)
};
//保存分类
export const aiticleCategorySave= (param) => {
    return axios.post('/admin/category/edit', param)
};