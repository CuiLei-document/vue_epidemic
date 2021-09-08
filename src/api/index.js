import axios from '../utils/request'

const base = {
    baseUrl:"http://api.tianapi.com",
    ncov:'/txapi/ncov/index',
    ncovcity:"/txapi/ncovcity/index",
    ncovabroad:"/txapi/ncovabroad/index",
    juheBaseUrl:"/api",
    springTravel:"/springTravel/citys",
}

const api = {
    getNcov(params){
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },
    getNcovCity(params){
        return axios.get(base.baseUrl + base.ncovcity,{
            params
        })
    },
    getSpring(params){
        return axios.get(base.juheBaseUrl + base.springTravel,{
            params
        })
    }
}

export default api