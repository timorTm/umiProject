import React from 'react'
import {LoginUrl} from '../../contant'
import FixTop from './FixTop'
export default class CommonLayout extends React.Component{
    componentDidMount(){
        const pathname=window.location.pathname;
        // if(pathname==="/"){
        //     this.props.props.history.push("/login")
        // }
    }
    render(){
        const pathname=window.location.pathname;
        return <div>
            {pathname!==LoginUrl?<FixTop children={this.props.children}></FixTop>:this.props.children}
        </div>
    }
}