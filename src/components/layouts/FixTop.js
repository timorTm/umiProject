import React from 'react'
import {Link} from 'dva/router'
import {Layout,Menu} from 'antd'
import {TopMenu} from '../../contant'
const {Header,Content,Footer}=Layout;
const {Item}=Menu;
export default class FixTop extends React.Component{
    state={
        mode:"horizontal"
    }
    renderMenu=()=>{
        return TopMenu.map(item=>{
            return <Item key={item.key}>
                {item.title}
                <Link to={item.path}></Link>
            </Item>
        })
    }
    handleChangeMenu=()=>{
        this.setState({
            mode:"vertical"
        })
    }
    render(){
        const {mode}=this.state;
        return <Layout>
            <Header>
                <Menu mode={mode} theme="dark">
                    {this.renderMenu()}
                </Menu>
            </Header>
            <Content>{this.props.children}</Content>
            <Footer>@create by tianmin</Footer>
        </Layout>
    }
}