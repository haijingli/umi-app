import axios from "axios";

function getGoods() {
    return axios.get('/api/goods')
}

export default {
    namespace: "goods",//model的命名空间
    state: [],
    effects: {//异步操作
        *getList(action, { call, put }) {
            const res = yield call(getGoods)
            // type名字不需要命名空间
            yield put({ type: 'initGoods', payload: res.data.result })
        }
    },
    reducers: {
        initGoods(state, action) {
            return action.payload
        },
        addGood(state, action) {
            return [...state, { title: action.payload.title }];
        }
    }
}