import { Layout, Menu, Badge, Icon, Dropdown } from "antd";
import styles from './index.css';
import Link from 'umi/link';
const { Header, Footer, Content } = Layout;
import { connect } from "dva";
import React, { Component } from "react";
@connect(state => ({
    // 连接购物车状态
    count: state.cart.length,
    cart: state.cart
}))
export default class extends Component {
    render() {
        let selectedKeys = [this.props.location.pathname];
        const menu = (
            <Menu>
                {this.props.cart.map((item, index) => (
                    <Menu.Item key={index}>
                        {item.name}×{item.count} <span>￥{item.count * item.price}</span>
                    </Menu.Item>
                ))}
            </Menu>
        );
        return (
            <div>
                <Layout >
                    <Header className={styles.header}>
                        <img
                            className={styles.logo}
                            src="https://img.kaikeba.com/logo-new.png"
                        />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            // defaultSelectedKeys={['2']}
                            selectedKeys={selectedKeys}
                            style={{ lineHeight: '64px',float:"left" }}
                        >
                            <Menu.Item key="/">
                                <Link to="/">商品</Link>
                            </Menu.Item>
                            <Menu.Item key="/users">
                                <Link to="/users">用户</Link>
                            </Menu.Item>
                            <Menu.Item key="/about">
                                <Link to="/about">关于</Link>
                            </Menu.Item>
                        </Menu>
                        {/* 购物车状态显示 */}

                        {/* 购物车信息放在Dropdown以便展示 */}
                        <Dropdown overlay={menu} placement="bottomRight">
                            <div style={{ float: "right" }}>
                                <Icon type="shopping-cart" style={{ fontSize: 18 }} />
                                <span>我的购物车</span>
                                <Badge count={this.props.count} offset={[-4, -18]} />
                            </div>
                        </Dropdown>
                    </Header>
                    <Content>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
            </div>
        )
    }
}
