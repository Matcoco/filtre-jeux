import React, { Component } from 'react';
import SearchCompo from './SearchCompo';
import JeuTable from './JeuxTable';


class FiletrableJeuxTable extends Component{
    constructor(props){
        super(props);
        this.state= {
            filterText:"",
            inStockOnly:false
        }
    }

    handleFilterTextChange = (event) => {
  
        this.setState({filterText:event.target.value});
    }

    handleInstockChange = (event) => {

        this.setState({inStockOnly:event.target.checked});
    }

    render(){
        return(
        <div>
            <SearchCompo {...this.state} handleFilterTextChange={this.handleFilterTextChange} handleInstockChange={this.handleInstockChange} />
            <JeuTable jeux={this.props.jeux} {...this.state}/>
        </div>
    )}
}

export default FiletrableJeuxTable;



