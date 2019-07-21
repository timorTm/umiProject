import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'dva/router'
import { commonComponentSubMenu } from '../../contant'
const { Content, Sider } = Layout;
const MenuItem = Menu.Item;
const { SubMenu } = Menu;
export default class CommonComponentLayout extends React.Component {
    renderMenu = () => {
        return commonComponentSubMenu.map(item => {
            if (item.subMenu.length === 0) {
                return <MenuItem key={item.key}>{item.title}
                    <Link to={item.path} />
                </MenuItem>
            } else {
                return <SubMenu key={item.key} title={item.title}>{this.renderSubMenu(item.subMenu)}</SubMenu>
            }
        })
    }
    renderSubMenu = datas => {
        return datas.map(item=>{
            return <MenuItem key={item.key}>
                {item.title}
                <Link to={item.path}></Link>
            </MenuItem>
        })
    }
    render(){
        return <Layout>
                    <Sider>
                        <Menu>
                            {this.renderMenu()}
                        </Menu>
                    </Sider>
                    <Content>{this.props.children}</Content>
                </Layout>
                }
}