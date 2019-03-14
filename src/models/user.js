import axios from "axios";
import router from "umi/router";

const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
    token: "",
    role: "",
    username: "",
    balance: 0
}

function login(payload) {
  return axios.post("/api/login", payload);
}

export default {
    namespace: "user",//model的命名空间
    state: userinfo,
    effects: {//异步操作
        *login({ payload }, { call, put }) {
            try {
                const {
                    data: { code, data: userinfo }
                } = yield call(login, payload);
                if (code === 0) {
                    //登录成功
                    localStorage.setItem("userinfo", JSON.stringify(userinfo))
                    yield put({ type: "init", payload: userinfo });
                    router.push("/");
                }else{
                    // 登录失败：弹出提示信息，可以通过响应拦截器实现
                }    
            } catch (error) {
                
            }
                   
        }
    },
    reducers: {
        init(state, action) {
            return action.payload
        }
    }
}