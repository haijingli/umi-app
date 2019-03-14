import axios from "axios";

function getCourses() {
    return axios.get('/api/course')
}

export default {
    namespace: "course",//model的命名空间
    state: {
        courses: {}, //课程
        tags: [] //分类
    },
    effects: {//异步操作
        *getList(action, { call, put }) {
            const res = yield call(getCourses)
            // type名字不需要命名空间
            yield put({ type: 'initCourses', payload: res.data.data })
        }
    },
    reducers: {
        initCourses(state, {payload}) {
            const {tags,data:courses} = payload;
            //console.log(tags);
            return {...state,tags,courses}
        }
    }
}