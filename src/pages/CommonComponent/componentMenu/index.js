import React from 'react'
export default class componentMenu extends React.Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}