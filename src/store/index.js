import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banner:[],
    message:''
  },
  mutations: {
    setBanner(store,banner){
      store.banner = banner
    },
    setMessage(state,value){
      state.message = value
    }
  },
  actions: {
    asyncBanner(context){
      axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(res=>{
        context.commit('setBanner',res.data.banner)
        console.log(res)
      })
    }
  },
  modules: {
  }
})
