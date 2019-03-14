export default {
    "post /api/login"(req, res, next) {
        const { username, password } = req.body;
        console.log(username, password);
        if (username === "admin" && password === "123") {
           return res.json({
                code: 0,
                data: {
                    name: "admin",
                    role: "admin",
                    token: "admintoken",
                    balance: 1000
                },
            })
        }
        if (username === "lihaijing" && password === "123") {
            return res.json({
                code: 0,
                data: {
                    name: "lihaijing",
                    role: "user",
                    token: "usertoken",
                    balance: 1000
                },
            })
        }
        return res.status(401).json({
            code:-1,
            msg:"用户名或密码错误"
        })
    }
}
