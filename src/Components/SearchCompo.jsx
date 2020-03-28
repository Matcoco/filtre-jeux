import React, { Component } from 'react';

class SearchCompo extends Component{

    render(){
        const { filterText, inStockOnly, handleInstockChange, handleFilterTextChange } = this.props;
    
        return(
        <div>
            <input type='text' placeholder='search' text={filterText} onChange={handleFilterTextChange}/>
            <input type='checkbox' onChange={handleInstockChange} checked={inStockOnly}/> { ' '} produits en stock seulement
        </div>
    )}
}

export default SearchCompo;