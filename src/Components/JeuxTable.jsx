import React, { Component } from 'react';
import JeuxCategory from './JeuxCategory';
import JeuRow from './JeuxRow';

class JeuTable extends Component{


    render(){
        const { jeux, inStockOnly, filterText } = this.props;
        const rows = [];
        let genre;
        jeux.forEach((jeu, index) => {
            
            if(jeu.name.toLowerCase().indexOf(filterText) === -1){
                return;
            }

            if(inStockOnly && !jeu.stocked){
                return;
            }

            if(jeu.category !== genre){
                rows.push(<JeuxCategory category={jeu.category} key={jeu.name + index}/>)
            }

            rows.push(<JeuRow unJeu={jeu} key={index}/>)
            genre = jeu.category;
         
        });

        return(
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        
                    </tr>
                    <JeuxCategory />
                </thead>
                
                <tbody>
                
                    {rows}
                </tbody>
                
            </table>
      
        </div>
    )}
}

export default JeuTable;