
import styles from './login.css';
import { Button } from 'antd';
import router from 'umi/router';
import { Login } from 'ant-design-pro'
import React, { Component } from 'react'
import { connect } from "dva";

const { UserName, Password, Submit } = Login;

// export default function(props) {
//   const from = props.location.state.from|| "/";
//   return (
//     <div className={styles.normal}>
//       <h1>Page login</h1>
//       <Button type="primary" onClick={()=>{router.push(`${from}`)}}>登录</Button>
//     </div>
//   );
// }

@connect(
  state => ({
    userinfo: state.user // 获取指定命名空间的模型状态
  }),
  {
    login: (values) => ({
      type: "user/login", // action的type需要以命名空间为前缀+reducer名称
      payload: values
    }),
  }
)
export default class login extends Component {
  onSubmit = (err, values) => {
    if (!err) {
      return this.props.login(values);
    }
  }

  render() {
    return (
      <div className={styles.loginForm}>
        <img
          className={styles.logo}
          src="https://img.kaikeba.com/logo-new.png"
        />
        <Login
          onSubmit={this.onSubmit}
        >
          <UserName
            name="username"
            placeholder="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[{ required: true, message: "请输入密码" }]}
          />
          <Submit>登录</Submit>
        </Login>
      </div>
    )
  }
}

