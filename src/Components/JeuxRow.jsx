import React, { Component } from 'react';

class JeuRow extends Component{

    render(){
        const { name, price, stocked } = this.props.unJeu;
        return(
            <tr>
                <td>{stocked ? <span>{name}</span> : <span style={{color:'red'}}>{name}</span>}</td>
                <td>{price}</td>
            </tr>
    )}
}

export default JeuRow;