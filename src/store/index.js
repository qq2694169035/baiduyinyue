import Vue from 'vue';
import Vuex from 'vuex';
import {getBillList} from "../api/music-api";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        useInfor: {
            name: "123",

        },
        list: [1],
        currentTime:0,
        process:0
    },
    mutations: {
        setBillList(state, payload) {
            state.list = payload.list
        },
        setCurrentTime(state,payload){
            state.currentTime=payload.currentTime
        },
        setProcess(state,payload){
            state.process=payload.process
        }
    },

    actions: {
        //参数
        //1、context 上下文 可以获取state，可以触发别的action，也可以提交mutation，也可以获取getters
        //2、payload: 调用action的时候传递进来的参数
        a(context, payload) {
          return  getBillList(payload.type).then(res => {
                context.commit("setBillList", {list: res.list})
            })
        }
    }
})

