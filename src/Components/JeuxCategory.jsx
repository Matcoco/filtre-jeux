import React, { Component } from 'react';

class JeuxCategory extends Component{

    render(){
        const { category } = this.props;
        return(
            <tr>
                <th colSpan="2"><h3>{category}</h3></th>
            </tr>
    )}
}

export default JeuxCategory;