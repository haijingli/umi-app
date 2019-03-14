export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [
        { path: '/login', component: './login' },
        {
            path: '/', component: '../layouts',
            routes: [
                // { path: '/', component: './index' },//路径相对于pages                
                // { path: '/goods', component: './goods/index' },
                { path: '/', component: './goods/course' },
                {
                    path: '/about',
                    component: './about',
                    Routes: ['./routes/PrivateRoute.js']
                },//路由守卫，路径相对于根目录，后缀名不可省略
                {
                    path: '/users', component: './users/_layout',
                    routes: [
                        { path: '/users/', component: './users/index' },
                        { path: '/users/:id', component: './users/$id' }
                    ]
                },
                { component: './notfound' }
            ]
        }

    ]
};